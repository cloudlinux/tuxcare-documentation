# Oracle Linux 6 ELS

## Supported Architecture and Packages

Supported architecture is x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

The list of supported packages is provided [here](https://cve.tuxcare.com/els/projects?os=f748ff92-b226-49b6-8e15-60eb3a4bf397&project=&version=&packages=&orderBy=project-asc).

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Oracle Linux 6, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

## Installing the repository

1. Download an installation script:
   
   <CodeWithCopy>

   ```
   wget https://repo.els.tuxcare.com/oraclelinux6-els/install-oraclelinux6-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>
   
   ```
   python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
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

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Oracle Linux 6 ELS OVAL stream**: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux6els/oval.xml)
* **Oracle Linux 6 ELS CSAF data**: [security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/)
* **Oracle Linux 6 ELS RSS release feed**: [cve.tuxcare.com/rss_feed/els/releases/oraclelinux6els](https://cve.tuxcare.com/rss_feed/els/releases/oraclelinux6els)

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
   rm /etc/yum.repos.d/oraclelinux-els.repo
   ```

   </CodeWithCopy>

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
