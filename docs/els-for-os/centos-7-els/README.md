# CentOS 7 ELS

<ELSVendorEol os="centos-7-els" />

## Installation

<ELSPrerequisites>

* A valid TuxCare Endless Lifecycle Support (ELS) license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com`, `repo.tuxcare.com`, and `rollout.tuxcare.com`
* Architecture: x86_64, aarch64, and i386. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

:::tip
On aarch64, ELS covers userspace packages. Kernel live patching is available for x86_64 only.
:::

<ELSSteps>

1. Download the install script

   ```
   wget https://repo.tuxcare.com/centos7-els/install-centos7-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   sh install-centos7-els-repo.sh --license-key XXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   yum info els-os-release
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

   Example:

   ```
   [els@centos7 ~]# yum info els-os-release
   Loaded plugins: fastestmirror
   Installed Packages
   Name        : els-os-release
   Arch        : noarch
   Version     : 1.0.0
   Release     : 2.el7
   Size        : 8.2 k
   Repo        : installed
   Summary     : TuxCare OS ELS repository configuration
   License     : GPLv2+
   Description : This package configures the TuxCare ELS repository for
               : CentOS/RHEL systems.
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/centos7els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/centos7els/) — Common Security Advisory Framework (CSAF) security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=CentOS+7+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=CentOS+7+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
