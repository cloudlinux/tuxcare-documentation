# Ruby

Endless Lifecycle Support (ELS) for Ruby from TuxCare provides security fixes for Ruby versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Ruby

alt-ruby is a component provided by TuxCare designed for managing Ruby versions on servers and enabling users to run multiple Ruby versions simultaneously.

Here are the key features and characteristics of alt-ruby:

* **Multiple Ruby Versions** - alt-ruby allows the installation and usage of various Ruby versions on a single server. This enables users to select the Ruby version that best suits their applications.

* **User Segmentation** - alt-ruby allows administrators to provide different Ruby versions for different users or applications. Each user can choose the Ruby version that suits their project.

* **Enhanced Compatibility** - alt-ruby is designed to ensure maximum compatibility with various Ruby applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Ruby applications.

* **Updates and Support** - TuxCare provides regular updates for alt-ruby, including bug fixes, performance improvements, and updates for new Ruby versions. This helps ensure the security and currency of Ruby usage.

* **Easy Version Switching** - alt-ruby allows switching between versions; users can easily manage which Ruby version is active in their environment.

alt-ruby provides a more flexible and convenient environment for working with different Ruby versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Ruby versions.

## Supported OS and Ruby versions

| Operating Systems                                                        | Package Type | OS Version | Ruby versions                 |
| :----------------------------------------------------------------------: | :----------: | :--------: | :---------------------------: |
| EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.)  | RPM          | 8.x        | 2.7, 3.0, 3.1, 3.2            |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)                 | RPM          | 9.x        | 2.7, 3.0, 3.1, 3.2            |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)                        | RPM          | 10.x       | 2.7, 3.0, 3.1, 3.2            |
| Debian                                                                   | DEB          | 11         | 2.7, 3.0, 3.1, 3.2            |
| Debian                                                                   | DEB          | 12         | 2.6, 2.7, 3.0, 3.1, 3.2       |
| Debian                                                                   | DEB          | 13         | 2.6, 2.7, 3.0, 3.1, 3.2       |
| Ubuntu                                                                   | DEB          | 22.04      | 2.7, 3.0, 3.1, 3.2            |
| Ubuntu                                                                   | DEB          | 24.04      | 2.7, 3.0, 3.1, 3.2            |
| Alpine Linux                                                             | APK          | 3.22       | 2.6, 2.7, 3.0, 3.1, 3.2       |

**Supported architectures:**

* x86_64 — all supported OSes
* aarch64/arm64 — Debian 12 and 13, Alpine Linux

<ContactSales text="Other distros and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-deb-repo.sh` },
     { title: 'APK', content: `wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-apk-repo.sh` }
   ]" />

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-ruby-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-ruby-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'APK', content: `sh install-els-alt-ruby-apk-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Install a Ruby version

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-ruby27` },
     { title: 'DEB', content: `apt-get install alt-ruby27` },
     { title: 'APK', content: `apk add alt-ruby27` }
   ]" />

   To see available packages:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum list available 'alt-ruby*'` },
     { title: 'DEB', content: `apt list -a | grep alt-ruby` },
     { title: 'APK', content: `apk search alt-ruby` }
   ]" />

4. Verify the installation

   Check that the binary exists and returns the expected version:

   ```text
   /opt/alt/<ruby-version>/bin/ruby -v
   ```

   Optionally, add it to `PATH` to use it as default:

   ```text
   export PATH=/opt/alt/<ruby-version>/bin:$PATH
   ruby -v
   which ruby
   ```

5. Update packages

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update 'alt-ruby*'` },
     { title: 'DEB', content: `apt-get update && apt-get --only-upgrade install 'alt-ruby*'` },
     { title: 'APK', content: `apk update && apk upgrade 'alt-ruby*'` }
   ]" />

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Ruby) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Ruby) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Ruby) — Full list of product parts covered by ELS
* ![](/images/shield.webp) [Machine-readable security data](../machine-readable-security-data/) — Common Security Advisory Framework (CSAF) advisories and RSS feeds for Ruby ELS

</WhatsNext>
