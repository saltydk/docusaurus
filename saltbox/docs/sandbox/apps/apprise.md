# Apprise

## What is it?

[Apprise](https://github.com/caronc/apprise) allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc.

| Details     |             |             |             |
|-------------|-------------|-------------|-------------|
| [:material-home: Project home ](https://github.com/caronc/apprise) | [:octicons-link-16: Docs](https://github.com/caronc/apprise/wiki) | [:octicons-mark-github-16: Github](https://github.com/caronc/apprise) | [:material-docker: Docker ](https://hub.docker.com/r/caronc/apprise)|

### 1. Installation

``` shell

sb install sandbox-apprise

```

### 2. Setup

As configured, the instance runs on the Docker network accessible to other saltbox network containers at
`http://apprise:8000`
as well as via the reverse proxy at
`https://apprise.domain.tld`.

The configured username/password are taken from your Saltbox [`accounts.yml`](/saltbox/install/install#configuration) file located in `/srv/git/saltbox/accounts.yml`

- [:octicons-link-16: Documentation: Apprise Client Docs](https://github.com/caronc/apprise/wiki)
