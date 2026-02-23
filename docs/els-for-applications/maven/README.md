# Apache Maven

TuxCare's Endless Lifecycle Support (ELS) for Apache Maven provides security patches for versions of Apache Maven that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Apache Maven service is designed for organizations that are not yet ready to migrate to newer Maven versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Apache Maven 3.8.1
* Apache Maven Shared Utils 3.2.1

## Prerequisites

* Ensure you have a compatible version of **Java Development Kit (JDK)** installed. JDK 7 or later is required.

  To verify if JDK is already installed on your system, open a terminal or command prompt and run:

  <CodeWithCopy>

  ```text
  java -version
  ```

  </CodeWithCopy>

  If JDK is installed, you should see version information. If not, you'll need to install it.

## Repository Access

You need a username and password to access the TuxCare ELS Apache Maven repository. Anonymous access is disabled.
To obtain credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

To browse available artifacts via the web interface, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java). Click the **Sign in** button in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or re-open the browse link due to Nexus routing behavior.

## Linux Installation

1. Download Apache Maven from TuxCare via the terminal using your credentials. For example, Maven 3.8.1:

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/3.8.1-tuxcare.1/apache-maven-3.8.1-tuxcare.1-bin.tar.gz
   ```

   </CodeWithCopy>

   Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version as needed.

2. Extract the archive to a directory of your choice:

   <CodeWithCopy>

   ```text
   sudo mkdir -p /opt/maven
   sudo tar -xvzf apache-maven-3.8.1-tuxcare.1-bin.tar.gz -C /opt/maven
   ```

   </CodeWithCopy>

3. Run the Maven binary directly from the extracted directory to verify:

   <CodeWithCopy>

   ```text
   /opt/maven/apache-maven-3.8.1-tuxcare.1/bin/mvn --version
   ```

   </CodeWithCopy>

   The output should display the Maven version and build details.

## Windows Installation

1. Download the Apache Maven .zip archive from [TuxCare Nexus](https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/) using your credentials.

2. Extract the downloaded archive, for example, `apache-maven-3.8.1-tuxcare.1-bin.zip`, to a directory of your choice, e.g., `C:\Maven`.

3. Open a Command Prompt or PowerShell window and run the following command to verify:

   ```text
   C:\Maven\apache-maven-3.8.1-tuxcare.1\bin\mvn --version
   ```

   The output should display the Maven version and build details.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Apache Maven archive from TuxCare using the instructions above.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Apache Maven ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## Resolved CVEs in ELS for Apache Maven

<ClientOnly>
  <ResolvedCveTable project="maven" />
</ClientOnly>
