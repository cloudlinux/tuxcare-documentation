# CentOS 8 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our  [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided here:

* [CentOS 8.4 ELS](https://cve.tuxcare.com/els/projects?os=aa4ebb59-95d6-4734-9014-0dded2e4a382&project=&version=&packages=&orderBy=project-asc)

* [CentOS 8.5 ELS](https://cve.tuxcare.com/els/projects?os=a3407f4d-0962-4971-bb9f-3141bb924451&project=&version=&packages=&orderBy=project-asc)


## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for CentOS 8, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

## Installing the repository

1. Download an installation script:

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `wget https://repo.cloudlinux.com/centos8.4-els/install-centos8.4-els-repo.sh` },
     { title: 'CentOS 8.5 ELS', content: `wget https://repo.cloudlinux.com/centos8.5-els/install-centos8.5-els-repo.sh` }
   ]" />

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeTabs :tabs="[
     { title: 'CentOS 8.4 ELS', content: `sh install-centos8.4-els-repo.sh --license-key XXXXXXXXXXX` },
     { title: 'CentOS 8.5 ELS', content: `sh install-centos8.5-els-repo.sh --license-key XXXXXXXXXXX` }
   ]" />

   

3. Verify that the installation was successful by running the following command:
   
   <CodeWithCopy>

   ```
   yum info els-define
   ```

   </CodeWithCopy>

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

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

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **CentOS 8.4 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml)
* **CentOS 8.5 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml)

* **CentOS 8.4 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos8.4els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/)
* **CentOS 8.5 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos8.5els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/)

* **CentOS 8.4 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos8.4els](https://cve.tuxcare.com/rss_feed/els/releases/centos8.4els)
* **CentOS 8.5 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos8.5els](https://cve.tuxcare.com/rss_feed/els/releases/centos8.5els)

## Removing the ELS repository

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

