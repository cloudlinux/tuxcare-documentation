# Oracle Linux 7 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Oracle Linux 7, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installation of repositories

1. Download an installer script:
   
   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/oraclelinux7-els/install-oraclelinux7-els-repo.sh
   ```
   
   </CodeWithCopy>

2. Run the installer script with keys:
   
   <CodeWithCopy>

   ```
   sh install-oraclelinux7-els-repo.sh --license-key XXXXXXXX
   ```

   </CodeWithCopy>

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
   [els@oraclelinux7 ~]# yum info els-define
   Loaded plugins: fastestmirror
   Loading mirror speeds from cached hostfile
   Installed Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.4.el7
   Size        : 52
   Repo        : installed
   From repo   : oraclelinux7-els
   Summary     : OEL7 Server els-release file
   License     : GPLv2
   Description : OEL7 Server els-release file
   ```

### Common Use Cases

**UEKR6 repository**

The installation script **does not automatically add** the TuxCare UEKR6 repository. If you plan to use the `kernel-uek` package on your Oracle Linux 7 system, you need to enable the TuxCare UEKR6 repository manually.

1. Use an editor of your choice to edit the `/etc/yum.repos.d/oraclelinux7-els.repo` file:

   <CodeWithCopy>

   ```
   vi /etc/yum.repos.d/oraclelinux7-els.repo
   ```

   </CodeWithCopy>

2. Add the following lines there to enable the TuxCare UEKR 6 repository:
   
   <CodeWithCopy>

   ```
   [oraclelinux7-els-UEKR6]
   name = OracleLinux 7 Extended Lifecycle Support by TuxCare UEKR6
   baseurl = https://repo.tuxcare.com/oraclelinux7-els/\$elstoken/UEKR6/\$basearch/
   enabled = 1
   ```

   </CodeWithCopy>

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./machine-readable-security-data).

* **Oracle Linux 7 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml)
* **Oracle Linux 7 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/)
* **Oracle Linux 7 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/oraclelinux7els](https://cve.tuxcare.com/rss_feed/els/releases/oraclelinux7els)

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
   rm /etc/yum.repos.d/oraclelinux7-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
