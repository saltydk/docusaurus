# Notifiarr Client

## What is it?

[Notifiarr Client](https://notifiarr.com/) is the unified client for Notifiarr.com. The client enables content requests from Media Bot in your Discord Server. It also provides reports for Plex usage and system health. Other features can be [configured on the Notifiarr website.](https://notifiarr.com/)



| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://notifiarr.com/) | [:octicons-link-16: Docs](https://notifiarr.wiki/) | [:octicons-mark-github-16: Github](https://github.com/Notifiarr/notifiarr) | [:material-docker: Docker ](https://hub.docker.com/r/golift/notifiarr)|


### 1. Installation

``` shell

sb install sandbox-notifiarr

```

### 2. URL

- The Notifiarr url will only display the app status `https://notifiarr._yourdomain.com_`

### 3. Setup

You will need a notifiar account api key to use notifiarr. You can get one by [signing up for a free account.](https://notifiarr.com/register.php)

After logging in, you should be redirected to your profile screen.

  - Click on Generate API Key (This needs to be done)
  - Select your Country
  - Select your Timezone
  - Change your Time Format to your liking
  - Select your Site Theme
  - Select your Notification Language
  - **Don't forget to Save your changes**

Add your API key to the **[Sandbox settings file](/sandbox/settings.md)**

Now run the installer

``` shell

sb install sandbox-notifiarr

```
Now go to the Notifiarr website and configure your integrations and discord server.
Refer to the [Notifiarr documentation](https://notifiarr.wiki/) for more information.

The role will attempt to configure sonarr, radarr, plex, and tautulli. Other apps can be edited in the config file which can be found at `"/opt/notifiarr/notifiarr.conf"` in a standard install. From time to time new options will be added and an [example config file can be found here.](https://github.com/Notifiarr/notifiarr/blob/main/examples/notifiarr.conf.example)

A quickstart guide can be found on the [Trash Guides website.](https://trash-guides.info/Notifiarr/Quick-Start/)

- [:octicons-link-16: Documentation: Notifiarr Client Docs](https://notifiarr.wiki/)
