---
slug: resolve-unmet-dependecies
title: Unmet Dependencies in Docusaurus 
authors:
  name: Faycal Alami-Hassani
  title: Website's owner
  url: https://github.com/ka2in
  image_url: https://github.com/ka2in.png
tags: [docusaurus, v. 2.0.0-beta.18, yarn, npm, ssg, dependencies]
---

This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade.

### What is Docusaurus?

**Docusaurus** is an SSG (short for *Static Site Generator*). Static Site Generators are software frameworks that generate static HTML webpages using templates, components, and plain-text files. 

The plain-text files make use of markup languages such as Markdown. Since there are neither databases nor dynamic content involved, the static HTML files load pretty fast.

There are many SSGs on the market to choose from. Docusaurus, Hugo, and Eleventy are just some of the most famous among them. It is up to you to select the brand that best suits your needs.

Docusaurus offers some very interesting features, including:
- versioning capabilities
- contextual and faceted navigation based on a integrated search engine
- built-in support for the standard file format [MDX](https://mdxjs.com/docs/what-is-mdx/), which allows you to embed the JavaScript extension syntax [JSX](https://facebook.github.io/jsx/) into your Markdown

### What is Yarn?   

**Yarn** is a JavaScript package manager that was developed to address some shortcomings of its predecessor **npm**, the default package manager for Node.js. 

### Packages, Manifests, and Package Managers

Developers use packages to share their code. In addition to the actual code, each package contains a `manifest` file, also called `package.json`. 

The manifest file describes the package itself using a lightweight data-interchange format called [JSON](https://www.json.org/json-en.html) (JavaScript Object Notation). 

Here is an excerpt of a manifest:

```json
{
    "name": "@anycli/manifest-file",
    "description": "base json file wrapper used inside anycli",
    "version": "0.3.9",
    "author": "Jeff Dickey @jdxcode",
    "bugs": "https://github.com/anycli/manifest-file/issues",
    "dependencies": {
        "cli-ux": "^3.3.13",
        "debug": "^3.1.0",
        "fs-extra": "^5.0.0",
        "load-json-file": "^4.0.0",
        "lodash": "^4.17.4",
        "proper-lockfile": "^3.0.2"
    }
```  

Source: [oclif / manifest file](https://github.com/oclif/manifest-file/blob/master/package.json) on GitHub

A package manager relies on the manifest to determine the properties of each specific package, e.g. name, version, and dependencies.

To avoid any future conflicting packages in your project, you are better advised to select a specific package manager right from the start and stick to it.  

If you want to learn more about the differences between yarn and npm, I suggest you read the following article: [npm vs. yarn: Which Package Manager Should You Choose?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)

### Troubleshooting Yarn Upgrade in Docusaurus 

Yesterday, I got a warning message prompting me to upgrade Yarn while I was testing Docusaurus on my local development environment.

After running the upgrade with the following command:

```console
$ yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

I got several warning messages regarding unmet peer dependencies:

```console
$ warning "@docusaurus/core > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.0" has unmet peer dependency "typescript@>= 2.7".
$ warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0" has unmet peer dependency "@types/react@>= 16.8.0 < 18.0.0".
```

To resolve the issue, I had to install the latest versions of the following packages inside my project:

```console
$ yarn add typescript@2.7.2
```

```console
$ yarn add "@types/react@>= 16.8.0 < 18.0.0"
```

Once the installation has completed, I wanted to make sure that the problem was resolved, so I regenerated the content with the command:

```console
$ yarn run build
```

Then I used the following command to test my build locally:

```console 
$ yarn run serve
```

That's it! Everything is working fine now ☀️.


Copyright © GlobalTech Translations 2022.