# CentOS 8 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for CentOS 8, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

## Installation of repositories

1. Download an installer script:

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `wget https://repo.cloudlinux.com/centos8.4-els/install-centos8.4-els-repo.sh` },
     { title: 'CentOS 8.5 ELS', content: `wget https://repo.cloudlinux.com/centos8.5-els/install-centos8.5-els-repo.sh` }
   ]" />

2. Run the installer script with keys:

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `sh install-centos8.4-els-repo.sh --license-key XXXXXXXXXXX` },
     { title: 'CentOS 8.5 ELS', content: `sh install-centos8.5-els-repo.sh --license-key XXXXXXXXXXX` }
   ]" />

   The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:
   
   <CodeWithCopy>

   ```
   yum info els-define
   ```

   </CodeWithCopy>

   It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
   After this, you will be able to install updates from the repository using a regular yum upgrade command.

   Example:

   ```
   [els@centos8_5 ~]# yum info els-define

   Available Packages
   Name         : els-define
   Version      : 1
   Release      : 1.0.3.el8
   Architecture : x86_64
   Size         : 7.0 k
   Source       : els-define-1-1.0.3.el8.src.rpm
   Repository   : centos8.5-els
   Summary      : CentOS Server els-release file
   License      : GPLv2
   Description  : CentOS Server els-release file
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./machine-readable-security-data/).

* **CentOS 8.4 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml)
* **CentOS 8.5 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml)

* **CentOS 8.4 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos8.4els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/)
* **CentOS 8.5 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos8.5els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/)

* **CentOS 8.4 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos8.4els](https://cve.tuxcare.com/rss_feed/els/releases/centos8.4els)
* **CentOS 8.5 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos8.5els](https://cve.tuxcare.com/rss_feed/els/releases/centos8.5els)

## Deinstallation instructions for yum repositories

1. List ELS repository file (ending with `-els.repo`) in the repository folder:

   <CodeWithCopy>

   ```
   ls -l /etc/yum.repos.d/*-els.repo
   ```

   </CodeWithCopy>

   Remove the file to disable the ELS repository, for example:

   <CodeWithCopy>

   ```
   rm /etc/yum.repos.d/centos8.5-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>

