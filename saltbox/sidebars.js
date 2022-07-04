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
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'saltbox/basics',
        'saltbox/test',
      ],
    },
    {
      type: 'category',
      label: 'Sandbox',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'sandbox/index',
        'sandbox/test',
      ],
    },
  ],
};

module.exports = sidebars;
