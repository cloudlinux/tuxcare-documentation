# Oracle Linux 7 ELS

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
   wget https://repo.tuxcare.com/oraclelinux7-els/install-oraclelinux7-els-repo.sh
   ```

2. Run with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   sh install-oraclelinux7-els-repo.sh --license-key XXXXXXXX
   ```

3. Verify that the installation was successful by running the following command

   ```
   yum info els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

   Example:

   ```
   [els@oraclelinux7 ~]# yum info els-define
   Loaded plugins: fastestmirror
   Loading mirror speeds from cached hostfile
   Installed Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.4.el7
   Size        : 52
   Repo        : installed
   From repo   : oraclelinux7-els
   Summary     : OEL7 Server els-release file
   License     : GPLv2
   Description : OEL7 Server els-release file
   ```

</ELSSteps>

**UEKR6 repository**

The installation script **does not automatically add** the TuxCare UEKR6 repository. If you plan to use the `kernel-uek` package on your Oracle Linux 7 system, you need to enable the TuxCare UEKR6 repository manually.
<ELSSteps>

1. Use an editor of your choice to edit the `/etc/yum.repos.d/oraclelinux7-els.repo` file

   ```
   vi /etc/yum.repos.d/oraclelinux7-els.repo
   ```

2. Add the following lines there to enable the TuxCare UEKR 6 repository

   ```
   [oraclelinux7-els-UEKR6]
   name = OracleLinux 7 Extended Lifecycle Support by TuxCare UEKR6
   baseurl = https://repo.tuxcare.com/oraclelinux7-els/\$elstoken/UEKR6/\$basearch/
   enabled = 1
   ```
</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml) — OVAL security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/) — CSAF security advisories
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Oracle+Linux+7+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Oracle+Linux+7+ELS) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates and other repository operations

</WhatsNext>
