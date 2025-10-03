# CentOS 6 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for CentOS 6, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)
* [els-rollout.cloudlinux.com](https://els-rollout.cloudlinux.com/)

## Installation of repositories

1. Download an installer script:

   <CodeWithCopy>

   ```
   wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installer script with keys:

   <CodeWithCopy>

   ```
   sh install-centos6-els-repo.sh --license-key XXXX-XXXXXXXXX
   ```

   </CodeWithCopy>

   The installation script registers a server in CLN with the key and adds a PGP key to the server.

3. To ensure the installation has been completed successfully, run the following command:

   <CodeWithCopy>

   ```
   yum info els-define
   ```

   </CodeWithCopy>

   It should return the info about an available package. If you can see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular yum upgrade command.

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

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/security-updates).

* **CentOS 6 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/centos6els/oval.xml)
* **CentOS 6 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/centos6els/](https://security.tuxcare.com/csaf/v2/els_os/centos6els/)
* **CentOS 6 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/centos6els](https://cve.tuxcare.com/rss_feed/els/releases/centos6els)

## Deinstallation instructions for yum repositories

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
