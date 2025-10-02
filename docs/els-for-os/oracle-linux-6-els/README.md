# Oracle Linux 6 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Oracle Linux 6, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

## Installation of repositories

1. Download an installer script:
   
   <CodeWithCopy>

   ```
   wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
   ```

   </CodeWithCopy>

2. Run the installer script with keys:

   <CodeWithCopy>
   
   ```
   python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
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
   [els@oraclelinux6 ~]# python install-oraclelinux-els-repo.py --license-key XXXX-XXXXXXX
   Check that repository isn't created... Ok
   https://cln.cloudlinux.com/cln/api/centos/token/register
   Request repository token for this server... Ok
   Prepare repo configuration... Ok
   Save repo file to /etc/yum.repos.d/oraclelinux-els.repo... Ok
   Save GPG key to /etc/pki/rpm-gpg/RPM-GPG-KEY-CloudLinux... Ok
   Import Cloudlinux GPG...

   [els@oraclelinux6 ~]# yum info els-define

   Available Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.1.el6
   Size        : 2.7 k
   Repo        : oraclelinux-els
   Summary     : OEL6 Server simulate release file
   License     : GPLv2
   Description : OLE6 Server simulate els release files
   ```

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./security-updates).

* **Oracle Linux 6 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux6els/oval.xml)
* **Oracle Linux 6 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/)
* **Oracle Linux 6 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/els/releases/oraclelinux6els](https://cve.tuxcare.com/rss_feed/els/releases/oraclelinux6els)

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
   rm /etc/yum.repos.d/oraclelinux-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
