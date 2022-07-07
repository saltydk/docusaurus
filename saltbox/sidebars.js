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
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Saltbox',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'apps/asshama',
            'apps/autoscan',
            'apps/bazarr',
            'apps/btrfsmaintenance',
            'apps/cloudplow',
            'apps/deluge',
            'apps/emby',
            'apps/hetzner_nfs',
            'apps/jackett',
            'apps/jellyfin',
            'apps/lidarr',
            'apps/nzbget',
            'apps/nzbhydra2',
            'apps/organizr',
            'apps/overseerr',
            'apps/petio',
            'apps/plex-autoscan',
            'apps/plex',
            'apps/portainer',
            'apps/prowlarr',
            'apps/qbittorrent',
            'apps/radarr',
            'apps/readarr',
            'apps/rutorrent',
            'apps/sabnzbd',
            'apps/sonarr',
            'apps/sstv',
            'apps/tautulli',
            'apps/transfer',
          ],
        },
        {
          type: 'category',
          label: 'Sandbox',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'sandbox/apps/adguardhome',
            'sandbox/apps/airdcpp',
            'sandbox/apps/airsonic',
            'sandbox/apps/alltube',
            'sandbox/apps/alternatrr',
            'sandbox/apps/alternatrrx',
            'sandbox/apps/apprise',
            'sandbox/apps/archivebox',
            'sandbox/apps/arrx',
            'sandbox/apps/autobrr',
            'sandbox/apps/beets',
            'sandbox/apps/booksonic',
            'sandbox/apps/bookstack',
            'sandbox/apps/calibre',
            'sandbox/apps/calibre_web',
            'sandbox/apps/coder',
            'sandbox/apps/comicstreamer',
            'sandbox/apps/comixed',
            'sandbox/apps/deemix',
            'sandbox/apps/delugevpn',
            'sandbox/apps/doplarr',
            'sandbox/apps/dozzle',
            'sandbox/apps/embystat',
            'sandbox/apps/epms',
            'sandbox/apps/filebot',
            'sandbox/apps/filebrowser',
            'sandbox/apps/filezilla',
            'sandbox/apps/flaresolverr',
            'sandbox/apps/funkwhale',
            'sandbox/apps/gitea',
            'sandbox/apps/glances_web',
            'sandbox/apps/goaccess',
            'sandbox/apps/goplaxt',
            'sandbox/apps/gotify',
            'sandbox/apps/grafana',
            'sandbox/apps/guacamole',
            'sandbox/apps/handbrake',
            'sandbox/apps/healthchecks',
            'sandbox/apps/heimdall',
            'sandbox/apps/influxdb',
            'sandbox/apps/jdownloader2',
            'sandbox/apps/jirafeau',
            'sandbox/apps/kavita',
            'sandbox/apps/kcptun_client',
            'sandbox/apps/kcptun_server',
            'sandbox/apps/kitana',
            'sandbox/apps/komga',
            'sandbox/apps/lazylibrarian',
            'sandbox/apps/logarr',
            'sandbox/apps/medusa',
            'sandbox/apps/minecraft',
            'sandbox/apps/mkvtoolnix',
            'sandbox/apps/monitorr',
            'sandbox/apps/moviematch',
            'sandbox/apps/mylar3',
            'sandbox/apps/nabarr',
            'sandbox/apps/navidrome',
            'sandbox/apps/nextcloud',
            'sandbox/apps/notifiarr',
            'sandbox/apps/ombi',
            'sandbox/apps/ombix',
            'sandbox/apps/ouroboros',
            'sandbox/apps/plex-meta-manager',
            'sandbox/apps/plex-utills',
            'sandbox/apps/privatebin',
            'sandbox/apps/qbit_manage',
            'sandbox/apps/requestrr',
            'sandbox/apps/requestrrx',
            'sandbox/apps/resiliosync',
            'sandbox/apps/rflood',
            'sandbox/apps/rfloodx',
            'sandbox/apps/speedtest',
            'sandbox/apps/sshwifty',
            'sandbox/apps/stash',
            'sandbox/apps/syncthing',
            'sandbox/apps/telegraf',
            'sandbox/apps/thelounge',
            'sandbox/apps/traefik_robotstxt',
            'sandbox/apps/transmission',
            'sandbox/apps/transmissionx',
            'sandbox/apps/unifi',
            'sandbox/apps/unmanic',
            'sandbox/apps/unpackerr',
            'sandbox/apps/uptime_kuma',
            'sandbox/apps/varken',
            'sandbox/apps/vaultwarden',
            'sandbox/apps/vnstat',
            'sandbox/apps/watchtower',
            'sandbox/apps/wordpress',
            'sandbox/apps/wrapperr',
            'sandbox/apps/xteve',
            'sandbox/apps/yacht',
            'sandbox/apps/znc',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
