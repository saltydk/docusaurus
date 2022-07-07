---
title: Deluge
---

# Deluge

## What is it?

[Deluge](https://deluge-torrent.org/) is a torrent client that can be used as an alternative to rutorrent.

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://deluge-torrent.org/) | [:octicons-link-16: Docs](https://dev.deluge-torrent.org/wiki/UserGuide) | [:octicons-mark-github-16: Github](https://git.deluge-torrent.org/deluge) | [:material-docker: Docker ](https://registry.hub.docker.com/r/linuxserver/deluge)|

### 1. Installation

``` { .shell }

sb install deluge

```

### 2. URL

- To access Deluge, visit `https://deluge._yourdomain.com_`

!!! info
    **default login**
    ``` { .yaml }
        user: admin
    password: deluge
    ```
### 3. Setup

- Change login password.

- Click Preferences in the top bar and on the Downloads section enter the following paths:
    - Download to:
    `/mnt/unionfs/downloads/torrents/deluge/incoming`
    - Move completed to:
    `/mnt/unionfs/downloads/torrents/deluge/completed`
    - Autoadd `.torrent files` from:
    `/mnt/unionfs/downloads/torrents/deluge/watched`

- Select Network section, uncheck `Use Random Ports` under Incoming Ports and set both input fields to `58112`.

- Click the `Plugins` section
    - enable the `labels` plugin.
    - enable and the `Extractor` plugin.
      In order for Sonarr or Radarr to import media packaged within .rar files, they will have to be extracted.
    - After clicking `"Apply"`, select the `Extractor`  plugin on the left.
      Make sure the directory points to the `completed` folder within your Deluge data directory. 
      `/mnt/unionfs/downloads/torrents/deluge/completed`
      Also, make sure that the Create torrent name sub-folder setting is checked.

### 4. Adding to Sonarr/Radarr

To add Deluge as a download client in Sonarr/Radarr use the following settings. Both are able to remove completed torrents after they have finished seeding.

  ![](/images/community/deluge_add_to_arr.png)

- [:octicons-link-16: Documentation](https://dev.deluge-torrent.org/wiki/UserGuide)
