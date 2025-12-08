# Node.js

Endless Lifecycle Support (ELS) for Node.js from TuxCare provides security fixes for Node.js versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Node.js

alt-nodejs is a component provided by TuxCare designed for managing Node.js versions on servers and enabling users to run multiple Node.js versions simultaneously.

Here are the key features and characteristics of alt-nodejs:

1. **Multiple Node.js Versions** - alt-nodejs allows the installation and usage of various Node.js versions on a single server. This enables users to select the Node.js version that best suits their applications.

2. **User Segmentation** - alt-nodejs allows administrators to provide different Node.js versions for different users or applications. Each user can choose the Node.js version that suits their project.

3. **Enhanced Compatibility** - alt-nodejs is designed to ensure maximum compatibility with various Node.js applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Node.js applications.

4. **Updates and Support** - TuxCare provides regular updates for alt-nodejs, including bug fixes, performance improvements, and updates for new Node.js versions. This helps ensure the security and currency of Node.js usage.

5. **Easy Version Switching** - alt-nodejs allows switching between versions, users can easily manage which Node.js version is active in their environment.

alt-nodejs provides a more flexible and convenient environment for working with different Node.js versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Node.js versions.

## Supported OS and Node.js versions

**Supported architecture:** 64-bit.

| Operating Systems                                            | Package Type | OS Version                        |
| :----------------------------------------------------------: | :----------: | :-------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               |
| EL 9 ( AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)    | RPM          | 9.x                               |
| Ubuntu                                                       | DEB          | 18.04, 20.04, 22.04, 24.04        |
| Debian                                                       | DEB          | 10, 11, 12, 13                    |

**For supported Node.js versions, see [cve.tuxcare.com](https://cve.tuxcare.com/els-alt-nodejs/projects).**

* Other distros and architectures upon request.

## Installation Instructions

The following steps are provided for both **RPM-based** (CentOS, CentOS Stream, CloudLinux, Oracle Linux, AlmaLinux, etc) and **DEB-based** (Debian, Ubuntu) systems. Please select the appropriate tab for your distribution.

1. Download the installer script:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-deb-repo.sh` }
   ]" />

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-nodejs-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-nodejs-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available, it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum upgrade` },
      { title: 'DEB', content: `apt upgrade` }
    ]" />

4. To display detailed information about the installed package, run the following command: 

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum info alt-nodejs18` },
     { title: 'DEB', content: `apt-cache show alt-nodejs18` }
   ]" />

5. Install Node.js package and use specific versions.

   **Installation options:**
   
   * Standard commands to install each version separately, for example, installing alt-nodejs18:
   
     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum install alt-nodejs18*` },
       { title: 'DEB', content: `apt-get install alt-nodejs18*` }
     ]" />
   
   * To install all versions at the same time:
   
     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum groupinstall alt-nodejs` },
       { title: 'DEB', content: `apt-get install alt-nodejs` }
     ]" />
   
   * To find out which groups/meta-package are available for installation, use the following command:
   
     <CodeTabs :tabs="[
       { title: 'RPM', content: `sudo yum group list` },
       { title: 'DEB', content: `apt list -a | grep alt-nodejs` }
     ]" />

   **Using alt-nodejs versions:**
   
   `alt-nodejs` versions are intended to be installed alongside the system's default node and allow multiple versions to coexist. To use a specific `alt-nodejs` version, please run it directly from its installation directory, for example:

   <CodeTabs :tabs="[
     { title: 'RPM', content: rpmex },
     { title: 'DEB', content: debex }
   ]" />

## RSS Feed

* EL 7 (CentOS, CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el7](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el7)
* EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el8](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el8)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el9](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/el9)
* Ubuntu 18.04: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu18.04/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu18.04/)
* Ubuntu 20.04: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu20.04/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu20.04/)
* Ubuntu 22.04: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu22.04/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu22.04/)
* Ubuntu 24.04: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu24.04/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/ubuntu24.04/)
* Debian 10: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian10/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian10/)
* Debian 11: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian11/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian11/)
* Debian 12: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian12/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian12/)
* Debian 13: [cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian13/](https://cve.tuxcare.com/rss_feed/els-alt-nodejs/releases/debian13/)

<!--examples -->

<script setup>

const rpmex =
`$ source /opt/alt/alt-nodejs18/enable
$ node -v 
v18.20.8`

const debex =
`$ source /opt/alt/alt-nodejs18/enable
$ node -v 
v18.20.8`

</script>