# Apache Tomcat<sup style="font-size: 0.5em;">®</sup>

Apache®, Apache Tomcat®, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat® provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat® core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat® service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat® applications.

This guide outlines the steps needed for Apache Tomcat server setup and configuration.

:::tip
Apache Tomcat® is also available for installation as a library for Maven and Gradle projects. You can find the corresponding instructions [here](/els-for-libraries/apache-tomcat/).
:::

## Supported Versions

* Apache Tomcat® 8.5.100, 9.0.50, 9.0.75, 9.0.83, 9.0.87, 9.0.90, 9.0.100

## Prerequisites

* Ensure you have a compatible version of **Java Development Kit (JDK)** installed. JDK 7 or later is required. 

  To verify if JDK is already installed on your system, open a terminal or command prompt and run:

  <CodeWithCopy>

  ```text
  java -version
  ```

  </CodeWithCopy>

  If JDK is installed, you should see version information. If not, you'll need to install it.
  
* Make sure the `JAVA_HOME` environment variable is properly set to point to your JDK installation directory.

## Repository Access

You need a username and password to access the TuxCare ELS Apache Tomcat® repository. Anonymous access is disabled. 
To obtain credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

To browse available artifacts via the web interface, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_tomcat). Click the **Sign in** button in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or re-open the browse link due to Nexus routing behavior.

## Linux Installation

### Step 1: Create User and Group

1. For security purposes, create a `tomcat` group:

   <CodeWithCopy>

   ```text
   sudo groupadd tomcat
   ```

   </CodeWithCopy>

2. Create a new `tomcat` user as a member of this `tomcat` group, with a home directory of `/opt/tomcat`, which will be used to install Apache Tomcat®, and set the user's login shell to `/bin/false` so that no one can log in directly as this user:

   <CodeWithCopy>

   ```text
   sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
   ```

   </CodeWithCopy>

### Step 2: Download and Install Apache Tomcat®

1. Open the terminal and download Apache Tomcat® from TuxCare using your credentials. For example, Apache Tomcat® 8.5.100:

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_tomcat/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz
   ```

   </CodeWithCopy>

   Replace `USERNAME` and `PASSWORD` with your actual credentials.

2. Create the `/opt/tomcat` directory and extract the Apache Tomcat® archive into it:

   <CodeWithCopy>

   ```text
   sudo mkdir -p /opt/tomcat
   sudo tar -xvzf tomcat-8.5.100-tuxcare.3.tar.gz -C /opt/tomcat --strip-components=1
   ```

   </CodeWithCopy>

3. Change to the Apache Tomcat® installation directory:

   <CodeWithCopy>

   ```text
   cd /opt/tomcat
   ```

   </CodeWithCopy>

### Step 4: Configure Permissions

Update permissions so that the `tomcat` user has access to the Apache Tomcat® installation.

1. Change ownership to the `tomcat` group:

   <CodeWithCopy>

   ```text
   sudo chgrp -R tomcat /opt/tomcat
   ```

   </CodeWithCopy>

2. Give the `tomcat` group read access to the `conf` directory and its contents, and execute access to the directory itself:

   <CodeWithCopy>

   ```text
   sudo chmod -R g+r conf
   sudo chmod g+x conf
   ```

   </CodeWithCopy>

3. Give the `tomcat` user write access to the `webapps`, `work`, `temp`, and `logs` directories:

   <CodeWithCopy>

   ```text
   sudo chown -R tomcat webapps/ work/ temp/ logs/
   ```

   </CodeWithCopy>

### Step 5: Configure Environment Variables

1. Add the following line at the end of your `~/.bashrc` file, updating the path if needed:

   <CodeWithCopy>

   ```text
   export CATALINA_HOME=/opt/tomcat
   ```

   </CodeWithCopy>

   :::tip
   If you're using a different shell, you may need to edit `~/.bash_profile` instead.
   :::

2. Then reload:

   <CodeWithCopy>

   ```text
   source ~/.bashrc
   ```

   </CodeWithCopy>

3. Verify the changes:

   <CodeWithCopy>

   ```text
   echo $CATALINA_HOME
   ```

   </CodeWithCopy>

### Step 6: Run Apache Tomcat®

1. To start Apache Tomcat® run:

   <CodeWithCopy>

   ```text
   sudo -u tomcat /opt/tomcat/bin/startup.sh
   ```

   </CodeWithCopy>

2. Verify installation. 

   * Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

   * Or check from the terminal:

    <CodeWithCopy>

    ```text
    curl http://localhost:8080
    ```

    </CodeWithCopy>

    Successful output will be an HTML page from Apache Tomcat®.

3. To stop Apache Tomcat® run: 

   <CodeWithCopy>

   ```text
   sudo -u tomcat /opt/tomcat/bin/shutdown.sh
   ```

   </CodeWithCopy>

## Windows Installation

### Step 1: Download Apache Tomcat®

Download the Apache Tomcat® .zip archive from [https://nexus.repo.tuxcare.com/repository/els_tomcat/](https://nexus.repo.tuxcare.com/repository/els_tomcat/) using your credentials.

### Step 2: Extract and Install

1. Extract the downloaded archive, for example, apache-tomcat-8.5.100-tuxcare.3.zip, to the installation directory, e.g., `C:\Tomcat`.

### Step 3: Configure Environment Variables

1. Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*.

2. Add a new system variable named `CATALINA_HOME` with the value `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3` (or your installation path).

### Step 4: Run Apache Tomcat®

1. Start Apache Tomcat® by double-clicking `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\startup.bat`.

2. Verify installation. Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

3. Stop Apache Tomcat® by double-clicking `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\shutdown.bat`.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.3`):

1. Download and extract a new version of the Apache Apache Tomcat® archive from TuxCare using the instructions above.

2. Start Apache Tomcat® by running the startup script.

## Logs Location

Check logs for detailed error information:

* **Linux:**
  
  <CodeWithCopy>

  ```text
  /opt/tomcat/logs/catalina.out
  ```

  </CodeWithCopy>

* **Windows:**

  <CodeWithCopy>
  
  ```text
  C:\Tomcat\logs\catalina.[date].log
  ```

  </CodeWithCopy>

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Apache Tomcat® ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## Resolved CVEs in ELS for Apache Tomcat®

<ClientOnly>
  <ResolvedCveTable project="apache-tomcat" />
</ClientOnly>
