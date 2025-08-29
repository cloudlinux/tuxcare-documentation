# Installation instructions of a local mirror for ELS Python

We provide the ability to create local mirrors of Python for ELS updates.

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
  rsync://repo.cloudlinux.com/ALT_PYTHON_ELS/
  ```

  </CodeWithCopy>

* Example of creating a local mirror for all supported OS versions:

  <CodeWithCopy>

  ```
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/   alt-common
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PYTHON_ELS/ alt-python-els
  ```

  </CodeWithCopy>

* Example of creating a local mirror for a specific OS version:

  <CodeWithCopy>

  ```
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/rpm/el/8/   alt-common
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PYTHON_ELS/rpm/el/8/ alt-python-els
  ```

  </CodeWithCopy>

* Use one of the suggested options to specify the OS:

| Option            | OS                                                                         |
| :---------------: | :------------------------------------------------------------------------: |
| rpm/el/7/         | CentOS 7, CloudLinux 7, OracleLinux 7, etc.                                |
| rpm/el/8/         | AlmaLinux 8, CentOS 8, CentOS 8 Stream, CloudLinux 8, Oracle Linux 8, etc. |
| rpm/el/9/         | AlmaLinux 9                                                                |
| deb/ubuntu/16.04/ | Ubuntu 16.04                                                               |
| deb/ubuntu/18.04/ | Ubuntu 18.04                                                               |
| deb/ubuntu/20.04/ | Ubuntu 20.04                                                               |
| deb/ubuntu/22.04/ | Ubuntu 22.04                                                               |
| deb/ubuntu/24.04/ | Ubuntu 24.04                                                               |
| deb/debian/10/    | Debian 10                                                                  |
| deb/debian/11/    | Debian 11                                                                  |
| deb/debian/12/    | Debian 12                                                                  |