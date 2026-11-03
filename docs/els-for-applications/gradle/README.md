# Gradle

TuxCare's Endless Lifecycle Support (ELS) for Gradle provides security patches for versions of Gradle that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. The ELS for Gradle service serves organizations that are not yet ready to migrate to newer Gradle versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Gradle 6.9.4, 7.6.6

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 8 or later installed (verify with `java -version`)
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

## Linux Installation

1. **Download Gradle**

   Download from TuxCare via the terminal using your credentials. For example, Gradle 6.9.4:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/gradle/gradle/6.9.4-tuxcare.1/gradle-6.9.4-tuxcare.1-bin.zip
   ```

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above). Adjust the version as needed.

2. **Extract the archive**

   ```text
   sudo mkdir -p /opt/gradle
   sudo unzip gradle-6.9.4-tuxcare.1-bin.zip -d /opt/gradle
   ```

3. **Verify the installation**

   Run the Gradle binary from the extracted directory.

   ```text
   /opt/gradle/gradle-6.9.4-tuxcare.1/bin/gradle --version
   ```

   The output should display the Gradle version and build details.

## Windows Installation

1. **Download Gradle**

   Download the .zip archive from TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) using your credentials

2. **Extract the archive**

   Extract, for example, `gradle-6.9.4-tuxcare.1-bin.zip` to a directory of your choice, e.g., `C:\Gradle`

3. **Verify the installation**

   Open a Command Prompt or PowerShell window and run the following command.

   ```text
   C:\Gradle\gradle-6.9.4-tuxcare.1\bin\gradle --version
   ```

   The output should display the Gradle version and build details.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Gradle) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Gradle) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Gradle) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.gradle/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
