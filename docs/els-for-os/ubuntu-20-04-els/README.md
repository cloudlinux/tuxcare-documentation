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
   bash install-ubuntu20.04-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
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
   [els@ubuntu20 ~]# apt-cache show els-os-release
   Package: els-os-release
   Version: 1.0.0-1
   Architecture: amd64
   Maintainer: Koba Karaputadze <kkaraputadze@cloudlinux.com>
   Installed-Size: 16
   Depends: els-define
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-os-release/els-os-release_1.0.0-1_amd64.deb
   Size: 4326
   SHA256: 74f7983c4a3e5c92f954e7af4048f2327e54beed9d06c2ad81baeb7e0b0af86d
   SHA1: b33baa2e0ed955043178863e05e05ebddb0254c6
   MD5sum: 57f60465595890e8fd374bd6d87a5d40
   Description: ELS os release package for Ubuntu 20.04
   Description-md5: 409266c8048d396eedc5dacdff306abc
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./security-updates).

* **Ubuntu 20.04 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml)
* **Ubuntu 20.04 ELS**: [security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/)
* **Ubuntu 20.04 ELS**: [cve.tuxcare.com/rss_feed/releases/ubuntu20.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu20.04els)
