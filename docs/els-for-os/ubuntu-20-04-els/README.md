# Ubuntu 20.04 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=4a9ad44c-1b58-42fa-aa64-7bf19d9ccd13&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Ubuntu 20.04, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:

   <CodeWithCopy>

   ```
   wget https://repo.els.tuxcare.com/ubuntu20_04-els/install-ubuntu20.04-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. The installation script registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>

   ```
   bash install-ubuntu20.04-els-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful by running the following command:

   <CodeWithCopy>

   ```
   apt-cache show els-define
   ```

   </CodeWithCopy>

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:
 
   ```
   root@localhost:~# apt-cache show els-define
   Package: els-define
   Version: 1-1.0.3
   Architecture: amd64
   Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
   Installed-Size: 10
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-define/els-define_1-1.0.3_amd64.deb
   Size: 1926
   SHA256: eda90ec17fee27c862a923c3666591b5958e5a1bbebf33078cf1fd859d31edff
   SHA1: b3cef5e330f25b2daaf30eb5f41f67809642d9be
   MD5sum: 629b938770455731d05c3525a71b7653
   Description: ELS define package for Ubuntu 20.04
   Description-md5: 05246f694bf7646914c7d748ae3f6a15
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Ubuntu 20.04 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml)
* **Ubuntu 20.04 ELS**: [security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/)
* **Ubuntu 20.04 ELS**: [cve.tuxcare.com/rss_feed/els/releases/ubuntu20.04els](https://cve.tuxcare.com/rss_feed/els/releases/ubuntu20.04els)
