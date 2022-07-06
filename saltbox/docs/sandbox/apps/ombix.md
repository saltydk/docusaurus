# Ombi**X**

## What is it?

[Ombi**X**](https://ombi.io) is an [arr**X** role](arrx) for [Ombi](/sandbox/apps/ombi).

[Ombi](https://ombi.io/) is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves!

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://ombi.io/) | [:octicons-link-16: Docs](https://docs.ombi.app/guides/installation/) | [:octicons-mark-github-16: Github](https://github.com/Ombi-app/Ombi) | [:material-docker: Docker ](https://hub.docker.com/r/hotio/ombi)|

### 1. Installation

``` shell

sb install sandbox-ombix

```

### 2. URL

- To access Ombi**X**, visit `https://OmbiX._yourdomain.com_`

### 3. Setup

1. Read through the general [arr**X** role instructions](arrx).

2. Add your **X** instance names to the Ombi**X** section in [sandbox `settings.yml`:](/sandbox/settings) using a list format as below.

   ``` { .yaml }
    ombix:
      roles:
        - 4k
        - anime
   ```

- For app specific instructions refer to the parent role,
     - [Ombi](/sandbox/apps/ombi)
     - and the upstream documentation 
       [:octicons-link-16: Documentation ](https://docs.ombi.app/guides/installation/)
