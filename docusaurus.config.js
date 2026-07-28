// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Farowave Guides',
  tagline: 'Insights on enterprise documentation, localization, and technical communication',
  url: 'https://ka2in.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ka2in',
  projectName: 'mydocusaurus',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ka2in/mydocusaurus/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'enterprise-documentation',
        routeBasePath: 'guides/enterprise-documentation',
        path: './content/enterprise-documentation',
        blogTitle: 'Enterprise Documentation',
        blogDescription: 'Technical resources, tooling guides, and documentation strategy for SaaS and regulated industries.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 10,
        showReadingTime: true,
        authorsMapPath: 'authors.yml',
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Farowave · Enterprise Documentation',
          description: 'Technical resources, tooling guides, and documentation strategy for SaaS and regulated industries.',
          copyright: `Copyright © ${new Date().getFullYear()} Farowave`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'localization-multilingual',
        routeBasePath: 'guides/localization-multilingual',
        path: './content/localization-multilingual',
        blogTitle: 'Localization & Multilingual Content',
        blogDescription: 'Insights on TMS workflows, terminology governance, and multilingual content strategy.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 10,
        showReadingTime: true,
        authorsMapPath: 'authors.yml',
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Farowave · Localization & Multilingual',
          description: 'Insights on TMS workflows, terminology governance, and multilingual content strategy.',
          copyright: `Copyright © ${new Date().getFullYear()} Farowave`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'open-web-digital-rights',
        routeBasePath: 'guides/open-web-digital-rights',
        path: './content/open-web-digital-rights',
        blogTitle: 'Open Web & Digital Rights',
        blogDescription: 'Critical analysis of decentralized platforms, web3 protocols, and open infrastructure from a technical communication lens.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 10,
        showReadingTime: true,
        authorsMapPath: 'authors.yml',
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Farowave · Open Web & Digital Rights',
          description: 'Critical analysis of decentralized platforms, web3 protocols, and open infrastructure from a technical communication lens.',
          copyright: `Copyright © ${new Date().getFullYear()} Farowave`,
        },
      },
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap',
        },
      },
    ],

    algolia: {
      appId: 'WD3GAPVQQH',
      apiKey: '1b9f0739688ed742e37378c6a02adbbc',
      indexName: 'Farowave Guides',
    },
    navbar: {
      title: 'Farowave',
      logo: {
        alt: 'Farowave Logo',
        src: 'img/lighthouse.svg',
        srcDark: 'img/lighthouse-dark.svg',
        width: 96,
        height: 96,
      },
      items: [
        {
          label: 'Guides',
          position: 'left',
          type: 'dropdown',
          items: [
            { label: 'Enterprise Documentation', to: '/guides/enterprise-documentation/' },
            { label: 'Localization & Multilingual', to: '/guides/localization-multilingual/' },
            { label: 'Open Web & Digital Rights', to: '/guides/open-web-digital-rights/' },
          ],
        },
        {
          href: 'https://github.com/ka2in',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {label: 'Enterprise Documentation', to: '/guides/enterprise-documentation/'},
            {label: 'Localization & Multilingual', to: '/guides/localization-multilingual/'},
            {label: 'Open Web & Digital Rights', to: '/guides/open-web-digital-rights/'},
          ],
        },
        {
          title: 'Farowave',
          items: [
            {label: 'Main Site', href: 'https://farowave.com'},
            {label: 'Farowave Docs', href: 'https://docs.farowave.com'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Fosstodon', href: 'https://fosstodon.org/@gnufcl'},
            {label: 'Codeberg', href: 'https://codeberg.org/ka2in'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Farowave. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};


export default config;
