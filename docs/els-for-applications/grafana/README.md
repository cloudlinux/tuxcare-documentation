# Grafana

Endless Lifecycle Support (ELS) for Grafana from TuxCare provides security fixes for Grafana versions that have reached their end of life. This allows you to continue running Grafana without vulnerability concerns, even after official support has ended.

## Supported Versions

* Grafana 10.4.1, 11.2.0, 11.3.0, 11.4.0, 11.5.0

## Supported Operating Systems

TuxCare provides ELS for Grafana as pre-built binaries for the following distributions:

* Alpine Linux 3.22
* Debian 12
* Debian 13

## Installation

<ELSPrerequisites>

* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Browse and download from Nexus**

   Visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and sign in with your credentials. Navigate to the `grafana` folder, choose the directory for your operating system, and download the appropriate archive.

2. **Or download from the command line**

   <TableTabs label="Choose operating system: ">

   <template #Debian_13>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian13/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   <template #Debian_12>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian12/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   <template #Alpine_Linux_3.22>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/alpine3_22/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   </TableTabs>

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above). Choose the URL that matches your OS and Grafana version.

3. **Extract the archive**

   Create an installation directory (for example `/opt/grafana`) and extract.

   ```text
   sudo mkdir -p /opt/grafana
   sudo tar -xzf grafana-10.4.1-tuxcare.1.tar.gz -C /opt/grafana --strip-components=1
   ```

   Adjust the archive filename if you downloaded a different version.

4. **Verify the installation**

   Change to the installation directory and run the binary to confirm the TuxCare ELS build.

   ```text
   cd /opt/grafana
   ./bin/grafana-server --version
   ```

5. **Start Grafana**

   Use your deployment method (systemd, Docker, or manual) and verify that the application runs correctly.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
