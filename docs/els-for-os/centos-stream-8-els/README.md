# CentOS Stream 8 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=becccb8e-9378-476f-a37c-48c3d5cb1105&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for CentOS Stream 8, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:
   
   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/centos8stream-els/install-centos8stream-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.
   
   <CodeWithCopy>

   ```
   sh install-centos8stream-els-repo.sh --license-key XXXXXXXX
   ```

   </CodeWithCopy>

   

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
   [els@centos8stream ~]# yum info els-define
   Loaded plugins: fastestmirror
   Loading mirror speeds from cached hostfile
   Available Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.1.el8
   Size        : 2.6 k
   Repo        : centos8stream-els
   Summary     : CentOS Server simulate release file
   License     : GPLv2
   Description : CentOS Server simulate els release files
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **CentOS Stream 8 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos-stream8els/oval.xml)
* **CentOS Stream 8 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos-stream8els/](https://security.tuxcare.com/csaf/v2/els_os/centos-stream8els/)
* **CentOS Stream 8 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos8streamels](https://cve.tuxcare.com/rss_feed/els/releases/centos8streamels)

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
   rm /etc/yum.repos.d/centos8stream-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>

