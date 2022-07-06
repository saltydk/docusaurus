# rFlood**X**

## What is it?

[rFloodX](https://github.com/jesec/flood) is an [arr**X** role](arrx.md) for [rFlood](/sandbox/apps/rflood.md).

## Project Information
- [:material-home: rFlood ](https://github.com/jesec/flood)
- [:octicons-link-16: Docs](https://github.com/jesec/flood/wiki)
- [:octicons-mark-github-16: Github rTorrent:](https://github.com/jesec/rtorrent)
- [:octicons-mark-github-16: Github Flood:](https://github.com/jesec/flood)
- [:material-docker: Docker: ](https://hub.docker.com/r/hotio/rflood)

### 1. Installation

``` shell

sb install sandbox-rfloodx

```

### 2. URL

- To access rFlood**X**, visit `https://rfloodx._yourdomain.com_`

### 3. Setup

1. Read through the general [arr**X** role instructions](arrx.md).

2. Add your **X** instance names to the rFlood**X** section in [saltbox `settings.yml`:](/settings.md) using a list format as below.

    ``` { .yaml }
        rfloodx:
          roles:
            - linuxisos
            - anime
    ```

3. Run the Saltbox installer to generate your **X** instances of rflood.

      ``` { .shell }

          sb install sandbox-rfloodx

      ```

- For app specific instructions refer to the parent role,
     - [rflood](/sandbox/apps/rflood.md)<Br/>
     - and the rflood upstream documentation <BR/>
       [:octicons-link-16: Documentation ](https://github.com/jesec/flood/wiki)
