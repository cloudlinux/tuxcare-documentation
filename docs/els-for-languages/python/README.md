# Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## Supported OS

TuxCare provides Endless Lifecycle Support for four years after the EOL date.

| OS                                    | Version                                                              |
| :-----------------------------------: | :------------------------------------------------------------------: |
| CentOS, CloudLinux, OracleLinux, etc. | 6.x 64-bit, 7.x 64-bit, 8.x 64-bit                                   |
| AlmaLinux                             | 9.x 64-bit                                                           |
| Ubuntu                                | 16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit, 24.04 64-bit |

*Other distros upon request.

## Supported versions

* **EL6, 7, 8, 9**: alt-python 2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13
* **Debian 9 and 10**: 3.5, 3.8, 3.11
* **Debian 11 and 12**: 3.8, 3.11
* **Ubuntu 16 and 18**: 3.5, 3.8, 3.11
* **Ubuntu 20**: 3.7, 3.8, 3.10, 3.11, 3.12
* **Ubuntu 22**: 3.8, 3.11, 3.13
* **Ubuntu 24**: 3.8, 3.11

## Installation instructions of yum repositories

1. Download the installer script:

```text
wget https://repo.cloudlinux.com/python-els/install-python-els-repo.sh
```

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

```text
sh install-python-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual `yum upgrade` command.

```text
yum info python2

Available Packages
Name         : python2
Version      : 2.7.18
Release      : 10.el9.tuxcare.els1
Architecture : x86_64
Size         : 43 k
Source       : python2-2.7.18-10.el9.tuxcare.els1.src.rpm
Repository   : python-els
Summary      : An interpreted, interactive, object-oriented programming language
URL          : https://www.python.org/
License      : Python
Description  : Python 2 is an old version of the language that is incompatible
             : with the 3.x line of releases.
```

4. To install python, it's necessary to enable the CodeReady Builder(CRB) repository, which contains the `gdbm` package.

```text
yum install python2 --enablerepo crb
```

5. Once installed, you can use python2 in the usual way.

```text
$ python2
Python 2.7.18 (default, Jun 30 2022, 00:00:00)
[GCC 11.2.1 20220127 (Red Hat 11.2.1-9)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> print "Hello, World!"
Hello, World!
```

## Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.

* To obtain access to the local mirroring facility, provide your IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com)

* To create a local mirror of the repository with security updates via `rsync`, use the following:

```text
rsync://repo.cloudlinux.com/PYTHON_ELS/
```

* Example of creating a local mirror for all supported OS versions:

```text
rsync -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
```

## OVAL data

### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration. Currently, we provide OVAL data for AlmaLinux 9.

### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

### How to use OVAL

1. Install OpenSCAP:

```text
yum install openscap openscap-utils scap-security-guide -y
```

2. Download an OVAL stream:

```text
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
```

3. Run a scan:

```text
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
```
