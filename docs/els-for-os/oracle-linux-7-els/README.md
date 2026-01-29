# Oracle Linux 7 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=b577e8d3-7a54-4fd9-80d1-04b2222621f7&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Oracle Linux 7, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:
   
   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/oraclelinux7-els/install-oraclelinux7-els-repo.sh
   ```
   
   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.
   
   <CodeWithCopy>

   ```
   sh install-oraclelinux7-els-repo.sh --license-key XXXXXXXX
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

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Oracle Linux 7 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml)
* **Oracle Linux 7 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/)
* **Oracle Linux 7 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/oraclelinux7els](https://cve.tuxcare.com/rss_feed/els/releases/oraclelinux7els)

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
   rm /etc/yum.repos.d/oraclelinux7-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
