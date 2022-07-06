/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  saltboxSidebar: [
    'home',
    {
      type: 'category',
      label: 'Saltbox',
      link: {
        type: 'doc',
        id: 'saltbox/basics/basics',
      },
      collapsed: true,
      collapsible: true,
      items: [
        'saltbox/basics/basics',
        'saltbox/prerequisites/prerequisites',
        'saltbox/basics/install_types',
        'saltbox/install/install',
        'saltbox/install/after',
        'saltbox/basics/update',
        'saltbox/basics/accessing_apps',
        'saltbox/basics/paths',
        'saltbox/inventory/index',
        {
          type: 'category',
          label: 'Backup',
          link: {
            type: 'doc',
            id: 'saltbox/backup/settings',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'saltbox/backup/settings',
            'saltbox/backup/backup',
            'saltbox/backup/restore',
            'saltbox/backup/migrate',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Sandbox',
      link: {
        type: 'doc',
        id: 'sandbox/basics',
      },
      collapsed: true,
      collapsible: true,
      items: [
        'sandbox/basics',
        'sandbox/settings',
        'sandbox/index',
        {
          type: 'category',
          label: 'Apps',
          link: {
            type: 'doc',
            id: 'sandbox/apps/arrx',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'sandbox/apps/arrx',
            {
              type: 'category',
              label: 'General',
              link: {
                type: 'doc',
                id: 'sandbox/apps/adguardhome',
              },
              collapsed: true,
              collapsible: true,
              items: [
                'sandbox/apps/adguardhome',
                'sandbox/apps/nabarr',
                'sandbox/apps/notifiarr',
                'sandbox/apps/resiliosync',
                'sandbox/apps/thelounge',
                'sandbox/apps/wrapperr',
                'sandbox/apps/znc',
              ],
            },
            {
              type: 'category',
              label: 'Content Management',
              link: {
                type: 'doc',
                id: 'sandbox/apps/wordpress',
              },
              collapsed: true,
              collapsible: true,
              items: [
                'sandbox/apps/wordpress',
              ],
            },
            {
              type: 'category',
              label: 'Development',
              link: {
                type: 'doc',
                id: 'sandbox/apps/coder',
              },
              collapsed: true,
              collapsible: true,
              items: [
                'sandbox/apps/coder',
                'sandbox/apps/gitea',
                {
                  type: 'category',
                  label: 'Docker',
                  link: {
                    type: 'doc',
                    id: 'sandbox/apps/dozzle',
                  },
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'sandbox/apps/dozzle',
                    'sandbox/apps/yacht',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Downloading',
              link: {
                type: 'doc',
                id: 'sandbox/apps/airdcpp',
              },
              collapsed: true,
              collapsible: true,
              items: [
                'sandbox/apps/airdcpp',
              ],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
