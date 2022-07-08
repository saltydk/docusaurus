---
title: Backup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Backup

With Saltbox you can either run a backup task manually or schedule it to run automatically.

## Manual Backup

:::caution
This step assumes you have completed the configuration of the `backup_config.yml` in the configuration [step](/saltbox/backup/settings).
:::

<Tabs>
<TabItem value="without screen" label="Without Screen" default>

```shell
sb install backup
```
</TabItem>
<TabItem value="with screen" label="With Screen">

```shell
screen -dmS saltbox-backup sb install backup
```

```shell
screen -r
```

```shell
CTRL A + D
```
</TabItem>
</Tabs>


## Scheduled Backup

:::caution
This step assumes you have completed the configuration of the `backup_config.yml` in the configuration [step](/saltbox/backup/settings).
:::

<Tabs>
<TabItem value="automatic" label="Have Saltbox configure cron" default>

```shell
sb install set-backup
```

</TabItem>
<TabItem value="manual" label="Configure cron manually">

```shell
crontab -e
```

```shell
0 4 * * * sudo PATH='/usr/bin:/bin:/usr/local/bin' env ANSIBLE_CONFIG='/srv/git/saltbox/ansible.cfg' '/usr/local/bin/ansible-playbook' '/srv/git/saltbox/backup.yml' >> '/home/seed/logs/saltbox_backup.log' 2>&1
```

Remember to edit the seed username if you changed the Saltbox user in the `accounts.yml`.

Visit [crontab.guru](https://crontab.guru/) for help with the scheduling format.

</TabItem>
</Tabs>
