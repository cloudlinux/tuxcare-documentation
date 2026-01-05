# Red Hat Enterprise Linux 7 ELS

## Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

### Outbound Firewall Settings

In order to use Endless Lifecycle Support for Red Hat Enterprise Linux 7, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installation of repositories

1. Download an installer script:
   
   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/rhel7-els/install-rhel7-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installer script with keys:

   <CodeWithCopy>

   ```
   sh install-rhel7-els-repo.sh --license-key XXXXXXXX
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

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](./machine-readable-security-data).

* **Red Hat Enterprise Linux 7 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/rhel7els/oval.xml)
* **Red Hat Enterprise Linux 7 ELS**: [security.tuxcare.com/csaf/v2/els_os/rhel7els/](https://security.tuxcare.com/csaf/v2/els_os/rhel7els/)
* **Red Hat Enterprise Linux 7 ELS**: [cve.tuxcare.com/rss_feed/els/releases/rhel7els](https://cve.tuxcare.com/rss_feed/els/releases/rhel7els)

## Deinstallation instructions for yum repositories

1. List ELS repository file (ending with `-els.repo`) in the repository folder:

   <CodeWithCopy>

   ```
   ls -l /etc/yum.repos.d/*-els.repo
   ```

   </CodeWithCopy>

   Remove the file to disable the ELS repository.

2. Uninstall the `els-define` package:

   <CodeWithCopy>

   ```
   yum remove els-define
   ```

   </CodeWithCopy>
