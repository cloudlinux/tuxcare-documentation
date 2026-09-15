# Apache Tomcat<sup style="font-size: 0.5em;">®</sup>

Apache® and Apache Tomcat® are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat® provides security patches and selected bug fixes that are integral to the stable operation of applications running on these versions of Apache Tomcat® core components such as Coyote, Catalina, Jasper, etc. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat® service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat® applications.

This guide outlines the steps needed for Apache Tomcat® server setup and configuration.

:::tip
Apache Tomcat® is also available for installation as a library for Maven and Gradle projects. You can find the corresponding instructions [here](/els-for-libraries/apache-tomcat/).
:::

## Supported Versions

* Apache Tomcat® 7.0.70, 7.0.109, 8.5.100, 9.0.46, 9.0.50, 9.0.75, 9.0.83, 9.0.87, 9.0.90, 9.0.100, 10.1.18, 10.1.42

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 7 or later installed (verify with `java -version`)
* `JAVA_HOME` set to your JDK installation directory
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

## Linux Installation

<ELSSteps>

1. **Prepare a `tomcat` group**

   Create a `tomcat` group:

   ```text
   sudo groupadd tomcat
   ```

2. **Create a `tomcat` user**

   Create a new user as a member of the `tomcat` group, with a home directory of `/opt/tomcat` and the login shell set to `/bin/false`.

   ```text
   sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
   ```

3. **Download the TuxCare build**

   Download from TuxCare using your credentials. For example, Apache Tomcat® 8.5.100:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above).

4. **Create the installation directory and extract the archive**

   * Create the `/opt/tomcat` directory:

     ```text
     sudo mkdir -p /opt/tomcat
     ```

   * Extract the archive into it:

     ```text
     sudo tar -xvzf tomcat-8.5.100-tuxcare.3.tar.gz -C /opt/tomcat --strip-components=1
     ```

5. **Configure ownership and permissions**

   * Change to the installation directory:

     ```text
     cd /opt/tomcat
     ```

   * Change ownership of the installation to the `tomcat` group:

     ```text
     sudo chgrp -R tomcat /opt/tomcat
     ```

   * Give the `tomcat` group read access to `conf` and its contents, and execute access to the `conf` directory:

     ```text
     sudo chmod -R g+r conf
     sudo chmod g+x conf
     ```

   * Give the `tomcat` user write access to `webapps`, `work`, `temp`, and `logs`:

     ```text
     sudo chown -R tomcat webapps/ work/ temp/ logs/
     ```

6. **Set `CATALINA_HOME` and reload the shell**

   * Add the following line at the end of your `~/.bashrc` file, updating the path if needed.

     ```text
     export CATALINA_HOME=/opt/tomcat
     ```

     :::tip
     If you're using a different shell, you may need to edit `~/.bash_profile` instead.
     :::

   * Reload the shell configuration:

     ```text
     source ~/.bashrc
     ```

   * Confirm the variable is set:

     ```text
     echo $CATALINA_HOME
     ```

7. **Start Apache Tomcat®**

   ```text
   sudo -u tomcat /opt/tomcat/bin/startup.sh
   ```

8. **Verify installation**

   * Go to [http://localhost:8080/](http://localhost:8080/). You should see the default Apache Tomcat® homepage.

   * Or check from the terminal (successful output is HTML from Tomcat®):

     ```text
     curl http://localhost:8080
     ```

9. **Stop Apache Tomcat®**

   ```text
   sudo -u tomcat /opt/tomcat/bin/shutdown.sh
   ```

## Windows Installation

1. **Download Apache Tomcat®**

   Download the .zip archive from [https://nexus.repo.tuxcare.com/repository/els_java/](https://nexus.repo.tuxcare.com/repository/els_java/) using your credentials.

2. **Extract the archive**

   Extract, for example, `apache-tomcat-8.5.100-tuxcare.3.zip` to the installation directory, e.g., `C:\Tomcat`.

3. **Open Environment Variables**

   Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*.

4. **Set `CATALINA_HOME`**

   Add a new system variable with the value `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3` (or your installation path).

5. **Start Apache Tomcat®**

   Double-click `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\startup.bat`.

6. **Verify installation**

   Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

7. **Stop Apache Tomcat®**

   Double-click `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\shutdown.bat`.

## Logs Location

Check logs for detailed error information:

* **Linux:**

  ```text
  /opt/tomcat/logs/catalina.out
  ```

* **Windows:**

  ```text
  C:\Tomcat\logs\catalina.[date].log
  ```

</ELSSteps>

## What's next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Apache+Tomcat) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Apache+Tomcat) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Apache+Tomcat) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
