# Requestrr**X**

## What is it?

[RequestrrX](https://github.com/darkalfx/requestrr) is an [arr**X** role](arrx) for [Requestrr](/sandbox/apps/requestrr).

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://github.com/darkalfx/requestrr) | [:octicons-link-16: Docs](https://github.com/darkalfx/requestrr/wiki) | [:octicons-mark-github-16: Github](https://github.com/darkalfx/requestrr) | [:material-docker: Docker ](https://hub.docker.com/r/hotio/requestrr)|

### 1. Installation

``` shell

sb install sandbox-requestrrx

```

### 2. URL

- To access Requestrr**X**, visit `https://requestrrx._yourdomain.com_`

### 3. Setup

1. Read through the general [arr**X** role instructions](/sandbox/apps/arrx).

2. Add your **X** instance names to the Requestrr**X** section in [sandbox `settings.yml`:](/sandbox/settings) using a list format as below.

    ``` { .yaml }
        requestrrx:
          roles:
            - 1080
            - 4k
    ```

3. Run the Saltbox installer to generate your **X** instances of requestrr.

      ``` { .shell }

          sb install sandbox-requestrrx

      ```

- For app specific instructions refer to the parent role,
     - [requestrr](/sandbox/apps/requestrr)<Br/>
     - and the requestrr upstream documentation <BR/>
       [:octicons-link-16: Documentation ](https://github.com/darkalfx/requestrr/wiki)
