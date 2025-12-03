<!-- markdownlint-disable MD040 -->

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

<CodeWithCopy>

```
rsync://repo.cloudlinux.com/CENTOS6ELS/
```

</CodeWithCopy>

To create a local mirror of the CentOS 6 mirrors, use the following:

<CodeWithCopy>

```
rsync://repo.cloudlinux.com/CENTOS6/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
```

</CodeWithCopy>

### CentOS 7 ELS

To create a local mirror of the [centos7-els](https://repo.tuxcare.com/centos7-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/CENTOS7ELS/
```

</CodeWithCopy>

To create a local mirror of the CentOS 7 repository, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/CENTOS7/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7ELS/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7/ .
```

</CodeWithCopy>

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

<CodeWithCopy>

```
rsync://repo.tuxcare.com/CENTOS8STREAMELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS8STREAMELS/ .
```

</CodeWithCopy>

### Debian 10 ELS

To create a local mirror of the [debian10-els](https://repo.tuxcare.com/debian10-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/DEBIAN10ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/DEBIAN10ELS/ .
```

</CodeWithCopy>

### OracleLinux 6 ELS

To create a local mirror of the oraclelinux6-els repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

</CodeWithCopy>

### OracleLinux 7 ELS

To create a local mirror of the [oraclelinux7-els](https://repo.tuxcare.com/oraclelinux7-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/ORACLELINUX7ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ORACLELINUX7ELS/ .
```

</CodeWithCopy>

### Red Hat Enterprise Linux 7 ELS

To create a local mirror of the [rhel7-els](https://repo.tuxcare.com/rhel7-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/RHEL7ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/RHEL7ELS/ .
```

</CodeWithCopy>

### Ubuntu 16.04 ELS

To create a local mirror of the ubuntu16_04-els repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

</CodeWithCopy>

### Ubuntu 18.04 ELS

To create a local mirror of the [ubuntu18_04-els](https://repo.cloudlinux.com/ubuntu18_04-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.cloudlinux.com/UBUNTU1804ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1804ELS/ .
```

</CodeWithCopy>

### Ubuntu 20.04 ELS

To create a local mirror of the [ubuntu20_04-els](https://repo.tuxcare.com/ubuntu20_04-els/) repository with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/UBUNTU2004ELS/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/UBUNTU2004ELS/ .
```

</CodeWithCopy>

### AlmaLinux 9.2 ESU

To create a local mirror of the [tuxcare-base and tuxcare-esu](https://repo.tuxcare.com/tuxcare/9.2/) repositories with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/ALMALINUX92ESU/
```

</CodeWithCopy>

To create a local mirror of the AlmaLinux 9.2 repository, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/ALMALINUX/9.2/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ALMALINUX92ESU/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/ALMALINUX/9.2/ .
```

</CodeWithCopy>

### TuxCare 9.6 ESU

To create a local mirror of the [tuxcare-base and tuxcare-esu](https://repo.tuxcare.com/tuxcare/9.6/) repositories with security updates via `rsync`, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/TUXCARE96ESU/
```

</CodeWithCopy>

To create a local mirror of the TuxCare 9.6 repository, use the following:

<CodeWithCopy>

```
rsync://repo.tuxcare.com/TUXCARE/9.6/
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```
rsync -avSHP --delete rsync://repo.tuxcare.com/TUXCARE96ESU/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/TUXCARE/9.6/ .
```

</CodeWithCopy>

:::tip Note
When configuring machines to use a local mirror for the TuxCare 9.6 ESU repository, set `priority=1` in the `tuxcare-esu` repo so ESU packages override the standard repos.

Example `/etc/yum.repos.d/tuxcare-esu.repo` file for TuxCare 9.6 ESU:

<CodeWithCopy>

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

</CodeWithCopy>

:::