# Ubuntu 16.04 ELS

<ELSVendorEol os="ubuntu-16-04-els" />

## Installation

<ELSPrerequisites>

* A valid TuxCare Endless Lifecycle Support (ELS) license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com` and `repo.cloudlinux.com`
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

1. Download the install script

   ```
   wget https://repo.els.tuxcare.com/ubuntu16_04-els/install-ubuntu16.04-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   bash install-ubuntu16.04-els-repo.sh --license-key XXX-XXXXXXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   apt-cache show els-os-release
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:

   ```
   root@ubuntu1604:~# apt-cache show els-os-release
   Package: els-os-release
   Status: install ok installed
   Priority: optional
   Section: utils
   Installed-Size: 22
   Architecture: amd64
   Version: 1.0.0-3
   Replaces: els-define
   Conflicts: els-define
   Description: ELS os release package for deb systems
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/ubuntu16.04els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/) — Common Security Advisory Framework (CSAF) security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Ubuntu+16.04+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Ubuntu+16.04+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
