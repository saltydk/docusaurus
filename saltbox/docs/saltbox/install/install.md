---
title: Install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're migrating from Cloudbox you probably want the [Cloudbox migrations instructions](https://docs.saltbox.dev/reference/guides/cloudbox/)

If you're migrating from PlexGuide there are some rudimentary notes provided by a user [here](https://docs.saltbox.dev/reference/guides/plexguide/).  Expansions to those notes would be welcome.

Please read through these steps prior to executing any of them, just to get a grounding in what is going to happen through out the process.  It could be that things in later steps inform your decisions in earlier steps.

Broadly, the base install consists of six steps:

1. Installing [dependencies](#dependencies)
2. Preparing your [configuration file(s)](/saltbox/install#configuration)
3. Running a [pre-install script](#preinstall)
4. Configuring your [cloud storage](#rclone)
5. Running the [install script](#saltbox)
6. Configuring installed [applications](#app-setup)

## Dependencies

<Tabs>
<TabItem value="curl" label="curl" default>

```shell
curl -sL https://install.saltbox.dev | sudo -H bash; cd /srv/git/saltbox
```

</TabItem>
<TabItem value="wget" label="wget">

```shell
wget -qO- https://install.saltbox.dev | sudo -H bash; cd /srv/git/saltbox
```

</TabItem>
<TabItem value="curl (verbose)" label="curl (verbose)">

```shell
curl -sL https://install.saltbox.dev | sudo -H bash -s -- -v; cd /srv/git/saltbox
```

</TabItem>
<TabItem value="wget (verbose)" label="wget (verbose)">

```shell
wget -qO- https://install.saltbox.dev | sudo -H bash -s -- -v; cd /srv/git/saltbox
```

</TabItem>
</Tabs>

:::info
See [here](/reference/dependencies) for more information about the dependencies.
:::

## Configuration

:::caution
This section assumes you are running the commands listed as root until told otherwise
:::

Make sure you fill out the following configuration files before proceeding. Each file will be located in `/srv/git/saltbox`

```shell
nano /srv/git/saltbox/accounts.yml
```

Contents:

```yaml title="accounts.yml"
---
user:
  name: seed # (1)
  pass: password123 # (2)
  domain: testsaltbox.ml # (3)
  email: your@email.com # (4)
cloudflare:
  email: # (5)
  api: # (6)
plex:
  user: # (7)
  pass: # (8)
  tfa: no # (9)
dockerhub:
  user: # (10)
  token: # (11)
apprise: # (12)
```

:::tip Explanations
<Tabs>
<TabItem value="username" label="1" default>

Username that will be created (if it doesn't exist) during the installation and apps that have automatic user configuration.

Do not use root.

Required.
</TabItem>
<TabItem value="user password" label="2">

Password used for username account during the installation and apps that have automatic user configuration.

Required.
</TabItem>
<TabItem value="user domain" label="3">

Domain that you want to use for the server.

</TabItem>
<TabItem value="user email" label="4">

Email address used for Let's Encrypt SSL certificates.

Required.
</TabItem>
<TabItem value="cloudflare email" label="5">

Email used for the Cloudflare account.

</TabItem>
<TabItem value="cloudflare apikey" label="6">

Cloudflare Global API Key.

</TabItem>
<TabItem value="plex username" label="7">

Plex.tv username or email address on the account.

</TabItem>
<TabItem value="plex password" label="8">

Plex.tv password for the account.

</TabItem>
<TabItem value="plex 2fa status" label="9">

Enable if you want to use the Two Factor Authentication [TFA] compatible Plex account login.

</TabItem>
<TabItem value="dockerhub username" label="10">

Docker Hub account name. Entering these credentials will at least double your image pull capacity from 100 every 6 hours to [200](https://www.docker.com/blog/checking-your-current-docker-pull-rate-limits-and-status/).

</TabItem>
<TabItem value="dockerhub token" label="11">
Docker Hub account token
</TabItem>
<TabItem value="apprise endpoint" label="12">

Apprise url. See their [docs](https://github.com/caronc/apprise#popular-notification-services) for more information.

</TabItem>
</Tabs>
:::

```shell
nano /srv/git/saltbox/settings.yml
```

Contents:

```yaml title="settings.yml"
---
downloads: /mnt/unionfs/downloads # (1)
rclone:
  version: latest # (2)
  remote: google # (3)
shell: bash # (4)
authelia:
  master: yes # (5)
  subdomain: login # (6)
```
:::tip Explanations
<Tabs>
<TabItem value="downloads" label="1" default>

Folder used for downloads.

</TabItem>
<TabItem value="rclone version" label="2">

Rclone version that Saltbox will install.

Valid options are **latest**, **beta** or a specific version (**1.55**).

</TabItem>
<TabItem value="rclone remote" label="3">

Name of the rclone remote that Saltbox will mount by default and use in any automated configuration.

Optional - Leave empty to avoid remote mount setup.

</TabItem>
<TabItem value="shell" label="4">

Shell used by the system. Valid options are bash or zsh.

</TabItem>
<TabItem value="authelia master" label="5">

If the current server should have Authelia installed or use one installed elsewhere.

</TabItem>
<TabItem value="authelia subdomain" label="6">

Subdomain used for Authelia.

Use different values here when using a Mediabox + Feederbox setup if deploying multiple Authelia instances.

On a Feederbox where you want to use Authelia on the Mediabox just put in the same subdomain the Mediabox uses for Authelia (master having been set to no on the Feederbox).

</TabItem>
</Tabs>
:::

:::note
See [here](/reference/accounts#options-in-settingsyml) for more detailed information about these settings.
:::

## Preinstall

:::tip
Make sure that you have set up the configuration correctly before proceeding.
:::

This step will create the user account specified in `accounts.yml`, add it to sudoers, update the kernel, edit GRUB configuration, install Rclone, and reboot the server if needed.

``` shell
sb install preinstall
```

:::caution
From this point you'll want to make sure you run commands as the user specified in the accounts.yml
:::

If your server did not need to reboot you can run `su username` to switch user or reconnect to SSH as the newly created user. Everything after this point will assume you are running as the user entered in accounts.yml

:::info
See [here](/reference/preinstall) for more information about the preinstall.
:::

## Rclone
Saltbox assumes an Rclone remote pointed at your Google storage named `google` [as shown in the settings.yml above].

There is nothing special about Saltbox's implementation of this setup, aside from its opinions about the media paths.

You may already have this remote configured or know how to do it if you are coming from a similar setup like Cloudbox or PlexGuide.

If you do, you are probably best served to use your existing setup.

If you are coming from Cloudbox, you *can and should* use your existing Rclone setup rather than going through the setup again.

If you are starting from scratch, the process is documented [here](/reference/rclone).

## Saltbox

If you are installing a Feederbox/Mediabox setup, set up the Feederbox first, then add the [feeder mount](/advanced/feeder) to the Mediabox prior to install.

<Tabs>
<TabItem value="Saltbox" label="Saltbox" default>

```shell
sb install saltbox
```

</TabItem>
<TabItem value="Mediabox" label="Mediabox" default>

```shell
sb install mediabox
```

</TabItem>
<TabItem value="Feederbox" label="Feederbox" default>

```shell
sb install feederbox
```

</TabItem>
<TabItem value="Core" label="Core" default>

```shell
sb install core
```

</TabItem>
</Tabs>

:::info
See [here](/reference/install) for more information about the install.
:::

## Reboot

You're now ready to go through the basic setup for the apps. After rebooting!

## App Setup

Go through these one at a time in order; some of the setups depend on previous setups.

1. [NZBGet](/apps/nzbget)
1. [ruTorrent](/apps/rutorrent)
1. [NZBHydra2](/apps/nzbhydra2)
1. [Jackett](/apps/jackett)
1. [Plex Media Server](/apps/plex)
1. [Autoscan](/apps/autoscan)
1. [Sonarr](/apps/sonarr)
1. [Radarr](/apps/radarr)
1. [Lidarr](/apps/lidarr)
1. [Tautulli](/apps/tautulli)
1. [Overseerr](/apps/overseerr)
1. [Portainer](/apps/portainer)
1. [Organizr](/apps/organizr)

Next, some tasks to perform [after installation is complete](/saltbox/install/after).
