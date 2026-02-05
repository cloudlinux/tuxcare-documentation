# PHP

Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-PHP

alt-php is a component provided by TuxCare designed for managing PHP versions on web servers and enabling users to choose PHP versions for their websites.

Here are the key features and characteristics of alt-php:

1. **Multiple PHP Versions** - alt-php allows the installation and usage of various PHP versions on a single web server. This enables users to select the PHP version that best suits their web applications.

2. **User Segmentation** - alt-php allows hosting providers and web server administrators to provide different PHP versions for different users. Each user can choose the PHP version that suits their website.

3. **Enhanced Compatibility** - alt-php is designed to ensure maximum compatibility with various web applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of PHP applications.

4. **Updates and Support** - CloudLinux provides regular updates for alt-php, including bug fixes, performance improvements, and updates for new PHP versions. This helps ensure the security and currency of PHP usage.

5. **Management Tools** - alt-php usually comes with a set of management tools, such as PHP Selector, allowing users to manage PHP versions and enable/disable various PHP extensions.

alt-php provides a more flexible and convenient environment for working with different PHP versions on a single server, which is particularly useful in a web hosting environment where multiple users have varying requirements for PHP versions for their web applications.

## Supported OS and PHP versions

**Supported architecture:** 64-bit.

<TableTabs>

  <template #Active_Support>

| OS                                                                       | Package Type | OS Version                        |
| :----------------------------------------------------------------------: | :----------: | :-------------------------------: |
| EL 7 ( Amazon Linux 2, CentOS, CloudLinux, Oracle Linux, etc.)           | RPM          | 7.x                        |
| EL 8 ( AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                        |
| EL 9 ( AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 9.x                        |
| EL 10 ( AlmaLinux, CloudLinux, Oracle Linux, etc.)                       | RPM          | 10.x                        |
| Ubuntu                                                                   | DEB          | 16.04, 18.04, 20.04, 22.04, 24.04 |
| Debian                                                                   | DEB          | 10, 11, 12, 13                    |
| Windows                                                                  | -            | Windows Server 2019, 2022, 2025   |

**For supported PHP versions, see [cve.tuxcare.com](https://cve.tuxcare.com/els-alt-php/projects).**

Other distros and architectures upon request.

  </template>

  <template #End_Of_Life>

CloudLinux provides additional security support time of 
php, python, ruby and nodejs after the end of support from the vendor.
Below are tables with information about the time of security support from the vendor and from CloudLinux.

*EOL - end of life

*SST - security support time

| Version |  Released  | EOL by vendor | SST by vendor (years) |    EOL by CloudLinux    | SST by Cloudlinux after vendor's EOL (years) |
|:-------:|:----------:|:-------------:|:---------------------:|:-----------------------:|:--------------------------------------------:|
|   4.4   | 07.11.2005 |  08.07.2008   |          2.7          | [01.07.2023](https://blog.cloudlinux.com/php-4.4-end-of-life-0) | 14.9 |
|   5.1   | 23.11.2005 |  24.08.2006   |          0.8          | [01.04.2024](https://blog.cloudlinux.com/php-5.1-end-of-life)   | 17.6 |
|   5.2   | 01.11.2006 |  06.01.2011   |          4.2          | 
|   5.3   | 29.06.2009 |  14.08.2014   |          5.1          |
|   5.4   | 29.02.2012 |  14.09.2015   |          3.5          |
|   5.5   | 19.06.2013 |  21.07.2016	 |          3.1          |
|   5.6   |	27.08.2014 |  31.12.2018 	 |          4.3          |
|   7.0   | 12.01.2015 |  10.01.2019 	 |          3.9          |
|   7.1   | 30.11.2016 |  01.12.2019 	 |          3.0          |
|   7.2   | 28.11.2017 |  30.11.2020 	 |          3.0          |
|   7.3   | 04.12.2018 |  06.12.2021   |          3.0          |
|   7.4   | 26.11.2019 |  28.11.2022	 |          3.0          |
|   8.0   | 24.11.2020 |  26.11.2023	 |          3.0          |
|   8.1   | 23.11.2021 |  25.11.2024	 |          3.0          |
|   8.2   | 08.12.2022 |  08.12.2025	 |          3.0          |

  </template>

</TableTabs>

## Installation Instructions for Linux

### Get user credentials

1. Obtain the required license to get access to the service.
2. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.

### Install ALT-PHP

The following steps are provided for both **RPM-based** (CentOS, CentOS Stream, CloudLinux, Oracle Linux, AlmaLinux, Amazon Linux 2, etc) and **DEB-based** (Debian, Ubuntu) systems. Please select the appropriate tab for your distribution.

:::tip
**Amazon Linux 2-specific preprequisities**. Before installing `alt-php`, make sure `libvpx` is installed. Amazon Linux 2 provides two version of libvpx: 1.9 (the default) and 1.3. `alt-php` requires 1.3 for compatibility with EL 7 systems like CentOS 7:

<CodeWithCopy>

```
sudo yum install libvpx-1.3.0
```
</CodeWithCopy>

:::

1. Download the installer script:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-rpm-repo.sh` },
      { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-deb-repo.sh` }
    ]" />

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.

    <CodeTabs :tabs="[
      { title: 'RPM', content: `sh install-els-alt-php-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
      { title: 'DEB', content: `bash install-els-alt-php-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
    ]" />

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum upgrade` },
      { title: 'DEB', content: `apt upgrade` }
    ]" />

4. Install PHP package. Each version of PHP can be installed individually or all versions at once.

   * Standard commands to install each version separately, for example, installing alt-php73:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum groupinstall alt-php73` },
       { title: 'DEB', content: `apt-get install alt-php73-meta` }
     ]" />

   * To install all versions at the same time:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `yum groupinstall alt-php` },
       { title: 'DEB', content: `apt-get install alt-php` }
     ]" />

   * To find out which groups/meta-package are available for installation, use the following command:
 
     <CodeTabs :tabs="[
       { title: 'RPM', content: `sudo yum group list` },
       { title: 'DEB', content: `apt list -a | grep alt-php` }
     ]" />

     For example:

     <CodeTabs :tabs="[
     { title: 'RPM', content:
     `sudo yum group list 
     ............\n
     Available Environment Groups:
       Server with GUI
       Server
       Minimal Install
       CloudLinux OS Admin (minimal)
       CloudLinux OS Solo (minimal)
       Workstation
       Custom Operating System
       Virtualization Host
     Available Groups:
       alt-nodejs
       alt-nodejs10
       alt-nodejs11
       alt-nodejs12
       alt-nodejs14
       alt-nodejs6
       alt-nodejs8
       alt-nodejs9
       alt-php
       alt-php44
       alt-php51
       alt-php52
     ..................
       alt-ruby30
       alt-ruby31
       alt-ruby32` },
     { title: 'DEB', content:
     `apt list -a | grep alt-php 
     ............
     alt-php-config/unknown 1-51.1 amd64
     alt-php-internal-bcmath/unknown 7.4.33-13.1 amd64
     alt-php-internal-bcmath/unknown 7.4.13-3 amd64
     alt-php-internal-cli/unknown,now 7.4.33-13.1 amd64 [installed,automatic]
     alt-php-internal-cli/unknown 7.4.13-3 amd64
     alt-php-internal-common/unknown,now 7.4.33-13.1 amd64 [installed,automatic]
     alt-php-internal-common/unknown 7.4.13-3 amd64
     .........
     alt-php83-soap/unknown 8.3.0rc3-1 amd64
     alt-php83-sodium/unknown 8.3.0rc3-1 amd64
     alt-php83-tidy/unknown 8.3.0rc3-1 amd64
     alt-php83-xml/unknown 8.3.0rc3-1 amd64
     alt-php83/unknown 8.3.0rc3-1 amd64
     alt-php/unknown 1-5 all` }
     ]" />

   * To get a list of packages of a specific group or meta package, use the following command:

     <CodeTabs :tabs="[
       { title: 'RPM', content: `sudo yum groupinfo alt-phpXY` },
       { title: 'DEB', content: `apt-cache showpkg alt-phpXY` }
     ]" />

     Replace `XY` with a version of alt-php. For example:

     <CodeTabs :tabs="[
     { title: 'RPM', content:
     `sudo yum groupinfo alt-php72 
     ............\n
     Group: alt-php72
     Description: PHP 7.2.x packages for CloudLinux OS PHP Selector
     Default Packages:
       alt-php72
       alt-php72-bcmath
       alt-php72-brotli
       alt-php72-cli
       alt-php72-common
       alt-php72-dba
       alt-php72-devel
       ................
       alt-php72-xml
       alt-php72-xmlrpc` },
     { title: 'DEB', content:
     `apt-cache showpkg alt-php72
     ............
     Dependencies:
     7.2.34-34 - alt-php72-cli (5 7.2.34-34) alt-php72-common (5 7.2.34-34) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null))
     7.2.34-33 - alt-php72-cli (5 7.2.34-33) alt-php72-common (5 7.2.34-33) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null))
     7.2.34-19.2 - alt-pcre (0 (null)) alt-php72-cli (5 7.2.34-19.2) alt-php72-common (5 7.2.34-19.2) alt-php-config (2 1-45) alt-sqlite (0 (null)) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null)) libxml2 (0 (null))` }
     ]" />

   ::: tip Important!
   When executing the `apt` command, a warning may appear:

   ```
   WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
   ```

   The `apt` commandline is designed as an end-user tool and it may change behavior between versions. 
   While it tries not to break backward compatibility this is not guaranteed either if a change seems beneficial for interactive use.
   All features of `apt` are available in dedicated APT tools like `apt-get` and `apt-cache` as well. 
   `apt` just changes the default value of some options. Therefore, we recommend using these commands (potentially with some additional options enabled) as they keep backward compatibility as much as possible.
   :::

### Useful Commands and Usage of PHP ELS

When you deploy an updated version of PHP through PHP ELS, using your system's regular update tool (yum, dnf, apt) the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

<TableTabs>

  <template #Check_current_version_of_alt-php_packages>

To check whether the package is installed and see its current version, use the following command based on your OS:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum list installed | grep php` },
    { title: 'DEB', content: `dpkg -l | grep php` }
  ]" />

  For example, alt-php73:

  <CodeTabs :tabs="[
  { title: 'RPM', content:
  `sudo yum list installed | grep php 
  ............
  alt-php-config.noarch                       1-54.el8                                               @cloudlinux-updates-testing
  alt-php-internal.x86_64                     7.4.33-6.el8                                           @cloudlinux-updates-testing
  alt-php-internal-cli.x86_64                 7.4.33-6.el8                                           @cloudlinux-updates-testing
  alt-php-internal-common.x86_64              7.4.33-6.el8                                           @cloudlinux-updates-testing
  alt-php-internal-intl.x86_64                7.4.33-6.el8                                           @cloudlinux-updates-testing
  alt-php-internal-mbstring.x86_64            7.4.33-6.el8                                           @cloudlinux-updates-testing
  alt-php-libc-client11.x86_64                2007f-3.el8                                            @cloudlinux-updates-testing
  alt-php-ssa.x86_64                          0.4-3.el8                                              @AppStream\n
  alt-php73.x86_64                            1:7.3.33-18.el8                                        @cloudlinux-updates-testing
  alt-php73-apm-agent.x86_64                  1.9.0-1.el8                                            @cloudlinux-updates-testing
  alt-php73-bcmath.x86_64                     1:7.3.33-18.el8                                        @cloudlinux-updates-testing
  alt-php73-bcmath-debuginfo.x86_64           1:7.3.31-2.el8                                         @cloudlinux-updates-testing
  alt-php73-brotli.x86_64                     0.5.0-2.el8                                            @cloudlinux-x86_64-server-8
  .....................
  alt-php73-xmlrpc-debuginfo.x86_64           1:7.3.31-2.el8                                         @cloudlinux-updates-testing` },
  { title: 'DEB', content:
  `dpkg -l | grep php  
  ............
  ii  alt-php-internal-cli                  7.4.33-13.1                       amd64        command-line interpreter for the PHP scripting language
  ii  alt-php-internal-common               7.4.33-13.1                       amd64        documentation, examples and common module for PHP
  ii  alt-php-internal-intl                 7.4.33-13.1                       amd64        Internationalisation module for PHP
  ii  alt-php-internal-mbstring             7.4.33-13.1                       amd64        MBSTRING module for PHP
  ii  alt-php-libc-client                   2007f-1                           amd64        Provides a common API for accessing mailboxes.
  ii  alt-php73                             7.3.33-19                         amd64        server-side, HTML-embedded scripting language (metapackage)
  ii  alt-php73-bcmath                      7.3.33-19                         amd64        Bcmath module for PHP
  ii  alt-php73-cli                         7.3.33-19                         amd64        command-line interpreter for the PHP scripting language
  ii  alt-php73-common                      7.3.33-19                         amd64        documentation, examples and common module for PHP
  ii  alt-php73-dba                         7.3.33-19                         amd64        DBA module for PHP
  ii  alt-php73-dev                         7.3.33-19                         amd64        Files for PHP7.0 module development
  ii  alt-php73-enchant                     7.3.33-19                         amd64        Enchant module for PHP
  ii  alt-php73-firebird                    7.3.33-19                         amd64        firebird module for PHP
  ......................
  ii  alt-php73-xmlrpc                      7.3.33-19                         amd64        XMLRPC-EPI module for PHP` }
  ]" />

  </template>

  <template #Display_information_about_the_installed_alt-php_package>

To display detailed information about the installed package, run the following command: 
    
  <CodeTabs :tabs="[
    { title: 'RPM', content: `yum info alt-php73` },
    { title: 'DEB', content: `alt-php73-cli` }
  ]" />

  An example output:

  <CodeTabs :tabs="[
  { title: 'RPM', content: 
  `Available Packages
  Name        : alt-php73
  Arch        : x86_64
  Epoch       : 1
  Version     : 7.3.33
  Release     : 5.2.el7
  Size        : 22 k
  Repo        : alt-php-els/7
  Summary     : PHP scripting language for creating dynamic web sites
  URL         : http://www.php.net/
  License     : PHP and LGPLv2 and LGPLv2+
  Description : PHP is an HTML-embedded scripting language.` },
  { title: 'DEB', content: 
  `Package: alt-php73-cli
  Source: php
  Version: 7.3.18-1
  Architecture: amd64
  Maintainer: Sergey Fokin <sfokin@cloudlinux.com>
  Installed-Size: 51694
  Depends: libbz2-1.0, libc6 (>= 2.14), libcurl3 (>= 7.44.0), libgmp10, libreadline6 (>= 6.0), libssl1.0.0 (>= 1.0.2~beta3), libsystemd0, libxml2 (>= 2.9.0), zlib1g (>= 1:1.1.4), alt-php73-common (= 7.3.18-1), libcurl4-openssl-dev, libnghttp2-14
  Homepage: http://www.php.net/
  Priority: optional
  Section: libs
  Filename: pool/main/p/php/alt-php73-cli_7.3.18-1_amd64.deb
  Size: 10247916
  SHA256: 6f107e60684695b6261871a5540c4742eb6e86befe767ab313d1eacda023e5bb
  SHA1: e8e7d6ab06470cbda5f5ef65a48c7c527ff52e9b
  MD5sum: d6c664d4f4b229c1e6727804888f6079
  Description: command-line interpreter for the PHP scripting language.
  Description-md5: 0d83f7bf7177d3376a59b73890c8494d` }
  ]" />

  </template>

  <template #Find_out_what_dependencies_alt-php_packages_have>

Dependencies for a successful installation of alt packages may vary depending on the specific packages and their versions. However, typically, the system automatically manages dependencies and provides the necessary packages when installing selected components:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum deplist alt-php73 ` },
    { title: 'DEB', content: `sudo apt-cache depends alt-php74` }
  ]" />

  For example:

  <CodeTabs :tabs="[
  { title: 'RPM', content:
  `sudo yum deplist alt-php73  
  ............
  package: alt-php73-1:7.3.15-1.2.el8.x86_64
    dependency: /bin/sh
    provider: bash-4.4.20-4.el8_6.x86_64
    dependency: alt-libcurl
    provider: alt-libcurl-7.64.0-2.el8.x86_64
    dependency: alt-libxml2
    provider: alt-libxml2-2.10.2-3.el8.x86_64
  ..................
  package: alt-php73-1:7.3.15-2.2.el8.x86_64
    dependency: /bin/sh
    provider: bash-4.4.20-4.el8_6.x86_64
    dependency: alt-libcurl
    provider: alt-libcurl-7.64.0-2.el8.x86_64
  ..................` },
  { title: 'DEB', content:
  `sudo apt-cache depends alt-php74  
  ............
  alt-php74
    Depends: alt-php74-cli
    Depends: alt-php74-common
    Depends: libreadline-dev
    Depends: libwebp-dev` }
  ]" />

  During the installation process, the package manager, such as YUM or APT, 
automatically handles dependencies, and you will usually see a list of packages that will be installed, 
modified, or removed to satisfy dependency requirements.

  If there are issues with dependencies, it can often be resolved by manually installing the missing packages. 
It's important to pay attention to any error messages provided by the system and follow the suggested instructions.

  </template>

  <template #Update_alt-php>

To update alt-php, you typically follow a process that involves using the package management tools provided by CloudLinux.

1. Check for Updates:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `sudo yum check-update` },
      { title: 'DEB', content:
      `sudo apt-get update
      apt list --upgradable` }
    ]" />

   Example:

   <CodeTabs :tabs="[
   { title: 'RPM', content:
   `sudo yum check-update  
   ............ \n
   kernel.x86_64                                    1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   kernel-core.x86_64                               1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   kernel-modules.x86_64                            1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   kernel-tools.x86_64                              1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   kernel-tools-libs.x86_64                         1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   python3-perf.x86_64                              1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
   Obsoleting Packages
   alt-python-cllib.x86_64                          2.0.8-3.el8.cloudlinux                      cloudlinux-updates-testing
       alt-python27-cllib.x86_64                    3.3.9-1.el8.cloudlinux                      @cloudlinux-updates-testing` },
   { title: 'DEB', content:
   `sudo apt-get update  
   ............\n
   Get:1 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
   Hit:2 http://us.archive.ubuntu.com/ubuntu focal InRelease
   Get:3 http://us.archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
   Hit:4 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/stable/20.04 focal InRelease
   Hit:5 http://us.archive.ubuntu.com/ubuntu focal-backports InRelease
   Get:6 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/testing/20.04 focal InRelease [1,168 B]
   Hit:7 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux-ea4/stable/20.04 focal InRelease
   Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2,604 kB]
   Hit:9 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux-ea4/testing/20.04 focal InRelease
   Get:10 http://us.archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2,994 kB]
   Get:11 http://security.ubuntu.com/ubuntu focal-security/main i386 Packages [680 kB]
   Get:12 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [914 kB]
   Get:13 http://us.archive.ubuntu.com/ubuntu focal-updates/main i386 Packages [913 kB]
   Get:14 http://security.ubuntu.com/ubuntu focal-security/universe i386 Packages [633 kB]
   Get:15 http://us.archive.ubuntu.com/ubuntu focal-updates/universe i386 Packages [761 kB]
   Get:16 http://us.archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1,139 kB]
   Get:17 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/testing/20.04 focal/main amd64 Packages [84.8 kB]
   Fetched 11.0 MB in 5s (2,182 kB/s)
   Reading package lists... Done\n
   apt list --upgradable\n 
   ............
   Listing... Done
   alt-python27-cllib/unknown 3.3.9-1 amd64 [upgradable from: 3.3.8-1]
   curl/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
   libcurl3-gnutls/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
   libcurl4-openssl-dev/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
   libcurl4/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
   librados2/focal-updates 15.2.17-0ubuntu0.20.04.5 amd64 [upgradable from: 15.2.17-0ubuntu0.20.04.4]
   librbd1/focal-updates 15.2.17-0ubuntu0.20.04.5 amd64 [upgradable from: 15.2.17-0ubuntu0.20.04.4]
   mod-hostinglimits/unknown 1.0-41 amd64 [upgradable from: 1.0-40]` }
   ]" />


2. Update packages:
    
   * Update all groups/meta-packages with names starting with "alt-php":

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum update alt-php*` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-php*` }
       ]" />

   * Update a group/meta-package named "alt-php":

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum groupupdate alt-php` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-php` }
       ]" />

   * You can specify a group/meta-package with a specific version of alt-php:

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum groupupdate alt-phpXY` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-phpXY` }
       ]" />

     Replace `XY` with a version of alt-php. For example:

     <CodeTabs :tabs="[
     { title: 'RPM', content:
     `sudo yum groupupdate alt-php74  
     ............ \n
     Dependencies resolved.
     ========================================================================================================================
     Package                           Architecture    Version                    Repository                           Size
     ========================================================================================================================
     Installing group/module packages:
     alt-php74                         x86_64          7.4.33-13.el8              cloudlinux-updates-testing           24 k
     alt-php74-bcmath                  x86_64          7.4.33-13.el8              cloudlinux-updates-testing           34 k
     alt-php74-brotli                  x86_64          0.5.0-2.el8                cloudlinux-x86_64-server-8          293 k
     alt-php74-cli                     x86_64          7.4.33-13.el8              cloudlinux-updates-testing          9.3 M
     alt-php74-common                  x86_64          7.4.33-13.el8              cloudlinux-updates-testing          480 k
     .....................
       libdav1d                          x86_64          0.5.2-1.el8                cloudlinux-updates-testing          346 k
     svt-av1-libs                      x86_64          0.8.7-1.el8                cloudlinux-updates-testing          4.7 M
     Installing Groups:
     alt-php74\n
     Transaction Summary
     ========================================================================================================================
     Install  53 Packages\n
     Total download size: 38 M
     Installed size: 139 M
     Is this ok [y/N]:` },
     { title: 'DEB', content:
     `sudo apt-get upgrade alt-php83  
     ............
     Reading package lists... Done
     Building dependency tree
     Reading state information... Done
     Calculating upgrade... Done
     The following NEW packages will be installed:
       alt-php83 alt-php83-cli alt-php83-common
     The following packages will be upgraded:
       alt-python27-cllib curl libcurl3-gnutls libcurl4 libcurl4-openssl-dev libpq5 librados2 librbd1 mod-hostinglimits
     9 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
     Need to get 12.3 MB of archives.
     After this operation, 44.7 MB of additional disk space will be used.
     Do you want to continue? [Y/n]` }
     ]" />

  </template>

  <template #Search_for_packages_in_repositories>

To search for alt-php packages in repositories:

<CodeTabs :tabs="[
  { title: 'RPM', content: `sudo yum search alt-package-name` },
  { title: 'DEB', content: `sudo apt search alt-package-name` }
]" />

For example:

<CodeTabs :tabs="[
{ title: 'RPM', content:
`sudo yum search alt-php73-firebird  
............\n
========================================================= Name Exactly Matched: alt-php73-firebird =========================================================
alt-php73-firebird.x86_64 : Firebird and Interbase extensions
======================================================== Name & Summary Matched: alt-php73-firebird ========================================================
alt-php73-firebird-debuginfo.x86_64 : Debug information for package alt-php73-firebird` },
{ title: 'DEB', content:
`sudo apt search alt-php73-firebird  
............ \n
Sorting... Done
Full Text Search... Done
alt-php73-firebird/unknown,now 7.3.33-19 amd64 [installed]
  firebird module for PHP` }
]" />

When using these commands, replace `alt-package-name` with the specific name of the package you are looking for or want to install.

  </template>

  <template #The_bin_files>

<CodeWithCopy>

```text
ls -l /opt/alt/phpXY/usr/bin/
```

</CodeWithCopy>

**An example output:**

```text
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```

  </template>

  <template #Modules_and_pecl_extensions>

<CodeWithCopy>

```text
ls /opt/alt/phpXY/usr/lib64/php/modules/
```

</CodeWithCopy>

**An example output:**

```text
ZendGuardLoader.so  imagick.so         oci8.so          stem.so
amqp.so             imap.so            odbc.so          stomp.so
apc.so              inclued.so         opcache.so       suhosin.so
apcu.so             inotify.so         pdf.so           sybase_ct.so
apm.so              interbase.so       pdo.so           sysvmsg.so
ares.so             intl.so            pdo_dblib.so     sysvsem.so
bcmath.so           ioncube_loader.so  pdo_firebird.so  sysvshm.so
big_int.so          ixed.5.4.lin       pdo_mysql.so     tideways.so
bitset.so           jsmin.so           pdo_oci.so       tidy.so
brotli.so           json.so            pdo_odbc.so      timezonedb.so
bz2_filter.so       ldap.so            pdo_pgsql.so     trader.so
dba.so              libevent.so        pdo_sqlite.so    translit.so
dbase.so            libsodium.so       pgsql.so         uploadprogress.so
dbx.so              luasandbox.so      phalcon.so       uri_template.so
dom.so              lzf.so             phar.so          uuid.so
doublemetaphone.so  mailparse.so       posix.so         wddx.so
eaccelerator.so     mbstring.so        propro.so        weakref.so
eio.so              mcrypt.so          pspell.so        xcache.so
enchant.so          memcache.so        quickhash.so     xcache_3.so
fileinfo.so         memcached.so       radius.so        xdebug.so
functional.so       mongo.so           raphf.so         xhprof.so
gd.so               mongodb.so         rar.so           xmlreader.so
gender.so           msgpack.so         recode.so        xmlrpc.so
geoip.so            mssql.so           redis.so         xmlwriter.so
geos.so             mysql.so           rsync.so         xrange.so
gmagick.so          mysqli.so          snmp.so          xsl.so
gnupg.so            mysqlnd.so         soap.so          yaf.so
haru.so             ncurses.so         sockets.so       yaml.so
hidef.so            nd_mysql.so        solr.so          yaz.so
htscanner.so        nd_mysqli.so       spl_types.so     zip.so
http.so             nd_pdo_mysql.so    ssh2.so          zmq.so
igbinary.so         oauth.so           stats.so
```

  </template>

  <template #Running_code_on_a_specific_version_through_the_CLI>

<CodeWithCopy>

```text
/opt/alt/phpXY/usr/bin/php helloworld.php
```

</CodeWithCopy>

**An example output:**


```text
Hello, World!
```

  </template>

  <template #Location_of_ini_config_files>

<CodeWithCopy>

```text
/opt/alt/phpXY/etc/php.d.all/
```

</CodeWithCopy>

**An example output:**

```text
40-leveldb.ini        mailparse.ini     redis.ini
40-snuffleupagus.ini  mbstring.ini      rrd.ini
40-vld.ini            mcrypt.ini        snmp.ini
amqp.ini              memcache.ini      snuffleupagus-default.rules
apcu.ini              memcached.ini     soap.ini
bcmath.ini            mongodb.ini       sockets.ini
dba.ini               mysqli.ini        sodium.ini
dbase.ini             mysqlnd.ini       solr.ini
dom.ini               nd_mysqli.ini     sourceguardian.ini
eio.ini               nd_pdo_mysql.ini  sqlsrv.ini
enchant.ini           newrelic.ini      ssh2.ini
ffmpeg.ini            oauth.ini         stats.ini
fileinfo.ini          oci8.ini          swoole.ini
gd.ini                odbc.ini          sysvmsg.ini
gearman.ini           opcache.ini       sysvsem.ini
gender.ini            pdf.ini           sysvshm.ini
geoip.ini             pdo.ini           tideways_xhprof.ini
geos.ini              pdo_dblib.ini     tidy.ini
gmagick.ini           pdo_firebird.ini  timezonedb.ini
gnupg.ini             pdo_mysql.ini     trader.ini
grpc.ini              pdo_oci.ini       uploadprogress.ini
http.ini              pdo_odbc.ini      uuid.ini
igbinary.ini          pdo_pgsql.ini     vips.ini
imagick.ini           pdo_sqlite.ini    xdebug.ini
imap.ini              pdo_sqlsrv.ini    xmlreader.ini
inotify.ini           pgsql.ini         xmlrpc.ini
intl.ini              phalcon4.ini      xmlwriter.ini
ioncube_loader.ini    phar.ini          xsl.ini
jsmin.ini             posix.ini         yaml.ini
json.ini              propro.ini        yaz.ini
ldap.ini              pspell.ini        zip.ini
luasandbox.ini        psr.ini           zmq.ini
lzf.ini               raphf.ini
```

  </template>

  <template #Location_of_default.ini>

<CodeWithCopy>

```text
ls /opt/alt/phpXY/etc/php.d/default.ini
```

</CodeWithCopy>

  </template>

  <template #Listing_enabled_modules_on_a_specific_version>

<CodeWithCopy>

```text
/opt/alt/php73/usr/bin/php -m
```

</CodeWithCopy>

**An example output:**

```text
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib
[Zend Modules]
```

  </template>

  <template #Enabling_a_module>

The **default.ini** file is important for configuring alt-php. It sets default PHP settings and can be used to enable default extensions. We do not modify this file on our side. You need to update **default.ini** yourself to adjust PHP settings based on your Endless Lifecycle Support (ELS) usage and specific requirements.

**Option 1: Enabling a module through `default.ini`**

To enable or disable extensions in your installed PHP version:

1. Open the `default.ini` file, usually located in the PHP configuration directory, in an editor of your choice: 

<CodeWithCopy>

```
/opt/alt/phpXY/etc/php.d/default.ini
```

</CodeWithCopy>

2. Edit the list of extensions:
   * To enable an extension, remove the semicolon `;` at the beginning of the line.
   * To disable an extension, add a semicolon `;` at the beginning of the line.
   * If the extension line is missing, add it in this format: `extension=extension_name.so` (replace `extension_name.so` with the actual extension name).

3. Save the changes in the `default.ini` file.

**Option 2: Enabling a module through the configuration files**

PHP extensions can also be enabled or disabled through their `.ini` configuration files. This method allows you to control which extensions are active for a specific PHP version or setup. If you're unsure which file to modify to enable a specific extension, start by checking the extension's own `.ini` file.

1. Locate the extension’s `.ini` file (e.g., `memcached.ini`) in the directory:

  <CodeWithCopy>

  ```
  /opt/alt/phpXY/etc/php.d.all/
  ```

  </CodeWithCopy>

2. To enable the extension, copy the located `.ini` file to:

  <CodeWithCopy>

  ```
  /opt/alt/phpXY/etc/php.d/
  ```

  </CodeWithCopy>

  :::warning
  If the same extension is present in multiple `.ini` configuration files within the `/opt/alt/phpXY/etc/php.d/` directory, you may see warnings in PHP logs and possibly on your site.
  :::

**Option 3: Enabling a module through the CLI**

<CodeWithCopy>

```text
/opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
```

</CodeWithCopy>

**An example output:**

```text
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
igbinary
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib
[Zend Modules]
```

  </template>

  <template #Increase_upload_or_memory_limits>

If you need to increase memory and upload size limits:

1. Open the `default.ini` file in an editor of your choice.
2. Set the limits as needed, e.g:

    <CodeWithCopy>

    ```text
    upload_max_filesize=40M
    post_max_size=40M
    memory_limit=256M
    ```

    </CodeWithCopy>

  </template>

</TableTabs>

### SaxonC Use Case

You can extend alt-php with additional modules. Below is an example of installing the SaxonC PHP extension. 

Although this guide uses **alt-php82** in its examples, the same installation steps apply to **alt-php83** and newer versions. Replace `php82` with your target version in all commands and file paths.

This guide also uses **SaxonC-HE** as an example. Be sure to adjust file names and paths to match the version you downloaded.

#### Prerequisites

Saxon 12 is required for PHP 8.2+ compatibility. There are three versions of the SaxonC product. **SaxonC-HE** is the open source version, while other professional editions (PE and EE) are available for commercial use.

| Edition   | License     | Key Features                            |
| --------- | ----------- | --------------------------------------- |
| SaxonC-HE | Open Source | XSLT 3.0, XPath 3.1, XQuery 3.1 (Basic) |
| SaxonC-PE | Commercial  | HE + ICU localization, JSON support     |
| SaxonC-EE | Commercial  | PE + Schema validation, Optimization    |

To build the PHP extension, ensure the following packages are installed: `httpd` (or `apache2`), `gcc-c++` (or `g++`) with minimum C++14 support.

#### Download SaxonC

1. Download SaxonC from the [official Saxonica download page](https://www.saxonica.com/download/c.xml).

2. Create a working directory and navigate into it. Move the downloaded zip file into the working directory and extract the archive

   <CodeWithCopy>

   ```text
   mkdir saxon && cd saxon
   mv ../SaxonCHE-linux-x86_64-12-9-0.zip .
   unzip SaxonCHE-linux-x86_64-12-9-0.zip
   ```

   </CodeWithCopy>
   
3. Verify the extraction:

   <CodeWithCopy>
   
   ```text
   ls
   ```

   </CodeWithCopy>

   Example output:

   <CodeWithCopy>

   ```text
   SaxonCHE-linux-x86_64-12-9-0  SaxonCHE-linux-x86_64-12-9-0.zip
   ```

   </CodeWithCopy>

#### Install the libraries

:::tip
Starting with version 12.6, `/opt/saxonica/` is the recommended installation path for Saxon libraries. 
:::

1. Navigate into the extracted directory and create the target directory for Saxon installation.
  
   <CodeWithCopy>

   ```text
   cd SaxonCHE-linux-x86_64-12-9-0
   mkdir /opt/saxonica/
   ```

   </CodeWithCopy>

2. Copy all Saxon files (binaries, headers, libraries) to the installation directory

   <CodeWithCopy>

   ```text
   sudo cp -r SaxonCHE/* /opt/saxonica/
   ```

   </CodeWithCopy>

3. Verify the installation structure

   <CodeWithCopy>

   ```text
   ls /opt/saxonica/
   ```

   </CodeWithCopy>

   Example output:

   ```text
   bin  include  lib
   ```

4. Add the following lines to your `.bashrc` or `/etc/profile.d/saxon.sh`:
   
   * The LD_LIBRARY_PATH variable must be set to the location of the lib directory containing the SaxonC libraries.

     <CodeWithCopy>

     ```text
     export LD_LIBRARY_PATH="/opt/saxonica/lib:$LD_LIBRARY_PATH"
     ```

     </CodeWithCopy>

   * To run the Transform, Query, and Validate (EE only) binaries the PATH variable can be set.

     <CodeWithCopy>

     ```text
     export PATH="/opt/saxonica/bin:$PATH"
     ```

     </CodeWithCopy>

   :::tip
   If the PHP web server can't find the Saxon libraries, you may also need to add `/opt/saxonica/lib` to a new file in `/etc/ld.so.conf.d/` and run `ldconfig`.
   :::

#### Install alt-php82-devel

1. Install the development package for alt-php82:

   <CodeWithCopy>

   ```text
   dnf install alt-php82-devel
   ```

   </CodeWithCopy>

2. Verify that phpize required for compiling PHP extensions is available:

   <CodeWithCopy>

   ```text
   ls /opt/alt/php82/usr/bin/phpize
   ```

   </CodeWithCopy>

   Example output: 
   
   ```
   /opt/alt/php82/usr/bin/phpize
   ```

#### Build the PHP extension

Now you can compile the Saxon PHP extension from source. The build process uses the standard PHP extension compilation workflow: `phpize` prepares the build environment, `configure` sets up the build options, and `make` compiles the extension.

1. Navigate to the PHP extension source directory within the extracted Saxon archive and prepare the build environment.
 
   <CodeWithCopy>

   ```text
   cd php/src/
   /opt/alt/php82/usr/bin/phpize
   ```

   </CodeWithCopy>
 
   Example output:

   ```text
   Configuring for:
   PHP Api Version:         20220829
   Zend Module Api No:      20220829
   Zend Extension Api No:   420220829
   ```

2. Configure the extension build with Saxon support and link to the Saxon libraries

   <CodeWithCopy>

   ```text
   ./configure --enable-saxon --with-php-config=/opt/alt/php82/usr/bin/php-config LDFLAGS="-L/opt/saxonica/lib"
   ```

   </CodeWithCopy>

3. Compile the extension

   <CodeWithCopy>

   ```text
   make
   ```

   </CodeWithCopy>

4. Install the compiled extension to the PHP modules directory

   <CodeWithCopy>
  
   ```text
   sudo make install
   ```

   </CodeWithCopy>

   Example output:

   ```text
   Installing shared extensions:     /opt/alt/php82/usr/lib64/php/modules/
   ```

#### Enable and verify the extension

1. After installation, you need to enable the extension by creating a configuration file that tells PHP to load it.

   <CodeWithCopy>

   ```text
   tee -a /opt/alt/php82/etc/php.d/20-saxon.ini <<EOF
   ; configuration for php Saxon HE/PE/EE module
   extension=saxon.so
   EOF
   ```

   </CodeWithCopy>

2. Verify that the Saxon extension appears in the list of loaded modules:

   <CodeWithCopy>

   ```text
   /opt/alt/php82/usr/bin/php -m | grep saxon
   ```

   </CodeWithCopy>

   Example output:

   ```text
   saxonc
   ```

3. Test that it works:

   <CodeWithCopy>

   ```text
   /opt/alt/php82/usr/bin/php -ddisplay_errors=E_ALL  << 'EOF'
   <?php
     $saxonProc = new Saxon\SaxonProcessor();
     $transformer = $saxonProc->newXslt30Processor();
     $executable = $transformer->compileFromString("
       <xsl:stylesheet version='2.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
           <xsl:template name='go'><a/></xsl:template>
       </xsl:stylesheet>
   ");
     $root = $executable->callTemplateReturningValue("go");
     $node = $root->getHead()->getNodeValue();
     echo "$node \n";
   EOF
   ```

   </CodeWithCopy>

   Example output:

   ```text
   <a/>
   ```

4. If you are using php-fpm or Apache, restart the services.

## Installation Instructions for Windows

### Get user credentials

1. Obtain the required license to get access to the service.
2. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.

### Download and Install TuxCare PHP Windows

TuxCare provides a Windows Installer that allows you to install and manage ELS PHP versions. 

1. Follow the instructions provided by [sales@tuxcare.com](mailto:sales@tuxcare.com) to create your secure download link.
2. Use this link to download the latest version of the installer.
3. Launch the installer. After the first run, it will appear under **Settings > Apps**.
4. Provide you access credentials:
   *  **Register** - if this is your first time using the installer or you're installing on a new system, choose the "Register" option. You’ll be asked to provide your license key or authentication token. You can also save your token for future use.
    
   ![image](/images/php-installer-token.webp)

   *  **Use previous token** - if you’ve already registered on this machine and chose to save your credentials, the installer will detect and use the saved token automatically. You won’t need to enter your credentials again unless the token is missing or expired. 

5. Select a PHP version and tick the checkbox next to it. **Only 1 version can be installed per installation**.
  
   ![image](/images/php-installer-version.webp)

   :::tip
   If you already have a version installed, it will appear highlighted in green. When another version is selected, the installer will ask whether to **replace** the existing one or install it **alongside**.
   
   ![image](/images/php-installer-versions-2.webp)
   :::

6. Choose Installation Path. By default, the installer will use `C:\Program Files`. Click **Change** if you want to install to a different location.
7. Click **Load** to fetch the required PHP archive. Once the archive is loaded, a list of available PHP modules will appear. Select the modules you need and click **Continue** to confirm.

   ![image](/images/php-installer-load.webp)

8. During installation, the installer will create a folder with PHP configuration and selected modules, and add TuxCare PHP to the **System PATH** (advanced settings).

   <details>
    <summary>Click to see more</summary>

    1. Right-click **This PC** and select **Properties**, or search for **Settings > System > About** in the Start menu.
    2. Click **Advanced system settings**.

      ![image](/images/php-windows-advanced-settings.webp)

    3. Click on **Environment Variables**.

      ![image](/images/php-windows-environment-variables.webp)

    4. Under *System variables*, find **Path** and click **Edit**.

      ![image](/images/php-windows-add-path.webp)

    5. You will see your PHP `C:\PHP` directory added.

      ![image](/images/php-windows-add-path-2.webp)
   </details>

9. Wait for the installation process to complete.

### Validate the Installation

To confirm PHP is working:

1. Open **Command Prompt**, **PowerShell**, or **Terminal**.
2. Run the following command:

    <CodeWithCopy>

    ```text
    php -v
    ```

    </CodeWithCopy>

    You should see output like this:

    ```text
    PHP 5.6.40 (cli) (built: May 30 2025 15:43:43)
    Copyright (c) 1997-2016 The PHP Group
    Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
    ```

### Additional configurations (optional)

Depending on your ELS PHP usage purpose, additional configurations may be required. Here are some commonly useful configurations.

#### Change Default PHP Version

If you have multiple PHP versions installed and want to change the default, update your *System Path* environment variable:

1. Open **Settings > System > About** in the Start menu.
2. Click **Advanced system settings**.
3. Click on **Environment Variables**.
4. Under *System variables*, find **Path** and click **Edit**.
   * Move the desired PHP version’s path to the top.
   * Remove or move down other PHP paths.
5. Click OK and restart your terminal
6. Verify the active PHP version by running:

    <CodeWithCopy>

    ```text
    php -v
    ```

    </CodeWithCopy>

#### Extensions

To enable or disable extensions in your installed PHP version:

1. Navigate to your PHP installation directory, e.g. `C:\PHP` directory.
2. Open the `php.ini` file in an editor of your choice (e.g. Notepad).
3. Edit the list of extensions:
   * To enable an extension, remove the semicolon `;` at the beginning of the line.
   * To disable an extension, add a semicolon `;` at the beginning of the line.

   **Example:**

    <CodeWithCopy>

    ```text
    ;extension=curl
    extension=gd2
    ;extension=mbstring
    extension=mysqli
    extension=pdo_mysql
    ```

    </CodeWithCopy>

#### Increase Upload/Memory Limits

If you're integrating PHP with applications like WordPress, you might need to increase memory and upload size limits:

1. Open the `php.ini` file in an editor of your choice (e.g. Notepad).
2. Set the limits as needed, e.g:

    <CodeWithCopy>

    ```text
    upload_max_filesize=40M
    post_max_size=40M
    memory_limit=256M
    ```

    </CodeWithCopy>

#### Example Use Cases

You can integrate PHP with other tools, for example, IIS or WordPress. For further details and documentation, refer to the [official PHP documentation](https://www.php.net/manual/en/index.php).

### Uninstallation

#### Uninstall a PHP version, 

To uninstall a PHP version:

1. Manually delete the PHP installation directory (e.g., `C:\Program Files\TuxCare\php-version`).

2. Remove the PHP path from **System Path**.

#### Uninstall TuxCare Installer

To uninstall TuxCare Installer:

1. Open **Settings > Apps**.

2. Find *TuxCare Installer* and click  **Uninstall** to remove it from the list of installed apps.

## OVAL data

This section contains information about available ELS for PHP OVAL streams that can be used by vulnerability scanners.

### TuxCare PHP ELS OVAL Streams

Currently, we provide OVAL data for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, Amazon Linux 2, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el7/oval.xml)
* EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el8/oval.xml)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [oval.xml](http://security.tuxcare.com/oval/els_alt_php/el9/oval.xml)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [oval.xml](http://security.tuxcare.com/oval/els_alt_php/el10/oval.xml)
* Ubuntu 16.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu16.04/oval.xml)
* Ubuntu 18.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu18.04/oval.xml)
* Ubuntu 20.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu20.04/oval.xml)
* Ubuntu 22.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu22.04/oval.xml)
* Ubuntu 24.04: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu24.04/oval.xml)
* Debian 10: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian10/oval.xml)
* Debian 11: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian11/oval.xml)
* Debian 12: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian12/oval.xml)
* Debian 13: [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian13/oval.xml)

### How to use OVAL

OVAL can be used with the OpenSCAP tool.

1. Install OpenSCAP

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum install openscap openscap-utils scap-security-guide -y` },
      { title: 'DEB', content: `apt-get install libopenscap8 -y` }
    ]" />

2. Download an OVAL stream. For example, EL 8:

   <CodeWithCopy>
   
    ```text
    wget https://security.tuxcare.com/oval/els_alt_php/el8/oval.xml
    ```

   </CodeWithCopy>

3. Run a scan:

   <CodeWithCopy>

   ```text
   oscap oval eval --results result.xml --report report.xml oval.xml
   ```

   </CodeWithCopy>

## Common Security Advisory Framework

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). It's designed to enable consistent and automated sharing of security advisory information. 

TuxCare publishes the following CSAF files at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/):
* CSAF Vulnerability Exploitability eXchange (VEX) files – indexed by CVE VEX documents are available in CSAF 2.0 format, including past CVEs.
* CSAF Security Advisory files – advisories are published in CSAF 2.0 format and indexed by Security Advisory.

`provider-matadata.json` contains information for tools and users about where and how to retrieve CSAF advisories published by TuxCare. By OASIS requirements, it is available at two URLs (both serving the same file):
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

### TuxCare CSAF data

Currently, we provide CSAF data for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, Amazon Linux 2, etc.): [security.tuxcare.com/csaf/v2/els_alt_php/el7/](https://security.tuxcare.com/csaf/v2/els_alt_php/el7/)
* EL 8 (AlmaLinux, CentOS,CentOS Stream, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/csaf/v2/els_alt_php/el8/](https://security.tuxcare.com/csaf/v2/els_alt_php/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/csaf/v2/els_alt_php/el9/](https://security.tuxcare.com/csaf/v2/els_alt_php/el9/)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linix, etc.): [security.tuxcare.com/csaf/v2/els_alt_php/el10/](https://security.tuxcare.com/csaf/v2/els_alt_php/el10/)
* Ubuntu 16.04: [security.tuxcare.com/csaf/v2/els_alt_php/ubuntu16.04/](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/csaf/v2/els_alt_php/ubuntu18.04/](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/csaf/v2/els_alt_php/ubuntu20.04/](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/csaf/v2/els_alt_php/ubuntu22.04/](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/csaf/v2/els_alt_php/ubuntu24.04/](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/csaf/v2/els_alt_php/debian10/](https://security.tuxcare.com/csaf/v2/els_alt_php/debian10/)
* Debian 11: [security.tuxcare.com/csaf/v2/els_alt_php/debian11/](https://security.tuxcare.com/csaf/v2/els_alt_php/debian11/)
* Debian 12: [security.tuxcare.com/csaf/v2/els_alt_php/debian12/](https://security.tuxcare.com/csaf/v2/els_alt_php/debian12/)
* Debian 13: [security.tuxcare.com/csaf/v2/els_alt_php/debian13/](https://security.tuxcare.com/csaf/v2/els_alt_php/debian13/)

### How to Use CSAF

The CSAF files are published in JSON format which is easy to parse and integrate with other tools - OASIS provides a [list of reference tools](https://www.csaf.io/tools.html) that support CSAF.

## Errata

Currently, we provide errata for the following OS versions:

* EL 7 (CentOS, CloudLinux, Oracle Linux, Amazon Linux 2, etc.): [security.tuxcare.com/errata/els_alt_php/el7/](https://security.tuxcare.com/errata/els_alt_php/el7/)
* EL 8 (AlmaLinux, CentOS, CentOS Stream,  CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/errata/els_alt_php/el8/](https://security.tuxcare.com/errata/els_alt_php/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/errata/els_alt_php/el9/](https://security.tuxcare.com/errata/els_alt_php/el9/)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [security.tuxcare.com/errata/els_alt_php/el10/](https://security.tuxcare.com/errata/els_alt_php/el10/)
* Ubuntu 16.04: [security.tuxcare.com/errata/els_alt_php/ubuntu16.04/](https://security.tuxcare.com/errata/els_alt_php/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/errata/els_alt_php/ubuntu18.04/](https://security.tuxcare.com/errata/els_alt_php/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/errata/els_alt_php/ubuntu20.04/](https://security.tuxcare.com/errata/els_alt_php/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/errata/els_alt_php/ubuntu22.04/](https://security.tuxcare.com/errata/els_alt_php/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/errata/els_alt_php/ubuntu24.04/](https://security.tuxcare.com/errata/els_alt_php/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/errata/els_alt_php/debian10/](https://security.tuxcare.com/errata/els_alt_php/debian10/)
* Debian 11: [security.tuxcare.com/errata/els_alt_php/debian11/](https://security.tuxcare.com/errata/els_alt_php/debian11/)
* Debian 12: [security.tuxcare.com/errata/els_alt_php/debian12/](https://security.tuxcare.com/errata/els_alt_php/debian12/)
* Debian 13: [security.tuxcare.com/errata/els_alt_php/debian13/](https://security.tuxcare.com/errata/els_alt_php/debian13/)

## RSS Feed

* EL 7 (CentOS, CloudLinux, Oracle Linux, Amazon Linux 2, etc.): [cve.tuxcare.com/rss_feed/els-alt-php/releases/el7](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/el7)
* EL 8 (AlmaLinux, CentOS, CentOS Stream,  CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-php/releases/el8](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/el8)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [cve.tuxcare.com/rss_feed/els-alt-php/releases/el9](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/el9)
* EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.): [cve.tuxcare.com/rss_feed/els-alt-php/releases/el10/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/el10/)
* Ubuntu 16.04: [cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu16.04/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu16.04/)
* Ubuntu 18.04: [cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu18.04/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu18.04/)
* Ubuntu 20.04: [cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu20.04/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu20.04/)
* Ubuntu 22.04: [cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu22.04/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu22.04/)
* Ubuntu 24.04 [cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu24.04/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/ubuntu24.04/)
* Debian 10: [cve.tuxcare.com/rss_feed/els-alt-php/releases/debian10/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/debian10/)
* Debian 11: [cve.tuxcare.com/rss_feed/els-alt-php/releases/debian11/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/debian11/)
* Debian 12: [cve.tuxcare.com/rss_feed/els-alt-php/releases/debian12/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/debian12/)
* Debian 13: [cve.tuxcare.com/rss_feed/els-alt-php/releases/debian13/](https://cve.tuxcare.com/rss_feed/els-alt-php/releases/debian13/)

## PHP extensions list

PHP extensions are modules that extend the functionality of the PHP programming language. These extensions provide additional capabilities for working with various types of data, performing specific tasks, interacting with external resources and supporting various protocols.

The PHP core includes many built-in extensions that provide basic functionality, such as working with databases, string processing, working with images, and others. However, to support more specific tasks and third-party libraries, you can use additional PHP extensions.

<TableTabs>

  <template #PHP_5.2_extensions>
  
   <div class="notranslate">

   | |  |  |  | |
   |-|-|-|-|-|
   |Reflection <br>SPL <br>SimpleXML <br>apc <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>bz2 <br>bz2_filter <br>calendar <br>coin_acceptor <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>enchant <br>exif <br>ffmpeg* | fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader| json <br>ldap <br>libxml <br>lzf <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>ncurses <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird |  <br>pdo_mysql <br>pdo_oci* <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pgsql <br>phar <br>posix <br>pspell <br>quickhash <br>radius <br>rar <br>readline <br>recode <br>redis <br>rsync <br>session <br>shmop <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl_types <br>sqlite <br>ssh2 <br>standard <br>stats <br>stem | stomp <br>suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>translit <br>uploadprogress <br>uuid <br>wddx <br>xcache <br>xcache_3 <br>xdebug <br>xhprof <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br>yaf <br>yaz <br>zend_optimizer <br>zip <br>zlib|
   </div>

   <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.3_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |amqp<br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav* <br>coin_acceptor <br>core <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br> filter <br>ftp | functional <br> gd <br>gender <br>geoip <br> geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libxml <br>lzf | mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br> pdo_oci* <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pgsql | phalcon* <br>phar <br> posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br> sysvsem <br> sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.4_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm** <br>amqp <br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br>clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>functional <br>gd <br> gender | geoip <br> geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring| mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phar  | posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br> solr <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin <br>sybase_ct <br>sysvmsg | sysvsem <br>sysvshm <br>tidy <br> tideways <br> timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray** <br>xsl <br> xhprof <br> jsmin <br> yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_5.5_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav* <br>core <br>ctype <br>curl <br> clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip | geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt | memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql | phalcon* <br>phalcon3 <br>phar <br>posix <br>postal* <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.6_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br> amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br> clos_ssa* <br>date <br>dba <br> dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash | mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8 <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phalcon3 | phar <br>posix <br> postal* <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br> solr | suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br>translit <br> tideways <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_7.0_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> apcu <br>bcmath <br>bitset <br>brotli <br>bz2 <br>clos_ssa* <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br> gearman <br> gender <br> geos | geoip <br>gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox*  <br>mailparse <br>mbstring <br>mcrypt | memcached <br> memcache <br>mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br> psr <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br> pdo_oci  <br>pgsql <br>phalcon3 <br>phar | posix <br> postal* <br>propro <br>pspell <br> phalcon4 <br>raphf <br>rar <br>readline <br> rrd <br>redis <br>reflection <br> recode <br>session <br>shmop <br>simplexml <br>snmp<br>snuffleupagus <br>soap <br>sockets <br>sourceguardian <br> sodium <br> solr <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>vld* <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br> xray <br>xsl <br>yaml <br>yaz <br> yaf <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.1_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br> clos_ssa* <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gearman <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br> json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcached | memcache <br> mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql psr <br> <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar <br> pdf | pdo_oci <br> phalcon4 <br> posix <br>propro <br>pspell <br>psr* <br>raphf <br>rar <br>readline <br>redis <br>reflection <br>rrd <br> recode <br> solr <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br> sodium <br> sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br>xray <br> yaz <br> yaml <br> yaf <br>zip <br>zlib <br>zmq|
  </div>
 
  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.2_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br> jsmin <br> psr <br> rrd <br> yaz <br> amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br>calendar <br> clos_ssa* <br> core <br>ctype <br>curl <br>date <br>dba <br>dom <br> dbase <br> diseval  <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gender <br>geoip <br>gettext | gearman <br> geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libxml <br>lzf <br> luasandbox* <br> mcrypt <br> memcache <br> mailparse <br>mbstring <br>memcached <br>mongodb | mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br> pdf <br> pdo_oci <br> phalcon4  <br> pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar | posix <br>propro <br>pspell <br>raphf <br>readline <br>redis <br>reflection <br> recode <br> sodium <br> sourceguardian <br> swoole  <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>sysvmsg <br>sysvsem | sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br> xdebug <br> yaf <br>yaml <br>zip <br>zlib <br>zmq <br> xray|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note 
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.3_extensions>

  <div class="notranslate">

  | |  |  |  | | |
  |-|-|-|-|-|-|
  |ffmpeg* <br> aapm* <br>amqp <br> clos_ssa* <br> gearman <br> jsmin <br> mailparse <br> memcache <br> psr <br> rrd <br> solr <br> tideways_xhprof <br> zmq <br> snuffleupagus <br> vld <br> apcu <br> bz2 <br> brotli <br> calendar <br> core <br> ctype <br> curl <br> date <br> exif <br>enchant <br> filter <br> ftp <br> gettext <br> gmp <br>gnupg <br> hash <br> iconv <br> interbase <br> luasandbox* | libxml <br>mysqlnd <br>opcache <br> openssl <br> pcntl <br> pcre <br>pdo_pgsql <br> phar <br> readline <br> reflection <br> session <br> shmop <br> simplexml <br> sourceguardian <br> spl <br> sqlite3 <br>standard <br> snmp <br> stats <br> tokenizer | trader <br>xmlreader <br>bcmath <br>fileinfo <br> grpc <br>intl <br>lzf <br>nd_mysqli <br>pdf <br>pdo <br>posix <br>swoole <br>uploadprogress <br>xmlrpc <br>gd <br>http <br>ioncube_loader <br> mbstring | nd_pdo_mysql <br>pdo_dblib <br>pdo_sqlite <br>propro <br>soap <br>sysvmsg <br>uuid <br>xmlwriter <br>dbase <br>gender <br>igbinary <br>mcrypt <br>newrelic <br> pdo_firebird <br>pdo_sqlsrv <br>pspell <br>sockets <br>sysvsem <br>vips* <br>xsl | dba <br>geoip <br>imagick <br>json <br>memcached <br>oauth <br>pdo_mysql <br>pgsql <br> raphf <br>sodium <br>sysvshm <br>yaml <br>dom <br>geos <br>imap <br>ldap <br>mongodb <br>oci8 <br>pdo_oci | phalcon3 <br>recode <br>sqlsrv <br> tidy <br>wddx <br>yaz <br>eio <br>gmagick <br>inotify <br>leveldb <br>mysqli <br>odbc <br>pdo_odbc <br>phalcon4 <br>redis <br>ssh2 <br>timezonedb <br>xdebug <br>zip <br> xml <br> zlib <br> xray <br> yaf| 
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  :::tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.4_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |leveldb <br> sourceguardian <br> ffmpeg* <br> amqp <br> clos_ssa* <br> gearman <br> ioncube_ loader <br> jsmin <br> mailparse <br> mcrypt <br> memcache <br> psr <br> rrd <br> solr <br> ssh2 <br> tideways_xhprof <br> yaz <br> zmq <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> eio <br> enchant <br> exif <br> fileinfo <br> filter <br> ftp <br> gd <br> gender <br> geoip <br> geos | gettext <br> gmagick <br> gmp <br> gnupg <br> grpc <br> hash <br> http <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> json <br> ldap <br> libxml <br> luasandbox* <br> lzf <br> mbstring <br> memcached <br> mongodb | mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> snuffleupagus <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> pdo_pgsql <br> vld <br> pdo_sqlite <br> pdo_sqlsrv | pgsql <br> phalcon4 <br> phar <br> posix <br> propro <br> pspell <br> raphf <br> readline <br> redis <br> reflection <br>phalcon5 <br> session <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets <br> sodium <br> spl <br> sqlite3 <br> sqlsrv <br> standard | stats <br> swoole <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> xray <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc <br> xmlwriter <br> xsl <br> yaml <br> zip <br> zlib |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_8.0_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |brotli <br> amqp <br> clos_ssa* <br> core <br> date <br> filter <br> gearman <br> geoip <br> gmagick <br> gnupg* <br> grpc <br> apcu <br> bcmath <br> bz2 <br> calendar <br> ctype <br> curl <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo | hash <br> igbinary <br> inotify <br> jsmin <br> json <br> libxml <br> mcrypt <br> memcache ftp <br> gd <br> gettext <br> gmp <br> iconv <br> imagick <br> imap <br> intl <br> ldap <br> lzf <br> mailparse <br> mbstring | mongodb <br> newrelic <br> oauth <br> oci8 <br> openssl <br> pcntl <br> pcre <br> pdo_oci <br> pdo_sqlsrv <br> readline <br> redis <br> reflection <br> rrd <br> session memcached <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> odbc <br> opcache <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_odbc | snuffleupagus <br> solr <br> SPL <br> sqlsrv <br> ssh2 <br> standard <br> swoole <br> tideways_xhprof <br> trader pdo_pgsql <br> pdo_sqlite <br> pgsql <br> phar <br> posix <br> pspell <br> psr <br> raphf <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets | uploadprogress <br> uuid <br> vips* <br> vld <br> xdebug <br> xmlrpc** <br> yaml <br> yaz <br> zip <br> zlib sodium <br> sqlite3 <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> xml <br> xmlreader <br> xmlwriter <br> xsl <br> zmq <br>sourceguardian <br> phalcon5 <br> xray |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.1_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |amqp <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> clos_ssa*** <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo <br> filter <br> ftp | gd <br> geoip <br> gearman <br> gettext <br> gmagick <br> gmp <br> gnupg** <br> grpc <br> hash <br> ioncube_loader <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> jsmin <br> json <br> ldap <br> libxml <br> lzf <br> mailparse <br> mbstring <br> mcrypt | memcache <br> memcached <br> mongodb <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> phalcon5 <br> pdo_pgsql <br> pdo_firebird <br> pdo_sqlite <br> pdo_sqlsr | pgsql <br> phar <br> posix <br> process <br> pspell <br> psr <br> rrd <br> raphf <br> readline <br> redis <br> Reflection <br> session <br> shmop <br> SimpleXML v snmp <br> solr <br> sourceguardian <br> soap <br> sockets <br> sodium <br> SPL <br> sqlite3 <br> sqlsrv <br> ssh2 <br> standard <br> swoole | sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaf <br> yaml <br> zip <br> zlib <br> zmq <br> xray |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.2_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> swoole** <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> vips* <br> xdebug** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.3_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc. 

  </template>

  <template #PHP_8.4_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

</TableTabs>

## Conclusion

As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments. 

## PHP Changelog 

To stay informed about the latest updates, fixes, and enhancements for ALT-PHP, please refer to the [CloudLinux Changelog](https://changelog.cloudlinux.com/).
All PHP ELS package updates are published there as part of the CloudLinux update stream.
