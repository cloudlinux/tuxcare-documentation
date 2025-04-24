<!-- markdownlint-disable MD040 -->

# Installation instructions of a local mirror with ELS updates

We provide the ability to create local mirrors of Endless Lifecycle Support and Extended Security Updates repositories.

To obtain the access to the local mirroring facility, provide your external IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@cloudlinux.com)

To create a local mirror using rsync over tcp/873 (not 22) you should use one of the following sets of instructions.

## CentOS 6 ELS

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

## OracleLinux 6 ELS

To create a local mirror of the oraclelinux6-els repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

## CentOS 8.4 ELS

To create a local mirror of the [centos8.4-els](https://repo.cloudlinux.com/centos8.4-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/CENTOS84_ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .
```

## CentOS 8.5 ELS

To create a local mirror of the [centos8.5-els](https://repo.cloudlinux.com/centos8.5-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/CENTOS85_ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .
```

## Ubuntu 16.04 ELS

To create a local mirror of the ubuntu16_04-els repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

## Ubuntu 18.04 ELS

To create a local mirror of the [ubuntu18_04-els](https://repo.cloudlinux.com/ubuntu18_04-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/UBUNTU1804ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1804ELS/ .
```

## CentOS 7 ELS

To create a local mirror of the [centos7-els](https://repo.tuxcare.com/centos7-els/) repository with security updates via `rsync`, use the following:

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

## CentOS Stream 8 ELS

To create a local mirror of the [centos8stream-els](https://repo.tuxcare.com/centos8stream-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/CENTOS8STREAMELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/CENTOS8STREAMELS/ .
```

## OracleLinux 7 ELS

To create a local mirror of the [oraclelinux7-els](https://repo.tuxcare.com/oraclelinux7-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/ORACLELINUX7ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/ORACLELINUX7ELS/ .
```

## Ubuntu 20.04 ELS

To create a local mirror of the [ubuntu20_04-els](https://repo.tuxcare.com/ubuntu20_04-els/) repository with security updates via `rsync`, use the following:

```
rsync://repo.tuxcare.com/UBUNTU2004ELS/
```

For example:

```
rsync -avSHP --delete rsync://repo.tuxcare.com/UBUNTU2004ELS/ .
```

## AlmaLinux 9.2 ESU

To create a local mirror of the [tuxcare-base and tuxcare-esu](https://repo.tuxcare.com/tuxcare/9.2/) repositories with security updates via `rsync`, use the following:

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
