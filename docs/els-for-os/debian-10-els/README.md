# Debian 10 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Debian 10, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installation of repositories

1. Download an installer script:

   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/debian10-els/install-debian10-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds PGP key to the server.

   <CodeWithCopy>

   ```
   bash install-debian10-els-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:

   <CodeWithCopy>

   ```
   apt-cache show els-os-release
   ```

   </CodeWithCopy>

   It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apt upgrade command.

   Example:
 
   ```
   root@localhost:~# apt-cache show els-os-release
   Package: els-os-release
   Version: 1.0.0-2
   Architecture: amd64
   Maintainer: Koba Karaputadze <kkaraputadze@cloudlinux.com>
   Installed-Size: 17
   Conflicts: els-define
   Replaces: els-define
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-os-release/els-os-release_1.0.0-2_amd64.deb
   Size: 5306
   SHA256: be11d8bffaac9f70c8b19d2f9c96e64bb0a698593671d807e6fe75687863e3c8
   SHA1: 47238eb136a07fb1b91fe531b6e4ebbd3207a6ab
   MD5sum: b82dba173e67dfbfc83a6f414c866a59
   Description: ELS os release package for deb systems
   Description-md5: f3fdfd5cb5f71a4ebb6f1f40c8d57483
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Debian 10 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/debian10els/oval.xml)
* **Debian 10 ELS**: [security.tuxcare.com/csaf/v2/els_os/debian10els/](https://security.tuxcare.com/csaf/v2/els_os/debian10els/)
* **Debian 10 ELS**: [cve.tuxcare.com/rss_feed/els/releases/debian10els](https://cve.tuxcare.com/rss_feed/els/releases/debian10els)
