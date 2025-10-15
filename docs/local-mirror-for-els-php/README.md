# Installation instructions of a local mirror for ELS PHP

We provide the ability to create local mirrors of PHP for ELS updates.

**To obtain access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com).**

* To create a local mirror of the repository with security updates via `rsync`, use the following:
  
  <CodeWithCopy>

  ```
  rsync://repo.cloudlinux.com/ALT_COMMON/
  ```

  </CodeWithCopy>

  and

  <CodeWithCopy>

  ```
  rsync://repo.cloudlinux.com/ALT_PHP_ELS/
  ```

  </CodeWithCopy>

* Example of creating a local mirror for all supported OS versions:

  <CodeWithCopy>

  ```
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/   alt-common
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PHP_ELS/ alt-php-els
  ```

  </CodeWithCopy>

* Example of creating a local mirror for a specific OS version:

  <CodeWithCopy>

  ```
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/rpm/el/8/   alt-common
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PHP_ELS/rpm/el/8/ alt-php-els
  ```

  </CodeWithCopy>

* Use one of the suggested options to specify the OS:

| Option            | OS                                                                         |
| :---------------: | :------------------------------------------------------------------------: |
| rpm/el/7/         | CentOS 7, CloudLinux 7, OracleLinux 7, Amazon Linux 2, etc.                |
| rpm/el/8/         | AlmaLinux 8, CentOS 8, CentOS 8 Stream, CloudLinux 8, Oracle Linux 8, etc. |
| rpm/el/9/         | AlmaLinux 9, CloudLinux 9, Oracle Linux 9, etc.                            |
| rpm/el/10/        | AlmaLinux 10, CloudLinux 10, Oracle Linux 10, etc.                         |
| deb/ubuntu/16.04/ | Ubuntu 16.04                                                               |
| deb/ubuntu/18.04/ | Ubuntu 18.04                                                               |
| deb/ubuntu/20.04/ | Ubuntu 20.04                                                               |
| deb/ubuntu/22.04/ | Ubuntu 22.04                                                               |
| deb/ubuntu/24.04/ | Ubuntu 24.04                                                               |
| deb/debian/10/    | Debian 10                                                                  |
| deb/debian/11/    | Debian 11                                                                  |
| deb/debian/12/    | Debian 12                                                                  |
| deb/debian/13/    | Debian 13                                                                  |
