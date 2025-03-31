## Installation instructions of a local mirror with ELS updates

We provide the ability to create local mirrors of Extended Lifecycle Support updates.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@cloudlinux.com). To create a local mirror of the repository with security updates via `rsync`, you need to use one of the following.

### CentOS 6 ELS

To create a local mirror with security updates of repo with centos6-els security updates, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6ELS/
```

To create a local mirror of CentOS mirrors, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
```

### OracleLinux 6 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

### CentOS 8.4 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/CENTOS84_ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .
```

### CentOS 8.5 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/CENTOS85_ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .
```

### Ubuntu 16.04 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

### Ubuntu 18.04 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:
```
rsync://repo.cloudlinux.com/UBUNTU1804ELS/
```

For example:
```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1804ELS/ .
```

### CentOS 7 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:
```
rsync://repo.tuxcare.com/CENTOS7ELS/
```

To create a local mirror of CentOS mirrors, use the following:

```
rsync://repo.tuxcare.com/CENTOS7/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7ELS/ .
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS7/ .
```

### CentOS Stream 8 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:
```
rsync://repo.tuxcare.com/CENTOS8STREAMELS/
```

For example:
```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS8STREAMELS/ .
```

### OracleLinux 7 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/ORACLELINUX7ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ORACLELINUX7ELS/ .
```

### Ubuntu 20.04 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following:
```
rsync://repo.tuxcare.com/UBUNTU2004ELS/
```

For example:
```
rsync -avSHP --delete rsync://repo.tuxcare.com/UBUNTU2004ELS/ .
```
