# FlareSolverr

## What is it?

[FlareSolverr](https://github.com/FlareSolverr/FlareSolverr) is a proxy server to bypass Cloudflare protection.

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://github.com/FlareSolverr/FlareSolverr) | [:octicons-link-16: Docs](https://github.com/FlareSolverr/FlareSolverr) | [:octicons-mark-github-16: Github](https://github.com/FlareSolverr/FlareSolverr) | [:material-docker: Docker ](https://hub.docker.com/r/flaresolverr/flaresolverr)|

### 1. Installation

``` shell

sb install sandbox-flaresolverr

```

### 2. Setup
#### Jackett
- Locate the _FlareSolverr API URL_ field in the main page.
- Input `http://flaresolverr:8191` and apply the settings.
#### Prowlarr
- In the settings, add an Indexer Proxy and select FlareSolverr.
- _Host_ should be `http://flaresolverr:8191`.


- [:octicons-link-16: Documentation](https://github.com/FlareSolverr/FlareSolverr)
