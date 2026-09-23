# PostgreSQL

Endless Lifecycle Support (ELS) for PostgreSQL from TuxCare provides security fixes for versions that have reached end-of-life. This allows you to continue running your deployments without vulnerability concerns, even after official support has ended.

## Supported OS and PostgreSQL versions

| OS                                                          | Package Type | OS Version | PostgreSQL version |
| :----------------------------------------------------------: | :----------: | :--------: | :----------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)               | RPM          | 7.x        | 9.6, 11            |
| EL 9 (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.)    | RPM          | 9.x        | 14                 |
| Ubuntu                                                      | DEB          | 22.04      | 13                 |

**Supported architectures:** x86_64 (64-bit) for RPM, amd64 for DEB

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key - contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.tuxcare.com/postgresql-els/install-postgresql-els-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.tuxcare.com/postgresql-els/install-postgresql-els-deb-repo.sh` }
   ]" />

2. Run the installer script with your license key

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-postgresql-els-rpm-repo.sh --license-key XXXXXXXX` },
     { title: 'DEB', content: `bash install-postgresql-els-deb-repo.sh --license-key XXXXXXXX` }
   ]" />

3. Verify the repository is enabled

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum info els-postgresql-release` },
     { title: 'DEB', content: `apt-cache show els-postgresql-release` }
   ]" />

   On EL 9, use `dnf` instead:

   ```text
   dnf info els-postgresql-release
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-applications/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
