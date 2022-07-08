---
title: Settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration

The configuration file for backup/restore is called `backup_config.yml` and is located in `/srv/git/saltbox`

```yaml title="backup_config.yml"
---
backup:
  local:
    enable: true # (1)
    destination: /mnt/local/Backups/Saltbox # (2)
  rclone:
    enable: true # (3)
    destination: google:/Backups/Saltbox # (4)
  rsync:
    enable: false # (5)
    destination: rsync://somehost.com/Backups/Saltbox # (6)
    port: 22 # (7)
  cron:
    cron_time: weekly # (8)
    enable: no # (9)
  restore_service:
    user: # (10)
    pass: # (11)
  misc:
    snapshot: true # (12)
```

:::tip Explanations
<Tabs>
<TabItem value="local enable" label="1" default>
Toggle for keeping a local copy of the backup.

Options are: `true` or `false`
</TabItem>
<TabItem value="local destination" label="2">
Path used for the local backups.
</TabItem>
<TabItem value="rclone enable" label="3">
Toggle for using Rclone remote backup storage.

Options are: `true` or `false`
</TabItem>
<TabItem value="rclone destination" label="4">
Path used for the Rclone remote. Backups outside of the most recent one will be located in the `archived` folder.

Make sure that this path is unique if you run multiple instances of Saltbox.
</TabItem>
<TabItem value="rsync enable" label="5">
Toggle for using Rsync backups.

Options are: `true` or `false`
</TabItem>
<TabItem value="rsync destination" label="6">
Path used for the Rsync backups.
</TabItem>
<TabItem value="rsync port" label="7">
Port used by rsync on the target server.
</TabItem>
<TabItem value="cron cron_time" label="8">
Schedule for when the backup task will be executed.

Options are: `reboot`, `yearly`, `annually`, `monthly`, `weekly`, `daily`, `hourly`.

Should you desire more granular control over the schedule you can edit the crontab for the Saltbox user once setup.
</TabItem>
<TabItem value="cron enable" label="9">
Toggle for enabling automatic backups.

Options are: `no` or `yes`

Depending on the option set here the cron entry created by Saltbox will be added, removed or modified.
</TabItem>
<TabItem value="restore_service user" label="10">
Username used for the restore service.

Has to be unique across all users of the service. Try sticking with a url for the server `box.domain.tld` unique to each server for something easily remembered.

Usernames are hashed before requests are sent to the restore service.
</TabItem>
<TabItem value="restore_service pass" label="11">
Password used encrypt/decrypt the configuration files. 

Only used on the client side in scripts.
</TabItem>
<TabItem value="misc snapshot" label="12">
Toggle for BTRFS snaphots.

Options are: `true` or `false`

Requires BTRFS on `/` or `/opt`
</TabItem>
</Tabs>
:::


IMPORTANT:

These values:

```yaml
  restore_service:
    user: 
    pass: 
 ```

SHOULD NOT BE YOUR SERVER ACCOUNT CREDENTIALS.

These are an *arbitrary* username/password that you make up which are used ONLY with this backup/restore service.  They are used to encrypt your config files before they are placed on the saltbox restore server, and then in the restore command that retrieves the backup for decryption.  They are not sent or stored anywhere else.  If they are not filled in, then your config files will not be sent to the saltbox restore service.
