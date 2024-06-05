### Installation instructions of a local mirror

We provide the ability to create local mirrors of PHP for ELS updates.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com).

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/PHP_ELS/
```

Example of creating a local mirror for all supported OS versions:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/ .
```

Example of creating a local mirror for a specific OS version:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/el6/ .
```

Use one of the suggested options to specify the OS:

| Option      | OS                                                      |
| :---------: | :-----------------------------------------------------: |
| el6	      | CentOS 6, CloudLinux 6, OracleLinux 6, etc.               |
| el7         | CentOS 6, CloudLinux 6, OracleLinux 6, etc.             |
| el8         | AlmaLinux 8, CentOS 8 Stream, CloudLinux 8.             |
| el9         |AlmaLinux 9, CentOS 9 Stream, CloudLinux 9               |
| ubuntu16.04 | Ubuntu 16.04 |
| ubuntu18.04 | Ubuntu 18.04 |
| ubuntu20.04 | Ubuntu 20.04 |
| ubuntu22.04 | Ubuntu 22.04 |