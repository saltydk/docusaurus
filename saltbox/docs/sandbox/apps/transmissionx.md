# Transmission**X**

## What is it?

[Transmission**X**](https://transmissionbt.com/) is an [arr**X** role](arrx) for [Transmission](/sandbox/apps/transmission).

[Transmission](https://transmissionbt.com/) is a fast, easy, and free BitTorrent client.

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://transmissionbt.com/) | [:octicons-link-16: Docs](https://github.com/transmission/transmission/wiki) | [:octicons-mark-github-16: Github](https://github.com/transmission/transmission) | [:material-docker: Docker ](https://hub.docker.com/r/linuxserver/transmission)|

### 1. Installation

``` shell

sb install sandbox-transmissionx

```

### 2. URL

- To access Transmission**X**, visit `https://transmissionx._yourdomain.com_`

### 3. Setup

1. Read through the general [arr**X** role instructions](arrx).

2. Add your **X** instance names to the Transmission**X** section in [sandbox `settings.yml`:](/sandbox/settings) using a list format as below.

    ``` { .yaml }
        transmissionx:
          roles:
            - reality
            - games
    ```

3. Run the Saltbox installer to generate your **X** instances of transmission.

      ``` { .shell }

          sb install sandbox-transmissionx

      ```

- For app specific instructions refer to the parent role,
     - [transmission](/sandbox/apps/transmission)<Br/>
     - and the transmission upstream documentation <BR/>
       [:octicons-link-16: Documentation ](DOCSLINK)
