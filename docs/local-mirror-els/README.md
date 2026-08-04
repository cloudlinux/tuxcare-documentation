---
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---
<!-- markdownlint-disable MD040 MD033 -->

# Installation instructions of a local mirror with ELS updates

We provide the ability to create local mirrors of Endless Lifecycle Support and Extended Security Updates repositories.

## Prerequisites

Before creating a local mirror, ensure the following requirements are met:

* **Access**: To obtain access to the local mirroring facility, provide your external IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@cloudlinux.com)
* **Connection**: The mirroring uses rsync over TCP port 873 (not port 22)
* **Disk Space**: The minimum required free disk space for the mirror is 100 GB

## Mirroring Instructions

To create a local mirror, use one of the following sets of instructions based on your operating system.

### CentOS 6 ELS

To create a local mirror of the centos6-els repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6ELS/
```

To create a local mirror of the CentOS 6 mirrors, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
```

### CentOS 7 ELS

To create a local mirror of the [centos7-els](https://repo.tuxcare.com/centos7-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/CENTOS7ELS/
```

To create a local mirror of the CentOS 7 repository, use the following:

```
rsync://repo.tuxcare.com/CENTOS7/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7ELS/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7/ .
```

### CentOS 8 ELS

To create a local mirror of the CentOS 8 ELS repository with security updates via `rsync`, use the following:

<CodeTabs :tabs="[
  { title: 'CentOS 8.4', content: `rsync://repo.cloudlinux.com/CENTOS84_ELS/` },
  { title: 'CentOS 8.5', content: `rsync://repo.cloudlinux.com/CENTOS85_ELS/` }
]" />

For example:

<CodeTabs :tabs="[
  { title: 'CentOS 8.4', content: `rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .` },
  { title: 'CentOS 8.5', content: `rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .` }
]" />

### CentOS Stream 8 ELS

To create a local mirror of the [centos8stream-els](https://repo.tuxcare.com/centos8stream-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/CENTOS8STREAMELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS8STREAMELS/ .
```

### Debian 10 ELS

To create a local mirror of the [debian10-els](https://repo.tuxcare.com/debian10-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/DEBIAN10ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/DEBIAN10ELS/ .
```

<!-- re-enable when available
### Debian 11 ELS

To create a local mirror of the [debian11-els](https://repo.tuxcare.com/debian11-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/DEBIAN11ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/DEBIAN11ELS/ .
```
-->

### OracleLinux 6 ELS

To create a local mirror of the oraclelinux6-els repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

### OracleLinux 7 ELS

To create a local mirror of the [oraclelinux7-els](https://repo.tuxcare.com/oraclelinux7-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/ORACLELINUX7ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ORACLELINUX7ELS/ .
```

### Red Hat Enterprise Linux 7 ELS

To create a local mirror of the [rhel7-els](https://repo.tuxcare.com/rhel7-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/RHEL7ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/RHEL7ELS/ .
```

### Red Hat Enterprise Linux 8 ELS

To create a local mirror of the [rhel8-els](https://repo.tuxcare.com/rhel8-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/RHEL8ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/RHEL8ELS/ .
```

### Amazon Linux 2 ELS

To create a local mirror of the [amazonlinux2-els](https://repo.tuxcare.com/amazonlinux2-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/AMAZONLINUX2ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/AMAZONLINUX2ELS/ .
```

### Ubuntu 16.04 ELS

To create a local mirror of the ubuntu16_04-els repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

### Ubuntu 18.04 ELS

To create a local mirror of the [ubuntu18_04-els](https://repo.cloudlinux.com/ubuntu18_04-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/UBUNTU1804ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1804ELS/ .
```

### Ubuntu 20.04 ELS

To create a local mirror of the [ubuntu20_04-els](https://repo.tuxcare.com/ubuntu20_04-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/UBUNTU2004ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/UBUNTU2004ELS/ .
```

### AlmaLinux 9.2 ESU

To create a local mirror of the [tuxcare-base and tuxcare-esu](https://repo.tuxcare.com/tuxcare/9.2/) repositories with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/ALMALINUX92ESU/
```

To create a local mirror of the AlmaLinux 9.2 repository, use the following:

```
rsync://repo.tuxcare.com/ALMALINUX/9.2/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ALMALINUX92ESU/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/ALMALINUX/9.2/ .
```

### TuxCare 9.6 ESU

These instructions apply to AlmaLinux 9.6 ESU and Rocky Linux 9.6 ESU.

To create a local mirror of the [tuxcare-base and tuxcare-esu](https://repo.tuxcare.com/tuxcare/9.6/) repositories with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/TUXCARE96ESU/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/TUXCARE96ESU/ .
```

When configuring machines to use a local mirror for the TuxCare 9.6 ESU repository, set `priority=1` in the `tuxcare-esu` repo so ESU packages override the standard repos. Below is an example `/etc/yum.repos.d/tuxcare-esu.repo` file for TuxCare 9.6 ESU:

```
[tuxcare-esu96]
name=TuxCare Enterprise Support for AlmaLinux 9.6 - ESU (local mirror)
baseurl=https://mirror.corp.lan/tuxcare/9.6/esu/x86_64/
enabled=1
gpgcheck=1
skip_if_unavailable=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-TuxCare
priority=1
```

:::tip Note

Vulnerability scanners will often look for the information stored in /etc/tuxcare-release, however if you're using a local mirror you may not have installed the tuxcare-release package, so you should create the file with the correct OS name and version info like so:

```
source /etc/os-release
echo "TuxCare Enterprise Support for ${NAME} release ${VERSION_ID}" > /etc/tuxcare-release
```

Or simply hardcode it as one of these (if using Ansible to roll out config for example):

* `TuxCare Enterprise Support for AlmaLinux release 9.2`
* `TuxCare Enterprise Support for AlmaLinux release 9.6`
* `TuxCare Enterprise Support for Rocky Linux release 9.6`

:::
