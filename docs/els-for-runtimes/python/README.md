# Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Python

alt-python is a component provided by TuxCare designed for managing Python versions on servers and enabling users to run multiple Python versions simultaneously.

Here are the key features and characteristics of alt-python:

* **Multiple Python Versions** - alt-python allows the installation and usage of various Python versions on a single server. This enables users to select the Python version that best suits their applications.

* **User Segmentation** - alt-python allows administrators to provide different Python versions for different users or applications. Each user can choose the Python version that suits their project.

* **Enhanced Compatibility** - alt-python is designed to ensure maximum compatibility with various Python applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Python applications.

* **Updates and Support** - TuxCare provides regular updates for alt-python, including bug fixes, performance improvements, and updates for new Python versions. This helps ensure the security and currency of Python usage.

* **Direct Version Access** - alt-python allows switching between versions, users can easily manage which Python version is active in their environment.

alt-python provides a more flexible and convenient environment for working with different Python versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Python versions.

## Supported OS and Python versions

| Operating Systems                                                       | Package Type | OS Version          | Python versions                                       |
| :---------------------------------------------------------------------: | :----------: | :-----------------: | :---------------------------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                           | RPM          | 7.x                 | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                 | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 9.x                 | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)                       | RPM          | 10.x                | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| Ubuntu                                                                  | DEB          | 16.04               | 2.7, 3.6, 3.7, 3.10, 3.11, 3.12, 3.13, 3.14           |
| Ubuntu                                                                  | DEB          | 18.04, 20.04, 22.04 | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| Ubuntu                                                                  | DEB          | 24.04               | 2.7, 3.6, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14      |
| Debian                                                                  | DEB          | 10, 11              | 2.7, 3.6, 3.7, 3.10, 3.11, 3.12, 3.13, 3.14           |
| Debian                                                                  | DEB          | 12, 13              | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14 |
| Alpine Linux                                                            | APK          | 3.23, 3.24          | 3.6, 3.7, 3.8, 3.9                                    |

Every `alt-python` package ships its own bundled `pip`, `setuptools` and `wheel`. These are covered by ELS and patched together with the interpreter.

**Supported architectures:**

* x86_64 — all supported OSes
* aarch64/arm64 — Debian 12 and 13, Ubuntu 16.04, 18.04, 20.04, 22.04 and 24.04, Alpine Linux 3.23 and later

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh` },
     { title: 'APK', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-apk-repo.sh` }
   ]" />

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'APK', content: `sh install-els-alt-python-apk-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Install a Python version

   **For RPM-based systems**, enable the CodeReady Builder (CRB) repository which contains the `gdbm` package:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-python36 --enablerepo crb` },
     { title: 'DEB', content: `apt-get install alt-python36` },
     { title: 'APK', content: `apk add alt-python36` }
   ]" />

   To see available packages:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum list available 'alt-python*'` },
     { title: 'DEB', content: `apt list -a | grep alt-python` },
     { title: 'APK', content: `apk search alt-python` }
   ]" />

4. Verify the installation

   Check that the binary exists and returns the expected version:

   ```text
   /opt/alt/<python-version>/bin/python3 -V
   ```

   Optionally, verify execution:

   ```text
   /opt/alt/<python-version>/bin/python3 -c "print('Hello, World!')"
   ```

   To use this version as default in the current shell:

   ```text
   export PATH=/opt/alt/<python-version>/bin:$PATH
   python3 -V
   which python3
   ```

5. Update packages

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update 'alt-python*'` },
     { title: 'DEB', content: `apt-get update && apt-get --only-upgrade install 'alt-python*'` },
     { title: 'APK', content: `apk update && apk upgrade 'alt-python*'` }
   ]" />

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Python) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Python) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Python) — Full list of product parts covered by ELS
* ![](/images/shield.webp) [Machine-readable security data](/els-for-runtimes/machine-readable-security-data/#python) — Open Vulnerability and Assessment Language (OVAL), Common Security Advisory Framework (CSAF), Errata, and RSS feeds for Python ELS

</WhatsNext>
