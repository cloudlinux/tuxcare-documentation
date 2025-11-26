# Apache Tomcat

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat applications.

This guide outlines the steps needed for Apache Tomcat server setup and configuration.

:::tip
Apache Tomcat is also available for installation as a library for Maven and Gradle projects. See [ELS for Apache Tomcat Libraries](/els-for-libraries/apache-tomcat/) for integration instructions.
:::

## Supported Versions

* Apache Tomcat 8.5.100, 9.0.75, 9.0.83

## Prerequisities

* **Java Development Kit (JDK)**

  Ensure you have a compatible version of Java Development Kit (JDK) installed. Apache Tomcat 8.5.x and 9.0.x require JDK 8 or later. To verify if JDK is already installed on your system, open a terminal or command prompt and run:

  <CodeWithCopy>

  ```text
  java -version
  ```

  </CodeWithCopy>

  If JDK is installed, you should see version information. If not, you'll need to install it.

* **Repository Access**

  You need username and password to access the TuxCare ELS Apache Tomcat repository. Anonymous access is disabled. 
  To obtain credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).   Once you have credentials, you can access the repository at: [https://nexus.repo.tuxcare.com/repository/els_tomcat/](https://nexus.repo.tuxcare.com/repository/els_tomcat/)

## Installation

### Create Tomcat User (Linux Only)

* For security purposes, create a dedicated tomcat group:

  <CodeWithCopy>

  ```text
  sudo groupadd tomcat
  ```

  </CodeWithCopy>

* And a new tomcat user as a member of the tomcat group, with a home directory of `/opt/tomcat` and with a shell of `/bin/false`:

  <CodeWithCopy>

  ```text
  sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
  ```

  </CodeWithCopy>

### Download Apache Tomcat

Download the archive file from the TuxCare repository manually or via terminal using your credentials:

<CodeWithCopy>

```text
curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_tomcat/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/apache-tomcat-8.5.100-tuxcare.3.tar.gz
```

</CodeWithCopy>

Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version number as needed.

### Extract the Archive

**Linux/macOS:**

Unpack the downloaded file into a directory of your choice (e.g., `/opt/tomcat`). 

<CodeWithCopy>

```text
sudo tar -xvzf ~/v8.5.100-tuxcare.3/bin/apache-tomcat-8.5.100-tuxcare.3.tar.gz -C /opt/tomcat --strip-components=1
```

</CodeWithCopy>

**Windows:**

Extract the downloaded `.zip` file to your desired location (e.g., `C:\Tomcat`).

### Update Permissions

The tomcat user that we set up needs to have access to the Tomcat installation. We’ll set that up now.

Change to the directory where we unpacked the Tomcat installation:

<CodeWithCopy>

```text
cd /opt/tomcat
```

</CodeWithCopy>

Give the tomcat group ownership over the entire installation directory:

<CodeWithCopy>

```text
sudo chgrp -R tomcat /opt/tomcat
```

</CodeWithCopy>

Next, give the tomcat group read access to the conf directory and all of its contents, and execute access to the directory itself:

<CodeWithCopy>

```text
sudo chmod -R g+r conf
sudo chmod g+x conf
```

</CodeWithCopy>

Make the tomcat user the owner of the webapps, work, temp, and logs directories:

<CodeWithCopy>

```text
sudo chown -R tomcat webapps/ work/ temp/ logs/
```

</CodeWithCopy>

### Configure Environment Variables

**Linux/macOS:**

Add the following to your `~/.bashrc` or `~/.bash_profile`:

<CodeWithCopy>

```text
export CATALINA_HOME=/opt/tomcat
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk
```

</CodeWithCopy>

Then reload:

<CodeWithCopy>

```text
source ~/.bashrc
```

</CodeWithCopy>

**Windows:**

1. Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*
2. Add new system variable:
   - Variable name: `CATALINA_HOME`
   - Variable value: `C:\Tomcat` (or your installation path)

### Start Tomcat

**Linux/macOS:**

<CodeWithCopy>

```text
sudo -u tomcat /opt/tomcat/bin/startup.sh
```

</CodeWithCopy>

**Windows:**

Double-click `startup.bat` in the `bin` directory.

### Verify Installation

Open a web browser and visit `http://localhost:8080/`. You should see the default Tomcat homepage.

Alternatively, use curl:

<CodeWithCopy>

```text
curl http://localhost:8080
```

</CodeWithCopy>

You should see HTML output containing:

<CodeWithCopy>

```text
<h2>If you're seeing this, you've successfully installed Tomcat. Congratulations!</h2>
```

</CodeWithCopy>

### Stop Tomcat

**Linux/macOS:**

<CodeWithCopy>

```text
sudo -u tomcat /opt/tomcat/bin/shutdown.sh
```

</CodeWithCopy>

**Windows:**

Double-click `shutdown.bat` in the `bin` directory.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.3`):

1. **Download and extract new version** following Steps 2-3 in the Installation section.

2. **Start Tomcat:**

   <CodeWithCopy>

   ```text
   sudo -u tomcat /opt/tomcat/bin/startup.sh
   ```

   </CodeWithCopy>

### Logs Location

Check logs for detailed error information:
- **Linux/macOS:** `/opt/tomcat/logs/catalina.out`
- **Windows:** `C:\Tomcat\logs\catalina.[date].log`

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX for Apache Tomcat ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## Resolved CVEs in ELS for Apache Tomcat

<ClientOnly>
  <ResolvedCveTable project="apache-tomcat" />
</ClientOnly>
