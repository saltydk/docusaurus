# HandBrake

## What is it?

[HandBrake](https://handbrake.fr/) is a tool for converting video from nearly any format to a selection of modern, widely supported codecs.

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://handbrake.fr/) | [:octicons-link-16: Docs](https://handbrake.fr/docs) | [:octicons-mark-github-16: Github](https://github.com/HandBrake/HandBrake) | [:material-docker: Docker ](https://hub.docker.com/r/jlesage/handbrake)|

### 1. Installation

``` shell

sb install sandbox-handbrake

```

### 2. URL

- To access HandBrake, visit `https://handbrake._yourdomain.com_`

### 3. Setup

1. Edit the HandBrake section in [saltbox `settings.yml`:](/settings.md) and enter your desired password. Please note that it MUST be less than eight characters.

    ``` { .yaml }
    handbrake:
      handbrake_pass: saltbox
    ```

2. Run the role install command

    ``` { .shell }

    sb install sandbox-handbrake

    ```

3. Access HandBrake `https://handbrake._yourdomain.com_`

4. See the HandBrake documentation for usage:
      - [:octicons-link-16: Documentation](https://handbrake.fr/docs)

!!! Tip
      This container has an automatic video converter built in, see the [container documentation here](https://github.com/jlesage/docker-handbrake#automatic-video-conversion).
