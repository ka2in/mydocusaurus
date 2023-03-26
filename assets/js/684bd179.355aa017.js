"use strict";(self.webpackChunktechwriter=self.webpackChunktechwriter||[]).push([[1262],{3563:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"text-mode-fedora","metadata":{"permalink":"/mydocusaurus/blog/text-mode-fedora","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-25-text-mode-fedora/index.md","source":"@site/blog/2023-03-25-text-mode-fedora/index.md","title":"Entering Text Mode in Fedora","description":"The following blog post is a self-reminder for troubleshooting Linux distros when access to graphical mode is not possible.","date":"2023-03-25T00:00:00.000Z","formattedDate":"March 25, 2023","tags":[{"label":"blog","permalink":"/mydocusaurus/blog/tags/blog"},{"label":"docusaurus","permalink":"/mydocusaurus/blog/tags/docusaurus"},{"label":"rtl","permalink":"/mydocusaurus/blog/tags/rtl"},{"label":"l10n","permalink":"/mydocusaurus/blog/tags/l-10-n"}],"readingTime":1.195,"hasTruncateMarker":false,"authors":[{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","imageURL":"https://github.com/ka2in.png","key":"faycal"}],"frontMatter":{"slug":"text-mode-fedora","title":"Entering Text Mode in Fedora","authors":["faycal"],"tags":["blog","docusaurus","rtl","l10n"],"url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png"},"nextItem":{"title":"Unmet Dependencies in Docusaurus","permalink":"/mydocusaurus/blog/resolve-unmet-dependecies"}},"content":":::note\\n\\nThe following blog post is a self-reminder for troubleshooting Linux distros when access to `graphical mode` is not possible.\\n\\n:::\\n\\nI recently messed up the [SELinux configuration](https://www.redhat.com/en/topics/linux/what-is-selinux) on a Fedora distro while trying to relabel the filesystem on boot with this command:\\n\\n```bash\\nfixfiles -B onboot\\n```\\n\\nAfter running the command and restarting the OS, the relabeling process was failing repeatedly, leading my system to an infinite reboot loop.\\n\\n![Fixing a messed-up SELinux configuration](./printer-eff.jpg)<br />\\nPicture by the [Electronic Frontier Foundation](https://www.eff.org/) under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) license\\n\\nTo fix this issue, I had to boot into **text-only mode** and change the SELinux mode temprarily from `Enforced` to `Disabled`.\\n\\nHere are the steps to boot into text-only mode:\\n\\n1. Restart the system to access the GRUB menu.\\n2. Select the kernel version that you want to boot into, then press the `e` key instead of `Enter` to edit the desired version.\\n3. Scroll down until you reach the `quiet` parameter. Next, add a white space and number three `3` just after the quiet parameter (i.e., quiet 3).\\nHere is a full example:\\n\\n```bash\\nkernel /vmlinuz-2.6.9-1.667 ro root=LABEL=/ acpi=on rhgb quiet 3\\n```\\n4. Press `Ctrl+X` to start\\n5. The system will boot into the new runlevel this time only.\\n\\n:::info\\n\\nA runlevel is a number indicating what \\"mode\\" you want the system to boot into. For instance, runlevel 3 is text-only mode, while runlevel 5 refers to graphical mode.\\n\\n:::"},{"id":"resolve-unmet-dependecies","metadata":{"permalink":"/mydocusaurus/blog/resolve-unmet-dependecies","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-26-resolve-unmet-dependencies.md","source":"@site/blog/2022-03-26-resolve-unmet-dependencies.md","title":"Unmet Dependencies in Docusaurus","description":"This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade.","date":"2022-03-26T00:00:00.000Z","formattedDate":"March 26, 2022","tags":[{"label":"docusaurus","permalink":"/mydocusaurus/blog/tags/docusaurus"},{"label":"v. 2.0.0-beta.18","permalink":"/mydocusaurus/blog/tags/v-2-0-0-beta-18"},{"label":"yarn","permalink":"/mydocusaurus/blog/tags/yarn"},{"label":"npm","permalink":"/mydocusaurus/blog/tags/npm"},{"label":"ssg","permalink":"/mydocusaurus/blog/tags/ssg"},{"label":"dependencies","permalink":"/mydocusaurus/blog/tags/dependencies"}],"readingTime":2.73,"hasTruncateMarker":false,"authors":[{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"}],"frontMatter":{"slug":"resolve-unmet-dependecies","title":"Unmet Dependencies in Docusaurus","authors":{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"},"tags":["docusaurus","v. 2.0.0-beta.18","yarn","npm","ssg","dependencies"]},"prevItem":{"title":"Entering Text Mode in Fedora","permalink":"/mydocusaurus/blog/text-mode-fedora"},"nextItem":{"title":"Modify The Welcome Text In GNU Social","permalink":"/mydocusaurus/blog/gnu-social-welcome"}},"content":"This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade.\\n\\n### What is Docusaurus?\\n\\n**Docusaurus** is an SSG (short for *Static Site Generator*). Static Site Generators are software frameworks that generate static HTML webpages using templates, components, and plain-text files. \\n\\nThe plain-text files make use of markup languages such as Markdown. Since there are neither databases nor dynamic content involved, the static HTML files load pretty fast.\\n\\nThere are many SSGs on the web to choose from. Docusaurus, Hugo, and Eleventy are just some of the most famous ones among them. It is up to you to select the brand that best suits your needs.\\n\\nDocusaurus offers some very interesting features, including:\\n\\n- versioning capabilities\\n- contextual and faceted navigation based on a integrated search engine\\n- built-in support for the standard file format [MDX](https://mdxjs.com/docs/what-is-mdx/), which allows you to embed the JavaScript extension syntax [JSX](https://facebook.github.io/jsx/) into your Markdown\\n\\nThese and other features make it a great fit to create beautiful static documentation sites.  \\n\\n### What is Yarn?   \\n\\n**Yarn** is a JavaScript package manager that was developed to address some shortcomings of its predecessor **npm**, the default package manager for Node.js. \\n\\n### Packages, Manifests, and Package Managers\\n\\nDevelopers use packages to share their code. In addition to the actual code, each package contains a `manifest` file, also called `package.json`. \\n\\nThe manifest file describes the package itself using a lightweight data-interchange format called [JSON](https://www.json.org/json-en.html) (JavaScript Object Notation). \\n\\nHere is an excerpt of a manifest:\\n\\n```json\\n{\\n    \\"name\\": \\"@anycli/manifest-file\\",\\n    \\"description\\": \\"base json file wrapper used inside anycli\\",\\n    \\"version\\": \\"0.3.9\\",\\n    \\"author\\": \\"Jeff Dickey @jdxcode\\",\\n    \\"bugs\\": \\"https://github.com/anycli/manifest-file/issues\\",\\n    \\"dependencies\\": {\\n        \\"cli-ux\\": \\"^3.3.13\\",\\n        \\"debug\\": \\"^3.1.0\\",\\n        \\"fs-extra\\": \\"^5.0.0\\",\\n        \\"load-json-file\\": \\"^4.0.0\\",\\n        \\"lodash\\": \\"^4.17.4\\",\\n        \\"proper-lockfile\\": \\"^3.0.2\\"\\n    }\\n```  \\n\\nSource code available on GitHub under: [oclif / manifest file](https://github.com/oclif/manifest-file/blob/master/package.json)\\n\\nA package manager relies on the manifest to determine the properties of each specific package, e.g. name, version, and dependencies.\\n\\nTo avoid any future conflicting packages in your project, you are better advised to select a specific package manager right from the start and stick to it.  \\n\\nIf you want to learn more about the differences between yarn and npm, I suggest you read the following article: [npm vs. yarn: Which Package Manager Should You Choose?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)\\n\\n### Troubleshooting Yarn Upgrade in Docusaurus \\n\\nYesterday, I got a warning message prompting me to upgrade Yarn while I was testing Docusaurus on my local development environment.\\n\\nAfter running the upgrade with the following command:\\n\\n```console\\n$ yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest\\n```\\n\\nI got several warning messages regarding unmet peer dependencies:\\n\\n```console\\n$ warning \\"@docusaurus/core > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.0\\" has unmet peer dependency \\"typescript@>= 2.7\\".\\n$ warning \\"@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0\\" has unmet peer dependency \\"@types/react@>= 16.8.0 < 18.0.0\\".\\n```\\n\\nTo resolve the issue, I had to install the latest versions of the following packages inside my project:\\n\\n```console\\n$ yarn add typescript@2.7.2\\n```\\n\\n```console\\n$ yarn add \\"@types/react@>= 16.8.0 < 18.0.0\\"\\n```\\n\\nOnce the installation has completed, I wanted to make sure that the problem was resolved, so I regenerated the content with the command:\\n\\n```console\\n$ yarn run build\\n```\\n\\nThen I used the following command to test my build locally:\\n\\n```console \\n$ yarn run serve\\n```\\n\\nThat\'s it! Everything is working fine now \u2600\ufe0f.\\n\\n\\nCopyright \xa9 GlobalTech Translations 2022."},{"id":"gnu-social-welcome","metadata":{"permalink":"/mydocusaurus/blog/gnu-social-welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-25-gnu-social-banner.md","source":"@site/blog/2022-03-25-gnu-social-banner.md","title":"Modify The Welcome Text In GNU Social","description":"Besides having some external accounts on federated social networks such as Mastodon, I am also running my own instances on a VPS sever for my digital company.","date":"2022-03-25T00:00:00.000Z","formattedDate":"March 25, 2022","tags":[{"label":"gnusocial","permalink":"/mydocusaurus/blog/tags/gnusocial"},{"label":"fediverse","permalink":"/mydocusaurus/blog/tags/fediverse"},{"label":"decentralized networks","permalink":"/mydocusaurus/blog/tags/decentralized-networks"},{"label":"federated networks","permalink":"/mydocusaurus/blog/tags/federated-networks"},{"label":"free libre communities","permalink":"/mydocusaurus/blog/tags/free-libre-communities"}],"readingTime":1.585,"hasTruncateMarker":false,"authors":[{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"}],"frontMatter":{"slug":"gnu-social-welcome","title":"Modify The Welcome Text In GNU Social","authors":{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"},"tags":["gnusocial","fediverse","decentralized networks","federated networks","free libre communities"]},"prevItem":{"title":"Unmet Dependencies in Docusaurus","permalink":"/mydocusaurus/blog/resolve-unmet-dependecies"},"nextItem":{"title":"RTL, LTR, and Absent-Mindedness","permalink":"/mydocusaurus/blog/first-blog-post"}},"content":"Besides having some external accounts on [federated social networks](https://fediverse.party/en/fediverse/) such as Mastodon, I am also running my own instances on a VPS sever for my digital company. \\n\\nOne of these instances is dedicated to GNU Social, a social communication software for public and private communications. GNU Social is an old, but robust platform that supports the protocols OStatus and ActivityPub. \\n\\n![Fediverse - Federated Social Networks](./fediverse-high-tech.jpg)<br />\\nPicture by Eukombos on [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fediverse-high_tech(denoised)(signed).jpg) under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license\\n\\nGNU Social comes with some default stable themes. However, the look and feel of those themes is very 90\'s to me. If you want to give your GNU Social instance a brand-new look, you can use something more exciting such as [Qvitter](https://github.com/hannesmannerheim/qvitter).\\n\\nI am very happy with Qvitter and its intuitive design. Nevertheless, I wanted to customize the initial welcome text that appears on the main page:\\n\\n`We are a federation of microbloggers who care about social justice and solidarity and want to quit the centralised capitalist services.`\\n\\n![Initial Welcome Text on GNU Social\'s Main Page](./original-message.png)\\n\\nTo modify the text indicated above, go to your site root directory, then navigate to the folder `locale` under the following path:\\n\\n```console\\n$ cd plugins/Qvitter/locale \\n```\\nOnce in the locale folder, open the file `en.json` with your preferred text editor. In this case, I am using nano:\\n\\n```console\\n$ sudo nano en.json \\n``` \\nLook for the line that starts with `welcomeText`, or use the shortcut `Ctrl-W` in your terminal to search for the text if you are using nano.\\n\\nReplace with the text you would like to see on your welcome screen, then save and close your file. \ud83d\ude0e The result should look like this:\\n\\n![New Welcome Text on GNU Social\'s Main Page](./new-message.png)\\n\\nIf you want to learn more about the fediverse, you can also read my other blog article on the topic: [Random Thoughts About the Federation/Fediverse](https://globaltech-translations.com/profil/blog/random-thoughts-about-the-federation-fediverse).\\n\\n\\nCopyright \xa9 GlobalTech Translations 2022."},{"id":"first-blog-post","metadata":{"permalink":"/mydocusaurus/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-30-rtl-ltr-absent-mindedness.md","source":"@site/blog/2022-01-30-rtl-ltr-absent-mindedness.md","title":"RTL, LTR, and Absent-Mindedness","description":"In localization, RTL (Right-to-Left) refers to languages that read from right to left, such as Arabic and Hebrew.","date":"2022-01-30T00:00:00.000Z","formattedDate":"January 30, 2022","tags":[{"label":"RTL","permalink":"/mydocusaurus/blog/tags/rtl"},{"label":"LTR","permalink":"/mydocusaurus/blog/tags/ltr"},{"label":"intercultural communication","permalink":"/mydocusaurus/blog/tags/intercultural-communication"},{"label":"visual communication","permalink":"/mydocusaurus/blog/tags/visual-communication"},{"label":"technical documentation","permalink":"/mydocusaurus/blog/tags/technical-documentation"}],"readingTime":3.115,"hasTruncateMarker":false,"authors":[{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"}],"frontMatter":{"slug":"first-blog-post","title":"RTL, LTR, and Absent-Mindedness","authors":{"name":"Faycal Alami-Hassani","title":"Website\'s owner","url":"https://github.com/ka2in","image_url":"https://github.com/ka2in.png","imageURL":"https://github.com/ka2in.png"},"tags":["RTL","LTR","intercultural communication","visual communication","technical documentation"]},"prevItem":{"title":"Modify The Welcome Text In GNU Social","permalink":"/mydocusaurus/blog/gnu-social-welcome"}},"content":"In localization, RTL (Right-to-Left) refers to languages that read from right to left, such as Arabic and Hebrew.\\n\\nAs someone who grew up in a bilingual environment, i.e. Arabic and French, making the difference between languages with opposite script directions is the most natural thing in the world. That being said, I recently had an amusing incident that I would like to relate here.\\n\\n![Labyrinth and directions](./directions.jpg)<br />\\nPicture by the [Electronic Frontier Foundation](https://www.eff.org/) under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) license\\n\\nIt all began when I attended a webinar about the role of pictures in intercultural communication some weeks ago. The speaker, who was using a Japanese brochure to illustrate an example of non-Latin scripts, started talking about RTL languages and confusing both directions, which in fact are opposite to each other.\\n\\nDuring five minutes that seemed like an eternity, our speaker kept using the acronym RTL to refer to a Right-to-Left layout while erroneously telling the audience that RTL was an acronym for Left-to-Right.\\n\\n![RTL or LTR](./two-way.png)<br />\\n*Right-to-Left or Left-to-Right? Help is on the way!<br />*\\nPicture by [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.en) license\\n\\nTo my surprise, nobody from the attendees called his attention to the mistake. It seemed like the participants had the &ldquo;autocorrect&rdquo; function turned on in their brain, correcting by themselves the inaccurate information.\\n\\nSo, what about the Japanese language? Is it an RTL or an LTR script? Well, both answers are true. \ud83d\ude0e In Fact, you can write Japanese in both directions depending on the writing system you are applying:\\n\\n- Tategaki (vertical writing): starting at the top of the right-hand column, then moving to the next vertical column on the left;\\n- Yokogaki (horizontal writing): from left to right like European Romance languages.\\n\\nIf you are curious to know more about the reading direction in Japanese, I suggest you read the article [&ldquo;Is Japanese Read from Right to Left or Left to Right?&rdquo;](https://teamjapanese.com/japanese-read-right-left/) by Team Japanese.\\n\\nGetting back to our presentation, it was quite interesting, but it had some flaws from the &ldquo;intercultural&rdquo; standpoint. Allow me to explain why. \\n\\nAt a certain stage of the presentation, the speaker showed an antique artwork from the Arab-Islamic World, and pointed out that artists from the aforesaid region used ornaments because drawing human beings is not allowed for religious reasons.\\n\\nWhile it is partly true that artists from the Arab-Islamic World have used biomorphic design at a later stage as an integral part of their artwork (e.g. use of vegetal shapes and forms, also known as &ldquo;al-Tawr\u012bq&rdquo;), the major part of these artistic creations is based on calligraphy and geometry by deriving patterns from basic geometric shapes, such as circles and squares. \\n\\nA little introduction to this topic is the article [&ldquo;Geometry - The Language of Symmetry in Islamic Art&rdquo;](https://artofislamicpattern.com/resources/educational-posters/) by Richard Henry.\\n\\nThe second shortcoming in the presentation consisted in the examples used to reflect cultural differences in technical documentation. \\n\\nIt was striking to see that the examples were too ethnocentric, to say the least. Judging by the names appearing in the attendees list, I presume that I was the only non-European in the meeting room.\\n\\nPersonally, I think that the choice of the examples was an unfortunate *faux pas*. The supporting materials would cause real indignation among the attendees if the presentation were to be held in front of a non-European audience (e.g. in an Asian or African country). \\n\\nDear speaker, you are shooting yourself in the foot with such examples. If you have any non-European students, ask them for their input. You may need to adapt your content as soon as possible to avoid any misunderstandings with international audiences. \\n\\nAfter all, your presentation is supposed to address intercultural challenges in technical communication.\\n\\n\\nCopyright \xa9 GlobalTech Translations 2022."}]}')}}]);