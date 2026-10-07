# Apache Maven

TuxCare's Endless Lifecycle Support (ELS) for Apache Maven provides security patches for versions of Apache Maven that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Apache Maven service is designed for organizations that are not yet ready to migrate to newer Maven versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Apache Maven 3.0.5, 3.2.5, 3.8.1
* Apache Maven Shared Utils 3.2.1

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 7 or later installed (verify with `java -version`)
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

## Linux Installation

1. **Download Apache Maven**

   Download from TuxCare via the terminal using your credentials. For example, Maven 3.8.1:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/3.8.1-tuxcare.1/apache-maven-3.8.1-tuxcare.1-bin.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above). Adjust the version as needed.

2. **Extract the archive**

   ```text
   sudo mkdir -p /opt/maven
   sudo tar -xvzf apache-maven-3.8.1-tuxcare.1-bin.tar.gz -C /opt/maven
   ```

3. **Verify the installation**

   Run the Maven binary from the extracted directory.

   ```text
   /opt/maven/apache-maven-3.8.1-tuxcare.1/bin/mvn --version
   ```

   The output should display the Maven version and build details.

## Windows Installation

1. **Download Apache Maven**

   Download the .zip archive from TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) using your credentials

2. **Extract the archive**

   Extract, for example, `apache-maven-3.8.1-tuxcare.1-bin.zip` to a directory of your choice, e.g., `C:\Maven`

3. **Verify the installation**

   Open a Command Prompt or PowerShell window and run the following command.

   ```text
   C:\Maven\apache-maven-3.8.1-tuxcare.1\bin\mvn --version
   ```

   The output should display the Maven version and build details.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Apache+Maven) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Apache+Maven) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Apache+Maven) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
