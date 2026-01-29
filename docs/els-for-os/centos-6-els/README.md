# CentOS 6 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our sales team.

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=ed7974b4-29fc-4e1c-999f-6c76e065e48f&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for CentOS 6, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)
* [els-rollout.cloudlinux.com](https://els-rollout.cloudlinux.com/)

## Installing the repository

1. Download an installation script:

   <CodeWithCopy>

   ```
   wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>

   ```
   sh install-centos6-els-repo.sh --license-key XXXXXXXX
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
   [els@centos6 ~]# yum info els-define
   Loaded plugins: fastestmirror
   Loading mirror speeds from cached hostfile
   Available Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.1.el6
   Size        : 2.6 k
   Repo        : centos6-els
   Summary     : CentOS Server simulate release file
   License     : GPLv2
   Description : CentOS Server simulate els release files
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **CentOS 6 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos6els/oval.xml)
* **CentOS 6 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos6els/](https://security.tuxcare.com/csaf/v2/els_os/centos6els/)
* **CentOS 6 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos6els](https://cve.tuxcare.com/rss_feed/els/releases/centos6els)

## Removing the ELS repository

1. List ELS repository file (ending with `-els.repo`) in the repository folder:

   <CodeWithCopy>

   ```
   ls -l /etc/yum.repos.d/*-els.repo
   ```

   </CodeWithCopy>

   Example output:
   ```
   -rw-r--r-- 1 root root 210 Aug  2  2021 /etc/yum.repos.d/centos6-els.repo
   ```

   Remove the file to disable the ELS repository:

   <CodeWithCopy>

   ```
   rm /etc/yum.repos.d/centos6-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
