# Alpine Linux 3.18 ELS

## Installation

<ELSPrerequisites>

* A valid TuxCare Endless Lifecycle Support (ELS) license key
* Root access to the server
* TCP port 443 open to `cln.cloudlinux.com` and `repo.tuxcare.com`
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

1. Download the install script

   ```
   wget https://repo.tuxcare.com/alpinelinux3.18-els/install-els-alpine-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   sh install-els-alpine-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   apk info els-alpine-release
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apk upgrade` command.

   Example:

   ```
   alpine:~# apk info els-alpine-release
   els-alpine-release-1.0.0-r0 description:
   ELS Alpine repository configuration

   els-alpine-release-1.0.0-r0 webpage:
   https://tuxcare.com/

   els-alpine-release-1.0.0-r0 installed size:
   20 KiB
   ```

 </ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/alpinelinux3.18els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/alpinelinux3.18els/) — Common Security Advisory Framework (CSAF) security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Alpine+Linux+3.18+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Alpine+Linux+3.18+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations



</WhatsNext>
