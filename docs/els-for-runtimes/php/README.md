# PHP

Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-PHP

alt-php is a component provided by TuxCare designed for managing PHP versions on web servers and enabling users to choose PHP versions for their websites.

Here are the key features and characteristics of alt-php:

* **Multiple PHP Versions** - alt-php allows the installation and usage of various PHP versions on a single web server. This enables users to select the PHP version that best suits their web applications.

* **User Segmentation** - alt-php allows hosting providers and web server administrators to provide different PHP versions for different users. Each user can choose the PHP version that suits their website.

* **Enhanced Compatibility** - alt-php is designed to ensure maximum compatibility with various web applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of PHP applications.

* **Updates and Support** - TuxCare provides regular updates for alt-php, including bug fixes, performance improvements, and updates for new PHP versions. This helps ensure the security and currency of PHP usage.

* **Management Tools** - alt-php usually comes with a set of management tools, such as PHP Selector, allowing users to manage PHP versions and enable/disable various PHP extensions.

alt-php provides a more flexible and convenient environment for working with different PHP versions on a single server, which is particularly useful in a web hosting environment where multiple users have varying requirements for PHP versions for their web applications.

## Supported OS and PHP Versions

<TableTabs>

  <template #Active_Support>

| OS                                                                      | Package Type | OS Version                      | PHP versions                                                                   |
| :---------------------------------------------------------------------: | :----------: | :-----------------------------: | :----------------------------------------------------------------------------: |
| EL 6 (CentOS, CloudLinux, Oracle Linux, etc.)                           | RPM          | 6.x                             | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3           |
| EL 7 (Amazon Linux 2, CentOS, CloudLinux, Oracle Linux, etc.)           | RPM          | 7.x                             | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 |
| EL 8 (AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                             | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 9.x                             | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)                       | RPM          | 10.x                            | 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5      |
| Ubuntu                                                                  | DEB          | 16.04                           | 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3                          |
| Ubuntu                                                                  | DEB          | 18.04, 20.04                    | 5.2, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5                |
| Ubuntu                                                                  | DEB          | 22.04, 24.04                    | 5.2, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5                |
| Ubuntu                                                                  | DEB          | 26.04                           | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5                     |
| Debian                                                                  | DEB          | 10                              | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5                     |
| Debian                                                                  | DEB          | 11, 12                          | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5                     |
| Debian                                                                  | DEB          | 13                              | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 |
| Alpine Linux                                                            | APK          | 3.23, 3.24                      | 7.3, 7.4, 8.0, 8.1                                                             |
| Windows                                                                 | -            | Windows Server 2019, 2022, 2025 | 5.2, 5.4, 5.6, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                                    |

**Supported architectures:**

* x86_64 — all supported Linux OSes
* aarch64/arm64 — Debian 12 and 13, Alpine Linux 3.23 and later
* Windows — x64 (64-bit) and x86 (32-bit) builds

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

  </template>

  <template #End_Of_Life>

TuxCare provides additional security support for PHP versions after the end of support from the vendor.

*EOL — end of life, SST — security support time*

| Version |  Released  | EOL by vendor | SST by vendor (years) |    EOL by TuxCare    | SST by TuxCare after vendor's EOL (years) |
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

## Installation on Linux

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server
* **Amazon Linux 2-specific.** Before installing `alt-php`, make sure `libvpx` is installed. Amazon Linux 2 provides two versions of libvpx: 1.9 (the default) and 1.3. `alt-php` requires 1.3 for compatibility with EL 7 systems like CentOS 7:

  ```
  sudo yum install libvpx-1.3.0
  ```

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-deb-repo.sh` },
     { title: 'APK', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-apk-repo.sh` }
   ]" />

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-php-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-php-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'APK', content: `sh install-els-alt-php-apk-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

   :::tip Imunify customers
   If [Imunify360](https://docs.imunify360.com/) is installed on the server and has a valid license, you can install alt-php (HardenedPHP) without a separate ELS license key. Run the installer with the `-i` (`--imunify`) option instead of `--license-key` — your Imunify access credentials are used automatically for repository access:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-php-rpm-repo.sh --imunify` },
     { title: 'DEB', content: `bash install-els-alt-php-deb-repo.sh --imunify` },
     { title: 'APK', content: `sh install-els-alt-php-apk-repo.sh --imunify` }
   ]" />
   :::

3. Install a PHP version

   Each version can be installed individually or all versions at once.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-php73` },
     { title: 'DEB', content: `apt-get install alt-php73-meta` },
     { title: 'APK', content: `apk add alt-php73` }
   ]" />

   To install all versions at the same time:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-php` },
     { title: 'DEB', content: `apt-get install alt-php` },
     { title: 'APK', content: `apk add alt-php` }
   ]" />

4. Verify the installation

   Check that the desired PHP version is installed:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `rpm -qa | grep alt-php` },
     { title: 'DEB', content: `dpkg -l | grep alt-php` },
     { title: 'APK', content: `apk info | grep alt-php` }
   ]" />

</ELSSteps>

### Useful Commands and Usage

When you deploy an updated version of PHP through PHP ELS, using your system's regular update tool (yum, dnf, apt), the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

<TableTabs>

  <template #Check_current_version_of_alt-php_packages>

To check whether the package is installed and see its current version, use the following command based on your OS:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum list installed | grep php` },
    { title: 'DEB', content: `dpkg -l | grep php` },
    { title: 'APK', content: `apk info -v | grep alt-php` }
  ]" />

  </template>

  <template #List_available_groups>

To find out which groups/meta-packages are available for installation:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum group list` },
    { title: 'DEB', content: `apt list -a | grep alt-php` },
    { title: 'APK', content: `apk search alt-php` }
  ]" />

To get a list of packages of a specific group or meta package:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum groupinfo alt-phpXY` },
    { title: 'DEB', content: `apt-cache showpkg alt-phpXY` },
    { title: 'APK', content: `apk info -R alt-phpXY` }
  ]" />

Replace `XY` with a version of alt-php.

  </template>

  <template #Update_alt-php>

1. Check for updates:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `sudo yum check-update` },
      { title: 'DEB', content:
      `sudo apt-get update
      apt list --upgradable` },
      { title: 'APK', content:
      `sudo apk update
      apk list --upgradable` }
    ]" />

2. Update packages:

   * Update all groups/meta-packages with names starting with "alt-php":

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum update alt-php*` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-php*` },
         { title: 'APK', content: `sudo apk upgrade 'alt-php*'` }
       ]" />

   * Update a specific version:

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum groupupdate alt-phpXY` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-phpXY` },
         { title: 'APK', content: `sudo apk upgrade alt-phpXY` }
       ]" />

     Replace `XY` with a version of alt-php.

  </template>

  <template #Search_for_packages>

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum search alt-package-name` },
    { title: 'DEB', content: `sudo apt search alt-package-name` },
    { title: 'APK', content: `apk search alt-package-name` }
  ]" />

Replace `alt-package-name` with the specific name of the package you are looking for.

  </template>

  <template #File_locations>

**Bin files:** `ls -l /opt/alt/phpXY/usr/bin/`

**Modules:** `ls /opt/alt/phpXY/usr/lib64/php/modules/`

**Config files:** `/opt/alt/phpXY/etc/php.d.all/`

**default.ini:** `/opt/alt/phpXY/etc/php.d/default.ini`

**Run PHP CLI:** `/opt/alt/phpXY/usr/bin/php helloworld.php`

**List enabled modules:** `/opt/alt/php73/usr/bin/php -m`

  </template>

  <template #Enabling_a_module>

**Option 1: Through `default.ini`**

1. Open `/opt/alt/phpXY/etc/php.d/default.ini` in an editor.
2. Remove `;` to enable an extension, add `;` to disable.
3. If the extension line is missing, add: `extension=extension_name.so`

**Option 2: Through configuration files**

1. Locate the extension's `.ini` file in `/opt/alt/phpXY/etc/php.d.all/`
2. Copy it to `/opt/alt/phpXY/etc/php.d/`

  :::warning
  If the same extension is present in multiple `.ini` files within `/opt/alt/phpXY/etc/php.d/`, you may see warnings in PHP logs.
  :::

**Option 3: Through the CLI**

```text
/opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
```

  </template>

  <template #Increase_upload_or_memory_limits>

1. Open the `default.ini` file in an editor.
2. Set the limits as needed:

    ```text
    upload_max_filesize=40M
    post_max_size=40M
    memory_limit=256M
    ```

  </template>

</TableTabs>

### PHP Extensions List

The following lists cover the Linux (alt-php) builds of ELS PHP. For ELS PHP for Windows, see [PHP Extensions List](#php-extensions-list-1) in the Windows section.

PHP extensions are modules that extend the functionality of the PHP programming language. These extensions provide additional capabilities for working with various types of data, performing specific tasks, interacting with external resources and supporting various protocols.

The PHP core includes many built-in extensions that provide basic functionality, such as working with databases, string processing, working with images, and others. However, to support more specific tasks and third-party libraries, you can use additional PHP extensions.

<TableTabs>

  <template #PHP_5.2_extensions>

   <div class="notranslate">

   <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
   <li>Reflection</li>
   <li>SPL</li>
   <li>SimpleXML</li>
   <li>apc</li>
   <li>apm</li>
   <li>ares</li>
   <li>bcmath</li>
   <li>bcompiler</li>
   <li>big_int</li>
   <li>bitset</li>
   <li>bloomy</li>
   <li>bz2</li>
   <li>bz2_filter</li>
   <li>calendar</li>
   <li>coin_acceptor</li>
   <li>crack</li>
   <li>ctype</li>
   <li>curl</li>
   <li>date</li>
   <li>dba</li>
   <li>dbase</li>
   <li>dbx</li>
   <li>dom</li>
   <li>doublemetaphone</li>
   <li>eaccelerator</li>
   <li>enchant</li>
   <li>exif</li>
   <li>ffmpeg*</li>
   <li>fileinfo</li>
   <li>filter</li>
   <li>ftp</li>
   <li>gd</li>
   <li>gender</li>
   <li>geoip</li>
   <li>geos</li>
   <li>gettext</li>
   <li>gmagick</li>
   <li>gmp</li>
   <li>gnupg</li>
   <li>haru</li>
   <li>hash</li>
   <li>hidef</li>
   <li>htscanner</li>
   <li>http</li>
   <li>huffman</li>
   <li>iconv</li>
   <li>idn</li>
   <li>igbinary</li>
   <li>imagick</li>
   <li>imap</li>
   <li>inclued</li>
   <li>inotify</li>
   <li>interbase</li>
   <li>intl</li>
   <li>ioncube_loader</li>
   <li>json</li>
   <li>ldap</li>
   <li>libxml</li>
   <li>lzf</li>
   <li>mailparse</li>
   <li>mbstring</li>
   <li>mcrypt</li>
   <li>memcache</li>
   <li>memcached</li>
   <li>mhash</li>
   <li>mongo</li>
   <li>msgpack</li>
   <li>mssql</li>
   <li>mysql</li>
   <li>mysqli</li>
   <li>ncurses</li>
   <li>oauth</li>
   <li>odbc</li>
   <li>opcache</li>
   <li>openssl</li>
   <li>pcntl</li>
   <li>pcre</li>
   <li>pdf</li>
   <li>pdo</li>
   <li>pdo_dblib</li>
   <li>pdo_firebird</li>
   <li>pdo_mysql</li>
   <li>pdo_oci*</li>
   <li>pdo_odbc</li>
   <li>pdo_pgsql</li>
   <li>pdo_sqlite</li>
   <li>pgsql</li>
   <li>phar</li>
   <li>posix</li>
   <li>pspell</li>
   <li>quickhash</li>
   <li>radius</li>
   <li>rar</li>
   <li>readline</li>
   <li>recode</li>
   <li>redis</li>
   <li>rsync</li>
   <li>session</li>
   <li>shmop</li>
   <li>snmp</li>
   <li>soap</li>
   <li>sockets</li>
   <li>sourceguardian</li>
   <li>spl_types</li>
   <li>sqlite</li>
   <li>ssh2</li>
   <li>standard</li>
   <li>stats</li>
   <li>stem</li>
   <li>stomp</li>
   <li>suhosin</li>
   <li>sybase_ct</li>
   <li>sysvmsg</li>
   <li>sysvsem</li>
   <li>sysvshm</li>
   <li>tidy</li>
   <li>timezonedb</li>
   <li>tokenizer</li>
   <li>translit</li>
   <li>uploadprogress</li>
   <li>uuid</li>
   <li>wddx</li>
   <li>xcache</li>
   <li>xcache_3</li>
   <li>xdebug</li>
   <li>xhprof</li>
   <li>xml</li>
   <li>xmlreader</li>
   <li>xmlrpc</li>
   <li>xmlwriter</li>
   <li>xrange</li>
   <li>xsl</li>
   <li>yaf</li>
   <li>yaz</li>
   <li>zend_optimizer</li>
   <li>zip</li>
   <li>zlib</li>
   </ul>
   </div>

   <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.3_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>amqp</li>
  <li>apc</li>
  <li>apcu</li>
  <li>apm</li>
  <li>ares</li>
  <li>bcmath</li>
  <li>bcompiler</li>
  <li>big_int</li>
  <li>bitset</li>
  <li>bloomy</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>bz2_filter</li>
  <li>calendar</li>
  <li>clamav*</li>
  <li>coin_acceptor</li>
  <li>core</li>
  <li>crack</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dbx</li>
  <li>dom</li>
  <li>doublemetaphone</li>
  <li>eaccelerator</li>
  <li>eio</li>
  <li>enchant</li>
  <li>ereg</li>
  <li>exif</li>
  <li>ffmpeg*</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>functional</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>geos</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>haru</li>
  <li>hash</li>
  <li>hidef</li>
  <li>htscanner</li>
  <li>http</li>
  <li>huffman</li>
  <li>iconv</li>
  <li>idn</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inclued</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libevent</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>memcached</li>
  <li>mhash</li>
  <li>mongo</li>
  <li>msgpack</li>
  <li>mssql</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>ncurses</li>
  <li>nd_mysql</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_oci*</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pgsql</li>
  <li>phalcon*</li>
  <li>phar</li>
  <li>posix</li>
  <li>propro</li>
  <li>pspell</li>
  <li>quickhash</li>
  <li>radius</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>recode</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rsync</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sourceguardian</li>
  <li>solr</li>
  <li>spl</li>
  <li>spl_types</li>
  <li>sqlite</li>
  <li>sqlite3</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>stem</li>
  <li>stomp</li>
  <li>suhosin</li>
  <li>sybase_ct</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>tideways</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>translit</li>
  <li>uploadprogress</li>
  <li>uri_template</li>
  <li>uuid</li>
  <li>wddx</li>
  <li>weakref</li>
  <li>xcache*</li>
  <li>xcache_3</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xrange</li>
  <li>xsl</li>
  <li>xhprof</li>
  <li>yaf</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>zend_guard_loader</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.4_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm**</li>
  <li>amqp</li>
  <li>apc</li>
  <li>apcu</li>
  <li>apm</li>
  <li>ares</li>
  <li>bcmath</li>
  <li>big_int</li>
  <li>bitset</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>bz2_filter</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>clos_ssa</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dbx</li>
  <li>dom</li>
  <li>doublemetaphone</li>
  <li>eaccelerator</li>
  <li>eio</li>
  <li>enchant</li>
  <li>ereg</li>
  <li>exif</li>
  <li>ffmpeg*</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>functional</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>geos</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>haru</li>
  <li>hash</li>
  <li>hidef</li>
  <li>htscanner</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inclued</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>json</li>
  <li>ldap</li>
  <li>libevent</li>
  <li>libsodium</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>memcached</li>
  <li>mhash</li>
  <li>mongo</li>
  <li>mongodb</li>
  <li>msgpack</li>
  <li>mssql</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>ncurses</li>
  <li>nd_mysql</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth</li>
  <li>oci8*</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_oci*</li>
  <li>pgsql</li>
  <li>phalcon*</li>
  <li>phar</li>
  <li>posix</li>
  <li>propro</li>
  <li>pspell</li>
  <li>quickhash</li>
  <li>radius</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>recode</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rsync</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>solr</li>
  <li>sourceguardian</li>
  <li>spl</li>
  <li>spl_types</li>
  <li>sqlite3</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>stem</li>
  <li>stomp</li>
  <li>suhosin</li>
  <li>sybase_ct</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>tideways</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>translit</li>
  <li>uploadprogress</li>
  <li>uri_template</li>
  <li>uuid</li>
  <li>wddx</li>
  <li>weakref</li>
  <li>xcache*</li>
  <li>xcache_3</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xrange</li>
  <li>xray**</li>
  <li>xsl</li>
  <li>xhprof</li>
  <li>jsmin</li>
  <li>yaf</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>zend_guard_loader</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_5.5_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm*</li>
  <li>amqp</li>
  <li>apcu</li>
  <li>apm</li>
  <li>ares</li>
  <li>bcmath</li>
  <li>big_int</li>
  <li>bitset</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>bz2_filter</li>
  <li>calendar</li>
  <li>clamav*</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>clos_ssa</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dbx</li>
  <li>dom</li>
  <li>doublemetaphone</li>
  <li>diseval</li>
  <li>eio</li>
  <li>enchant</li>
  <li>ereg</li>
  <li>exif</li>
  <li>ffmpeg*</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>geos</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>gRPC</li>
  <li>haru</li>
  <li>hash</li>
  <li>hidef</li>
  <li>htscanner</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libevent</li>
  <li>libsodium</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>memcached</li>
  <li>mhash</li>
  <li>mongo</li>
  <li>mongodb</li>
  <li>msgpack</li>
  <li>mssql</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>ncurses</li>
  <li>nd_mysql</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth</li>
  <li>oci8*</li>
  <li>odbc</li>
  <li>opcache*</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_oci*</li>
  <li>pgsql</li>
  <li>phalcon*</li>
  <li>phalcon3</li>
  <li>phar</li>
  <li>posix</li>
  <li>postal*</li>
  <li>propro</li>
  <li>pspell</li>
  <li>quickhash</li>
  <li>radius</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>recode</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rsync</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sourceguardian</li>
  <li>solr</li>
  <li>spl</li>
  <li>spl_types</li>
  <li>sqlite3</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>stem</li>
  <li>stomp</li>
  <li>suhosin</li>
  <li>sybase_ct</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>tideways</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>translit</li>
  <li>uploadprogress</li>
  <li>uri_template</li>
  <li>uuid</li>
  <li>wddx</li>
  <li>weakref</li>
  <li>xcache_3</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xrange</li>
  <li>xray</li>
  <li>xsl</li>
  <li>xhprof</li>
  <li>yaf</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>zend_guard_loader</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.6_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm*</li>
  <li>amqp</li>
  <li>apcu</li>
  <li>apm</li>
  <li>ares</li>
  <li>bcmath</li>
  <li>big_int</li>
  <li>bitset</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>bz2_filter</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>clos_ssa*</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dbx</li>
  <li>dom</li>
  <li>doublemetaphone</li>
  <li>diseval</li>
  <li>eio</li>
  <li>enchant</li>
  <li>ereg</li>
  <li>exif</li>
  <li>ffmpeg*</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>gettext</li>
  <li>geos</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>gRPC</li>
  <li>haru</li>
  <li>hash</li>
  <li>htscanner</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libevent</li>
  <li>libsodium</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>memcached</li>
  <li>mhash</li>
  <li>mongo</li>
  <li>mongodb</li>
  <li>msgpack</li>
  <li>mssql</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>ncurses</li>
  <li>nd_mysql</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>odbc</li>
  <li>opcache*</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_oci*</li>
  <li>pgsql</li>
  <li>phalcon*</li>
  <li>phalcon3</li>
  <li>phar</li>
  <li>posix</li>
  <li>postal*</li>
  <li>propro</li>
  <li>pspell</li>
  <li>quickhash</li>
  <li>radius</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>recode</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rsync</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sourceguardian</li>
  <li>spl</li>
  <li>spl_types</li>
  <li>sqlite3</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>stem</li>
  <li>stomp</li>
  <li>solr</li>
  <li>suhosin</li>
  <li>sybase_ct</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>translit</li>
  <li>tideways</li>
  <li>uploadprogress</li>
  <li>uri_template</li>
  <li>uuid</li>
  <li>wddx</li>
  <li>xcache_3</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xrange</li>
  <li>xray</li>
  <li>xsl</li>
  <li>xhprof</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>zend_guard_loader</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_7.0_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm*</li>
  <li>amqp</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>bitset</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>clos_ssa*</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dom</li>
  <li>diseval</li>
  <li>eio</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>ffmpeg*</li>
  <li>gd</li>
  <li>gearman</li>
  <li>gender</li>
  <li>geos</li>
  <li>geoip</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>gRPC</li>
  <li>hash</li>
  <li>htscanner</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libsodium</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcached</li>
  <li>memcache</li>
  <li>mongodb</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>_newrelic_</li>
  <li>oauth</li>
  <li>oci8*</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>psr</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pdo_oci</li>
  <li>pgsql</li>
  <li>phalcon3</li>
  <li>phar</li>
  <li>posix</li>
  <li>postal*</li>
  <li>propro</li>
  <li>pspell</li>
  <li>phalcon4</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>rrd</li>
  <li>redis</li>
  <li>reflection</li>
  <li>recode</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>snuffleupagus</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sourceguardian</li>
  <li>sodium</li>
  <li>solr</li>
  <li>spl</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>suhosin7</li>
  <li>sysvmsg</li>
  <li>swoole</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>tideways_xhprof</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>vld*</li>
  <li>wddx</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xray</li>
  <li>xsl</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>yaf</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.1_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm*</li>
  <li>amqp</li>
  <li>snuffleupagus</li>
  <li>vld</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>clos_ssa*</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dom</li>
  <li>diseval</li>
  <li>eio</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>ffmpeg*</li>
  <li>gd</li>
  <li>gearman</li>
  <li>gender</li>
  <li>geoip</li>
  <li>gettext</li>
  <li>geos</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>gRPC</li>
  <li>hash</li>
  <li>htscanner</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libsodium</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcached</li>
  <li>memcache</li>
  <li>mongodb</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>_newrelic_</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql psr</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phalcon3</li>
  <li>phar</li>
  <li>pdf</li>
  <li>pdo_oci</li>
  <li>phalcon4</li>
  <li>posix</li>
  <li>propro</li>
  <li>pspell</li>
  <li>psr*</li>
  <li>raphf</li>
  <li>rar</li>
  <li>readline</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rrd</li>
  <li>recode</li>
  <li>solr</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sourceguardian</li>
  <li>spl</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>suhosin7</li>
  <li>sysvmsg</li>
  <li>swoole</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>tideways_xhprof</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>wddx</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>xray</li>
  <li>yaz</li>
  <li>yaml</li>
  <li>yaf</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.2_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>aapm*</li>
  <li>jsmin</li>
  <li>psr</li>
  <li>rrd</li>
  <li>yaz</li>
  <li>amqp</li>
  <li>snuffleupagus</li>
  <li>vld</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>clos_ssa*</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dom</li>
  <li>dbase</li>
  <li>diseval</li>
  <li>eio</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>ffmpeg*</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>gettext</li>
  <li>gearman</li>
  <li>geos</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>gRPC</li>
  <li>hash</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>luasandbox*</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>memcached</li>
  <li>mongodb</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>_newrelic_</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdf</li>
  <li>pdo_oci</li>
  <li>phalcon4</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phalcon3</li>
  <li>phar</li>
  <li>posix</li>
  <li>propro</li>
  <li>pspell</li>
  <li>raphf</li>
  <li>readline</li>
  <li>redis</li>
  <li>reflection</li>
  <li>recode</li>
  <li>sodium</li>
  <li>sourceguardian</li>
  <li>swoole</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>spl</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>stats</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>tideways_xhprof</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>xdebug</li>
  <li>yaf</li>
  <li>yaml</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  <li>xray</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note 
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.3_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>ffmpeg*</li>
  <li>aapm*</li>
  <li>amqp</li>
  <li>clos_ssa*</li>
  <li>gearman</li>
  <li>jsmin</li>
  <li>mailparse</li>
  <li>memcache</li>
  <li>psr</li>
  <li>rrd</li>
  <li>solr</li>
  <li>tideways_xhprof</li>
  <li>zmq</li>
  <li>snuffleupagus</li>
  <li>vld</li>
  <li>apcu</li>
  <li>bz2</li>
  <li>brotli</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>exif</li>
  <li>enchant</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>hash</li>
  <li>iconv</li>
  <li>interbase</li>
  <li>luasandbox*</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdo_pgsql</li>
  <li>phar</li>
  <li>readline</li>
  <li>reflection</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>sourceguardian</li>
  <li>spl</li>
  <li>sqlite3</li>
  <li>standard</li>
  <li>snmp</li>
  <li>stats</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>xmlreader</li>
  <li>bcmath</li>
  <li>fileinfo</li>
  <li>grpc</li>
  <li>intl</li>
  <li>lzf</li>
  <li>nd_mysqli</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>posix</li>
  <li>swoole</li>
  <li>uploadprogress</li>
  <li>xmlrpc</li>
  <li>gd</li>
  <li>http</li>
  <li>ioncube_loader</li>
  <li>mbstring</li>
  <li>nd_pdo_mysql</li>
  <li>pdo_dblib</li>
  <li>pdo_sqlite</li>
  <li>propro</li>
  <li>soap</li>
  <li>sysvmsg</li>
  <li>uuid</li>
  <li>xmlwriter</li>
  <li>dbase</li>
  <li>gender</li>
  <li>igbinary</li>
  <li>mcrypt</li>
  <li>newrelic</li>
  <li>pdo_firebird</li>
  <li>pdo_sqlsrv</li>
  <li>pspell</li>
  <li>sockets</li>
  <li>sysvsem</li>
  <li>vips*</li>
  <li>xsl</li>
  <li>dba</li>
  <li>geoip</li>
  <li>imagick</li>
  <li>json</li>
  <li>memcached</li>
  <li>oauth</li>
  <li>pdo_mysql</li>
  <li>pgsql</li>
  <li>raphf</li>
  <li>sodium</li>
  <li>sysvshm</li>
  <li>yaml</li>
  <li>dom</li>
  <li>geos</li>
  <li>imap</li>
  <li>ldap</li>
  <li>mongodb</li>
  <li>oci8</li>
  <li>pdo_oci</li>
  <li>phalcon3</li>
  <li>recode</li>
  <li>sqlsrv</li>
  <li>tidy</li>
  <li>wddx</li>
  <li>yaz</li>
  <li>eio</li>
  <li>gmagick</li>
  <li>inotify</li>
  <li>leveldb</li>
  <li>mysqli</li>
  <li>odbc</li>
  <li>pdo_odbc</li>
  <li>phalcon4</li>
  <li>redis</li>
  <li>ssh2</li>
  <li>timezonedb</li>
  <li>xdebug</li>
  <li>zip</li>
  <li>xml</li>
  <li>zlib</li>
  <li>xray</li>
  <li>yaf</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  :::tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.4_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>leveldb</li>
  <li>sourceguardian</li>
  <li>ffmpeg*</li>
  <li>amqp</li>
  <li>clos_ssa*</li>
  <li>gearman</li>
  <li>ioncube_loader</li>
  <li>jsmin</li>
  <li>mailparse</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>psr</li>
  <li>rrd</li>
  <li>solr</li>
  <li>ssh2</li>
  <li>tideways_xhprof</li>
  <li>yaz</li>
  <li>zmq</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dom</li>
  <li>eio</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gender</li>
  <li>geoip</li>
  <li>geos</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg</li>
  <li>grpc</li>
  <li>hash</li>
  <li>http</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>intl</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>luasandbox*</li>
  <li>lzf</li>
  <li>mbstring</li>
  <li>memcached</li>
  <li>mongodb</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>newrelic</li>
  <li>snuffleupagus</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>vld</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phalcon4</li>
  <li>phar</li>
  <li>posix</li>
  <li>propro</li>
  <li>pspell</li>
  <li>raphf</li>
  <li>readline</li>
  <li>redis</li>
  <li>reflection</li>
  <li>phalcon5</li>
  <li>session</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>spl</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>standard</li>
  <li>stats</li>
  <li>swoole</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>xray</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>yaml</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_8.0_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>brotli</li>
  <li>amqp</li>
  <li>clos_ssa*</li>
  <li>core</li>
  <li>date</li>
  <li>filter</li>
  <li>gearman</li>
  <li>geoip</li>
  <li>gmagick</li>
  <li>gnupg*</li>
  <li>grpc</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>ctype</li>
  <li>curl</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dom</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi**</li>
  <li>fileinfo</li>
  <li>hash</li>
  <li>igbinary</li>
  <li>inotify</li>
  <li>jsmin</li>
  <li>json</li>
  <li>libxml</li>
  <li>mcrypt</li>
  <li>memcache ftp</li>
  <li>gd</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>iconv</li>
  <li>imagick</li>
  <li>imap</li>
  <li>intl</li>
  <li>ldap</li>
  <li>lzf</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mongodb</li>
  <li>newrelic</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdo_oci</li>
  <li>pdo_sqlsrv</li>
  <li>readline</li>
  <li>redis</li>
  <li>reflection</li>
  <li>rrd</li>
  <li>session memcached</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_odbc</li>
  <li>snuffleupagus</li>
  <li>solr</li>
  <li>SPL</li>
  <li>sqlsrv</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>swoole</li>
  <li>tideways_xhprof</li>
  <li>trader pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pgsql</li>
  <li>phar</li>
  <li>posix</li>
  <li>pspell</li>
  <li>psr</li>
  <li>raphf</li>
  <li>shmop</li>
  <li>simplexml</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>vld</li>
  <li>xdebug</li>
  <li>xmlrpc**</li>
  <li>yaml</li>
  <li>yaz</li>
  <li>zip</li>
  <li>zlib sodium</li>
  <li>sqlite3</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>zmq</li>
  <li>sourceguardian</li>
  <li>phalcon5</li>
  <li>xray</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.1_extensions>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>amqp</li>
  <li>apcu</li>
  <li>bcmath</li>
  <li>brotli</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>clos_ssa***</li>
  <li>Core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dom</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi**</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>geoip</li>
  <li>gearman</li>
  <li>gettext</li>
  <li>gmagick</li>
  <li>gmp</li>
  <li>gnupg**</li>
  <li>grpc</li>
  <li>hash</li>
  <li>ioncube_loader</li>
  <li>iconv</li>
  <li>igbinary</li>
  <li>imagick</li>
  <li>imap</li>
  <li>inotify</li>
  <li>intl</li>
  <li>jsmin</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>lzf</li>
  <li>mailparse</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>memcache</li>
  <li>memcached</li>
  <li>mongodb</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>newrelic</li>
  <li>oauth</li>
  <li>oci8</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>phalcon5</li>
  <li>pdo_pgsql</li>
  <li>pdo_firebird</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phar</li>
  <li>posix</li>
  <li>process</li>
  <li>pspell</li>
  <li>psr</li>
  <li>rrd</li>
  <li>raphf</li>
  <li>readline</li>
  <li>redis</li>
  <li>Reflection</li>
  <li>session</li>
  <li>shmop</li>
  <li>SimpleXML v snmp</li>
  <li>solr</li>
  <li>sourceguardian</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>SPL</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>ssh2</li>
  <li>standard</li>
  <li>swoole</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tideways_xhprof</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>tokenizer</li>
  <li>trader</li>
  <li>uploadprogress</li>
  <li>uuid</li>
  <li>vips*</li>
  <li>xdebug</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc**</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>yaf</li>
  <li>yaml</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq</li>
  <li>xray</li>
  </ul>
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.2_extensions>

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>amqp**</li>
  <li>apcu**</li>
  <li>bcmath</li>
  <li>brotli**</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase**</li>
  <li>dom</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gearman**</li>
  <li>geoip**</li>
  <li>gettext</li>
  <li>gmagick**</li>
  <li>gmp</li>
  <li>gnupg*</li>
  <li>grpc**</li>
  <li>hash</li>
  <li>iconv</li>
  <li>igbinary**</li>
  <li>imagick**</li>
  <li>imap</li>
  <li>inotify**</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin**</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>lzf**</li>
  <li>mailparse**</li>
  <li>mbstring</li>
  <li>mcrypt**</li>
  <li>memcache**</li>
  <li>memcached**</li>
  <li>mongodb**</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth**</li>
  <li>oci8**</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre**</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql*</li>
  <li>pdo_oci**</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv**</li>
  <li>pgsql</li>
  <li>phar</li>
  <li>posix</li>
  <li>pspell</li>
  <li>psr**</li>
  <li>random</li>
  <li>raphf**</li>
  <li>readline</li>
  <li>redis**</li>
  <li>Reflection</li>
  <li>rrd**</li>
  <li>session</li>
  <li>shmop</li>
  <li>SimpleXML</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>solr**</li>
  <li>SPL</li>
  <li>sqlite3</li>
  <li>sqlsrv**</li>
  <li>ssh2**</li>
  <li>standard</li>
  <li>swoole**</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tideways_xhprof**</li>
  <li>tidy</li>
  <li>timezonedb**</li>
  <li>tokenizer</li>
  <li>trader**</li>
  <li>uploadprogress**</li>
  <li>uuid**</li>
  <li>vips*</li>
  <li>xdebug**</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc**</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>yaml**</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq**</li>
  </ul>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.3_extensions>

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>amqp**</li>
  <li>apcu**</li>
  <li>bcmath</li>
  <li>brotli**</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase**</li>
  <li>dom</li>
  <li>elastic_apm</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gearman**</li>
  <li>geoip**</li>
  <li>gettext</li>
  <li>gmagick**</li>
  <li>gmp</li>
  <li>gnupg*</li>
  <li>grpc**</li>
  <li>hash</li>
  <li>iconv</li>
  <li>igbinary**</li>
  <li>imagick**</li>
  <li>imap</li>
  <li>inotify**</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin**</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>lzf**</li>
  <li>mailparse**</li>
  <li>mbstring</li>
  <li>mcrypt**</li>
  <li>memcache**</li>
  <li>memcached**</li>
  <li>mongodb**</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth**</li>
  <li>oci8**</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre**</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql*</li>
  <li>pdo_oci**</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv**</li>
  <li>pgsql</li>
  <li>phalcon5</li>
  <li>phar</li>
  <li>posix</li>
  <li>pspell</li>
  <li>psr**</li>
  <li>random</li>
  <li>raphf**</li>
  <li>readline</li>
  <li>redis**</li>
  <li>Reflection</li>
  <li>rrd**</li>
  <li>session</li>
  <li>shmop</li>
  <li>SimpleXML</li>
  <li>snmp</li>
  <li>snuffleupagus</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>solr**</li>
  <li>SPL</li>
  <li>sqlite3</li>
  <li>sqlsrv**</li>
  <li>ssh2**</li>
  <li>standard</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tideways_xhprof**</li>
  <li>tidy</li>
  <li>timezonedb**</li>
  <li>tokenizer</li>
  <li>trader**</li>
  <li>uploadprogress**</li>
  <li>uuid**</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc**</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>yaml**</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq**</li>
  </ul>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc. 

  </template>

  <template #PHP_8.4_extensions>

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>amqp**</li>
  <li>apcu**</li>
  <li>bcmath</li>
  <li>brotli**</li>
  <li>bz2</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>curl</li>
  <li>date</li>
  <li>dba</li>
  <li>dbase**</li>
  <li>dom</li>
  <li>elastic_apm</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>filter</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gearman**</li>
  <li>geoip**</li>
  <li>gettext</li>
  <li>gmagick**</li>
  <li>gmp</li>
  <li>gnupg*</li>
  <li>grpc**</li>
  <li>hash</li>
  <li>iconv</li>
  <li>igbinary**</li>
  <li>imagick**</li>
  <li>imap</li>
  <li>inotify**</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>jsmin**</li>
  <li>json</li>
  <li>ldap</li>
  <li>libxml</li>
  <li>lzf**</li>
  <li>mailparse**</li>
  <li>mbstring</li>
  <li>mcrypt**</li>
  <li>memcache**</li>
  <li>memcached**</li>
  <li>mongodb**</li>
  <li>mysqli</li>
  <li>mysqlnd</li>
  <li>nd_mysqli</li>
  <li>nd_pdo_mysql</li>
  <li>oauth**</li>
  <li>oci8**</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pcntl</li>
  <li>pcre**</li>
  <li>pdf</li>
  <li>pdo</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql*</li>
  <li>pdo_oci**</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv**</li>
  <li>pgsql</li>
  <li>phalcon5</li>
  <li>phar</li>
  <li>posix</li>
  <li>pspell</li>
  <li>psr**</li>
  <li>random</li>
  <li>raphf**</li>
  <li>readline</li>
  <li>redis**</li>
  <li>Reflection</li>
  <li>rrd**</li>
  <li>session</li>
  <li>shmop</li>
  <li>SimpleXML</li>
  <li>snmp</li>
  <li>snuffleupagus</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>solr**</li>
  <li>SPL</li>
  <li>sqlite3</li>
  <li>sqlsrv**</li>
  <li>ssh2**</li>
  <li>standard</li>
  <li>sysvmsg</li>
  <li>sysvsem</li>
  <li>sysvshm</li>
  <li>tideways_xhprof**</li>
  <li>tidy</li>
  <li>timezonedb**</li>
  <li>tokenizer</li>
  <li>trader**</li>
  <li>uploadprogress**</li>
  <li>uuid**</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlrpc**</li>
  <li>xmlwriter</li>
  <li>xsl</li>
  <li>yaml**</li>
  <li>zip</li>
  <li>zlib</li>
  <li>zmq**</li>
  </ul>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

</TableTabs>

## Installation on Windows

TuxCare provides two ways to install ELS PHP on Windows: using the **TuxCare Installer** (recommended) — a graphical tool that automates the process, or **manually** by downloading and configuring PHP from the repository.

<ELSPrerequisites id="windows-prerequisites">

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Administrator access to the Windows system

</ELSPrerequisites>

:::tip
Customers who previously received an authentication token can continue to use it: select **Use previous token** in the TuxCare Installer, or use the tokenized URL for manual installation.
:::

<TableTabs label="Choose installation method: " :labels="{ TuxCare_Installer: 'TuxCare Installer (recommended)' }">

<template #TuxCare_Installer>

TuxCare Installer allows you to install and manage ELS PHP versions through a graphical interface on Windows Server 2019, 2022, and 2025.

<ELSSteps>

1. Download the installer and launch it

   Download the installer from the following link:

   ```text
   https://windows.tuxcare.com/php/TuxCare.Installer.exe
   ```

   Run the downloaded file. After the first run, the installer appears under **Settings > Apps**.

2. Select Register

   Click **Register**.

   ![TuxCare Installer selection window with the Register and Use previous token buttons](/images/php-installer-register.webp)

   :::tip
   If you previously registered on this machine with an authentication token and saved it, you can click **Use previous token** instead.
   :::

3. Register with your license key

   * Click **I have a license key**.

     ![TuxCare Installer selection window with the I have a license key button highlighted](/images/php-installer-license-key.webp)

   * Enter your license key to complete the registration.

     ![TuxCare PHP installer prompting for a license key or authentication token](/images/php-installer-token.webp)

4. Select a PHP version

   Tick the checkbox next to the version you want. **Only 1 version can be installed per installation**.

   ![TuxCare PHP installer listing the available PHP versions with a checkbox beside each](/images/php-installer-version.webp)

   :::tip
   If you already have a version installed, it will appear highlighted in green. When another version is selected, the installer will ask whether to **replace** the existing one or install it **alongside**.

   ![TuxCare PHP installer highlighting an already-installed PHP version in green and asking whether to replace it or install alongside it](/images/php-installer-versions-2.webp)
   :::

5. Choose installation path and load modules

   * By default, the installer uses `C:\Program Files`.
   * Click **Change** to install to a different location.
   * Click **Load** to fetch the required PHP archive.
   * Select the modules you need and click **Continue**.

   ![TuxCare PHP installer showing the installation path and the list of PHP modules available to select](/images/php-installer-load.webp)

6. Verify the installation

   Open **Command Prompt**, **PowerShell**, or **Terminal** and run:

   ```text
   php -v
   ```

   You should see output like:

   ```text
   PHP 5.6.40 (cli) (built: May 30 2025 15:43:43)
   Copyright (c) 1997-2016 The PHP Group
   Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
   ```

</ELSSteps>

During installation, the installer creates a folder with PHP configuration and selected modules, and adds TuxCare PHP to the **System PATH**.

</template>

<template #Manual>

Manual installation requires a tokenized URL (obtain via [sales@tuxcare.com](mailto:sales@tuxcare.com)) that gives access to the TuxCare PHP for Windows repository. The token is placed right after the domain:

```text
https://windows.tuxcare.com/<YOUR-TOKEN>/php/
```

:::warning Troubleshooting: browser credential prompts
Always include a **trailing slash** at the end of your tokenized URL (e.g. `https://windows.tuxcare.com/TOKEN/php/`). Without it, the server may issue a redirect that drops the token, causing the browser to prompt for credentials. With the trailing slash, subfolder navigation works as expected.

<details>
<summary>How to use a tokenized URL</summary>

Your tokenized URL provides access to the TuxCare PHP for Windows repository. It contains an authentication token embedded in the URL path:

```text
https://windows.tuxcare.com/<YOUR-TOKEN>/php/
```

**Always include the trailing slash.** This applies to all directory URLs, including version subfolders:

- ✅ `https://windows.tuxcare.com/TOKEN/php/` — works correctly
- ❌ `https://windows.tuxcare.com/TOKEN/php` — may prompt for credentials

**Use a private browsing window.** We recommend opening the tokenized URL in a private (incognito) window to ensure a clean session with no cached credentials that might interfere with token authentication.

- **Chrome / Edge**: `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (macOS)
- **Firefox**: `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS)

**Browsing subdirectories.** If you are prompted for credentials when entering a subdirectory, manually insert the token into the URL — add `<YOUR-TOKEN>/` right after `windows.tuxcare.com/` in the address bar.

**Example walkthrough:**

1. Open the repository root:
   ```text
   https://windows.tuxcare.com/<YOUR-TOKEN>/php/
   ```
2. Click on `7.4.33/`. If the browser navigates to `https://windows.tuxcare.com/php/7.4.33/` and prompts for a password, edit the address bar and add the token:
   ```text
   https://windows.tuxcare.com/<YOUR-TOKEN>/php/7.4.33/
   ```
3. Click on `tuxcare.els8/`. If prompted again, add the token to the URL:
   ```text
   https://windows.tuxcare.com/<YOUR-TOKEN>/php/7.4.33/tuxcare.els8/
   ```
4. You see the ZIP files listed. Click on the file to download it directly.

**Downloading files directly.** If you already know which file you need, skip browsing and build the full URL from the repository root, version, release folder, and file name:

```text
https://windows.tuxcare.com/<YOUR-TOKEN>
  /php/<version>/tuxcare.els<N>/<filename>.zip
```

PowerShell:

```text
$base = "https://windows.tuxcare.com/<YOUR-TOKEN>"
$file = "/php/7.4.33/tuxcare.els8/" +
  "php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip"
Invoke-WebRequest -Uri "$base$file" -OutFile "php-7.4.33.zip"
```

curl:

```text
BASE="https://windows.tuxcare.com/<YOUR-TOKEN>"
FILE="/php/7.4.33/tuxcare.els8/\
php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip"
curl -O "${BASE}${FILE}"
```

</details>
<br>
:::

<ELSSteps>

1. Open the repository in your browser

   Navigate to your tokenized URL:

   ```text
   https://windows.tuxcare.com/<YOUR-TOKEN>/php/
   ```

   You will see a directory listing of all available PHP versions (e.g. `5.6.40/`, `7.4.33/`, `8.1.33/`). Click on the version you need.

2. Choose the correct archive

   Inside each version folder you will find subfolders named `tuxcare.elsN/`, where `N` is the TuxCare release number. Always select the subfolder with the **highest** number, as it contains the latest security updates. Each archive follows this naming pattern:

   ```text
   php-<version>-tuxcare-els<N>-<thread>-Win32-<vc>-<arch>-signed.zip
   ```

   Select the archive that matches your environment:

   | Component | Options | How to choose |
   | --- | --- | --- |
   | **Thread safety** | `nts` (Non-Thread Safe) or `ts` (Thread Safe) | Use `nts` for IIS with FastCGI, nginx, or CLI. Use `ts` only for Apache `mod_php`. |
   | **Architecture** | `x64` or `x86` | Use `x64` for 64-bit Windows (most common). Use `x86` only for 32-bit systems. |
   | **VC runtime** | `vc15`, `vs16`, `vs17`, etc. | Indicates the required Visual C++ Redistributable. Download from [Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) if not installed. |

   For example, to install PHP 7.4 (NTS, 64-bit), download `php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip`. This archive requires the **Visual C++ Redistributable for Visual Studio 2017** (`vc15`).

3. Extract the archive

   Create a destination folder (e.g. `C:\PHP`) and extract the ZIP contents into it. Right-click the downloaded ZIP file, select **Extract All...**, set the destination, and click **Extract**.

   Alternatively, use PowerShell:

   ```text
   New-Item -ItemType Directory -Path "C:\PHP" -Force
   Expand-Archive `
     -Path "$HOME\Downloads\php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip" `
     -DestinationPath "C:\PHP"
   ```

   After extraction, your directory should contain `php.exe`, `php.ini-development`, `php.ini-production`, and an `ext` folder with extension DLLs.

4. Configure php.ini

   Create a configuration file from one of the provided templates — copy `php.ini-development` for development or `php.ini-production` for production to `php.ini`:

   ```text
   Copy-Item "C:\PHP\php.ini-production" "C:\PHP\php.ini"
   ```

   Open `C:\PHP\php.ini` in a text editor, set the extension directory, and enable the extensions your application requires:

   ```text
   extension_dir = "C:\PHP\ext"
   extension=curl
   extension=mbstring
   extension=mysqli
   extension=openssl
   ```

5. Add PHP to the System PATH

   To make `php` available from any terminal, add the PHP directory to the System PATH. Open **Settings > System > About** → **Advanced system settings** → **Environment Variables**. Under *System variables*, find **Path**, click **Edit**, then click **New** and add `C:\PHP`.

   Alternatively, use PowerShell (run as Administrator):

   ```text
   $currentPath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
   [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;C:\PHP", "Machine")
   ```

   Close and reopen any terminal windows for the change to take effect.

6. Verify the installation

   Open **Command Prompt**, **PowerShell**, or **Terminal** and run:

   ```text
   php -v
   ```

   You should see output like:

   ```text
   PHP 7.4.33 (cli) (built: Mar 10 2026 10:12:00)
   Copyright (c) The PHP Group
   Zend Engine v3.4.0, Copyright (c) Zend Technologies
   ```

   To verify that the required extensions are loaded, run `php -m`.

</ELSSteps>

</template>

</TableTabs>
<br>
<details>
 <summary>How to find System PATH</summary>

 1. Right-click **This PC** and select **Properties**, or search for **Settings > System > About** in the Start menu.
 2. Click **Advanced system settings**.

    ![Windows System window with the Advanced system settings link highlighted](/images/php-windows-advanced-settings.webp)

 3. Click on **Environment Variables**.

    ![Advanced tab of Windows System Properties with the Environment Variables button highlighted](/images/php-windows-environment-variables.webp)

 4. Under *System variables*, find **Path** and click **Edit**.

    ![Windows Environment Variables dialog with the Path entry selected under System variables](/images/php-windows-add-path.webp)

 5. You will see your PHP `C:\PHP` directory added.

    ![Windows Edit environment variable dialog showing the PHP installation directory added to Path](/images/php-windows-add-path-2.webp)
</details>

### Additional Configurations

Depending on your ELS PHP usage purpose, additional configurations may be required. You can integrate PHP with other tools, for example, IIS or WordPress. For further details, refer to the [official PHP documentation](https://www.php.net/manual/en/index.php).

#### Change Default PHP Version

If you have multiple PHP versions installed and want to change the default, update your **System Path** environment variable. Open **Settings > System > About** → **Advanced system settings** → **Environment Variables**. Under *System variables*, find **Path** and click **Edit**. Move the desired PHP version's path to the top, and remove or move down other PHP paths. Click OK, restart your terminal, and verify with `php -v`.

#### PHP Extensions List

ELS PHP for Windows comes with two kinds of extensions. **Built-in** extensions are part of the PHP build and always available. **Loadable** extensions are DLLs in the `ext` folder that you enable in one of two ways:

* **TuxCare Installer** — select the modules you need at the **Choose installation path and load modules** step.
* **Manually** — open `php.ini` in your PHP installation directory (e.g. `C:\PHP`) and remove the semicolon `;` at the start of the `extension=` line. Add `;` to disable an extension.

Extensions marked *TS only* or *NTS only* are available only in the Thread Safe or Non-Thread Safe build.

<TableTabs>

  <template #PHP_5.2_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>com_dotnet</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>ftp</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>odbc</li>
  <li>pcre</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>adt</li>
  <li>amf</li>
  <li>bcompiler</li>
  <li>bitset</li>
  <li>blenc</li>
  <li>bz2</li>
  <li>bz2_filter</li>
  <li>classkit</li>
  <li>cpdf</li>
  <li>crack</li>
  <li>curl</li>
  <li>cvsclient</li>
  <li>db</li>
  <li>dba</li>
  <li>dbase</li>
  <li>dbx</li>
  <li>dio</li>
  <li>docblock</li>
  <li>domxml</li>
  <li>doublemetaphone</li>
  <li>event</li>
  <li>exif</li>
  <li>fdf</li>
  <li>fileinfo</li>
  <li>filepro</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>gopher</li>
  <li>haru</li>
  <li>htscanner</li>
  <li>http</li>
  <li>hyperwave</li>
  <li>ibm_db2</li>
  <li>id3</li>
  <li>ifx</li>
  <li>iisfunc (TS only)</li>
  <li>imap</li>
  <li>ingres2</li>
  <li>interbase</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>lzf</li>
  <li>mailparse</li>
  <li>maxdb</li>
  <li>mbstring</li>
  <li>mcrypt</li>
  <li>mcrypt_filter</li>
  <li>mcve</li>
  <li>memcache</li>
  <li>mhash</li>
  <li>mime_magic</li>
  <li>ming</li>
  <li>msql</li>
  <li>mssql</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>netools</li>
  <li>ntuser</li>
  <li>oci8</li>
  <li>oggvorbis</li>
  <li>openssl</li>
  <li>operator</li>
  <li>oracle</li>
  <li>params</li>
  <li>parsekit</li>
  <li>pdflib</li>
  <li>pdo</li>
  <li>pdo_firebird</li>
  <li>pdo_ibm</li>
  <li>pdo_informix</li>
  <li>pdo_mssql</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_oci8</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlite_external</li>
  <li>pdo_user</li>
  <li>pgsql</li>
  <li>phar</li>
  <li>phk</li>
  <li>php5activescript (TS only)</li>
  <li>phpdoc</li>
  <li>pop3</li>
  <li>printer</li>
  <li>pspell</li>
  <li>radius</li>
  <li>rar</li>
  <li>runkit</li>
  <li>sam</li>
  <li>sdo</li>
  <li>shmop</li>
  <li>smtp</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>spl_types</li>
  <li>sqlite</li>
  <li>ssh2</li>
  <li>stats</li>
  <li>stem</li>
  <li>sybase_ct</li>
  <li>threads (TS only)</li>
  <li>tidy</li>
  <li>timezonedb</li>
  <li>translit</li>
  <li>uploadprogress</li>
  <li>win32ps</li>
  <li>win32scheduler</li>
  <li>win32service</li>
  <li>win32std</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  <li>yami</li>
  <li>zip</li>
  <li>zlib_filter</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_5.4_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>ereg</li>
  <li>filter</li>
  <li>ftp</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mcrypt</li>
  <li>mhash</li>
  <li>mysqlnd</li>
  <li>odbc</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dbx</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>oci8</li>
  <li>oci8_11g</li>
  <li>openssl</li>
  <li>pdo_dblib</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sybase_ct</li>
  <li>tidy</li>
  <li>wincache (NTS only)</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  <li>ZendLoader (NTS only)</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_5.6_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>ereg</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mcrypt</li>
  <li>mhash</li>
  <li>mysqlnd</li>
  <li>odbc</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysql</li>
  <li>mysqli</li>
  <li>oci8_12c</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sybase_ct</li>
  <li>tidy</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_7.2_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>readline</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dba</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysqli</li>
  <li>oci8_12c</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phpdbg_webhelper</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_7.3_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>readline</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>wddx</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dba</li>
  <li>enchant</li>
  <li>exif</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>interbase</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysqli</li>
  <li>oci8_12c</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phpdbg_webhelper</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_7.4_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>readline</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dba</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd2</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>intl</li>
  <li>ioncube_loader</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysqli</li>
  <li>oci8_12c</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phpdbg_webhelper</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>xmlrpc</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_8.0_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>readline</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dba</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>intl</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysqli</li>
  <li>oci8_19</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>phpdbg_webhelper</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

  <template #PHP_8.1_Windows_extensions>

  <TableTabs buttons :bottom-line="false">

  <template #Built-in>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bcmath</li>
  <li>calendar</li>
  <li>Core</li>
  <li>ctype</li>
  <li>date</li>
  <li>dom</li>
  <li>filter</li>
  <li>hash</li>
  <li>iconv</li>
  <li>json</li>
  <li>libxml</li>
  <li>mysqlnd</li>
  <li>pcre</li>
  <li>PDO</li>
  <li>Phar</li>
  <li>readline</li>
  <li>Reflection</li>
  <li>session</li>
  <li>SimpleXML</li>
  <li>SPL</li>
  <li>standard</li>
  <li>tokenizer</li>
  <li>xml</li>
  <li>xmlreader</li>
  <li>xmlwriter</li>
  <li>zip</li>
  <li>zlib</li>
  </ul>

  </div>

  </template>

  <template #Loadable>

  <div class="notranslate">

  <ul style="columns:5 9rem;list-style:none;padding:0;margin:0">
  <li>bz2</li>
  <li>com_dotnet</li>
  <li>curl</li>
  <li>dba</li>
  <li>enchant</li>
  <li>exif</li>
  <li>ffi</li>
  <li>fileinfo</li>
  <li>ftp</li>
  <li>gd</li>
  <li>gettext</li>
  <li>gmp</li>
  <li>imap</li>
  <li>intl</li>
  <li>ldap</li>
  <li>mbstring</li>
  <li>mysqli</li>
  <li>oci8_19</li>
  <li>odbc</li>
  <li>opcache</li>
  <li>openssl</li>
  <li>pdo_firebird</li>
  <li>pdo_mysql</li>
  <li>pdo_oci</li>
  <li>pdo_odbc</li>
  <li>pdo_pgsql</li>
  <li>pdo_sqlite</li>
  <li>pdo_sqlsrv</li>
  <li>pgsql</li>
  <li>shmop</li>
  <li>snmp</li>
  <li>soap</li>
  <li>sockets</li>
  <li>sodium</li>
  <li>sqlite3</li>
  <li>sqlsrv</li>
  <li>sysvshm</li>
  <li>tidy</li>
  <li>xsl</li>
  </ul>

  </div>

  </template>

  </TableTabs>

  </template>

</TableTabs>

#### Increase Upload/Memory Limits

If you're integrating PHP with applications like WordPress, you might need to increase memory and upload size limits. Open the `php.ini` file and set the values as needed:

```text
upload_max_filesize=40M
post_max_size=40M
memory_limit=256M
```

#### Uninstallation

To **uninstall a PHP version manually**, delete the PHP installation directory (e.g. `C:\PHP`) and remove the corresponding path from **System Path**.

To **uninstall via TuxCare Installer**, open **Settings > Apps**, find *TuxCare Installer* and click **Uninstall**.

## SaxonC Use Case

You can extend alt-php with additional modules. Below is an example of installing the SaxonC PHP extension.

Although this guide uses **alt-php82** in its examples, the same installation steps apply to **alt-php83** and newer versions. Replace `php82` with your target version in all commands and file paths.

This guide also uses **SaxonC-HE** as an example. Be sure to adjust file names and paths to match the version you downloaded.

<ELSPrerequisites id="saxonc-prerequisites">

* Saxon 12+ (required for PHP 8.2+ compatibility) — download from [saxonica.com](https://www.saxonica.com/download/c.xml)
* `httpd` (or `apache2`), `gcc-c++` (or `g++`) with minimum C++14 support
* `alt-php82-devel` (or matching version)

| Edition   | License     | Key Features                            |
| --------- | ----------- | --------------------------------------- |
| SaxonC-HE | Open Source | XSLT 3.0, XPath 3.1, XQuery 3.1 (Basic) |
| SaxonC-PE | Commercial  | HE + ICU localization, JSON support     |
| SaxonC-EE | Commercial  | PE + Schema validation, Optimization    |

</ELSPrerequisites>

### Set Up SaxonC

<ELSSteps>

1. Download SaxonC

   Download from the [official Saxonica download page](https://www.saxonica.com/download/c.xml). Create a working directory and move the downloaded zip file into it:

   ```text
   mkdir saxon && cd saxon
   mv ../SaxonCHE-linux-x86_64-12-9-0.zip .
   ```

2. Extract the archive

   Unzip the downloaded file and verify:

   ```text
   unzip SaxonCHE-linux-x86_64-12-9-0.zip
   ls
   ```

   Example output:

   ```text
   SaxonCHE-linux-x86_64-12-9-0  SaxonCHE-linux-x86_64-12-9-0.zip
   ```

3. Install the libraries

   Starting with version 12.6, `/opt/saxonica/` is the recommended installation path. Navigate into the extracted directory and copy all Saxon files:

   ```text
   cd SaxonCHE-linux-x86_64-12-9-0
   sudo mkdir -p /opt/saxonica/
   sudo cp -r SaxonCHE/* /opt/saxonica/
   ```

   The installed structure should contain `bin`, `include`, and `lib` directories.

4. Configure environment variables

   Add the following lines to your `.bashrc` or `/etc/profile.d/saxon.sh`.

   The `LD_LIBRARY_PATH` variable must point to the Saxon libraries:

   ```text
   export LD_LIBRARY_PATH="/opt/saxonica/lib:$LD_LIBRARY_PATH"
   ```

   To run the Transform, Query, and Validate (EE only) binaries, set the `PATH` variable:

   ```text
   export PATH="/opt/saxonica/bin:$PATH"
   ```

   :::tip
   If the PHP web server can't find the Saxon libraries, you may also need to add `/opt/saxonica/lib` to a new file in `/etc/ld.so.conf.d/` and run `ldconfig`.
   :::

</ELSSteps>

### Build the PHP Extension

<ELSSteps>

1. Install alt-php82-devel

   Install the development package required for compiling PHP extensions:

   ```text
   dnf install alt-php82-devel
   ```

   Verify that `phpize` is available:

   ```text
   ls /opt/alt/php82/usr/bin/phpize
   ```

2. Prepare the build environment

   Navigate to the PHP extension source directory within the extracted Saxon archive and run `phpize` to prepare the build:

   ```text
   cd php/src/
   /opt/alt/php82/usr/bin/phpize
   ```

   Example output:

   ```text
   Configuring for:
   PHP Api Version:         20220829
   Zend Module Api No:      20220829
   Zend Extension Api No:   420220829
   ```

3. Configure and compile

   Configure the extension build with Saxon support and link to the Saxon libraries:

   ```text
   ./configure --with-saxon --with-php-config=/opt/alt/php82/usr/bin/php-config LDFLAGS="-L/opt/saxonica/lib"
   ```

   Compile and install:

   ```text
   make
   sudo make install
   ```

   Example output:

   ```text
   Installing shared extensions:     /opt/alt/php82/usr/lib64/php/modules/
   ```

4. Enable the extension

   Create a configuration file that tells PHP to load the extension:

   ```text
   tee -a /opt/alt/php82/etc/php.d/20-saxon.ini <<EOF
   ; configuration for php Saxon HE/PE/EE module
   extension=saxon.so
   EOF
   ```

   Verify that the Saxon extension appears in the list of loaded modules:

   ```text
   /opt/alt/php82/usr/bin/php -m | grep saxon
   ```

   Example output:

   ```text
   saxonc
   ```

5. Verify with a test script

   Run a quick test to confirm the extension works:

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

   Example output:

   ```text
   <a/>
   ```

   If you are using php-fpm or Apache, restart the services.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=PHP) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=PHP) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=PHP) — Full list of product parts covered by ELS
* ![](/images/shield.webp) [Machine-readable security data](/els-for-runtimes/machine-readable-security-data/#php) — Open Vulnerability and Assessment Language (OVAL), Common Security Advisory Framework (CSAF), Errata, and RSS feeds for PHP ELS
* ![](/images/clipboard-notes.webp) [PHP Changelog](https://changelog.cloudlinux.com/) — latest updates, fixes, and enhancements for ALT-PHP

</WhatsNext>
