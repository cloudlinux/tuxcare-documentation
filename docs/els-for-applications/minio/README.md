# MinIO

Endless Lifecycle Support (ELS) for MinIO from TuxCare provides security fixes for MinIO versions that have reached their end of life. This allows you to continue running MinIO without vulnerability concerns, even after official support has ended.

## Supported Versions

* MinIO RELEASE.2025-10-15T17-29-55Z

## Supported Architectures

TuxCare provides ELS for MinIO as pre-built Linux binaries for the following architectures:

* amd64
* arm64

## Installation

<ELSPrerequisites>

* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Browse and download from Nexus**

   Visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and sign in with your credentials. Navigate to the `minio` folder and download the archive that matches your architecture.

2. **Or download from the command line**

   <TableTabs label="Choose architecture: ">

   <template #amd64>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/minio/minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.5.tar.gz
   ```

   </template>

   <template #arm64>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/minio/minio_linux_arm64-2025.10.15T17.29.55Z-tuxcare.5.tar.gz
   ```

   </template>

   </TableTabs>

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#installation) above). Choose the URL that matches your architecture.

3. **Extract the archive**

   Create an installation directory (for example `/opt/minio`) and extract.

   ```text
   sudo mkdir -p /opt/minio
   sudo tar -xzf minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.5.tar.gz -C /opt/minio --strip-components=1
   ```

   Adjust the archive filename for your architecture.

4. **Verify the installation**

   Change to the installation directory and run the binary to confirm the TuxCare ELS build.

   ```text
   cd /opt/minio
   ./minio --version
   ```

5. **Start MinIO**

   Start the MinIO server with your configuration and verify that it runs correctly.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=minio) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=minio) — Patched versions and changelogs
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
