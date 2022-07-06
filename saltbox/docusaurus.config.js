// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saltbox',
  tagline: 'Ansible-based solution for rapidly deploying a Docker containerized cloud media server.',
  url: 'https://docusaurus.saltbox.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saltydk', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
        language: "en",
        hashed: true,
        docsDir: "docs",
        blogDir: "blog",
        removeDefaultStopWordFilter: false,
        removeDefaultStemmer: false,
        highlightSearchTermsOnTargetPage: false,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: false,
        ignoreFiles: /meta$/,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Saltbox Documentation',
        items: [
          {
            href: 'https://github.com/sponsors/saltydk',
            className: "header-donate-link",
            "aria-label": "Sponsor",
            position: 'right',
          },
          {
            href: 'https://discord.gg/ugfKXpFND8',
            className: "header-discord-link",
            "aria-label": "Discord",
            position: 'right',
          },
          {
            href: 'https://github.com/saltyorg/docs',
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
