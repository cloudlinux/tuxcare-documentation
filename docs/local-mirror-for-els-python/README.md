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
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/ . && \
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PYTHON_ELS/ .
  ```

  </CodeWithCopy>

* Example of creating a local mirror for a specific OS version:

  <CodeWithCopy>

  ```
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_COMMON/el8/ . && \
  rsync -avSHP --delete rsync://repo.cloudlinux.com/ALT_PYTHON_ELS/el8/ .
  ```

  </CodeWithCopy>

Use one of the suggested options to specify the OS:

| Option      | OS                                                                         |
| :---------: | :------------------------------------------------------------------------: |
| el6	      | CentOS 6, CloudLinux 6, OracleLinux 6, etc.                                |
| el7         | CentOS 7, CloudLinux 7, OracleLinux 7, etc.                                |
| el8         | AlmaLinux 8, CentOS 8, CentOS 8 Stream, CloudLinux 8, Oracle Linux 8, etc. |
| el9         | AlmaLinux 9                                                                |
| ubuntu16.04 | Ubuntu 16.04                                                               |
| ubuntu18.04 | Ubuntu 18.04                                                               |
| ubuntu20.04 | Ubuntu 20.04                                                               |
| ubuntu22.04 | Ubuntu 22.04                                                               |
| ubuntu24.04 | Ubuntu 24.04                                                               |
| debian10    | Debian 10                                                                  |
| debian11    | Debian 11                                                                  |
| debian12    | Debian 12                                                                  |