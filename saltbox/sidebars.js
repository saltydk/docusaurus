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
      ],
    },
    {
      type: 'category',
      label: 'Sandbox',
      link: {
        type: 'doc',
        id: 'sandbox/index',
      },
      collapsed: true,
      collapsible: true,
      items: [
        'sandbox/index',
      ],
    },
  ],
};

module.exports = sidebars;
