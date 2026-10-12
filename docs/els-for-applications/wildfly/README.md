# WildFly®

WildFly is a registered trademark of the Commonhaus Foundation.

<br>

TuxCare's Endless Lifecycle Support (ELS) for WildFly provides security patches and selected bug fixes that are integral to the stable operation of applications running on these versions of WildFly. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for WildFly service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy WildFly applications.

This guide outlines the steps needed for WildFly server setup and configuration.

## Supported Versions

* WildFly 19.0.1.Final, 27.0.1.Final

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 11 or later installed (verify with `java -version`)
* `JAVA_HOME` set to your JDK installation directory
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

## Linux Installation

<ELSSteps>

1. **Download the TuxCare build**

   Download from TuxCare using your credentials. For example, WildFly 27.0.1.Final:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/wildfly/wildfly-ee-dist/27.0.1.Final-tuxcare.1/wildfly-ee-dist-27.0.1.Final-tuxcare.1.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

2. **Extract the archive**

   Create an installation directory in your home folder and extract the archive into it:

   ```text
   mkdir -p ~/wildfly
   tar -xzf wildfly-ee-dist-27.0.1.Final-tuxcare.1.tar.gz -C ~/wildfly --strip-components=1
   ```

3. **Verify the installation**

   ```text
   ~/wildfly/bin/standalone.sh --version
   ```

   The output should display the WildFly version and build details.

4. **Start WildFly**

   ```text
   ~/wildfly/bin/standalone.sh
   ```

   :::tip
   This command runs in the foreground and keeps the terminal busy. Use a second terminal to verify and stop the server.
   :::

5. **Verify the server is running**

   * Go to [http://localhost:8080/](http://localhost:8080/). You should see the default WildFly welcome page.

   * Or check from the terminal (successful output is HTML from WildFly):

     ```text
     curl http://localhost:8080
     ```

6. **Stop WildFly**

   ```text
   ~/wildfly/bin/jboss-cli.sh --connect command=:shutdown
   ```

## Windows Installation

1. **Download WildFly**

   Download the `.zip` archive from [Nexus](https://nexus.repo.tuxcare.com/repository/els_java/org/wildfly/wildfly-ee-dist/27.0.1.Final-tuxcare.1/) using your credentials, for example `wildfly-ee-dist-27.0.1.Final-tuxcare.1.zip`.

2. **Extract the archive**

   Extract it to the installation directory, e.g., `C:\WildFly`. The archive contains a top-level folder, so this produces `C:\WildFly\wildfly-27.0.1.Final-tuxcare.1` — that folder is your WildFly directory.

3. **Start WildFly**

   Run `C:\WildFly\wildfly-27.0.1.Final-tuxcare.1\bin\standalone.bat`.

   :::tip
   This window stays open while the server runs. Use your browser (next step) to verify it, and a second window to stop it.
   :::

4. **Verify the server is running**

   Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default WildFly welcome page.

5. **Stop WildFly**

   Run `C:\WildFly\wildfly-27.0.1.Final-tuxcare.1\bin\jboss-cli.bat --connect command=:shutdown` from a second window.

## Use Case: Production Setup <ELSBadge>Linux</ELSBadge>

1. **Create a `wildfly` group**

   ```text
   sudo groupadd wildfly
   ```

2. **Create a `wildfly` user**

   Create a new user as a member of the `wildfly` group, with a home directory of `/opt/wildfly` and the login shell set to `/bin/false`:

   ```text
   sudo useradd -s /bin/false -g wildfly -d /opt/wildfly wildfly
   ```

3. **Install into `/opt/wildfly` and set ownership**

   ```text
   sudo mkdir -p /opt/wildfly
   sudo tar -xzf wildfly-ee-dist-27.0.1.Final-tuxcare.1.tar.gz -C /opt/wildfly --strip-components=1
   sudo chown -R wildfly:wildfly /opt/wildfly
   ```

4. **Start WildFly as the `wildfly` user**

   ```text
   sudo -u wildfly JAVA_HOME=/path/to/your/jdk /opt/wildfly/bin/standalone.sh
   ```

   :::tip
   `sudo` does not pass your environment to the target user, so set `JAVA_HOME` explicitly (or configure it for the `wildfly` user). Otherwise the server fails with `java: command not found`.
   :::

   Stop it from a second terminal with `/opt/wildfly/bin/jboss-cli.sh --connect command=:shutdown`.

## Logs Location

Check logs for detailed error information:

* **Linux:**

  ```text
  ~/wildfly/standalone/log/server.log
  ```

  (or `/opt/wildfly/standalone/log/server.log` if you installed under a dedicated user)

* **Windows:**

  ```text
  C:\WildFly\wildfly-27.0.1.Final-tuxcare.1\standalone\log\server.log
  ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Wildfly) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Wildfly) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Wildfly) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.wildfly.core/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
