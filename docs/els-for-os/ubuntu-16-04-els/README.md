# Ubuntu 16.04 ELS

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Ubuntu 16.04, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

## Installing the repository

1. Download an installation script:
  
   <CodeWithCopy>

   ```
   wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu16.04-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.
   
   <CodeWithCopy>

   ```
   bash install-ubuntu16.04-els-repo.sh --license-key XXX-XXXXXXXXXXXX
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
   [els@ubuntu16 ~]# apt-cache show els-define
   Package: els-define
   Version: 1-1.0.1
   Architecture: amd64
   Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
   Installed-Size: 10
   Homepage: https://tuxcare.com/els-for-os/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-define/els-define_1-1.0.1_amd64.deb
   Size: 1302
   SHA256: a6b68c43c88a148ecc4806d0b4eb309deb5af418c8e1d0ea980fd453f5aec8dd
   SHA1: 4907b9796c40327dbd45ecf2fd0806a32e2c24bd
   MD5sum: 42f69c642c27052b15e4470533fdab62
   Description: ELS define package for Ubuntu 16.04
   Description-md5: 39e3bb446b4c63607f8f0358484545bf
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Ubuntu 16.04 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu16.04els/oval.xml)
* **Ubuntu 16.04 ELS**: [security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/)
* **Ubuntu 16.04 ELS**: [cve.tuxcare.com/rss_feed/els/releases/ubuntu16.04els](https://cve.tuxcare.com/rss_feed/els/releases/ubuntu16.04els)


## Removing the ELS repository 

1. List the ELS repository file in the APT sources directory:

   <CodeWithCopy>

   ```
   ls -l /etc/apt/sources.list.d/*els*.list
   ```

   </CodeWithCopy>

2. Remove the ELS repository file to disable the repository:

   <CodeWithCopy>

   ```
   sudo rm /etc/apt/sources.list.d/*els*.list
   ```

   </CodeWithCopy>

3. Remove the ELS package:

   <CodeWithCopy>

   ```
   sudo apt remove els-define
   ```
   </CodeWithCopy>

4. Update the package index:

   <CodeWithCopy>

    ```
   sudo apt update
    ```

   </CodeWithCopy>
