# OpenJDK

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for OpenJDK versions that have reached end-of-life. This allows you to continue running your OpenJDK-based applications without vulnerability concerns, even after official support has ended.

## Supported OS and OpenJDK versions

| OS                                            | Package Type | OS Version | OpenJDK version |
| :-------------------------------------------: | :----------: | :--------: | :-------------: |
| EL 6 (CentOS, CloudLinux, Oracle Linux)       | RPM          | 6.x        | 7, 8            |
| EL 7 (CentOS, CloudLinux, Oracle Linux, RHEL) | RPM          | 7.x        | 8, 11           |
| EL 8 (CentOS, CentOS Stream)                  | RPM          | 8.x        | 8, 11           |
| EL 9 (AlmaLinux, TuxCare ESU)                 | RPM          | 9.x        | 8, 11, 17       |

**Supported architecture:** x86_64 (64-bit)

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   ```text
   wget https://repo.tuxcare.com/openjdk-els/install-openjdk-els-repo.sh
   ```

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   ```text
   sh install-openjdk-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify the repository is enabled

   ```text
   yum repolist | grep openjdk-els
   ```

4. Install OpenJDK

   <TableTabs label="OpenJDK version: " >

   <template #7>

   ```text
   yum install java-1.7.0-openjdk
   ```

   </template>

   <template #8>

   ```text
   yum install java-1.8.0-openjdk
   ```

   </template>

   <template #11>

   ```text
   yum install java-11-openjdk
   ```

   </template>

   <template #17>

   ```text
   yum install java-17-openjdk
   ```

   </template>

   </TableTabs>

5. Verify the installation

   ```text
   java -version
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=openjdk&product=CentOS+6+ELS&product=CloudLinux+6+ELS&product=Oracle+Linux+6+ELS&product=CentOS+7+ELS&product=CloudLinux+7+ELS&product=Oracle+Linux+7+ELS&product=RHEL+7+ELS&product=CentOS+8.4+ELS&product=CentOS+8.5+ELS&product=CentOS+Stream+8+ELS&product=AlmaLinux+9+ELS) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=openjdk&product=CentOS+6+ELS&product=CloudLinux+6+ELS&product=Oracle+Linux+6+ELS&product=CentOS+7+ELS&product=CloudLinux+7+ELS&product=Oracle+Linux+7+ELS&product=RHEL+7+ELS&product=CentOS+8.4+ELS&product=CentOS+8.5+ELS&product=CentOS+Stream+8+ELS&product=AlmaLinux+9+ELS) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?q=openjdk&product=CentOS+6+ELS&product=CloudLinux+6+ELS&product=Oracle+Linux+6+ELS&product=CentOS+7+ELS&product=CloudLinux+7+ELS&product=Oracle+Linux+7+ELS&product=RHEL+7+ELS&product=CentOS+8.4+ELS&product=CentOS+8.5+ELS&product=CentOS+Stream+8+ELS&product=AlmaLinux+9+ELS) — Full list of product parts covered by ELS

</WhatsNext>