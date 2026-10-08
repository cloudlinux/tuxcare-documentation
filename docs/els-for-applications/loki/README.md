# Loki

Endless Lifecycle Support (ELS) for Loki from TuxCare provides security fixes for Loki versions that have reached their end of life. This allows you to continue running Loki without vulnerability concerns, even after official support has ended.

## Supported Versions

* Loki 2.6.0, 2.8.3, 2.9.0, 3.1.0, 3.2.0, 3.3.0, 3.4.0

## Supported Operating Systems

TuxCare provides ELS for Loki as pre-built binaries for the following distributions:

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

   Visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and sign in with your credentials. Navigate to the `loki` folder, choose the directory for your operating system, and download the appropriate archive

2. **Or download from the command line**

   <TableTabs label="Choose operating system: ">

   <template #Debian_13>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian13/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Debian_12>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian12/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Alpine_Linux_3.22>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/alpine3_22/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   </TableTabs>

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above). Choose the URL that matches your OS and Loki version.

3. **Extract the archive**

   Create an installation directory (for example `/opt/loki`) and extract.

   ```text
   sudo mkdir -p /opt/loki
   sudo tar -xzf loki-3.1.0-tuxcare.1.tar.gz -C /opt/loki --strip-components=1
   ```

   Adjust the archive filename if you downloaded a different version.

4. **Verify the installation**

   Change to the installation directory and run the binary to confirm the TuxCare ELS build.

   ```text
   cd /opt/loki
   ./loki --version
   ```

5. **Start Loki**

   Use your configuration and verify that the application runs correctly.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
