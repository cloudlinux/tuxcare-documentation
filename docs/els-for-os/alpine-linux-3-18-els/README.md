# Alpine Linux 3.18 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Alpine Linux 3.18, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installation of repositories

1. Download an installer script:

   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/alpinelinux3.18-els/install-els-alpine-repo.sh
   ```

   </CodeWithCopy>

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds PGP key to the server.

   <CodeWithCopy>

   ```
   sh install-els-alpine-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:

   <CodeWithCopy>

   ```
   apk info els-alpine-release
   ```

   </CodeWithCopy>

   It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apk upgrade command.

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

## Deinstallation instructions for apk repositories

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

