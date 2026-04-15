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
  onBrokenMarkdownLinks: 'warn',

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
        blog: {
          routeBasePath: 'guides',
          blogTitle: 'Farowave Guides',
          blogDescription: 'Practical resources for technical communicators and documentation engineers',
          showReadingTime: true,
          editUrl: 'https://github.com/ka2in/mydocusaurus/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
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
          href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
      },
    ],
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
        {to: '/guides', label: 'Guides', position: 'left'},
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
            {label: 'Guides', to: '/guides'},
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