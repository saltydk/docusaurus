---
title: Accessing Apps
---

# Accessing Saltbox Apps

_Note 1: After the initial setup, it may take a little while for the SSL certificates to propagate._

_Note 2: If pages don't load at all, make sure you've set up your [domain](/reference/domain) properly and also checkout the [FAQ](/faq/System)._


## Default Apps

Saltbox apps will be accessed via appname._yourdomain.com_ (see table below).

| **App  Name**          | **with domain**                         | **without domain**                      |
|:---------------------- |:--------------------------------------- |:--------------------------------------- |
| Jackett                | https://jackett._yourdomain.com_        | http://_server_ip_:9117                 |
| Lidarr                 | https://lidarr._yourdomain.com_         | http://_server_ip_:8686                 |
| NZBGet                 | https://nzbget._yourdomain.com_         | http://_server_ip_:6789                 |
| NZBHydra2              | https://nzbhydra2._yourdomain.com_      | http://_server_ip_:5076                 |
| Organizr               | https://organizr._yourdomain.com_       | http://_server_ip_:port                 |
| Overseerr              | https://overseerr._yourdomain.com_      | http://_server_ip_:5055                 |
| Plex                   | https://plex._yourdomain.com_           | http://_server_ip_:32400                |
| WebTools for Plex      | https://plex-webtools._yourdomain.com_  | http://_server_ip_:33400                |
| Portainer              | https://portainer._yourdomain.com_      | http://_server_ip_:9000                 |
| Radarr                 | https://radarr._yourdomain.com_         | http://_server_ip_:7878                 |
| ruTorrent              | https://rutorrent._yourdomain.com_      | http://_server_ip_:port                 |
| Sonarr                 | https://sonarr._yourdomain.com_         | http://_server_ip_:8989                 |
| Tautulli               | https://tautulli._yourdomain.com_       | http://_server_ip_:8181                 |


## Additional Apps

Coming soon.

Next, let's discuss Saltbox' default [paths](paths).
