# Ubuntu 16.04 ELS

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
   apt-cache show els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:

   ```
   [els@ubuntu16 ~]# apt-cache show els-define
   Package: els-define
   Version: 1-1.0.1
   Architecture: amd64
   Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
   Installed-Size: 10
   Homepage: https://tuxcare.com/els-for-os/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-define/els-define_1-1.0.1_amd64.deb
   Size: 1302
   SHA256: a6b68c43c88a148ecc4806d0b4eb309deb5af418c8e1d0ea980fd453f5aec8dd
   SHA1: 4907b9796c40327dbd45ecf2fd0806a32e2c24bd
   MD5sum: 42f69c642c27052b15e4470533fdab62
   Description: ELS define package for Ubuntu 16.04
   Description-md5: 39e3bb446b4c63607f8f0358484545bf
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
