---
sidebarDepth: 4
---

<!-- markdownlint-disable MD014 MD033 MD029 MD049 MD034 MD051-->

# ePortal

TuxCare ePortal is the web management console dedicated to KernelCare Enterprise live patch management.

ePortal software can help protect servers located behind the firewall (i.e. with no internet access) and can be installed both on-premises and in the cloud.

![Overview](/images/eportal-overview.svg)

## ePortal Hardware Requirements

**Disk:**

* 100 GB minimum, 200 GB recommended (20GB in case of cache mode)
* SSD with at least 100 IOPS

:::tip Note
SSD based storage is a crucial requirement for ePortal server.
:::

**CPU:**

As far as other requirements concerned, we have tested the following configuration and the following number of connected servers:

* 10k of connected machines is the maximum for the following requirements:
  * VM
  * 1 VCPU
  * 1 GB RAM

* 75k of connected machines is the maximum for the following requirements:
  * Core i5
  * 1 CPU
  * 4 GB RAM

## Installation

::: tip Note
If you are installing for the first time, please confirm with our sales engineering team at [sales@tuxcare.com](sales@tuxcare.com) **BEFORE** trying the installation via the documentation below. Please note that support tickets resulting from not following this recommendation will not be accepted.
:::

ePortal is compatible with 64-bit versions of EL7/8/9 based distros like CentOS 7/8, AlmaLinux 8/9/10, Ubuntu 20.04/22.04/24.04 and Debian 11/12

### RHEL-based distros

For installation and workability of ePortal the Nginx web server is required. We recommend to use stable version from the official Nginx repository:

```text
# cat > /etc/yum.repos.d/nginx.repo <<EOL
[nginx]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOL
```

You can find more information at [https://nginx.org/en/linux_packages.html#stable](https://nginx.org/en/linux_packages.html#stable)

Setup ePortal repo:

```text
# cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL
[kcare-eportal]
name=KernelCare ePortal
baseurl=https://www.repo.cloudlinux.com/kcare-eportal/\$releasever/\$basearch/
enabled=1
gpgkey=https://repo.cloudlinux.com/kernelcare/RPM-GPG-KEY-KernelCare-rsa4096
gpgcheck=1
EOL
```

:::tip Note
If you are using CentOS7, starting from ePortal version 2.4-2, it's necessary to install the `centos-release-scl` package.
You can do so with the following command:

```text
# yum install centos-release-scl
```

For RHEL7 users, you'll need to enable the necessary repositories to ensure access to the required packages. Use the subscription-manager utility with the following commands:

```text
# subscription-manager repos --enable rhel-7-server-optional-rpms
# subscription-manager repos --enable rhel-server-rhscl-7-rpms
```

For Oracle Linux 7 users, similar to CentOS7, you need to install the oracle-softwarecollection-release-el7 package. This can be done using the following command:

```text
# yum install oracle-softwarecollection-release-el7
```

:::

Install ePortal:

```text
# yum install -y kcare-eportal
```

### Ubuntu 20.04

Setup ePortal repo:

```text
# apt update && apt install -y --no-install-recommends curl ca-certificates

# curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

# cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/20.04 focal main
EOL
```

Install ePortal:

```text
# apt update && apt install -y --no-install-recommends kcare-eportal
```

### Ubuntu 22.04

Setup ePortal repo:

```text
# apt update && apt install -y --no-install-recommends curl ca-certificates

# curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

# cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/22.04 jammy main
EOL
```

Install ePortal:

```text
# apt update && apt install -y --no-install-recommends kcare-eportal
```

### Ubuntu 24.04

Setup ePortal repo:

```text
# apt update && apt install -y --no-install-recommends curl ca-certificates

# curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

# cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/24.04 noble main
EOL
```

Install ePortal:

```text
# apt update && apt install -y --no-install-recommends kcare-eportal
```

### Debian 11

```text
# apt update && apt install -y --no-install-recommends curl ca-certificates

# curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

# cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/debian/11 kcare main
EOL
```

Install ePortal:

```text
# apt update && apt install -y --no-install-recommends kcare-eportal
```

### Debian 12

```text
# apt update && apt install -y --no-install-recommends curl ca-certificates

# curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

# cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/debian/12 kcare main
EOL
```

Install ePortal:

```text
# apt update && apt install -y --no-install-recommends kcare-eportal
```

## Allowed hosts

We must declare the list of allowed hosts in the configuration for security reasons. It help to avoid HTTP Host header attacks. According to your installation, you need to add this parameter into [ePortal config file](#config-files):

```text
ALLOWED_HOSTS = ['node1-yourdomain.example.com', 'node2-yourdomain.example.com']
```

Instead of an example, use the DNS name(s) of your ePortal server installation. Default value is `[]`.

## Cache mode

Cache mode allows to greatly reduce disk usage requirements and speed up initial downloading step.

In cache mode ePortal downloads only lightweight meta information about patchsets and proxies patch requests from KernelCare agent to the patch server (Patch Source). Downloaded patch binaries are cached for 2 weeks and accessible for following requests directly from ePortal and doesn't consume public internet bandwidth.

![Cache mode](/images/eportal-cache-mode.svg)

### Enable cache mode

1. add the following setting into the [ePortal config file](#config-files):

```text
CACHE_MODE = True
```

2. restart ePortal:

```text
# systemctl restart eportal
```

For existing installations you have to refetch meta info for existing patchsets:

```text
# kcare/kc.eportal cache-mode --fetch-meta
```

### Disable cache mode

1. remove or comment the line below in the [ePortal config file](#config-files):

```text
CACHE_MODE = True
```

2. download missing patchests:

```text
# kcare/kc.eportal kcare download-missing
```

3. restart ePortal:

```text
# systemctl restart eportal
```

## Proxy configuration

ePortal can fetch packages and patches via a customer's proxy server.

![Proxy](/images/eportal-with-proxy.svg)

On the ePortal machine, you should define the same proxy settings as you use on the command line.

To do so, add `PROXY = 'http://example.com:3128'` into the [ePortal config file](#config-files):

```text
# echo "PROXY = 'http://example.com:3128'" >> /etc/eportal/config
```

ePortal also supports a SOCKS5 proxy via `socks5://` proxy scheme:

```text
# echo "PROXY = 'socks5://example.com:1080'" >> /etc/eportal/config
```

Restart ePortal (see the [Stopping & Starting](#stopping-starting) section, choose a corresponding OS).

## Auth configuration

| Setting | Description |
|---|---|
| `AUTH_RESTRICTED_INDEX`    | Allow access to the index page only for registered users |
| `AUTH_PASSWORD_MIN_LENGTH` | Minimal password length, default 5 |
| `AUTH_SESSION_LIFETIME`    | Session lifetime in seconds, by default session will last till browser closing |
| `AUTH_REFRESH_SESSION`     | If `False` (default), expires session after lifetime seconds after login. If `True`, expires session after lifetime seconds of inactivity. |

You can set configuration in [ePortal config file](#config-files).

## Managing Users

You can manage portal using `kc.eportal user` utility:

```text
usage: kc.eportal user [-h] [-a] [-c] [-d] [-p PASSWORD] [-r {admin,readonly}] [--note NOTE] [user]

list available users by default

positional arguments:
  user                  user name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new user
  -c                    action: change user
  -d                    action: delete user
  -p PASSWORD, --password PASSWORD
  -r {admin,readonly}, --role {admin,readonly}
  --note NOTE           description
```

To add a user:

```text
# kc.eportal user -a -p AdminPassword admin
```

To change user's password:

```text
# kc.eportal user -c -p NewPassword admin
```

Set user as read-only:

```text
# kc.eportal user -c -r readonly admin
```

## Authentication using LDAP

ePortal supports LDAP authentication via bind operation. Every user should have a DN with an ability to perform bind request. ePortal doesn't sync users so you don't need to set special DN/password to access LDAP server.

### Configuration

LDAP configuration settings are available inside the `Settings / LDAP` navigation item.

#### URL

Specifies host, port, and protocol of the LDAP server to connect to.

Format: `<scheme>://<host>[:port][?params]`

* **scheme**:
  * `ldap`: a verified encrypted TLS connection, you can specify `tls=0` to use an insecure connection;
  * `ldaps`: an SSL connection;
* **host**: hostname or ip of your LDAP server;
* **port**: custom port, by default 389 for `ldap` and 636 for `ldaps` scheme;
* **params**:
  * `strict_check=0`: enable/disable strict SSL certificate verification (enabled by default);
  * `tls=0`: enable/disable TLS handshake on connect (enabled by default);
  * `timeout=30`: LDAP server connection timeout (in seconds, 5 by default).

For example:

* `ldap://ldap.forumsys.com?tls=0&timeout=30`: use insecure connection with 30s connection timeout.

#### Connection String (DN template)

Connection string is a DN template used in LDAP bind operation. All `%s` template placeholders will be replaced with the username from the login form. For example: `uid=%s,dc=example,dc=com`

Some LDAP implementations support additional templates for bind requests:

* Active Directory accepts the `%s@example.com` template;
* `cn=%s,dc=example,dc=com` or `email=%s,dc=example,dc=com` can be also valid.

#### Filter

Filter is an optional setting which specifies parameters for an additional LDAP search request to limit users who have access to ePortal. Usually it is a check of a group a user belongs to. If the search returns a non-empty result the user will be considered authenticated.

Format: `<base>??<scope>?<filter>`, is a part of [The LDAP URL Format RFC](https://tools.ietf.org/html/rfc2255)

* **base**: a search base, a root node to perform search from;
* **scope**: a search scope;
  * `base`: search only for base (default);
  * `one`: search for direct ascendants only (one level deep from base);
  * `sub`: search in whole tree;
* **filter**: search filter to apply.

For example: `dc=example,dc=com??one?(&(ou=mathematicians)(uniqueMember=uid=%s,dc=example,dc=com))`

:::tip Note
You can use a `%s` placeholder in the `Filter` setting as well. It will be replaced with the username from the login form.
:::

### Login process

When a user logs in to ePortal, ePortal checks the user credentials in the local database at first. If the credentials are found, the user will be authenticated, and only if the user credentials are not found, ePortal redirects to LDAP.

When you log in to ePortal with your LDAP credentials for the first time, a user with LDAP username, read-only permissions, and `LDAP` description is created in the database by default (`https://<eportal>/admin/user/`).

In the picture, you can see one user created with `kc.eportal` command line interface and two users logged in with LDAP credentials:

![ldap users](/images/eportalLDAPusers.png)

:::tip Note
All fresh LDAP users have read-only permissions. You can set admin rights on `User edit` page by turning off `Readonly` field.
:::

### Basic setup example

The following examples are based on the public test LDAP server [ldap.forumsys.com](https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/)

Here is a list of our users:

```text
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(objectClass=person)' dn
dn: uid=tesla,dc=example,dc=com
dn: uid=gauss,dc=example,dc=com
...
```

Basic setup only checks if the provided username/password can bind to your directory service. Note: all fresh users have read-only permission so you can safely allow them to login into eportal and set correct permissions individually.

For a basic setup you should fill `Url` and  `Connection string` settings:

|Setting|Value|
|-|-|
|URL|ldap://ldap.forumsys.com?tls=0|
|Connection string|uid=%s,dc=example,dc=com|

After that you can login using `gauss:password` or `tesla:password` credentials.

### Filter setup example

Filter allows you to limit a set of users permitted to login into ePortal, for example users belonging to the `mathematicians` group.

Here are our example groups:

```text
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(objectClass=groupOfUniqueNames)' dn
dn: ou=mathematicians,dc=example,dc=com
dn: ou=scientists,dc=example,dc=com
...
```

And `mathematicians` group attributes:

```text
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(ou=mathematicians)'
dn: ou=mathematicians,dc=example,dc=com
uniqueMember: uid=euclid,dc=example,dc=com
uniqueMember: uid=riemann,dc=example,dc=com
uniqueMember: uid=euler,dc=example,dc=com
uniqueMember: uid=gauss,dc=example,dc=com
uniqueMember: uid=test,dc=example,dc=com
ou: mathematicians
cn: Mathematicians
objectClass: groupOfUniqueNames
objectClass: top
```

ePortal LDAP settings to limit allowed users:

|Setting|Value|
|-|-|
|URL|ldap://ldap.forumsys.com?tls=0|
|Filter|dc=example,dc=com??one?(&(ou=mathematicians)(uniqueMember=uid=%s,dc=example,dc=com))|
|Connection string|uid=%s,dc=example,dc=com|

The filter idea is to find the `mathematicians` group which has an attribute `uniqueMember` equal to DN of our user who tries to login. After that you can login using `gauss:password` but not `tesla:password` credentials.

## Accessing ePortal

To access KernelCare.eportal management console, connect to **http://YOUR_IP/admin** and enter your login & password.

![login screen](/images/access_eportal.png)

You can manage your login information using the [kc.eportal tool](#managing-users)

## PatchSet deployment

ePortal has a built-in mechanism to download the latest patches. To start using it, click the _Settings_ link in the ePortal navigational bar and then click _Patch Source_. To get access, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com) and request your ePortal access credentials.

![patch source](/images/eportal-edit-patch-source.png)

You can choose only a limited set of distros to fetch to reduce disk space and network bandwidth requirements. Once you set up patch source access info, you will get to a list of available patchsets.

![dashboard](/images/eportal-dashboard.png)

* **Usage**: amount of servers using particular patchset on any feed. You can click on the number to see a list of servers using the patchset.

* **Patchsets**: name of the patchset. Click on a name will show patchset changelog.

* **Feed name**: cells show patchset deployment and server usage status on particular feed. Numbers are also clickable to filter server list.

* **Manage**: opens dialog to enable/disable the patchset.

### Manage patchset page

![manage patchsets](/images/eportal-manage.png)

In this dialog you can control which patchsets will be enabled/disabled on corresponding feeds.

* **Enable all up to this patchset**: action will enable all patchsets (excluding **disabled**) up to this patchset.

* **Enable**: action will enable only current patchset.

* **Disable**: action will disable only current patchset. Disabled patchsets are immune to auto-update and mass-enabling via **Enable all up to this patchset** action.

To unroll a patchset from the CLI, run:

```text
# kc.eportal --unroll 16012017_1
```

### Automatic updates

You can configure automatic updates by enabling Autoupdate on the desired feeds via Settings -> Feeds.

:::danger Note
The **default feed** cannot be configured via the Settings page to receive automatic updates. See the next section on configuring automatic updates for the **default feed**.
:::

### Automatic updates on default feed

It is possible to configure automatic updates on the **default feed** by creating a cron job. The following commands can be used to receive these updates.

The command below determines if the latest patches are available and installs them to the **default feed**:

```text
# kc.eportal --get-latest
```

### Script to deploy release from a file

If you have no opportunity to connect your ePortal server to the KernelCare patch server to download patchsets directly from it, you can do it manually.

If you have a location with already downloaded patchsets, and would like to identify the latest patchset file to be moved, you can compare the lists of archives you have with the content of the `/usr/share/kcare-eportal/arch/` folder.

After that, upload the selected patchsets to your ePortal server and run the `kc.eportal --deploy` command for each of them.

#### Example

Lets find out the difference between a test and a production ePortal instances:

```text
$ comm -23 \
    <(ssh eportal-test "ls /usr/share/kcare-eportal/arch/K*.tar.bz2" | sort -h) \
    <(ssh eportal-prod "ls /usr/share/kcare-eportal/arch/K*.tar.bz2" | sort -h) | tee patchsets.diff
```

Upload patchsets to the production:

```text
$ cat patchsets.diff | xargs -Phav {} rsync -iv eportal-test:{} /tmp/
$ rsync -Phav /tmp/K*.tar.bz2 eportal-prod:/tmp/
```

Run the deployment tool with patchset file name as a parameter:

```text
$ ssh eportal-prod 'ls /tmp/K*.tar.bz2 | sort -h | xargs -n1 kc.eportal kcare deploy'
2021-12-02 01:25:06,555 - eportal.patches - INFO - K04082020_1 was enabled in main
...
```

:::danger Note
Please note that procedure above should be done for all other types of patchsets (like libcare and qemu) *separately*. Use corresponding file prefixes and commands like `kc.eportal libcare deploy`.
:::

### Clean obsolete releases

The list of provided patches is reduced once in a month (old patches that have newer versions are removed), but resources are not deleted from ePortal machine. The control of resource deletion is in charge of the ePortal administrator. To free disk space on ePortal old release resources could be removed.

To check what releases will be removed:

```text
# DRY_RUN=1 kc.eportal --clean-releases
```

To remove obsolete releases:

```text
# kc.eportal --clean-releases
```

## LibCare PatchSet Deployment

Starting from version 1.18, ePortal supports the LibCare patchset management. It
is accessible from the `Patches / LibCare` navigation item. LibCare patches
use the same Patch Source credentials, and you don't need to perform additional
configuration.

![libcare feed](/images/eportal-libcare-feed.png)

### Disable arbitrary patchset

To disable a patchset, run the following command:

```
kc.eportal kcare unroll K20210129_02
```

If you want to remove a patches instead of disabling them, you can use the
`--delete` option:

```
kc.eportal kcare unroll K20210129_02 --delete
```

### CLI to install the latest patchsets

To update the default feed, run the following command:

```text
# kc.eportal libcare update
```

To update the `test` feed, run the following command:

```text
# kc.eportal libcare update --feed test
```

To update all auto-feeds, run the following command:

```text
# kc.eportal libcare auto-update
```

### CLI to deploy patchset from archive

```text
~$ kc.eportal libcare deploy --help
usage: kc.eportal libcare deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

For example:

```text
# kc.eportal libcare deploy --feed test /tmp/U20210129_02.tar.bz2
```

This command will deploy and enable the `U20210129_02` patchset in to the `test` feed.

## QEMU PatchSet Deployment

Starting from version 1.25, ePortal supports the QEMU patchset management. It is accessible from the `Patches / QEMUcare` navigation item. QEMU patches use the same Patch Source credentials, and you don't need to perform additional configuration.

![qemu feed](/images/eportal-qemu-feed.png)

### Command to install the latest patchsets

To update the default feed, run the following command:

```text
# kc.eportal qemu update
```

To update the `test` feed, run the following command:

```text
# kc.eportal qemu update --feed test
```

To update all auto-feeds, run the following command:

```text
# kc.eportal qemu auto-update
```

### Command to deploy patchset from archive

```text
~$ kc.eportal qemu deploy --help
usage: kc.eportal qemu deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

For example:

```text
# kc.eportal qemu deploy --feed test /tmp/U20210818_01-qemu.tar.bz2
```

This command will deploy and enable the `U20210818_01-qemu` patchset in to the `test` feed.

## Managing Keys

To register new servers you need to create a KernelCare key that will be used for server registration. To go to the list of keys, click the _Keys_ navigation item.

![keys](/images/key-menu_zoom70.png)

* To edit a key, click ![edit keys](/images/eportal_keys_edit.png). The _Edit_ tab opens.
* To remove a key, click ![remove keys](/images/eportal_keys_remove.png). Please note, that removing the key would remove all servers under that key.
* Click a key to go to Servers tab with the list of [servers registered](#managing-servers) under that key. You can also remove servers on that tab.

To create a new registration click _Create_ tab.

![create key](/images/key-creation_zoom70.png)

Fill in the following fields:

* **Key** - you can provide a key value or leave the field empty, so an automatically generated key will be used
* **Description** - you can provide a description for the key
* **Server Limit** - the amount of servers that can be registered under that key
* **Feed** - select a specific feed or leave empty.
* **Products** - limit allowed products can be used with the key.

Available products:

* **KernelCare**/**LibCare**/**QemuCare**/**DBCare**: allow only patches of selected type.
* **Enterprise Support for AlmaLinux - ESU**: allow access to the Extended Security Updates and FIPS repositories.

Products can be mixed to limit access to a particular set of patch types. For example:

* **KernelCare** + **LibCare**: allow access only to kernel and lib patches.

For Enterprise Support for AlmaLinux deployment instructions please see the [dedicated section](#deploying-enterprise-support-for-almalinux)

Click _Save_ to add the key. The new registration key will be created and added to the list. The key itself will be used as a part of the registration command on an individual server.

Click _Save and Add Another_ to save this key and add one more key.

Click _Save and Continue Editing_ to add the key and open the key edit tab.

Click _Cancel_ to return to the key list tab without adding a new key.

### CLI to manage keys

```text
~$ kc.eportal key --help
usage: kc.eportal key [-h] [-a] [-c] [--note NOTE] [--server-limit SERVER_LIMIT] [--feed FEED]
                      [--product {tuxcare-repo,db,kernel,libcare,qemu}] [--default-products]
                      [key]

list available keys by default

positional arguments:
  key                   key name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new key
  -c                    action: change key
  --note NOTE           key description
  --server-limit SERVER_LIMIT
                        maximum number of servers allowed
  --feed FEED           feed to associate key to
  --product {tuxcare-repo,db,kernel,libcare,qemu}
                        products available for the key, can be specified multiple times
  --default-products    set default product list (KernelCare, LibCare, DBCare, QEMUCare) for the key
```

List keys:

```text
# kc.eportal key
```

Autogenerate key:

```text
# kc.eportal key -a
```

Create key with specified value:

```text
# kc.eportal key -a test
```

Set feed to key:

```text
# kc.eportal key -c test --feed test
```

## Managing Servers

You can see servers belonging to the key by clicking on the key itself in the [Managing Keys](#managing-keys) interface.

![server list](/images/server_list_1_zoom70.png)

The screen shows servers registered under the key, their IP, hostname, effective kernel as well as the time of registration and last check in.

To view the list of all servers IDs that are connected to the particular key, do the following:

* In the UI go to the page with the list of keys. Then click the particular
  key. The list of servers connected to this key will be displayed.

To view the list of all servers IDs that are not connected to any key, use the
<span class="notranslate">_Servers_</span> button on the navigation bar.

![eportal servers](/images/eportal-servers.png)

Also you can use CLI to see pairs of key/number of servers run:

```text
$ kc.eportal --list-servers
Count | Key
----- + --------------------------------
    0 | 2shcolu7Y1x6885Q
    2 | 6J89aS44j6OmTr05
```

### Clean inactive servers

Servers inactive for more than 30 days can be removed using the followed command:

```text
# kc.eportal server clean --inactive
2 servers were deleted
```

Clean-up of inactive servers can be performed automatically every day or rarer. To enable daily auto clean-up, you can add an option `CLEAN_INACTIVE_SERVERS_PERIOD = 3600 * 24` (value in seconds)
in the [ePortal config file](#config-files)

### Show extended check-in statistics in admin UI

A new table is added to the starting page. This table displays the following:

* Total number of servers.
* Number of servers that checked in for the past 48 hours.

The number of servers for each key is listed on the _Keys_ page.

## Managing server tags

You can use 'Server tags' page to deal with tags.

![server tags view](/images/tags_view.png)

Tagging is a convenient way to group servers by any criteria. For example OS, deployment environment, location, etc.
You need to create a tag and then it can be assigned to a server from the [Managing Servers](#managing-servers) interface.

![tag assignment](/images/tag_assignment.png)

The tag may have an optional value. For example, this allows you to introduce a new geo location without creating a new tag for it.

### Using agent CLI to manage tags

To add an extra Tag field for the server, run:

```text
# kcarectl --tag command
```

where `command` is a parameter defined by a user. This parameter will be displayed in UI for the server. User could add multiple tags for each server. Each tag should be separated with `;` symbol.

Example:

```text
# kcarectl --tag "env:prod;ubuntu"
```

This server has two tags : `env:prod` and `ubuntu`.

`env:prod` is a parameter that has tag name `env` and the value `prod`.

![tags](/images/addingextratagfield_zoom88.png)

To remove all tags from a particular server, run:

```text
# kcarectl --tag ""
```

Where `""` is a parameter to delete the previously defined tag.


## Feed Management

Feeds are intended to manage patchsets on the server, and they provide a possibility to bind a set of patches to a specific key. Possible use cases:
for preliminary testing of patches, for applying updates to groups of servers with the similar hardware, etc.

To get into Feeds Management interface go to Settings -> Feeds:

![feeds](/images/feed-button_zoom70.png)

On this page a user can manage the existing feeds: create, delete, edit.

![feed menu](/images/feed-menu_zoom70.png)

Available options:

* Name - a name of a feed.
* Auto update - enable and disable automatic downloading of patches to this feed.
* Deploy after X hours - a delay in hours between the moment the patchset is
  available for deployment and the moment it is installed to the feed.
* Channel - a patch channel to use.

  * **Stable**: (default) stable patchsets marked with `eportal` label on [the patch server](https://patches.kernelcare.com/).
  * **Testing**: all patchsets available on [the patch server](https://patches.kernelcare.com/).
  * **Unstable**: patches from early-access feed (not recommended).

Every 10 minutes ePortal checks for new patches on the main patch server. If a new patch is available, it is uploaded to the ePortal server. Note: it is uploaded but is not deployed.

:::tip Note
For information about configuring a client to periodically check and automatically download new patch sets, see [client configuration](#kernelcare-enterprise-client-config-file)
:::

The patch availability time is considered starting from the moment a new patch appears on the ePortal, and that time is taken into account in `Deploy after X hours` option. So, if a user sets `Deploy after X hours = 10`, the patch will be deployed to the feed 10 hours after it has been downloaded to the ePortal server.

To make the feed auto-update immediately, so new patches are loaded to the feed immediately after they are available on ePortal, set `Deploy after X hours = 0`.

A special case is a clean installation when ePortal is installed on a new server (there aren't any downloaded archives with patches and feeds with deployed patchsets, including default feed). In this case, if a user creates a new feed and sets Deployed after X hours option right away, then all patches (from the oldest to the latest available) will be deployed to the feed after the specified X hours. This is because the archives are downloaded from scratch and will be considered as "just appeared on ePortal" - that is, all patches will have the same appearance time on ePortal from which the option Deploy after X hours
will repel.

![feed management](/images/feedmanagement3_zoom70.png)

On the main ePortal page, a user can set the corresponding key <> feed pair. This is done in the key creation interface or when editing a key.

![edit key](/images/feedmanagement4_zoom70.png)

By default, a new key is bound to the default feed, alternatively, a user can choose a desired feed from the drop-down menu.

![feed list](/images/feedmanagement5_01_zoom70.png)

:::tip Note
When removing a feed all keys attached to this feed will be moved to the default feed.
:::

![delete feed](/images/feedmanagement6_zoom70.png)

### CLI to manage feeds

```text
~$ kc.eportal feed --help
usage: kc.eportal feed [-h] [-a] [-c] [--auto] [--no-auto] [--deploy-after hours]
                       [--channel {default,test}] [feed]

list available feeds by default

positional arguments:
  feed                  feed name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new feed
  -c                    action: change feed
  --auto                update feed automatically
  --no-auto             don't update feed automatically
  --deploy-after hours  deploy after specified hours
  --channel {default,test}
                        patchset channel to use for this feed
```

List feeds:

```text
$ kc.eportal feed
```

Add auto updated feed:

```text
# kc.eportal feed -a test --auto
```

Change feed into delayed feed:

```text
# kc.eportal feed -c test --deploy-after 12
```

## API keys Management

An API key may be used as an alternative to password authentication when accessing public API endpoints.
API tokens provide a more secure way to authenticate APIs because they can be easily revoked
without affecting each other, and you don't need to share your credentials.

To get into API keys Management interface go to Settings -> API keys:

![API keys](/images/api_key_list.png)

On this page a user can manage the existing API keys: create, revoke (delete).

![API key edit](/images/api_key_create.png)

Available options:

* Key name - a name of the API key.
* Expiration date - optional key expiration date.

After generating the key, you will see a bar with a token, as in the picture below.

![API key generated](/images/api_key_generated.png)

This token is not stored on the server, so you need to keep it in a safe place.
Use this token in an API client as described in [ePortal API documentation](/eportal-api).

The API key is personal, meaning it is tied to a specific user and inherits their permissions.
A user with read-only permissions can only manage their own keys,
while an administrator has access to any user's API keys.

## How to setup ePortal to use HTTPS

Some assumptions for a server where e-portal is deployed:

### Terminate TLS on ePortal public nginx web server

1. A firewall allows connections to 443 port.
2. Private and public keys are downloaded on the server.

* Edit SSL configuration template according to your certificates:

```text
# mv /etc/nginx/eportal.ssl.conf.example /etc/nginx/eportal.ssl.conf
# vi /etc/nginx/eportal.ssl.conf
```

* Include this configuration into the main one:

```text
# sed -e '3iinclude eportal.ssl.conf;' -i /etc/nginx/conf.d/eportal.conf
```

* Restart nginx:

```text
# service nginx restart
```

### Terminate TLS on external balancer

You can use any reverse proxy server of choice to terminate TLS traffic and
forward requests to ePortal instance. The only requirement is to provide correct
`Host` and `X-Forwarded-Proto` headers.

For example balancer nginx config:

```text
server {
   listen       443 ssl;
   server_name  your-eportal-domain;

   # ssl stuff ...
   # ssl_certificate  ...
   # ssl_certificate_key ...

   location / {
      proxy_pass http://eportal-instance-address;
      proxy_set_header Host $http_host;
      proxy_set_header X-Forwarded-Proto https;
   }
}
```

### Update agent configuration

In order to communicate with e-portal, updated to https, you need to modify KernelCare configuration file on all the servers if they have IPs hard coded servers settings.

To do that, update `PATCH_SERVER` and `REGISTRATION_URL` options:

```text
# vi /etc/sysconfig/kcare/kcare.conf
```

So, after editing your `/etc/sysconfig/kcare/kcare.conf` should contain updated `PATCH_SERVER` and `REGISTRATION_URL` environment variables like in the example below:

```text
PATCH_SERVER=https://eportal_domain_name/
REGISTRATION_URL=https://eportal_domain_name/admin/api/kcare
```

As an alternative you can use ePortal's special endpoint to update patch server address:

```text
# curl -s https://eportal_domain_name/set-patch-server | bash
```

## High availability

Starting from version 1.28, ePortal supports application level replication. It
allows to propagate changes in both ways – from a leader to followers and from
followers to the leader.

Configuration settings related to replication and can be changed in [ePortal config file](#config-files):

* `NODE_URL`: URL to the self instance, needed for auto-discovery purposes
* `LEADER_URL`: URL to the instance from where to fetch changes
* `REPLICATION_SHARED_KEY`: authorization key to access the replication data
* `REPLICATION_CHECK_CERT`: use strict TLS cert check for replication requests. It can be useful to deploy self signed certificates on replicas and get encrypted replication traffic without getting proper TLS certificate.
* `REPLICATION_CLEAN_AGE`: data age in seconds to leave during oplog cleanup. 7 days by default.
* `REPLICATION_CLEAN_AGGRESSIVE_AGE`: data age in seconds to leave during oplog cleanup for not-important operations. 1 hour by default.

A leader node discovers followers automatically and after that fetches the changes.

You can use any convenient way to balance agent requests to the ePortal cluster. For example, you can add multiple IP addresses to the DNS name or use an HTTP balancer.

### Basic setup

1. Prepare two fresh ePortal instances and assign DNS name to IPs. For example:

   * eportal1.corp -> 192.168.1.11
   * eportal2.corp -> 192.168.1.12
   * eportal.corp -> 192.168.1.11, 192.168.1.12

2. Let's choose `eportal1` as a leader and `eportal2` as a follower.
   `eportal.corp` is a cluster hostname to use on servers with KernelCare
   agent.

   :::danger Warning!
   Please do not use a cluster hostname to perform operations with the ePortal admin UI.
   :::

3. On the `eportal1` define `NODE_URL` and `REPLICATION_SHARED_KEY` in the
   configuration file:

```text
NODE_URL = 'http://eportal1.corp'
REPLICATION_SHARED_KEY = 'secret'
```

4. On the `eportal2` define `NODE_URL`, `LEADER_URL` and `REPLICATION_SHARED_KEY`:

```text
NODE_URL = 'http://eportal2.corp'
LEADER_URL = 'http://eportal1.corp'
REPLICATION_SHARED_KEY = 'secret'
```

5. That's it. After ePortal restart on both hosts, changes on the `eportal1`
   will be replicated to the `eportal2` instance and vice versa.

:::tip Note
You can change the KernelCare agent settings to point to a cluster hostname via:

```text
# curl -s http://eportal.corp/set-patch-server | bash
```

:::

### Adding node to an existing ePortal instance

If you already have a working ePortal instance, you can setup a second node, define `NODE_URL` and `LEADER_URL` on both instances and trigger full sync on the follower instance:

```text
[root@eportal2.corp]$ kc.eportal replication --full-sync
```

### Monitoring

You can use `kc.eportal replication --short-status` CLI command to check replication status. It exits with code `1` if there are some issues with replication and outputs JSON:

```text
{
  "ok": true,       // overall health status
  "lag": 1,         // overall replication lag in seconds
  "last_sync": 1,   // overall sync delta in seconds (how many seconds ago was successful communication with an upstream)
  "upstream": {     // per upstream metrics
    "node2": {
      "ok": true
      "lag": 1,
      "last_sync": 1,
    },
    "node3": {
      "ok": true
      "lag": 1,
      "last_sync": 1,
    }
  }
}
```

### Other replication setups

For one leader and two follower setup:

```text
     +-> leader <-+
     |            |
     |            |
follower1       follower2
```

there is a chance to lose a `leader` node and `follower1`/`follower2` will not communicate with each other. To mitigate this issue, you can deploy a ring replication:

```text
  +-> node1 --+
  |           |
  |           v
node2 <---- node3
```

where each instance follows another node.

### Caveats

1. Replication uses HTTP transport. If you deploy ePortal without SSL termination, the replication data will be transferred as-is unencrypted.

2. For a round-robin balancer setups (DNS or HTTP balancer round-robin) KernelCare agent can run onto replication lag in case of sequential registration and following update. You can introduce 10s timeout or repeat in your configuration management logic to mitigate the issue.

3. Replication log is kept for 7 days. If a node loses connectivity for more than 7 days it skips some changes.

## Deploying KernelCare Enterprise

You can find instructions to install KernelCare agent on http://your-eportal-domain/admin/docs/.

To install agent through ePortal you can use special endpoint `http://your-eportal-domain/install-kernelcare`:

```text
# export KCARE_MAILTO=admin@mycompany.com
# curl -s http://eportal.mycompany.com/install-kernelcare | bash
# kcarectl --register my-key
```

Exporting `KCARE_MAILTO` is an optional step, it helps to configure corresponding entry in `/etc/cron.d/kcare-cron` to receive all notifications related to failed KernelCare updates.

### KernelCare Enterprise client config file

KernelCare Enterprise client configuration file is located in `/etc/sysconfig/kcare/kcare.conf`

Example:

```text
AUTO_UPDATE=True
PATCH_SERVER=http://10.1.10.115/
REGISTRATION_URL=http://10.1.10.115/admin/api/kcare
```

If `AUTO_UPDATE` set to `True`, KernelCare client will check in every 4 hours, and try to download and apply latest patches

`PATCH_SERVER` - server from which patches will be downloaded

`REGISTRATION_URL` - URL used to register/unregister server

### Deployment Automation

It is possible to use automation tools like Ansible/Puppet/Chef/Salt to install and operate KernelCare on a big number of systems.

The deployment process includes:

* Running `http://your-eportal-domain/install-kernelcare` script. You can pre-download it (verify checksum) or directly execute `curl -s http://your-eportal-domain/install-kernelcare | bash`.
* Registering KernelCare agents using an activation key

#### Ansible

To start the automated deployment, you need to specify the following information:

* ePortal server name (or IP) in the `eportal_srv` Ansible variable. Other config file options can be found at [Config Options](/live-patching-services/#config-options) and
  [KernelCare client config file](#kernelcare-enterprise-client-config-file) (ePortal).

* an activation key in the `activation_key` Ansible variable. Activation keys can be generated in ePortal as described in [Managing Keys](#managing-keys) (ePortal).

Ansible playbook for deployment phase may look like:

```text
- hosts: kernelcare
  vars:
    eportal_srv: http://192.168.250.19
    activation_key: my-key
  tasks:
    - name: Download the installation shell script
      get_url:
        url: "{{ eportal_srv }}/install-kernelcare"
        dest: /root/kc-install.sh
        mode: '0700'

    - name: Run the installation shell script
      command: /root/kc-install.sh

    - name: register KernelCare agents
      command: /usr/bin/kcarectl --register {{ activation_key }}
```

Ansible playbook file example for KernelCare agent removal:

```text
- hosts: kernelcare
  tasks:
    - name: unregister KernelCare agents
      command: /usr/bin/kcarectl --unregister
      ignore_errors: yes
      args:
        removes: /usr/bin/kcarectl

    - name: remove kernelcare package
      package:
        name: kernelcare
        state: absent
```

### Changing ePortal IP/domain

You can change ePortal address at any moment by calling two special endpoints on hosts with KernelCare agent:

```text
# curl -s http://your-eportal-domain/set-kernelcare-repo | bash
# curl -s http://your-eportal-domain/set-patch-server | bash
```

* `set-kernelcare-repo` configures new package repo to download agent updates through ePortal.
* `set-patch-server` configures new address of patch server.

## Deploying Enterprise Support for AlmaLinux

You can find instructions on how to set up [Enterprise Support for AlmaLinux](https://docs.tuxcare.com/enterprise-support-for-almalinux/) on http://your-eportal-domain/admin/docs/

tuxctl is the setup tool for TuxCare's Extended Security Updates product for AlmaLinux. To set up `tuxctl` through ePortal you can use a special endpoint **http://your-eportal-domain/install-tuxcare**:

```text
# curl -s http://eportal.mycompany.com/install-tuxcare | bash
# tuxctl --license-key my-key
```

Where `my-key` should have the `Enterprise Support for AlmaLinux - ESU` product enabled.

## Migrate ePortal

Here is a procedure to migrate feed/server/key configuration and patches data from one ePortal to another. ePortal version on a new host should be >=1.18 and equal or greater than on an old host.

If you migrate from Debian-based to Debian-based system you can simply:

* Stop ePortal on both hosts.
* Copy `/var/lib/eportal` to a new host. Note: directory owner must stay as `eportal:eportal`.
* Copy config `/etc/eportal/config` if it exists.
* Run migration `/usr/share/kcare-eportal/migratedb.py --upgrade` on a new host.
* Start ePortal on a new host.

Migration from RHEL-based distro is more elaborate. Later we refer to a `$BASE_DIR` variable in scripts. You can export it for RHEL-based distros:

```text
# export BASE_DIR=/usr/share/kcare-eportal
```

or for Debian-based distros:

```text
# export BASE_DIR=/var/lib/eportal
```

or for docker-based installation use corresponding data directory. For example if you run a container as `docker run -v /var/lib/eportal/data:/var/lib/eportal/data kernelcare/eportal`
use /var/lib/eportal/data as `$BASE_DIR`:

```text
# export BASE_DIR=/var/lib/eportal/data
```

* Stop ePortal on both hosts:

```text
  [old-host ~]# systemctl stop eportal
```

```text
  [new-host ~]# systemctl stop eportal
```

* Remove db files on a new host:

```text
[new-host ~]# rm $BASE_DIR/*.sqlite*
```

* Copy database files `$BASE_DIR/*.sqlite*` from an old host to a new host.

* (Optional) copy runtime LDAP and Feed Source settings `$BASE_DIR/config/config.json`.

* (Optional) copy ePortal web app settings `/usr/share/kcare-eportal/config/local.py` or for new ePortal `/etc/eportal/config` to `/etc/eportal/config` on a new host if it exists.

* Copy `$BASE_DIR/instance-id` so our billing can know that the new ePortal was migrated and to avoid double billing.

* Copy patch data `$BASE_DIR/{arch,resources,user-resources}` to a new host.

* Set file owner. For RHEL-based distros:

```text
[new-host ~]# chown -R nginx:nginx $BASE_DIR
```

For Debian-based distros:

```text
[new-host ~]# chown -R eportal:eportal $BASE_DIR
```

* Run migration `/usr/share/kcare-eportal/migratedb.py --upgrade` on a new host.

* Start ePortal on the new host:

```text
[new-host ~]# systemctl start eportal
```

## Backup and restore

### Create backup

kc.eportal utility have an option to create a data backup

`kc.eportal backup <path_to_archive>` - creates an archive with a backup.

```text
# kc.eportal backup /var/lib/eportal/backups/eportal_$(date '+%Y-%m-%d').tar.gz
```

### Restore data from a backup

:::danger Warning!
IMPORTANT: ePortal should be stopped before restore process.
:::

For example:

```text
# systemctl stop eportal
# kc.eportal restore /var/lib/eportal/backups/eportal_backup.tar.gz
# kc.eportal kcare download-missing
# kc.eportal libcare download-missing
# kc.eportal qemu download-missing
# systemctl start eportal
```

`download-missing` commands ensure patchset state on disk corresponds with a state
in db.

## Config files

* ePortal config: `/etc/eportal/config`. Config for old versions (<1.35): `/usr/share/kcare-eportal/local.py`.
* Web Server (nginx) config: `/etc/nginx/conf.d/eportal.conf`.
* Data directory: `/var/lib/eportal`.
* Legacy data directory (RHEL based distros for old versions <2.6): `/usr/share/kcare-eportal`.

## Stopping & starting

To stop/start/reload/restart configuration of nginx server:

```text
# systemctl stop|start|reload|restart nginx
```

To stop/start/restart ePortal (Python):

```text
# systemctl stop|start|restart eportal
```

## Log files

ePortal log: `journalctl -u eportal`

Nginx ePortal access log: `/var/log/nginx/access.log`

Nginx error log: `/var/log/nginx/error.log`

### Log rotation

By default there is no predefined parameters for ePortal's logs rotation. If you
want to enable it for the files listed above:

* Install `logrotate` package
* Create/edit `/etc/logrotate.d/eportal` configuration file

Example logrotate config:

```text
/var/log/nginx/kcare-eportal.log {
    daily
    rotate 5 # keep 5 last archives
    missingok # it's ok if there is no such file
    notifempty # do nothing if file is empty
    compress
}
```

## Nagios & Zabbix support

KernelCare.ePortal since version 1.2 supports server monitoring similar to
[Nagios](/kc-agent-monitoring/#nagios-plugin)
& [Zabbix](/kc-agent-monitoring/#zabbix-template) monitoring.

You can curl the API directly to receive the information:

```text
https://yourserver/admin/api/kcare/nagios/KCAREKEY
```

or you can use [https://patches.kernelcare.com/downloads/nagios/check_kcare](https://patches.kernelcare.com/downloads/nagios/check_kcare) script by modifying KEY_KCARE_NAGIOS_ENDPOINT in it to point to your server (change [https://cln.cloudlinux.com/clweb](https://cln.cloudlinux.com/clweb) (link to old UI) or [https://cln.cloudlinux.com/console/auth/login](https://cln.cloudlinux.com/console/auth/login) (link to new UI) with [https://yourserver/admin](https://yourserver/admin) ).

:::tip Note
Access using `PARTNER_LOGIN/TOKEN` is not supported by KernelCare.ePortal
:::

## Usage reports

In common case, usage reports are sending automatically but when it's not possible, ePortal will try to send report as an email. That requires configured Sendmail (SSMTP) on the host. You can find a short instruction below.

If mail sending attempt fails, ePortal will save the reports in `/usr/share/kcare-eportal/reports` which should be sent manually.

### How to configure Sendmail (SSMTP)

First of all you need to install `ssmtp`:

```text
# yum install -y ssmtp
```

Edit `/etc/ssmtp/ssmtp.conf` file in accordance with your SMTP server
configuration. Here is a simple config file describing a common way to connect
to Gmail accounts:

```text
root=username@gmail.com
mailhub=smtp.gmail.com:587
hostname=localhost
UseSTARTTLS=YES
AuthUser=username@gmail.com
AuthPass=xxxxxxxxxxxxxxxxxxx
FromLineOverride=YES
TLS_CA_File=/etc/ssl/certs/ca-certificates.crt
```

Actual location of a TLS_CA_Files depends on Linux distribution:

```text
"/etc/ssl/certs/ca-certificates.crt",                // Debian/Ubuntu/Gentoo etc.
"/etc/pki/tls/certs/ca-bundle.crt",                  // Fedora/RHEL 6
"/etc/ssl/ca-bundle.pem",                            // OpenSUSE
"/etc/pki/tls/cacert.pem",                           // OpenELEC
"/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem", // CentOS/RHEL 7
```

Also you could get if from:

```text
# curl-config --ca
```

Now you can test a connection:

```text
$ echo -n 'Subject: test\n\nTesting ssmtp' | sendmail -v some-recipient@gmail.com
```

## Custom environment variables

You can define your own environment variables for ePortal process.

There is the `/usr/share/kcare-eportal/environment` folder, which is basically daemon tools compatible envdir.

For example, to disable the default https verification you can set the `PYTHONHTTPSVERIFY` environment variable to `0` as follows:

```text
# echo 0 > /usr/share/kcare-eportal/environment/PYTHONHTTPSVERIFY`
```

## Authentication using Single Sign On

ePortal supports Single Sign On authentication by "OAuth 2.0" standard, "Authorization Code" flow.

### SSO Configuration

To enable SSO you need to configure OAuth2 authentication service provider and ePortal.

#### Okta Application setup example

You set up your OpenID Connect application inside the Okta Admin Console:

1. In the Admin Console, go to **Applications** > **Applications**.

2. Click **Create App Integration**.

3. On the Create a new app integration page, select **OIDC - OpenID Connect** for the **Sign-in method** and then select **Web Application** as the **Application type**.

4. Fill in the **Application Settings**.

| **Setting**           | **Value**
|-----------------------|-------------------------------------------
| Sign-in redirect URI  | http://eportal_ip/admin/sso/login/callback
| Sign-out redirect URI | http://eportal_ip/admin/login

5. Obtain *Client ID*, *Client secret*, the full URL to the `/authorize`, `/token`, `/userinfo` endpoints.

#### ePortal setup

On the ePortal machine, configure SSO settings.

Edit [ePortal config file](#config-files):

```text
OIDC_AUTH_URL="https://dev-61441893.okta.com/oauth2/v1/authorize"
OIDC_TOKEN_URL="https://dev-61441893.okta.com/oauth2/v1/token"
OIDC_USERINFO_URL="https://dev-61441893.okta.com/oauth2/v1/userinfo"
OIDC_LOGOUT_URL="https://dev-61441893.okta.com/oauth2/v1/logout"

OIDC_CLIENT_ID="0Aa134lzhUKj8jDMo5d7"
OIDC_CLIENT_SECRET="AoBNuWRLRu2dxIR3Q0btO53N1entmGxBjQqwmjVL"
```

Restart ePortal (see the [Stopping & Starting](#stopping-starting) section, choose a corresponding OS).

If all settings configured correctly the new **Sign In with SSO** button has to appear on login page `http://eportal_ip/admin/login`

![sso eportal](/images/sso_eportal.png)

## Custom patches storage

By default patches with databases are stored in `/usr/share/kcare-eportal` for RHEL-based systems and `/var/lib/eportal` for deb-based systems. You can configure it to use split storage, for example to keep patches on external block device.

Edit [ePortal config file](#config-files):

```text
PATCHES_DIR = '/path/to/patches/storage'
```

Run:

```text
# kc.eportal sync-nginx-conf
```

It initializes storage and makes corresponding modifications to nginx config to serve patches from a new place.

And restart `nginx` and `eportal` services to apply changes:

```text
# systemctl restart eportal nginx
```

## Troubleshooting

If you have any questions regarding setting up and operating ePortal, please reach out to the support team.
To simplify the analysis of a problem, it is often necessary to provide additional information about the system environment.
It is recommended to use the ePortal CLI to collect this information and submit it to support.

Run:

```text
# kc.eportal doctor
```
In order for the auto-submission to work, you need to configure patch source (see [PatchSet deployment](#patchset-deployment)).

If you experience problems configuring the patch source or have problems accessing the Internet, you can generate a report and submit it manually.

```text
# kc.eportal doctor --no-send
```

The above command will create an archive with the collected data and output the path to it.
You can inspect the contents of the archive if necessary and then send it to the support team.