# Apache Maven

TuxCare's Endless Lifecycle Support (ELS) for Apache Maven provides security patches for versions of Apache Maven that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Apache Maven service is designed for organizations that are not yet ready to migrate to newer Maven versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Apache Maven 3.8.1

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

To browse available artifacts via the web interface, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:maven). Click the **Sign in** button in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or re-open the browse link due to Nexus routing behavior.

## Linux Installation

### Step 1: Download Apache Maven

Open the terminal and download the Apache Maven distribution from TuxCare using your credentials. For example, Maven 3.8.1:

<CodeWithCopy>

```text
curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/3.8.1-tuxcare.1/apache-maven-3.8.1-tuxcare.1-bin.tar.gz
```

</CodeWithCopy>

Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version as needed.

### Step 2: Extract

Extract the archive to a directory of your choice:

<CodeWithCopy>

```text
sudo mkdir -p /opt/maven
sudo tar -xvzf apache-maven-3.8.1-tuxcare.1-bin.tar.gz -C /opt/maven
```

</CodeWithCopy>

This creates a directory such as `/opt/maven/apache-maven-3.8.1-tuxcare.1`.

### Step 3: Run and Verify

Run the Maven binary directly from the extracted directory:

<CodeWithCopy>

```text
/opt/maven/apache-maven-3.8.1-tuxcare.1/bin/mvn --version
```

</CodeWithCopy>

The output should display the Maven version and build details, for example:

```text
Apache Maven 3.8.1-tuxcare.1 (5284a0ab5505591af3daaaee1cd8f527203667b9)
Maven home: /opt/maven/apache-maven-3.8.1-tuxcare.1
Java version: 17.0.17, vendor: Red Hat, Inc., runtime: /usr/lib/jvm/java-17-openjdk-17.0.17.0.10-1.el9.alma.1.x86_64
Default locale: ru_RU, platform encoding: UTF-8
OS name: "linux", version: "5.14.0-611.5.1.el9_7.x86_64", arch: "amd64", family: "unix"
```

## Windows Installation

### Step 1: Download Apache Maven

Download the Apache Maven .zip archive from [https://nexus.repo.tuxcare.com/repository/maven/](https://nexus.repo.tuxcare.com/repository/maven/) using your credentials.

### Step 2: Extract

Extract the downloaded archive, for example, `apache-maven-3.8.1-tuxcare.1-bin.zip`, to a directory of your choice, e.g., `C:\Maven`.

### Step 3: Run and Verify

Open a Command Prompt or PowerShell window and run:

```text
C:\Maven\apache-maven-3.8.1-tuxcare.1\bin\mvn --version
```

The output should display the Maven version and build details similar to the Linux example above.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Apache Maven archive from TuxCare using the instructions above.

## Resolved CVEs in ELS for Apache Maven

<ClientOnly>
  <ResolvedCveTable project="maven" />
</ClientOnly>
