---
title: Restore
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restore

:::caution
Just like the initial install, these instructions are assuming you are running as `root` until told otherwise below.
:::

## Dependencies

Start by installing dependencies.

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

Then retrieve the configuration files from a backup.

## Using Restore Service

<Tabs>
<TabItem value="curl" label="curl" default>

```shell
curl -sL https://restore.saltbox.dev | bash -s 'USERNAME' 'PASSWORD' # (1)
```

</TabItem>
<TabItem value="wget" label="wget">

```shell
wget -qO- https://restore.saltbox.dev | bash -s 'USERNAME' 'PASSWORD' # (1)
```

</TabItem>
</Tabs>

:::tip Explanations
<Tabs>
<TabItem value="restore service" label="1" default>
Use the username and password defined for the service when last backup was executed.

Must wrap the username and password in quotes.
</TabItem>
</Tabs>
:::


Then run `preinstall` which will setup the user account and a few other dependencies for the restore.

```shell
sb install preinstall
```

:::caution
From this point you'll want to make sure you run commands as the user specified in the accounts.yml


:::info
If you are using a service account to authenticate the rclone remote that holds the backup, you will need to put that SA JSON file in place manually so that the restore process can authenticate the remote to download the rest of the backup.
:::

Start the restore process.

```shell
sb install restore
```

Once succesfully completed you can now follow the installation guide from this [step](/saltbox/install#saltbox).

## Without Restore Service

Retrieve the following configuration files from your backup manually and place them in `/srv/git/saltbox`:

* accounts.yml
* settings.yml
* adv_settings.yml
* backup_config.yml
* providers.yml
* hetzner_nfs.yml
* rclone.conf
* localhost.yml

Then run `preinstall` which will setup the user account and a few other dependencies for the restore.

```shell
sb install preinstall
```

:::caution
From this point you'll want to make sure you run commands as the user specified in the accounts.yml
:::

:::info
If you are using a service account to authenticate the rclone remote that holds the backup, you will need to put that SA JSON file in place manually so that the restore process can authenticate the remote to download the rest of the backup.
:::

Start the restore process.

```shell
sb install restore
```

Once successfully completed you can now continue:

If you are migrating from one server to another, return to the [migration guide](/saltbox/backup/migrate)

If you are restoring to the same server, you can now follow the installation guide from this [step](/saltbox/install#saltbox).
