# Debian 10 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=e0d2023e-5d4e-410c-8f5b-12e732dd5d7f&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Debian 10, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:

   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/debian10-els/install-debian10-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>

   ```
   bash install-debian10-els-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful by running the following command:

   <CodeWithCopy>

   ```
   apt-cache show els-os-release
   ```

   </CodeWithCopy>

   It should return information about the available package. If the package information is displayed, the installation was successful. After that, you can install updates from the repository using the standard `apt upgrade` command.

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

## Removing the ELS repository

The repository can be removed by running the installation script with the `--delete` flag:
   <CodeWithCopy>

   ```
   bash install-debian10-els-repo.sh --delete
   ```

   </CodeWithCopy>
