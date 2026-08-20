# Node.js

Endless Lifecycle Support (ELS) for Node.js from TuxCare provides security fixes for Node.js versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Node.js

alt-nodejs is a component provided by TuxCare designed for managing Node.js versions on servers and enabling users to run multiple Node.js versions simultaneously.

Here are the key features and characteristics of alt-nodejs:

* **Multiple Node.js Versions** - alt-nodejs allows the installation and usage of various Node.js versions on a single server. This enables users to select the Node.js version that best suits their applications.

* **User Segmentation** - alt-nodejs allows administrators to provide different Node.js versions for different users or applications. Each user can choose the Node.js version that suits their project.

* **Enhanced Compatibility** - alt-nodejs is designed to ensure maximum compatibility with various Node.js applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Node.js applications.

* **Updates and Support** - TuxCare provides regular updates for alt-nodejs, including bug fixes, performance improvements, and updates for new Node.js versions. This helps ensure the security and currency of Node.js usage.

* **Easy Version Switching** - alt-nodejs allows switching between versions; users can easily manage which Node.js version is active in their environment.

alt-nodejs provides a more flexible and convenient environment for working with different Node.js versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Node.js versions.

## Supported OS and Node.js versions

| Operating Systems                                            | Package Type | OS Version                        | Node.js versions                  |
| :----------------------------------------------------------: | :----------: | :-------------------------------: | :-------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               | 12, 14, 16, 18, 20                |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               | 12, 14, 16, 18, 20                |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)     | RPM          | 9.x                               | 12, 14, 16, 18, 20                |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)            | RPM          | 10.x                              | 14, 16, 18, 20                    |
| Ubuntu                                                       | DEB          | 18.04, 20.04, 22.04, 24.04        | 12, 14, 16, 18, 20                |
| Debian                                                       | DEB          | 10, 11                            | 12, 14, 16, 18, 20                |
| Debian                                                       | DEB          | 12                                | 12, 14, 16, 18, 20, 23            |
| Debian                                                       | DEB          | 13                                | 12, 14, 16, 18, 20, 22, 23, 24    |
| Alpine Linux                                                 | APK          | 3.23, 3.24                        | 12, 14, 16, 18, 20, 22, 23, 24    |

**Supported architectures:**

* x86_64 — all supported OSes
* arm64 — Debian 12 and 13

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-deb-repo.sh` },
     { title: 'APK', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-apk-repo.sh` }
   ]" />

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-nodejs-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-nodejs-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'APK', content: `sh install-els-alt-nodejs-apk-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Install a Node.js version

   Each version can be installed individually or all versions at once.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-nodejs18*` },
     { title: 'DEB', content: `apt-get install alt-nodejs18*` },
     { title: 'APK', content: `apk add 'alt-nodejs18*'` }
   ]" />

   To install all versions at the same time:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-nodejs` },
     { title: 'DEB', content: `apt-get install alt-nodejs` },
     { title: 'APK', content: `apk add alt-nodejs` }
   ]" />

   To list available groups/meta-packages:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sudo yum group list` },
     { title: 'DEB', content: `apt list -a | grep alt-nodejs` },
     { title: 'APK', content: `apk search alt-nodejs` }
   ]" />

4. Verify the installation

   Activate the desired version and check it returns the expected version:

   ```text
   source /opt/alt/alt-nodejs<version>/enable
   node -v
   ```

5. Update packages

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update 'alt-nodejs*'` },
     { title: 'DEB', content: `apt-get update && apt-get --only-upgrade install 'alt-nodejs*'` },
     { title: 'APK', content: `apk update && apk upgrade 'alt-nodejs*'` }
   ]" />

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Node.js) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Node.js) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Node.js) — Full list of product parts covered by ELS
* ![](/images/shield.webp) [Machine-readable security data](/els-for-runtimes/machine-readable-security-data/#node.js) — Common Security Advisory Framework (CSAF) advisories and RSS feeds for Node.js ELS

</WhatsNext>
