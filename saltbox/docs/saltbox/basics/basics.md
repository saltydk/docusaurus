---
title: Basics
---
# Basics

## What is Saltbox?

- [Saltbox](https://github.com/saltyorg/Saltbox) is an [Ansible](https://www.ansible.com/how-ansible-works) and [docker](https://www.docker.com/what-container) based solution for rapidly deploying a cloud media server using Ubuntu Server 20.04 or Ubuntu Server 22.04 LTS running on AMD64 [ARM processors (Raspberry Pi, notably) are not supported).

- Primary functions are: the automatic acquisition of media, storing that media on the cloud, and being able to  play it back from anywhere and from any device.

- NOTE: Saltbox does not have a dashboard or GUI of its own. All Saltbox-specific setup and commands are done using the Linux command-line.


## Why use Saltbox?

### Custom Domains

- Have your server setup behind your own domain, securely (e.g. `https://apps.yourdomain.com`).

### Fast Deployment

- Have a system running in minutes with minimal input.

### Docker-Based Applications

- Docker containers keep your apps isolated from each other - no more conflicts between apps.

- Docker containers keep your system tidy since none of the apps' files (executables and dependencies) are stored outside of the container.

- Quickly install and uninstall apps.


### Cloud Storage

- Store media on cloud storage to save on local drive space.


### Can Choose Your Preferred Media Server Application

- You can decide whether to use Plex, Emby or Jellyfin.


### Custom Server Deployment

- You can deploy Saltbox on an all-in-one server, for downloading and streaming.

  or

- You can deploy Saltbox between two servers: a Mediabox, as streaming server, and a Feederbox, as a downloading server.

### Secure

- Saltbox uses secure HTTPS provided by Let's Encrypt or ZeroSSL.

### Easy Backup and Restore

- Configuration and data files for all key applications are conveniently stored in /opt, which makes backup so easy. Easily pack up your server and move to another one with Saltbox's built-in Backup.


## How does Saltbox function?

[Sonarr](https://sonarr.tv/) manages downloading your favorite TV Shows and [Radarr](https://radarr.video/) manages downloading your favorite movies. Both use either Usenet (via [NZBGet](https://nzbget.net/)) and/or Torrents (via [ruTorrent](https://github.com/Novik/ruTorrent)) to do this.[^1][^2]

Once the downloads are complete, Sonarr & Radarr will move [or copy in the case of torrents] these downloads to your server's `/mnt/local/Media/` folder[^3] and send a notification to _Autoscan_.

[AutoScan](https://github.com/cloudbox/autoscan/) will, in turn, tell Plex to scan for the newly downloaded TV Show or Movie, by only scanning the specific season or movie folder. This will

  - make the media appear in Plex sooner than what a full library scan would have been able to do, and
  - reduce the chances of Cloud Storage API bans for excessive activity.

[Cloudplow](https://github.com/Saltbox/Saltbox/wiki/Cloudplow) will eventually[^4] move everything[^5] from `/mnt/local/Media/` to a folder named `Media` on the remote cloud storage, thereby reducing the storage used on the (local) server.

During this migration, the media files will continue to be accessible to Media Servers (e.g. Plex) because the remote cloud storage (e.g. Google Drive) will be mounted on to the server as if it were a local drive. This is accomplished with an [Rclone](https://rclone.org/) VFS mount pointing to the cloud storage, and a union of that mount with the server’s own local storage (accomplished via [`mergerfs`](https://github.com/trapexit/mergerfs)).

![](/images/basics-flowchart.png)

[^1]: Some of the applications above can be replaced with similar apps.

[^2]: If you want to use Torrents, it is recommended to be a member of a private tracker vs using public ones.

      If you want to to use Usenet, you will need to purchase Usenet provider service (or multiple services) and also be a member of one or more Usenet indexers.

[^3]: The move to `/mnt/local/Media` is indirect; Radarr/Sonarr are using `/mnt/unionfs/Media`, and they move the file *there*, however, `/mnt/local` is the only *writeable* part of the mergerfs [for the purpose of  creating new files], so the newly-written files will be placed in `/mnt/local`.

[^4]: By default, Cloudplow will check every half hour to see if there is 200GB of data staged in `/mnt/local`; if there is, all that data is pushed to your Google Drive. This threshold can be adjusted as needed in the Cloudplow config.

[^5]: There is presently a 750GB/day upload limitation on Google accounts.

      The standard Saltbox setup will describe setting up a Google Drive remote pointed at your My Drive.

      This limit can be eliminated by cycling through a set of service accounts [each of which can upload 750GB] to upload to one or more Shared Drives [aka Teamdrives].  See [Tip44 Doc](/reference/guides/chazguides/tip44) for details.

Next, let's discuss the [Prerequisites](/saltbox/prerequisites) for Saltbox installation.
