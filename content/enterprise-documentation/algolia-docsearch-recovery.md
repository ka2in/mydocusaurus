---
title: Restoring Algolia DocSearch After a Site Restructure
slug: algolia-docsearch-recovery
date: 2026-10-20
authors: [faycal]
tags: [docusaurus, algolia, search]
description: How a content restructure, blocked crawlers, a stale index and missing redirects broke DocSearch, and how each was fixed.
---

**Scope:** A Docusaurus documentation portal using Algolia DocSearch, hosted on Netlify, with a small Linux VPS for scheduled jobs.
**Audience:** Anyone running DocSearch on a low-traffic docs site, especially before or after moving pages to new URLs.

The steps below use placeholders (`docs.example.com`, `<APP_ID>`, `<INDEX_NAME>`, `<SEARCH_KEY>`) so you can apply them to your own DocSearch site.

---

## Summary

One of my documentation sites, https://portal.farowave.com/, uses Algolia DocSearch. After I restructured its content, the search returned no results and some links led to "Page not found". Four separate problems turned out to be stacked on top of each other:

1. Weeks earlier, Algolia had warned me that the application was inactive and would be paused. I hadn't acted on it, and the application was close to being paused.
2. Both crawlers in my Algolia dashboard were blocked by a safety check, so the index still contained the pre-restructure URLs.
3. The site was searching a stale, duplicate index instead of the one being maintained.
4. The old page URLs had no redirects.

While fixing these, a fifth issue came up: I accidentally shared the crawler configuration, including its write-level API key, with an AI assistant while debugging, so the key had to be revoked.

All five are now resolved. To keep the Algolia application active so the first problem doesn't come back, I set up a monthly cron job.

---

## Background

The portal is a Docusaurus site. Its search uses Algolia DocSearch: an Algolia crawler visits the site on a schedule, extracts headings and content into an Algolia index, and the site's search box queries that index with a public, search-only key.

The guides were originally published under a flat path:

```
https://docs.example.com/guides/<slug>/
```

The site was then restructured into three sections, each a separate Docusaurus blog plugin instance:

```
https://docs.example.com/guides/<section>/<slug>/
```

---

## What happened

**1. Inactivity warning.** Algolia sent an email saying the application had been inactive for 21 days and would be paused within a week if no search requests were made. On free plans, Algolia suspends and eventually deletes applications with no activity. A low-traffic documentation site can easily go weeks without a search.

**2. Search stopped working.** Some time later, the search box returned nothing, or returned results that led to "Page not found".

**3. Old URLs returned 404.** Links using the pre-restructure path, such as `/guides/<slug>/`, led to "Page not found", while the new `/guides/<section>/<slug>/` URLs worked.

At first it wasn't clear whether the search failure came from the restructure or from the pause. It turned out to be both, plus the problems below.

---

## Root causes

### 1. Application inactivity

Algolia only counts search requests (and some indexing or configuration operations) as activity. A scheduled crawl alone did not prevent the warning. Running a few searches in the dashboard reactivated the application.

### 2. Crawlers blocked by the safety check

Algolia's crawler compares each new crawl with the previous one. If the new crawl has more than a set percentage fewer records (`maxLostRecordsPercentage`, default 10%), it refuses to publish and blocks the crawler until someone intervenes.

The restructure removed every old URL at once, and duplicate tag-page records disappeared at the same time. The next crawl had about 73% fewer records than the published index, so the crawler blocked itself. The status read:

> Blocked: Too many missing records

As a result, the published index kept the old URLs, and the scheduled weekly crawls stopped updating it.

### 3. Two crawlers, two indices, and the wrong one in use

The Algolia application contained two crawlers for the same site:

- the original crawler, created through the DocSearch program, writing to index A
- a second crawler, created later by hand, writing to index B

Both had the same content and both were blocked. The site's `docusaurus.config.js` pointed at index B, which had not been updated in months. Rebuilding index A alone didn't fix search on the site.

### 4. No redirects for the old URLs

The restructure changed every guide's URL, but no redirects were added. External links, bookmarks and search engine results all led to 404s. One page had a date-based URL (`/guides/2026/07/28/<slug>/`) because of its filename, which a slug-only redirect would have missed.

### 5. An exposed crawler key

While inspecting the crawler configuration, its `apiKey` value was copied into a shared conversation. This is the key the crawler uses to write to the index, not the public search key, so it had to be revoked.

DocSearch applications are managed by Algolia: the site owner has no Admin API key and can't create or delete keys. The crawler editor shows the key as locked. Deleting the crawler did not revoke its key either; a test request with it still succeeded afterwards.

---

## How it was fixed

### Step 1: Reactivate the application

In the Algolia dashboard, open the application, go to **Search → Index**, and run a few test searches. The index contents were intact, so search worked again immediately (with old URLs).

### Step 2: Replace the crawler and republish the index

Because the old crawler's key had to be retired anyway, a new crawler was created instead of unblocking the old one:

1. **Data sources → Crawler → New crawler**, content type **Technical documentation**, start URL `https://docs.example.com`.
2. In the new crawler's **Editor**, the generated config was replaced with the previous config, keeping the newly generated (locked) `apiKey`.
3. The action's `indexName` and the `initialIndexSettings` key were set to the index the site should use.
4. The safety threshold was raised for this one run only:
   ```js
   safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 80 } },
   ```
5. **Run Test** on the home page and on one guide page to confirm records were extracted with the right headings.
6. **Review and publish**, then start the crawl.

The crawl finished with no failed URLs and the crawler went to **Idle**, meaning the new index was published. Searching the dashboard for a guide title now returned its `/guides/<section>/<slug>/` URLs.

Before raising the threshold, it's worth checking that the drop in records is expected. Here, the crawler's URL inspector showed the new section URLs crawled successfully, so the drop came from old URLs disappearing, not from a broken crawl.

### Step 3: Point the site at the rebuilt index

In `docusaurus.config.js`:

```js
algolia: {
  appId: '<APP_ID>',
  apiKey: '<SEARCH_KEY>',      // public, search-only
  indexName: '<INDEX_NAME>',   // the index the new crawler writes to
},
```

The site was rebuilt and deployed by pushing to the Git repository connected to Netlify. Search results then opened the correct pages.

If results still lead to "Page not found" after a fix like this, check the browser before the index: DocSearch keeps recent searches locally with their old URLs, and a cached copy of the old site's JavaScript doesn't know the new routes. A private window rules both out.

### Step 4: Clean up

- Deleted the two old crawlers.
- Deleted the stale indices (index B, its `.tmp` leftovers, and an extra index the new-crawler wizard had created).
- Lowered `maxLostRecordsPercentage` back to a safe value (10–20) so a future broken crawl can't replace the index with a near-empty one.
- Changed the extractor's fallback section label, which had become "Documentation" because the old sidebar selector no longer matched after the restructure.

### Step 5: Revoke the exposed key

Since a DocSearch application owner can't manage its keys, the revocation went through an Algolia support ticket:

- **Request type:** Account
- **Business impact:** P2
- **Content:** application ID, the first characters of the key (never the full key), and a short explanation that it was an orphaned crawler key from a deleted crawler.

After Algolia confirmed, a request with the old key returned:

```
{"message":"Invalid Application-ID or API key","status":403}
```

To check whether a key is still live without using an admin key, list the indices with it:

```bash
curl -s "https://<APP_ID>-dsn.algolia.net/1/indexes" \
  -H "X-Algolia-Application-Id: <APP_ID>" \
  -H "X-Algolia-API-Key: <KEY_TO_TEST>"
```

A list of indices means the key still works; a 403 means it's revoked.

### Step 6: Add redirects for the old URLs

The site already used `@docusaurus/plugin-client-redirects`. One `from`/`to` pair per moved page was added to its `redirects` array.

To generate the list, the build output was scanned for every page under a section folder:

```bash
yarn build

for section in build/guides/*/; do
  s=$(basename "$section")
  for page in "$section"*/; do
    slug=$(basename "$page")
    case "$slug" in tags|page|archive|authors) continue ;; esac
    echo "{ from: '/guides/$slug', to: '/guides/$s/$slug' },"
  done
done
```

The output needed a manual review before use:

- A date folder (`2026`) appeared instead of a page. The actual page inside it needed its own full-path redirect.
- One `from` path already existed as a section landing page. Redirecting from an existing page fails, so that line was dropped.
- One redirect from an earlier fix was already in the config. Each `from` may appear only once.

The result was checked locally with `yarn serve`, then deployed. Old URLs now forward to their new locations.

A programmatic `createRedirects` rule was considered, but since redirects are only needed for URLs that existed before the restructure, a fixed list was simpler. New articles are published directly in their section and don't need redirects.

---

## The keep-alive cron job

### Why it's needed

The original problem was inactivity. On a low-traffic documentation site, visitors may not use search for weeks, and a scheduled crawl doesn't count as a search. Without regular searches, Algolia will warn again and eventually pause the application, which breaks search without any visible error on the site.

A monthly search request from a server is enough to keep the application active.

### Setup

Cron is available on most Linux servers. Check that it's running (the service is called `cron` on some distributions and `crond` on others):

```bash
systemctl is-active cron
```

First, test the request by hand:

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  "https://<APP_ID>-dsn.algolia.net/1/indexes/<INDEX_NAME>?query=docusaurus" \
  -H "X-Algolia-Application-Id: <APP_ID>" \
  -H "X-Algolia-API-Key: <SEARCH_KEY>" \
  -H "Referer: https://docs.example.com/"
```

It should print `200`. The `Referer` header was needed because the search key only accepts requests that appear to come from the site; without it, the request returned `403`.

Then add it to the crontab with `crontab -e`, as one line:

```
0 9 1 * * curl -s -o /dev/null -w "\%{http_code}\n" "https://<APP_ID>-dsn.algolia.net/1/indexes/<INDEX_NAME>?query=docusaurus" -H "X-Algolia-Application-Id: <APP_ID>" -H "X-Algolia-API-Key: <SEARCH_KEY>" -H "Referer: https://docs.example.com/" >> ~/algolia-keepalive.log 2>&1
```

This runs at 09:00 on the 1st of every month and appends the HTTP status to a log file. The `%` is escaped as `\%` because cron treats an unescaped `%` as a line break. Confirm the entry with `crontab -l`, and after the first run, check that `~/algolia-keepalive.log` shows `200`.

### Why the key in the crontab is acceptable

The key used here is the **search-only** key. It's the same key the site sends to every visitor's browser, so it's already public by design. It can only run searches. The crontab is also readable only by its owner and root.

To keep it off the command line anyway, store the header in a private file and have curl read it with `-H @/home/<user>/.algolia-search-header` (file mode `600`).

Never use a write-level or admin key for this job.

---

## Lessons and checklist

**Before restructuring a DocSearch site:**

- [ ] Plan redirects for every URL that will change, including date-based paths.
- [ ] Expect a large drop in records on the first crawl after the change. Raise `maxLostRecordsPercentage` for that one crawl, verify the result, then lower it again.
- [ ] Set an explicit `slug` in each article's front matter so filenames and dates don't end up in URLs.

**When search stops working:**

- [ ] Check the application's status in the Algolia dashboard (paused or blocked).
- [ ] Check each crawler's status. "Blocked" means the published index is frozen.
- [ ] Confirm which index `docusaurus.config.js` actually points to.
- [ ] Look at the URLs inside the index, not only whether it returns results.
- [ ] Test the site in a private window to rule out cached recent searches and old JavaScript.

**Ongoing:**

- [ ] Keep one crawler and one index per site.
- [ ] Keep a scheduled search running so the application never counts as inactive.
- [ ] Treat the crawler's `apiKey` as a secret. On a DocSearch application, only Algolia can revoke it.
