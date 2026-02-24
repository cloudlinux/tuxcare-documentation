# Loki

Endless Lifecycle Support (ELS) for Loki from TuxCare provides security fixes for Loki versions that have reached their end of life. This allows you to continue running Loki without vulnerability concerns, even after official support has ended.

## Supported Loki Versions

* Loki 3.1.0, 3.2.0, 3.3.0

## Supported Operating Systems

TuxCare provides ELS for Loki as pre-built binaries for the following distributions:

* Alpine Linux 3.22
* Debian 12
* Debian 13

## Connection to ELS for Loki

This guide outlines the steps needed to install the TuxCare ELS build of Loki on your system.

## Step 1: Get Token

You need credentials in order to access the TuxCare ELS Loki repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Download and Install Loki

1. To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang). Sign in with your TuxCare credentials. Navigate to the `loki` folder and choose the directory for your operating system (e.g. `debian12`, `debian13`, `alpine3_22`), then download the appropriate archive for your Loki version.

2. Alternatively, download from the command line. Replace `USERNAME` and `PASSWORD` with your TuxCare credentials, and choose the URL that matches your OS and desired Loki version.

   <TableTabs label="Choose operating system: ">

   <template #Debian_13>

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian13/loki-3.1.0-tuxcare.1.tar.gz
   ```

   </CodeWithCopy>

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Debian_12>

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian12/loki-3.1.0-tuxcare.1.tar.gz
   ```

   </CodeWithCopy>

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Alpine_Linux_3.22>

   <CodeWithCopy>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/alpine3_22/loki-3.1.0-tuxcare.1.tar.gz
   ```

   </CodeWithCopy>

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   </TableTabs>

3. Create an installation directory (for example `/opt/loki`) and extract the archive:

   <CodeWithCopy>

   ```text
   sudo mkdir -p /opt/loki
   sudo tar -xzf loki-3.1.0-tuxcare.1.tar.gz -C /opt/loki --strip-components=1
   ```

   </CodeWithCopy>

   Adjust the archive filename if you downloaded a different version.

## Step 3: Verify Installation

1. Change to the Loki installation directory and run the binary to confirm the TuxCare ELS build is installed:

   <CodeWithCopy>

   ```text
   cd /opt/loki
   ./loki --version
   ```

   </CodeWithCopy>

2. Start Loki with your configuration and verify that the application runs correctly.

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
