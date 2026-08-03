# Ubuntu 18.04 ELS

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com` and `repo.cloudlinux.com`
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

1. Download the install script

   ```
   wget https://repo.els.tuxcare.com/ubuntu18_04-els/install-ubuntu18.04-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   bash install-ubuntu18.04-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   apt-cache show els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:

   ```
   [els@ubuntu18 ~]# apt-cache show els-define
   Package: els-define
   Version: 1-1.0.2
   Architecture: amd64
   Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
   Installed-Size: 10
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-define/els-define_1-1.0.2_amd64.deb
   Size: 1424
   SHA256: 1594db1c72e64adf1fcbd6bfd4a86c72c6e4127d476d238d8c6821d34590d945
   SHA1: 03780c77ab2f1982126b78ab5454f7c0ff287162
   MD5sum: bd3f51b29deb5cc7ede4da8aa39ee2c2
   Description: ELS define package for Ubuntu 18.04
   Description-md5: 39e3bb446b4c63607f8f0358484545bf
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml) — OVAL security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/ubuntu18.04els/) — CSAF security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Ubuntu+18.04+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Ubuntu+18.04+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
