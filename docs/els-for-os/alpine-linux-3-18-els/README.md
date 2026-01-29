# Alpine Linux 3.18 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=26cfcb24-02da-4482-934d-d4cb1a02de3a&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Alpine Linux 3.18, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:

   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/alpinelinux3.18-els/install-els-alpine-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>

   ```
   sh install-els-alpine-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful by running the following command:

   <CodeWithCopy>

   ```
   apk info els-alpine-release
   ```

   </CodeWithCopy>

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apk upgrade` command.

   Example:

   ```
   alpine:~# apk info els-alpine-release
   els-alpine-release-1.0.0-r0 description:
   ELS Alpine repository configuration

   els-alpine-release-1.0.0-r0 webpage:
   https://tuxcare.com/

   els-alpine-release-1.0.0-r0 installed size:
   20 KiB
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Alpine Linux 3.18 ELS OVAL Stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/alpinelinux3.18els/oval.xml)
* **Alpine Linux 3.18 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/alpinelinux3.18els/](https://security.tuxcare.com/csaf/v2/els_os/alpinelinux3.18els/)
* **Alpine Linux 3.18 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/alpinelinux3.18els](https://cve.tuxcare.com/rss_feed/els/releases/alpinelinux3.18els)

## Removing the ELS repository

1. Remove the ELS repository configuration:

   <CodeWithCopy>

   ```
   rm /etc/apk/repositories.d/*els*
   ```

   </CodeWithCopy>

2. Uninstall the `els-alpine-release` package:

   <CodeWithCopy>

   ```
   apk del els-alpine-release
   ```

   </CodeWithCopy>

