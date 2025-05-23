# PHP

Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## Supported OS and PHP versions

**Supported architecture:** 64-bit.

| OS                                    | Package Type | OS Version                        | PHP Version |
| :-----------------------------------: | :----------: | :-------------------------------: | :---------: | 
| CentOS, CloudLinux, OracleLinux, etc. | RPM          | 6.x, 7.x, 8.x, 9.x                | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4 |
| AlmaLinux                             | RPM          | 8.x, 9.x                          | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4 |
| Ubuntu                                | DEB          | 16.04, 18.04, 20.04, 22.04, 24.04 | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4 |
| Debian				                        | DEB          | 10, 11, 12	                       | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4 |
| Windows				                        | -            | Windows Server 2019, 2022, 2025	 | 5.6, 7.4 |

Other distros and architectures upon request.

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI-DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, have similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

* **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
* **Low-severity CVEs:** Patches provided within 90 days
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

## Installation Instructions for Linux

### RPM-based Systems

These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).

1. Download the installer script:

    ```text
    wget https://repo.cloudlinux.com/php-els/install-php-els-rpm-repo.sh
    ```

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.

    ```text
    sh install-php-els-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX
    ```

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual `yum upgrade` command.

    ```text
    yum info alt-php73

    Available Packages
    Name        : alt-php73
    Arch        : x86_64
    Epoch       : 1
    Version     : 7.3.33
    Release     : 5.2.el7
    Size        : 22 k
    Repo        : php-els/7
    Summary     : PHP scripting language for creating dynamic web sites
    URL         : http://www.php.net/
    License     : PHP and LGPLv2 and LGPLv2+
    Description : PHP is an HTML-embedded scripting language.
    ```

**How to install packages:**

* Each version of PHP individually or all versions at once can be installed.
* Standard commands to install each version separately can be used. For example, installing alt-php73:

  ```text
  yum install alt-php73*
  ```

* To install all versions at the same time, use `groupinstall`:

  ```text
  yum groupinstall alt-php
  ```

### DEB-based Systems

These steps are suitable for DEB-based systems (Ubuntu, Debian).

1. Download an installer script:

  ```text
  wget https://repo.cloudlinux.com/php-els/install-php-els-deb-repo.sh
  ```

2. Run the installer script with your key:

  ```text
  bash install-php-els-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
  ```

3. To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual `apt upgrade` command.

  ```text
  apt-cache show alt-php73-cli

  Package: alt-php73-cli
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
  Description-md5: 0d83f7bf7177d3376a59b73890c8494d
  ```

**How to install packages:**

* Each version of PHP individually or all versions at once can be installed.
* Standard commands to install each version separately can be used. For example, installing alt-php73:

  ```text
  apt-get install alt-php73*
  ```

* To install all versions at the same time, it is necessary to use the alt-php meta-package:

  ```text
  apt-get install alt-php
  ```

## Installation Instructions for Windows

### Get user credentials

* Obtain the required license to get access to the service.
* Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.

### Download TuxCare PHP Windows

* Follow the instructions provided by [sales@tuxcare.com](mailto:sales@tuxcare.com) to create your secure download link.
* Use this link to download the latest version of PHP.
* Extract the downloaded archive (ZIP file) to a preferred directory, for example`C:\PHP`.
* PHP doesn't have a traditional "installer" on Windows, it’s a portable application. Once you extract the files and set up a few things, it's ready to use.

### Configure PHP

Configure TuxCare ELS PHP for Windows to work as intended on Windows:

* Navigate to your PHP directory (e.g. `C:\PHP`).
* Find and rename the `php.ini-development` file to `php.ini`. This is the main configuration file PHP uses when running.

### Additional configurations (optional)

Depending on your ELS PHP usage purpose, additional configurations may be required. Here are some commonly useful configurations.

### Extensions

Many PHP features come as extensions and are disabled by default to keep PHP lightweight. TuxCare provides the required `.dll` files to support these extensions.
To enable the functionality you need, update the `php.ini` file:

* Open the `php.ini` file in an editor of your choice (e.g. Notepad).
* Uncomment necessary extensions by removing the `;` like so:

  ```text
  extension=curl
  extension=gd2
  extension=mbstring
  extension=mysqli
  extension=pdo_mysql
  ```

### Increase Upload/Memory Limits

If you're integrating PHP with applications like WordPress, you might need to increase memory and upload size limits:

* Open the `php.ini` file in an editor of your choice (e.g. Notepad).
* Set the limits as needed, e.g:

  ```text
  upload_max_filesize=40M
  post_max_size=40M
  memory_limit=256M
  ```

### Add PHP to the System Path

Adding PHP to the system PATH lets you run the `php` command from a terminal window without typing its full location. This is useful for running scripts and using PHP with other tools.

* Right-click **This PC** and select **Properties**, or search for **Settings > System > About** in the Start menu.
* Click **Advanced system settings**.

  ![image](/images/php-windows-advanced-settings.png)

* Click on **Environment Variables**.

  ![image](/images/php-windows-environment-variables.png)

* Under *System variables*, find **Path** and click **Edit**.

  ![image](/images/php-windows-add-path.png)

* Click **New** and add your PHP `C:\PHP` directory.

  ![image](/images/php-windows-add-path-2.png)

* Click **OK** to save the changes.

### Validate the Installation

To confirm PHP is working:

* Open **Command Prompt**, **PowerShell**, or **Terminal**.
* Run the following command:

  ```text
  php -v
  ```

  You should see output like:

  ```text
  PHP 7.4.33 (cli) (built: Mar 14 2025 04:59:07) ( NTS Visual C++ 2017 x64 )
  Copyright (c) The PHP Group
  Zend Engine v3.4.0, Copyright (c) Zend Technologies
  ```

### Example Use Cases

You can integrate PHP with other tools, for example, IIS or WordPress. For further details and documentation, refer to the [official PHP documentation](https://www.php.net/manual/en/index.php).

## OVAL data

### Introduction

This section contains information about available ELS for PHP OVAL streams that can be used by vulnerability scanners.

Currently, we provide OVAL data for the following OS versions:

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.)
* Ubuntu 16.04
* Ubuntu 18.04
* Ubuntu 20.04
* Ubuntu 22.04
* Debian 10
* Debian 11
* Debian 12

### TuxCare PHP ELS OVAL Streams

* EL 6: [https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml)
* EL 7: [https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml)
* EL 8: [https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml)
* EL 9: [https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml)
* Ubuntu 16.04: [https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml)
* Ubuntu 18.04: [https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml)
* Ubuntu 20.04: [https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml)
* Ubuntu 22.04: [https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml)
* Debian 10: [https://repo.cloudlinux.com/php-els/debian10-els-php-oval.xml](https://repo.cloudlinux.com/php-els/debian10-els-php-oval.xml)
* Debian 11: [https://repo.cloudlinux.com/php-els/debian11-els-php-oval.xml](https://repo.cloudlinux.com/php-els/debian11-els-php-oval.xml)
* Debian 12: [https://repo.cloudlinux.com/php-els/debian12-els-php-oval.xml](https://repo.cloudlinux.com/php-els/debian12-els-php-oval.xml)

### How to use OVAL

1. Install OpenSCAP
    * for rpm systems:

    ```text
    yum install openscap openscap-utils scap-security-guide -y
    ```

    * for  deb systems:

    ```text
    apt-get install libopenscap8 -y
    ```

2. Download an OVAL stream:

    ```text
    wget https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml
    ```

3. Run a scan:

    ```text
    oscap oval eval --results result.xml --report report.xml centos6-els-php-oval.xml
    ```

## PHP extensions list

You can find the list of the supported add-ons [here](https://docs.cloudlinux.com/cloudlinuxos/alt-ea_packages/#bundled-php-extensions).

## How to use PHP-ELS

When you deploy an updated version of PHP through PHP ELS, using your system's regular update tool (yum, dnf, apt) the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

**The *bin* files:**

```text
[root@localhost ~]# ls -l /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```

***Modules* and *pecl* extensions:**

```text
ls /opt/alt/phpXY/usr/lib64/php/modules/
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

**Running code on a specific version through the CLI:**

```text
[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
```

**Location of *ini* config files:**

```text
[root@localhost ~]# ls /opt/alt/phpXY/etc/php.d.all/
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

**Location of *default.ini*:**

```text
ls /opt/alt/phpXY/etc/php.d/default.ini
```

**Listing enabled modules on a specific version:**

```text
[root@localhost ~]# /opt/alt/php73/usr/bin/php -m
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

**Enabling a module through the CLI:**

```text
[root@localhost ~]# /opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
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

As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments.