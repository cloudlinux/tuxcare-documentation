# Red Hat Enterprise Linux 7 ELS

## Connecting to ELS repository

To install the Endless Lifecycle Support repository on a server, download an installation script and run it with a license key. The installation script registers the server in the CLN using the license key, adds a PGP key to the server, and creates the ELS repository.

### Outbound Firewall Settings

To use Endless Lifecycle Support for Red Hat Enterprise Linux 7, you need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.tuxcare.com](http://repo.tuxcare.com)

## Installing the repository

1. Download an installation script:
   
   <CodeWithCopy>

   ```
   wget https://repo.tuxcare.com/rhel7-els/install-rhel7-els-repo.sh
   ```

   </CodeWithCopy>

2. Run the installation script with your license key. It registers the server in the CLN with the key, adds a PGP key to the server.

   <CodeWithCopy>

   ```
   sh install-rhel7-els-repo.sh --license-key XXXXXXXX
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

## Security Updates

TuxCare provides security updates as a part of ELS for OS along with OpenSCAP scanning instructions - [learn more](/els-for-os/machine-readable-security-data/).

* **Red Hat Enterprise Linux 7 ELS**: [oval.xml](https://security.tuxcare.com/oval/els_os/rhel7els/oval.xml)
* **Red Hat Enterprise Linux 7 ELS**: [security.tuxcare.com/csaf/v2/els_os/rhel7els/](https://security.tuxcare.com/csaf/v2/els_os/rhel7els/)
* **Red Hat Enterprise Linux 7 ELS**: [cve.tuxcare.com/rss_feed/els/releases/rhel7els](https://cve.tuxcare.com/rss_feed/els/releases/rhel7els)

## Removing the ELS repository

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
