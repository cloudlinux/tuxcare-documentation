# Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## Supported OS and Python versions

**Supported architecture:** 64-bit.

| Operating Systems                                            | Package Type | OS Version                        |
| :----------------------------------------------------------: | :----------: | :-------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)     | RPM          | 9.x                               |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)            | RPM          | 10.x                              |
| Ubuntu                                                       | DEB          | 16.04, 18.04, 20.04, 22.04, 24.04 |
| Debian                                                       | DEB          | 10, 11, 12, 13                    |

**For supported Python versions, see [cve.tuxcare.com](https://cve.tuxcare.com/els-alt-python/projects).**

* Other distros and architectures upon request.

## Installation Instructions for Linux

### Get user credentials

1. Obtain the required license to get access to the service.
2. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.

### Install ALT-Python

The following steps are provided for both **RPM-based** (CentOS, CentOS Stream, CloudLinux, Oracle Linux, AlmaLinux, etc) and **DEB-based** (Debian, Ubuntu) systems. Please select the appropriate tab for your distribution.

1. Download the installer script:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh` }
   ]" />

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available, it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum upgrade` },
      { title: 'DEB', content: `apt upgrade` }
    ]" />

4. To display detailed information about the installed package, run the following command: 

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum info alt-python36` },
     { title: 'DEB', content: `apt-cache show alt-python36` }
   ]" />

   An example output:

   <CodeTabs :tabs="[
     { title: 'RPM', content: 
     `Available Packages
     Name         : alt-python36
     Version      : 3.6.15
     Release      : 4.el9
     Architecture : x86_64
     Size         : 26 k
     Source       : alt-python36-3.6.15-4.el9.src.rpm
     Repository   : alt-python
     Summary      : Version 3 of the Python programming language aka Python 3000
     URL          : https://www.python.org/
     License      : Python
     Description  : Python 3 is a new version of the language that is incompatible
                  : with the 2.x line of releases. The language is mostly the same,
                  : but many details, especially how built-in objects like
                  : dictionaries and strings work, have changed considerably, and a
                  : lot of deprecated features have finally been removed.` },
     { title: 'DEB', content:
     `Package: alt-python36
     Version: 3.6.15-14
     Architecture: amd64
     Maintainer: Eduard Chiganov <echiganov@cloudlinux.com>
     Installed-Size: 62
     Pre-Depends: alt-python36-libs (= 3.6.15-14)
     Depends: libc6 (>= 2.3.4), alt-python36-setuptools, alt-python36-pip
     Provides: alt-python36-minimal (= 3.6.15-14), alt-python36-venv (= 3.6.15-14)
     Multi-Arch: allowed
     Homepage: https://www.python.org/
     Priority: optional
     Section: python
     Filename: pool/main/a/alt-python36/alt-python36_3.6.15-14_amd64.deb
     Size: 13248
     SHA256: 30a2062caa3753bdc2362338c0c372527769eef4660ee9de4e52ccb6e326c08e
     SHA1: ae10b2e01a1724d56a23851c9b29251b18e010eb
     MD5sum: 96d2b0796092a22f291c8c4ef4740046
     Description: Python 3 is a new version of the language that is incompatible with
     the 2.x line of releases. The language is mostly the same, but many details,
     especially how built-in objects like dictionaries and strings work, have
     changed considerably, and a lot of deprecated features have finally been
     removed.
     Description-md5: d7a06fcd9c0e15615b94de9eb4b84f8f` }
   ]" />

5. Install Python package. **For RPM-systems**, it's necessary to enable the CodeReady Builder(CRB) repository, which contains the `gdbm` package.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-python36 --enablerepo crb` },
     { title: 'DEB', content: `apt-get install alt-python36` }
   ]" />

6. `alt-python` versions are intended to be installed alongside the system's default python and allow multiple versions to coexist. To use a specific `alt-python` version, please run it directly from its installation directory, for example:

   <CodeTabs :tabs="[
     { title: 'RPM', content: rpmex },
     { title: 'DEB', content: debex }
   ]" />


## OVAL data

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration.

### TuxCare Python ELS OVAL Streams

Currently, we provide OVAL data for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el7/oval.xml)
* EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el8/oval.xml)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el9/oval.xml)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el10/oval.xml)
* Ubuntu 16.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu16.04/oval.xml)
* Ubuntu 18.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu18.04/oval.xml)
* Ubuntu 20.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu20.04/oval.xml)
* Ubuntu 22.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu22.04/oval.xml)
* Ubuntu 24.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu24.04/oval.xml)
* Debian 10: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian10/oval.xml)
* Debian 11: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian11/oval.xml)
* Debian 12: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian12/oval.xml)
* Debian 13: [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian13/oval.xml)

### How to use OVAL

OVAL can be used with the OpenSCAP tool.

1. Install OpenSCAP

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum install openscap openscap-utils scap-security-guide -y` },
      { title: 'DEB', content: `apt-get install libopenscap8 -y` }
    ]" />

2. Download an OVAL stream. For example, EL 8:

   <CodeWithCopy>
   
    ```text
    wget https://security.tuxcare.com/oval/els_alt_python/el8/oval.xml
    ```

   </CodeWithCopy>

3. Run a scan:

   <CodeWithCopy>

   ```text
   oscap oval eval --results result.xml --report report.xml oval.xml
   ```

   </CodeWithCopy>

## Common Security Advisory Framework

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). It's designed to enable consistent and automated sharing of security advisory information. 

TuxCare publishes the following CSAF files at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/):
* CSAF Vulnerability Exploitability eXchange (VEX) files – indexed by CVE VEX documents are available in CSAF 2.0 format, including past CVEs.
* CSAF Security Advisory files – advisories are published in CSAF 2.0 format and indexed by Security Advisory.

`provider-matadata.json` contains information for tools and users about where and how to retrieve CSAF advisories published by TuxCare. By OASIS requirements, it is available at two URLs (both serving the same file):
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

### TuxCare CSAF data

Currently, we provide CSAF data for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/csaf/v2/els_alt_python/el7/](https://security.tuxcare.com/csaf/v2/els_alt_python/el7/)
* EL 8 (AlmaLinux, CentOS,CentOS Stream, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/csaf/v2/els_alt_python/el8/](https://security.tuxcare.com/csaf/v2/els_alt_python/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/csaf/v2/els_alt_python/el9/](https://security.tuxcare.com/csaf/v2/els_alt_python/el9/)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linix, etc.): [security.tuxcare.com/csaf/v2/els_alt_python/el10/](https://security.tuxcare.com/csaf/v2/els_alt_python/el10/)
* Ubuntu 16.04: [security.tuxcare.com/csaf/v2/els_alt_python/ubuntu16.04/](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/csaf/v2/els_alt_python/ubuntu18.04/](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/csaf/v2/els_alt_python/ubuntu20.04/](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/csaf/v2/els_alt_python/ubuntu22.04/](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/csaf/v2/els_alt_python/ubuntu24.04/](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/csaf/v2/els_alt_python/debian10/](https://security.tuxcare.com/csaf/v2/els_alt_python/debian10/)
* Debian 11: [security.tuxcare.com/csaf/v2/els_alt_python/debian11/](https://security.tuxcare.com/csaf/v2/els_alt_python/debian11/)
* Debian 12: [security.tuxcare.com/csaf/v2/els_alt_python/debian12/](https://security.tuxcare.com/csaf/v2/els_alt_python/debian12/)
* Debian 13: [security.tuxcare.com/csaf/v2/els_alt_python/debian13/](https://security.tuxcare.com/csaf/v2/els_alt_python/debian13/)

### How to Use CSAF

The CSAF files are published in JSON format which is easy to parse and integrate with other tools - OASIS provides a [list of reference tools](https://www.csaf.io/tools.html) that support CSAF.

## Errata

Currently, we provide errata for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/errata/els_alt_python/el7/](https://security.tuxcare.com/errata/els_alt_python/el7/)
* EL 8 (AlmaLinux, CentOS, CentOS Stream,  CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/errata/els_alt_python/el8/](https://security.tuxcare.com/errata/els_alt_python/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/errata/els_alt_python/el9/](https://security.tuxcare.com/errata/els_alt_python/el9/)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/errata/els_alt_python/el10/](https://security.tuxcare.com/errata/els_alt_python/el10/)
* Ubuntu 16.04: [security.tuxcare.com/errata/els_alt_python/ubuntu16.04/](https://security.tuxcare.com/errata/els_alt_python/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/errata/els_alt_python/ubuntu18.04/](https://security.tuxcare.com/errata/els_alt_python/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/errata/els_alt_python/ubuntu20.04/](https://security.tuxcare.com/errata/els_alt_python/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/errata/els_alt_python/ubuntu22.04/](https://security.tuxcare.com/errata/els_alt_python/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/errata/els_alt_python/ubuntu24.04/](https://security.tuxcare.com/errata/els_alt_python/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/errata/els_alt_python/debian10/](https://security.tuxcare.com/errata/els_alt_python/debian10/)
* Debian 11: [security.tuxcare.com/errata/els_alt_python/debian11/](https://security.tuxcare.com/errata/els_alt_python/debian11/)
* Debian 12: [security.tuxcare.com/errata/els_alt_python/debian12/](https://security.tuxcare.com/errata/els_alt_python/debian12/)
* Debian 13: [security.tuxcare.com/errata/els_alt_python/debian13/](https://security.tuxcare.com/errata/els_alt_python/debian13/)

## RSS Feed

* EL 7 (CentOS, CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-python/releases/el7](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/el7)
* EL 8 (AlmaLinux, CentOS, CentOS Stream,  CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-python/releases/el8](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/el8)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [cve.tuxcare.com/rss_feed/els-alt-python/releases/el9](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/el9)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-python/releases/el10/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/el10/)
* Ubuntu 16.04: [cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu16.04/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu16.04/)
* Ubuntu 18.04: [cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu18.04/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu18.04/)
* Ubuntu 20.04: [cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu20.04/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu20.04/)
* Ubuntu 22.04: [cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu22.04/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu22.04/)
* Ubuntu 24.04 [cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu24.04/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/ubuntu24.04/)
* Debian 10: [cve.tuxcare.com/rss_feed/els-alt-python/releases/debian10/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/debian10/)
* Debian 11: [cve.tuxcare.com/rss_feed/els-alt-python/releases/debian11/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/debian11)
* Debian 12: [cve.tuxcare.com/rss_feed/els-alt-python/releases/debian12/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/debian12/)
* Debian 13: [cve.tuxcare.com/rss_feed/els-alt-python/releases/debian13/](https://cve.tuxcare.com/rss_feed/els-alt-python/releases/debian13/)

<!--examples -->

<script setup>

const rpmex =
`$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Apr 10 2024, 00:00:00) 
[GCC 11.5.0 20240719 (Red Hat 11.5.0-5)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, World!")
Hello, World!`

const debex =
`$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Sep 18 2025, 13:57:38) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>`

</script>
