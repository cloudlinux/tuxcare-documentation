# MariaDB

Endless Lifecycle Support (ELS) for MariaDB from TuxCare provides security fixes for versions that have reached end-of-life. This allows you to continue running your deployments without vulnerability concerns, even after official support has ended.

## Supported OS and MariaDB versions

| OS                                             | Package Type | OS Version | MariaDB version |
| :--------------------------------------------: | :----------: | :--------: | :-------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.) | RPM          | 7.x        | 10.6            |
| EL 8 (CentOS, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x        | 10.6            |
| EL 9 (CentOS, CloudLinux, Oracle Linux, etc.) | RPM          | 9.x        | 10.6            |

**Supported architecture:** x86_64 (64-bit)

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key - contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   ```text
   wget https://repo.tuxcare.com/mariadb-els/install-mariadb-els-repo.sh
   ```

2. Run the installer script with your license key

   ```text
   sh install-mariadb-els-repo.sh --license-key XXXXXXXX
   ```

3. Verify the repository is enabled

   ```text
   yum info els-mariadb-release
   ```

</ELSSteps>

## Removing the repository

To remove the MariaDB ELS repository:

```text
sh install-mariadb-els-repo.sh --delete
```

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=MariaDB) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-applications/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
