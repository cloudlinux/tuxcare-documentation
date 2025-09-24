# Ruby

Endless Lifecycle Support (ELS) for Ruby from TuxCare provides security fixes for Ruby versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## Supported OS and Ruby versions

**Supported architecture:** 64-bit.

| Operating Systems                                            | Package Type | OS Version                        |
| :----------------------------------------------------------: | :----------: | :-------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               |
|  EL 9 ( AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)   | RPM          | 9.x                               |
| Ubuntu                                                       | DEB          | 18.04, 20.04, 22.04, 24.04        |
| Debian                                                       | DEB          | 10, 11, 12, 13                    |

**For supported Ruby versions, see [cve.tuxcare.com](LINK).**

* Other distros and architectures upon request.

## Installation Instructions

The following steps are provided for both **RPM-based** (CentOS, CentOS Stream, CloudLinux, Oracle Linux, AlmaLinux, etc) and **DEB-based** (Debian, Ubuntu) systems. Please select the appropriate tab for your distribution.

1. Download the installer script:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-deb-repo.sh` }
   ]" />

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-ruby-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-ruby-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum upgrade` },
      { title: 'DEB', content: `apt upgrade` }
    ]" />

4. Install Ruby package.

   * Standard commands to install each version separately, for example, installing alt-rubyVERSION:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum install alt-rubyVERSION*` },
       { title: 'DEB', content: `apt-get install alt-rubyVERSION*` }
     ]" />

   * To install all versions at the same time:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum groupinstall alt-ruby` },
       { title: 'DEB', content: `apt-get install alt-ruby` }
     ]" />

   * To find out which groups/meta-package are available for installation, use the following command:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `sudo yum group list` },
       { title: 'DEB', content: `apt list -a | grep alt-ruby` }
     ]" />