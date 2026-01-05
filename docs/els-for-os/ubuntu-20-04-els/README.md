# Ubuntu 20.04 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Ubuntu 20.04, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installation of repositories

1. Download an installer script:

   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/ubuntu20_04-els/install-ubuntu20.04-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds PGP key to the server.

   <CodeWithCopy>

   ```
   bash install-ubuntu20.04-els-repo.sh --license-key XXXXXXXXXXX
   ```

   </CodeWithCopy>

3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:

   <CodeWithCopy>

   ```
   apt-cache show els-define
   ```

   </CodeWithCopy>

   It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apt upgrade command.

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

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./machine-readable-security-data).

* **Ubuntu 20.04 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml)
* **Ubuntu 20.04 ELS**: [security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/)
* **Ubuntu 20.04 ELS**: [cve.tuxcare.com/rss_feed/els/releases/ubuntu20.04els](https://cve.tuxcare.com/rss_feed/els/releases/ubuntu20.04els)
