# CentOS 8 ELS

## Installation

<ELSPrerequisites>

* A valid TuxCare Endless Lifecycle Support (ELS) license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com` and `repo.cloudlinux.com`
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

1. Download the install script

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `wget https://repo.els.tuxcare.com/centos8.4-els/install-centos8.4-els-repo.sh` },
     { title: 'CentOS 8.5 ELS', content: `wget https://repo.els.tuxcare.com/centos8.5-els/install-centos8.5-els-repo.sh` }
   ]" />

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `sh install-centos8.4-els-repo.sh --license-key XXXXXXXXXXX` },
     { title: 'CentOS 8.5 ELS', content: `sh install-centos8.5-els-repo.sh --license-key XXXXXXXXXXX` }
   ]" />

3. Verify that the installation was successful by running the following command

   ```
   yum info els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

   Example:

   ```
   [els@centos8_5 ~]# yum info els-define

   Available Packages
   Name         : els-define
   Version      : 1
   Release      : 1.0.3.el8
   Architecture : x86_64
   Size         : 7.0 k
   Source       : els-define-1-1.0.3.el8.src.rpm
   Repository   : centos8.5-els
   Summary      : CentOS Server els-release file
   License      : GPLv2
   Description  : CentOS Server els-release file
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title :versions="['Centos-8.4', 'Centos-8.5']">

* [8.4] ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* [8.5] ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* [8.4] ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/) — Common Security Advisory Framework (CSAF) security advisories
* [8.5] ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/) — Common Security Advisory Framework (CSAF) security advisories
* [8.4] ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=CentOS+8.4+ELS) — Track vulnerability fixes and updates
* [8.5] ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=CentOS+8.5+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* [8.4] ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=CentOS+8.4+ELS) — Full list of packages covered by ELS
* [8.5] ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=CentOS+8.5+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
