# Amazon Linux 2 ELS

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
   wget https://repo.tuxcare.com/amazonlinux2-els/install-amazonlinux2-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   sh install-amazonlinux2-els-repo.sh --license-key XXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   yum info els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/amazonlinux2els/) — CSAF security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Amazon+Linux+2+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Amazon+Linux+2+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
