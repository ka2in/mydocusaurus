---
slug: resolve-unmet-dependecies
title: Unmet Dependencies in Docusaurus 
authors:
  name: Faycal Alami-Hassani
  title: Website's owner
  url: https://github.com/ka2in
  image_url: https://github.com/ka2in.png
tags: [docusaurus, v. 2.0.0-beta.18, yarn, unmet dependencies]
---

This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade. 

Yesterday, I got a warning message prompting me to upgrade Yarn while I was testing Docusaurus locally.

After running the upgrade with the following command:

```console
$ yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

I got several warning messages regarding unmet peer dependencies:

```console
$ warning "@docusaurus/core > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.0" has unmet peer dependency "typescript@>= 2.7".
$ warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0" has unmet peer dependency "@types/react@>= 16.8.0 < 18.0.0".
```

To resolve the issue, I had to install the latest versions of the following packages:

```console
$ npm i typescript@2.7.2
```

```console
$ npm install --save @types/react
```

To make sure that the problem was resolved, I regenerated the content with the command:

```console
$ npm run build
```

Then used the following command to test my build locally:

```console 
$ npm run serve
```

That's it! Everything is working fine now ☀️.


Copyright © GlobalTech Translations 2022.