# Debian 11 ELS

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com` and `repo.tuxcare.com`
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

1. Download the install script

   ```
   wget https://repo.tuxcare.com/debian11-els/install-debian11-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   bash install-debian11-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   apt-cache show els-os-release
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:

   ```
   root@localhost:~# apt-cache show els-os-release
   Package: els-os-release
   Version: 1.0.0-2
   Architecture: amd64
   Maintainer: Koba Karaputadze <kkaraputadze@cloudlinux.com>
   Installed-Size: 17
   Conflicts: els-define
   Replaces: els-define
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-os-release/els-os-release_1.0.0-2_amd64.deb
   Size: 5306
   SHA256: be11d8bffaac9f70c8b19d2f9c96e64bb0a698593671d807e6fe75687863e3c8
   SHA1: 47238eb136a07fb1b91fe531b6e4ebbd3207a6ab
   MD5sum: b82dba173e67dfbfc83a6f414c866a59
   Description: ELS os release package for deb systems
   Description-md5: f3fdfd5cb5f71a4ebb6f1f40c8d57483
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

<!-- re-enable when available
* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/debian11els/oval.xml) — OVAL security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/debian11els/) — CSAF security advisories
-->
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Debian+11+ELS) — Track vulnerability fixes and updates
<!-- re-enable when available
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
-->
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Debian+11+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates, local mirror, and other repository operations

</WhatsNext>
