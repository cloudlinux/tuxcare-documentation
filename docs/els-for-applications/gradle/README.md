# Gradle

TuxCare's Endless Lifecycle Support (ELS) for Gradle provides security patches for versions of Gradle that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Gradle service is designed for organizations that are not yet ready to migrate to newer Gradle versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Gradle 6.9.4
* Gradle 7.6.6

## Prerequisites

* Ensure you have a compatible version of **Java Development Kit (JDK)** installed. JDK 8 or later is required.

  To verify if JDK is already installed on your system, open a terminal or command prompt and run:

  <CodeWithCopy>

  ```text
  java -version
  ```

  </CodeWithCopy>

  If JDK is installed, you should see version information. If not, you'll need to install it.

## Repository Access

You need a username and password to access the TuxCare ELS Gradle repository. Anonymous access is disabled.
To obtain credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

To browse available artifacts via the web interface, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java). Click the **Sign in** button in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or re-open the browse link due to Nexus routing behavior.

## Linux Installation

1. Download Gradle from TuxCare via the terminal using your credentials. For example, Gradle 6.9.4:

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/gradle/gradle/6.9.4-tuxcare.1/gradle-6.9.4-tuxcare.1-bin.zip
   ```

   </CodeWithCopy>

   Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version as needed.

2. Extract the archive to a directory of your choice:

   <CodeWithCopy>

   ```text
   sudo mkdir -p /opt/gradle
   sudo unzip gradle-6.9.4-tuxcare.1-bin.zip -d /opt/gradle
   ```

   </CodeWithCopy>

3. Run the Gradle binary directly from the extracted directory to verify:

   <CodeWithCopy>

   ```text
   /opt/gradle/gradle-6.9.4-tuxcare.1/bin/gradle --version
   ```

   </CodeWithCopy>

   The output should display the Gradle version and build details, for example:

   ```text
   ------------------------------------------------------------
   Gradle 6.9.4
   ------------------------------------------------------------

   Build time:   2026-02-09 00:00:00 UTC
   Revision:     103e60c6d0b5c78bb062e1f1bbf6a91dff4dd9fd

   Kotlin:       1.4.20
   Groovy:       2.5.12
   Ant:          Apache Ant(TM) version 1.10.9 compiled on September 27 2020
   JVM:          17.0.17 (Red Hat, Inc. 17.0.17+10-LTS)
   OS:           Linux 5.14.0-611.5.1.el9_7.x86_64 amd64
   ```

## Windows Installation

1. Download the Gradle .zip archive from [TuxCare Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) using your credentials.

2. Extract the downloaded archive, for example, `gradle-6.9.4-tuxcare.1-bin.zip`, to a directory of your choice, e.g., `C:\Gradle`.

3. Open a Command Prompt or PowerShell window and run the following command to verify:
   
   <CodeWithCopy>

   ```text
   C:\Gradle\gradle-6.9.4-tuxcare.1\bin\gradle --version
   ```

   </CodeWithCopy>

   The output should display the Gradle version and build details similar to the Linux example above.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Gradle archive from TuxCare using the instructions above.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Gradle ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/org.gradle/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.gradle/).

<!--
## Resolved CVEs in ELS for Gradle

<ClientOnly>
  <ResolvedCveTable project="gradle" />
</ClientOnly>
-->
