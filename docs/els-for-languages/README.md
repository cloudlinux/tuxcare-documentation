# Endless Lifecycle Support for Languages

* [ELS for PHP](./#els-for-php)
* [ELS for Python](./#els-for-python)
* [ELS for Spring Framework and Spring Boot](./#els-for-spring-framework-and-spring-boot)
* [ELS for Apache Tomcat](./#endless-lifecycle-support-for-apache-tomcat)
* [ELS for .NET](./#endless-lifecycle-support-for-net-6)
* [ELS for Angular](./#endless-lifecycle-support-for-angular)
* [ELS for AngularJS](./#endless-lifecycle-support-for-angularjs)

## ELS for PHP

Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows to continue running Linux server vulnerability-free.

### Supported OS

TuxCare provides Endless Lifecycle Support through four years after the EOL date.

| OS                                    | Version                                               |
| :-----------------------------------: | :----------------------------------------------:      |
| CentOS, CloudLinux, OracleLinux, etc. | 6.x 64-bit, 7.x 64-bit, 8.x 64-bit, 9.x 64-bit        |
| AlmaLinux                             | 8.x 64-bit, 9.x 64-bit                                |
| Ubuntu                                | 16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit|
| Debian				| 10, 11, 12						|
| Windows				| Windows Server 2019, 2025				|
Other distros upon request.


### Supported versions

**CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.:** 5.1.6, 5.2.17, 5.3.29, 5.4.45, 5.5.38, 5.6.40, 7.0.33, 7.1.33, 7.2.34, 7.3.33, 7.4.33, 8.0.30, 8.1.27, 8.2, 8.3

**Ubuntu:** 5.6.40, 7.0.33, 7.1.33, 7.2.34, 7.3.33, 7.4.33, 8.0.30, 8.1.27, 8.2, 8.3 

**Debian:** 10, 11, 12 

**Windows:** 5.6, 7.4

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### Installation instructions of yum repositories

#### RHEL based systems

1. Download an installer script:

```
wget https://repo.cloudlinux.com/php-els/install-php-els-repo.sh
```

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.

```
sh install-php-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.

```
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

- Each version of PHP individually or all versions at once can be installed.
- Standard commands to install each version separately can be used. For example, installing alt-php73:

```
yum install alt-php73*
```

To install all versions at the same time, use group:

```
yum groupinstall alt-php
```

#### Ubuntu

Download an installer script:

```
wget https://repo.cloudlinux.com/php-els/install-php-els-ubuntu-repo.sh
```

Run the installer script with keys:

```
bash install-php-els-ubuntu-repo.sh --license-key XXX-XXXXXXXXXXXX
```

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual apt upgrade command.

```
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

- Each version of PHP individually or all versions at once can be installed.
- Standard commands to install each version separately can be used. For example, installing alt-php73:
```
apt-get install alt-php73*
```
To install all versions at the same time, it is necessary to use the alt-php meta-package:
```
apt-get install alt-php
```

### OVAL data

#### Introduction

This section contains information about available ELS for PHP OVAL streams that can be used for partner application integration.

Currently, we provide OVAL data for the following OS versions:

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.)
* Ubuntu 16.04
* Ubuntu 18.04
* Ubuntu 20.04
* Ubuntu 22.04

#### TuxCare PHP ELS OVAL Streams

* EL 6: [https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml)
* EL 7: [https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml)
* EL 8: [https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml)
* EL 9: [https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml)
* Ubuntu 16.04: [https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml)
* Ubuntu 18.04: [https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml)
* Ubuntu 20.04: [https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml)
* Ubuntu 22.04: [https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml)

#### How to use OVAL

1. Install OpenSCAP
    * for rpm systems:
    ```
    yum install openscap openscap-utils scap-security-guide -y
    ```
    * for  deb systems:
    ```
    apt-get install libopenscap8 -y
    ```
2. Download OVAL stream:
```
wget https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml
```
3. Run scanning:
```
oscap oval eval --results result.xml --report report.xml centos6-els-php-oval.xml
```

### PHP extensions list

You can find the list of the supported add-ons [here](https://docs.cloudlinux.com/shared/alt-ea_packages/#bundled-php-extensions).

### How to use PHP-ELS 

When you deploy an updated version of PHP through PHP ELS, using your system’s regular update tool (yum, dnf, apt), the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes. 

**The *bin* files:** 

```
[root@localhost ~]# ll /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```
 
***Modules* and *pecl* extensions:** 
 
```
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
 
```
[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
```

**Location of *ini* config files:** 

```
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

```
ls /opt/alt/phpXY/etc/php.d/default.ini
```

**Listing enabled modules on a specific version:** 

```
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

```
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

## ELS for Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows to continue running Linux server vulnerability-free.

### Supported OS
TuxCare provides Endless Lifecycle Support through four years after the EOL date.
| OS                                    | Version                                               |
| :-----------------------------------: | :----------------------------------------------:      |
| CentOS, CloudLinux, OracleLinux, etc. | 6.x 64-bit, 7.x 64-bit, 8.x 64-bit		        |
| AlmaLinux                             | 9.x 64-bit                              	        |
| Ubuntu                                | 16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit, 24.04 64-bit		|					|
Other distros upon request.

### Supported versions
**EL6, 7, 8, 9**: alt-python 2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13
**debian 9 and 10**: 3.5, 3.8, 3.11
**debian 11 and 12**: 3.8, 3.11
**Ubuntu 16 and 18**: 3.5, 3.8, 3.11
**Ubuntu 20**: 3.7, 3.8, 3.10, 3.11, 3.12 
**Ubuntu 22**: 3.8, 3.11, 3.13 
**Ubuntu 24**: 3.8, 3.11

### Installation instructions of yum repositories

1. Download an installer script:

```
wget https://repo.cloudlinux.com/python-els/install-python-els-repo.sh
```
2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds a PGP key and adds repository to the server.
```
sh install-python-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```
3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.
```
yum info python2

Available Packages
Name         : python2
Version      : 2.7.18
Release      : 10.el9.tuxcare.els1
Architecture : x86_64
Size         : 43 k
Source       : python2-2.7.18-10.el9.tuxcare.els1.src.rpm
Repository   : python-els
Summary      : An interpreted, interactive, object-oriented programming language
URL          : https://www.python.org/
License      : Python
Description  : Python 2 is an old version of the language that is incompatible
             : with the 3.x line of releases.
```
4. To install python, it's necessary to enable the CodeReady Builder(CRB) repository, which contains the `gdbm` package.
```
yum install python2 --enablerepo crb
```
Once installed, you can use python2 in the usual way.
```python
$ python2
Python 2.7.18 (default, Jun 30 2022, 00:00:00)
[GCC 11.2.1 20220127 (Red Hat 11.2.1-9)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> print "Hello, World!"
Hello, World!
```

### Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.
To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com).

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/PYTHON_ELS/
```

Example of creating a local mirror for all supported OS versions:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
```

### OVAL data

#### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration.
Currently, we provide OVAL data for AlmaLinux 9.

#### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

#### How to use OVAL

1. Install OpenSCAP:
```
yum install openscap openscap-utils scap-security-guide -y
```
2. Download OVAL stream:
```
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
```
3. Run scanning:
```
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
```

## ELS for Spring Framework and Spring Boot

TuxCare's Endless Lifecycle Support (ELS) for Spring provides security updates, system enhancement patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Spring ecosystem components such as Spring Framework, Spring Boot, Spring Data, Spring Security, etc. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS for Spring service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring applications.

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### **Incident Reporting and Response Timeframe**

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Spring scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Spring offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span>
* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Technical Support

TuxCare provides technical support according to the [<u>support policy</u>](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

### Connection to ELS for Spring Repository

### Overview

This guide outlines the steps needed to integrate the TuxCare ELS for Spring repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

### Steps

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Spring repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)

### Step 2: Create or Modify Your Build Tool Settings

**Maven**

If you are using Maven as your build automation tool, you will need to make changes in your `${MAVEN_HOME}/settings.xml` file. If the file does not already exist in your Maven home directory (`${MAVEN_HOME}`), you should create one. Open the `settings.xml` file with a text editor and include the following configuration:

```
    <?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
        <servers>
            <server>
         	    <id>repository-id</id>
         	    <username>${env.USERNAME}</username>
         	    <password>${env.PASSWORD}</password>
       	</server>
        </servers>
    </settings> 
```

Set your credentials via the following enviromnent variables:

```
    export USERNAME=your-username
    export PASSWORD=your-password
```

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

```
    <repositories>
        <repository>
            <id>repository-id</id>
            <url>https://nexus-repo.corp.cloudlinux.com/repository/els_spring/</url>
        </repository>
    </repositories>
```

An example of maven project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven) . Do not forget to set the enviromnet variables.

**Gradle**

If you are using Gradle as your build automation tool, make sure to include the following configuration in your project setup:

```
    repositories {
      maven {
        url = uri("https://nexus-repo.corp.cloudlinux.com/repository/els_spring")
        credentials {
                username = findProperty('USERNAME')
                password = findProperty('PASSWORD')
        }
      }
    }
```

Set your credentials via the following enviromnent variables:

```
    export ORG_GRADLE_PROJECT_USERNAME=your-username
    export ORG_GRADLE_PROJECT_PASSWORD=your-password
```

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

An example of gradle project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle) . Do not forget to set the enviromnet variables.

### Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Spring repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Spring repository into your project. You can now benefit from the secure and vetted Spring libraries it provides.

### Resolved CVEs in ELS for Spring

| CVE Name         | Severity | Group                           | Name                                        | Version       | Fixed Version         |
| ---------------- | -------- | ------------------------------- | ------------------------------------------- | ------------- | --------------------- |
| CVE-2015-6420    | HIGH     | org.apache.velocity             | velocity                                    | 1.7           | 1.7.tuxcare           |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2017-1000487 | CRITICAL | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2018-10237   | MEDIUM   | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2019-12400   | MEDIUM   | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-13936   | HIGH     | org.apache.velocity             | velocity                                    | 1.7           | 1.7.tuxcare           |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-13956   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2020-36518   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-5397    | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-5398    | HIGH     | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-5421    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-8908    | LOW      | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2021-22060   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-22096   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-22118   | HIGH     | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-40690   | HIGH     | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2021-46877   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-0084    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2022-1471    | CRITICAL | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.yaml                        | snakeyaml                                   | 1.33          | 1.33.tuxcare          |
| CVE-2022-22950   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22968   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22970   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22971   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-24823   | MEDIUM   | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
| CVE-2022-25857   | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38749   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38750   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38751   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38752   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-40152   | HIGH     | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-41854   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-42003   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-42004   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-4244    | HIGH     | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2022-4245    | MEDIUM   | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2023-1370    | HIGH     | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
| CVE-2023-1973    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-20860   | HIGH     | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-20861   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-20863   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-25194   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
| CVE-2023-2976    | HIGH     | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-33201   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-33202   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-34054   | HIGH     | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-34453   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34454   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34455   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34462   | MEDIUM   | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-35116   | MEDIUM   | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
| CVE-2023-38286   | HIGH     | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-4043    | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2023-43642   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-44483   | MEDIUM   | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-44487   | HIGH     | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-46120   | HIGH     | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-4639    | CRITICAL | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.3      |
| CVE-2023-49921   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2023-52428   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-5379    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-5685    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.3      |
| CVE-2023-6378    | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-logging                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-6481    | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-logging                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-7272    | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2024-1459    | MEDIUM   | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-1635    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-22243   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-22257   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-22262   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-23444   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-23450   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2024-25710   | MEDIUM   | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-26308   | MEDIUM   | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-29025   | MEDIUM   | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-reactor-netty           | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-29857   | HIGH     | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-30171   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-31573   | CRITICAL | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.xmlunit                     | xmlunit-core                                | 2.9.1         | 2.9.1.tuxcare         |
| CVE-2024-34447   | HIGH     | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-36124   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-3653    | MEDIUM   | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-38807   | HIGH     | org.springframework.boot        | spring-boot-jarmode-layertools              | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-loader                          | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2024-38808   | MEDIUM   | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot                                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator-autoconfigure          | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-autoconfigure                   | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-devtools                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-properties-migrator             | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-core                     | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-xml                                  | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-38809   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-38816   | HIGH     | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare        |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare.1       |
| CVE-2024-38819   | HIGH     | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.3      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.3      |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2024-38820   | MEDIUM   | org.springframework             | spring-aop                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-aspects                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-beans                                | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context-indexer                      | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context-support                      | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-core                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-expression                           | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-framework-bom                        | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-instrument                           | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jcl                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jdbc                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jms                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-messaging                            | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-orm                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-oxm                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-r2dbc                                | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-test                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-tx                                   | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-web                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-websocket                            | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot                                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator-autoconfigure          | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-autoconfigure                   | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-devtools                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-jarmode-layertools              | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-properties-migrator             | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.ldap        | spring-ldap-core                            | 2.4.4         | 2.4.4.tuxcare         |
|                  |          | org.springframework.security    | spring-security-acl                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-aspects                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-config                      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-core                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-data                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-ldap                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-messaging                   | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws                                   | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-xml                                  | 3.1.8         | 3.1.8.tuxcare.1       |
| CVE-2024-38821   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-38828   | MEDIUM   | org.springframework             | spring-web                                  | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-websocket                            | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare.1      |
| CVE-2024-38829   | LOW      | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare.4      |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-40094   | HIGH     | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-43709   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-47535   | MEDIUM   | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-5971    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-6162    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-6762    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-7885    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-8184    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-9823    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2025-22228   | CRITICAL | org.springframework.security    | spring-security-acl                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-aspects                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-config                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-core                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-crypto                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-data                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-ldap                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-messaging                   | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare.1      |
| CVE-2025-24813   | CRITICAL | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-tomcat                  | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2025-24970   | HIGH     | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-reactor-netty           | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare.5      |

## Endless Lifecycle Support for Apache Tomcat

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat applications.

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### **Incident Reporting and Response Timeframe**

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Apache Tomcat scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Apache Tomcat offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span>
* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Technical Support

TuxCare provides technical support according to the [<u>support policy</u>](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

### Connection to ELS for Apache Tomcat Repository

### Overview
This guide outlines the steps needed to integrate the TuxCare ELS for Apache Tomcat repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

### Steps

### Step 1: Get user credentials
You need username and password in order to use TuxCare ELS Apache Tomcat repository. Anonymous access is disabled. To receive username and password please contact sales@tuxcare.com

### Step 2: Create or Modify Your Build Tool Settings

**Maven**

If you are using Maven as your build automation tool, you will need to make changes in your `${MAVEN_HOME}/settings.xml` file. If the file does not already exist in your Maven home directory (`${MAVEN_HOME}`), you should create one. Open the `settings.xml` file with a text editor and include the following configuration:

```
    <?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
        <servers>
            <server>
         	    <id>repository-id</id>
         	    <username>${env.USERNAME}</username>
         	    <password>${env.PASSWORD}</password>
       	</server>
        </servers>
    </settings> 
```

Set your credentials via the following enviromnent variables:

```
    export USERNAME=your-username
    export PASSWORD=your-password
```

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

```
    <repositories>
        <repository>
            <id>repository-id</id>
            <url>https://nexus.repo.tuxcare.com/#browse/browse:els_tomcat/</url>
        </repository>
    </repositories>
```

An example of maven project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven) . Do not forget to set the enviromnet variables.

**Gradle**

If you are using Gradle as your build automation tool, make sure to include the following configuration in your project setup:

```
    repositories {
      maven {
        url = uri("https://nexus.repo.tuxcare.com/#browse/browse:els_tomcat")
        credentials {
                username = findProperty('USERNAME')
                password = findProperty('PASSWORD')
        }
      }
    }
```

Set your credentials via the following enviromnent variables:

```
    export ORG_GRADLE_PROJECT_USERNAME=your-username
    export ORG_GRADLE_PROJECT_PASSWORD=your-password
```

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

An example of gradle project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle) . Do not forget to set the enviromnet variables.

### Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Tomcat repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Apache Tomcat repository into your project. You can now benefit from the secure and vetted Apache Tomcat libraries it provides.

### Resolved CVEs in ELS for Apache Tomcat

| CVE Name         | Severity | Group                           | Name                                        | Version       | Fixed Version         |
| ---------------- | -------- | ------------------------------- | ------------------------------------------- | ------------- | --------------------- |
|     |      |             |                                     |           |           |
|                  |          |     |     |       |         |


## Endless Lifecycle Support for .NET 6

Endless Lifecycle Support (ELS) for .NET 6 from TuxCare provides security fixes for .NET 6 that has reached its end of life. This allows you to continue running .NET 6 applications without vulnerability concerns, even after official support has ended. 

### Supported Windows Versions

| OS                      | Version                                                                                                  | Architectures |
| :---------------------: | :------------------------------------------------------------------------------------------------------: | :-----------: |
| **Nano Server**         | 2019, 2022                                                                                               | x64           |
| **Windows**             | 11 (24H2 (IoT), 24H2 (E), 24H2, 23H2, 22H2 (E)), 10 (22H2 (E), 21H2 (E), 21H2 (IoT), 1809 (E), 1607 (E)) | x64, x86      |
| **Windows Server**      | 23H2, 2022, 2019, 2016, 2012-R2, 2012                                                                    | x64, x86      |
| **Windows Server Core** | 2022, 2019, 2016, 2012-R2, 2012                                                                          | x64, x86      |

### Supported .NET 6 Versions

**SDK 6.0.428**   
The .NET SDK (Software Development Kit) is the recommended option if you plan to develop, build, test, or publish .NET 6 applications. It includes:
- The .NET Runtime, which is required to run .NET apps.
- The ASP.NET Core Runtime, so you can develop and host ASP.NET Core web applications out of the box.
- The .NET CLI and build tools for compiling and managing your .NET 6 projects.

With the SDK, you won't need to install separate runtimes for ASP.NET Core or the Desktop environment—everything is bundled together to streamline development and deployment.

**ASP.NET Core Runtime 6.0.36**   
The ASP.NET Core Runtime contains the components needed to run ASP.NET Core web applications on .NET 6. It includes libraries and features for building dynamic web pages, RESTful APIs, and real-time communication with SignalR.

*Note:* If you install the full .NET SDK, you already get the ASP.NET Core Runtime.

**.NET Desktop Runtime 6.0.36**   
The .NET Desktop Runtime allows you to run Windows desktop applications built with Windows Forms or WPF (Windows Presentation Foundation). It focuses on providing a smooth experience for traditional graphical apps on Windows platforms.

**.NET Runtime 6.0.36**  
The .NET Runtime is the base runtime required to run console or server-based .NET applications. It's more lightweight than the SDK, since it does not include compilers, build tools, or additional libraries for web or desktop development.

TuxCare applies security patches to .NET 6 for the above OS versions, ensuring continued stability and security even beyond the official end-of-life date.

### Vulnerability Coverage and Target Response Times 

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:
* **High and Critical CVEs (CVSS 7+)**: Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9)**: Patches provided within 60 days
* **Low-severity CVEs**: Patches may be provided upon custom request
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### Incident Reporting and Response Timeframe 

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/). TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for .NET scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Technical Support

TuxCare provides technical support according to the [support policy](https://tuxcare.com/TuxCare-els-windows-support-policy.pdf). It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/) and to the TuxCare’s online knowledge base.

### Enhanced Transparency & Visibility 

TuxCare's commitment to transparency and visibility is foundational to our ELS for .NET offering. We aim to provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Installation via the .NET Installer

#### Prerequisites & System Requirements
* Operating System compatibility - please, check the [supported versions](#supported-windows-versions) section above.
* For system requirements, please refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/).
* Administrator rights for installation
* Check if you have .NET already installed on your system:
  * Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar) and run the following command:
    ```
    dotnet --version
    ```
  * If .NET is already installed, the command will return the version number. If it’s not installed, you’ll see an error message. 
  * It’s recommended that you first install the latest version of .NET before uninstalling the old one. This ensures a smooth transition without breaking the dependencies.

#### Installation Steps 

* Obtain the required license to get access to the service.
* Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive the necessary steps for generating your unique access link (tokenized URL). Anonymous access is restricted. 
* Follow the provided instructions to create your secure download link.
* Use this link to access and download .NET 6 files.
* Choose the appropriate runtime:
  * **.NET SDK** - Includes everything needed for development, including the runtime and build tools.
  * **.NET Runtime** - Runs .NET applications but does not include development tools.
  * **.NET Runtime Desktop** - Required for running desktop applications built with .NET.
  * **ASP.NET Core Runtime** - Needed for running web applications and services built with ASP.NET Core.
	For more information please refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/).
* Download the corresponding installer based on your system type (x64 or x86). Downloading the latest version is recommended. 
  * .NET SDK - Installed via an .exe installer.
  * .NET Runtime, .NET Runtime Desktop, and ASP.NET Core Runtime – Installed via .msi files.
  :::tip
  In certain versions of some browsers (for example, Edge), you might see a warning after downloading. In this case,  manually allow the download. 
  :::

<span style="color: red;">_Note: The following steps use the .NET SDK installation as an example. If you are installing a runtime instead, follow a similar process using the corresponding .msi file._</span>
* Once the installer is downloaded, double-click the file to run it. You’ll see a dialog window. Follow the on-screen instructions: 
  ![image](/images/els-dotnet-installation.png)
  * Accept the **license agreement**.
  * Click **Install** and wait for the process to complete. It should only take a few minutes.
  * Once the installation is finished, click **Close**.
* Verify the installation. Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar) to confirm that .NET was installed successfully: 
  ```
  dotnet --version
  ```
  Example output:
  ```
  6.0.428
  ```

### Start Using .NET

Now that .NET is installed, you are ready to start using it. You can create and run .NET applications using the command-line tools or Visual Studio/Visual Studio Code.

If you’re new to .NET, we recommend visiting the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/) for a deeper understanding of the platform.

#### Create and Run a Test Project

For a quick start, you can follow this example to create and run a simple console application:
* Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar).
* Run the following command to create a new console application:
  ```
  dotnet new console -o MyTestApp
  ```
  Example output:
  ```
  Welcome to .NET 6.0!
  ---------------------
  SDK Version: 6.0.428

  ----------------------------------------------------------------------------
  The template "Console App" was created successfully.

  Processing post-creation actions...
  Running 'dotnet restore' on C:\Users\user\MyTestApp\MyTestApp.csproj...
    Determining projects to restore...
    Restored C:\Users\user\MyTestApp\MyTestApp.csproj (in 115 ms).
  Restore succeeded.
  ```
* Navigate to the newly created folder:
  ```
  cd MyTestApp
  ```
* Build and run the application:
  ```
  dotnet run
  ```
  When executed, you should see the following output:
  ```
  Hello, World!
  ```

#### Useful Commands

The following commands are useful for managing and troubleshooting .NET installation.
* `where.exe` dotnet locates the dotnet executable on the system. The output shows the exact path where the dotnet command is installed. By default, the .NET installation is placed in the Program Files\dotnet folder, unless a different destination is chosen during setup.
  ```
  where.exe dotnet
  ```
  Example output:
  ```
  C:\Program Files\dotnet\dotnet.exe
  ```
* `dontet --info` displays information about the installed .NET SDKs, runtimes and your OS. It also verifies the .NET is correctly set up.
  ```
  dotnet --info
  ```
  Example output:
  ```
  .NET SDK (reflecting any global.json):
   Version:   6.0.428
   Commit:    ef6f5ce48c

  Runtime Environment:
   OS Name:     Windows
   OS Version:  10.0.22631
   OS Platform: Windows
   RID:         win10-x64
   Base Path:   C:\Program Files\dotnet\sdk\6.0.428\

  global.json file:
    Not found

  Host:
    Version:      6.0.36
    Architecture: x64
    Commit:       N/A

  .NET SDKs installed:
    6.0.428 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

  Download .NET:
    https://aka.ms/dotnet-download

  Learn about .NET Runtimes and SDKs:
    https://aka.ms/dotnet/runtimes-sdk-info
  ```
* `dotnet –list-sdks` command lists all the .NET SDKs installed on your system. It’s recommended to uninstall the old .NET version after you install a new one.
  ```
  dotnet --list-sdks
  ```
  Example output:
  ```
  6.0.428 [C:\Program Files\dotnet\sdk]
  ```

### Uninstall ELS for .NET 6

#### Uninstall via Windows Settings
* Open **Settings** &rarr; **Apps** &rarr; **Installed Apps** or (**Apps&Features** on older versions). 
* Search for *.NET SDK* or *.NET Runtime* depending on what you’ve installed.
* Click on each entry and select **Uninstall**.
  :::tip
  During the uninstall,  a **"Files in use"** window can appear. Select **"Do not close applications. A reboot will be required option"** and click **OK** to proceed.
  :::
* A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window. 

![image](/images/dotnet-uninstall-settings.gif)

#### Uninstall via Control Panel
* Open **Control Panel** &rarr; **Programs** &rarr; **Programs and Features**.
* Search for *.NET SDK* or *.NET Runtime* depending on what you’ve installed.
* Right-click on each entry and select **Uninstall**.
  :::tip
  During the uninstall,  a **"Files in use"** window can appear. Select **"Do not close applications. A reboot will be required option"** and click **OK** to proceed.
  :::
* A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window. 

![image](/images/dotnet-uninstall-controlpanel.gif)

#### Remove Remaining Files
After uninstalling .NET some files may remain in the following locations:
* `C:\Program Files\dotnet\`
* `C:\Users\<user>\.dotnet\`

Consider deleting the folders manually to fully remove .NET.

### Frequent Issues
**How do I update .NET if a new version is released?**

Currently, to update .NET, you need to manually download the latest installer and follow the installation steps described above. After installing the new version, it’s recommended to remove the previous one. In the future, an automatic update mechanism for the components will be provided.

**What should I do if there are conflicts during installation?**

If you encounter conflicts, try uninstalling the previous version before installing the new one. In most cases, .NET versions can coexist without issues, but removing the older version may help resolve compatibility problems.

## Endless Lifecycle Support for Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular that have reached its end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended. 

<span style="color: red;">_ELS for Angular is currently in active development. If you’re interested in updates, adoption, or have specific requirements or feature requests, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span>

### Supported Angular Versions

* Angular 16
* Angular 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, and 17 are in active development and will be available shortly

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Angular scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Angular offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span>
* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Technical Support

TuxCare provides technical support according to the [<u>support policy</u>](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

### Connection to ELS for Angular Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Angular repository. 

### Step 1: Get user credentials
You need a username, password, and token in order to use TuxCare ELS Angular repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Create an account on [npmjs.com](https://www.npmjs.com/login)

You need to create an account on [npmjs.com](https://www.npmjs.com/login) to install the ELS Angular NPM package. Anonymous access is disabled.

### Step 3: Set Up ELS for Angular 16

TuxCare provides ELS for Angular 16 as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

* Navigate to the root directory of your Angular project.
* Create a `.npmrc` file or update it if it already exists.

  **Example:**
  ```
  my-angular-project/
  ├── src/
  ├── angular.json
  ├── package.json
  ├── .npmrc         ⚠️ ← Create it here
  └── tsconfig.json
  ```

* Use an editor of your choice (e.g., VS Code) to add the following registry address line: 
  ```
  registry=https://registry.npmjs.org/
  @els-angular:registry=https://nexus.repo.tuxcare.com/repository/els_angular/
  //nexus.repo.tuxcare.com/repository/els_angular/:_auth=${TOKEN}
  ```
  :::warning
  Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
  :::
* In your terminal, run: 
  ```
  npm login --userconfig .npmrc
  ```
  and login to your [npmjs.com](#step-2-create-an-account-on-npmjs-com) account. This will link your authentication to the registry.
  :::tip
  After logging in, npm will automatically add a line like `//registry.npmjs.org/:_authToken=${TOKEN}` to your `.npmrc` file. It stores a new token which is used to authenticate you to the [npmjs.com](https://www.npmjs.com/login) registry.
  :::
 
* Update your `package.json` file to replace your Angular dependencies with the TuxCare packages:
  ```
  "dependencies": {
    "@els-angular/angular-16": "^0.0.2",
    "@angular/animations": "./node_modules/@els-angular/angular-16/deps/angular-core/animations",
    "@angular/common": "./node_modules/@els-angular/angular-16/deps/angular-core/common",
    "@angular/compiler": "./node_modules/@els-angular/angular-16/deps/angular-core/compiler",
    "@angular/core": "./node_modules/@els-angular/angular-16/deps/angular-core/core",
    "@angular/forms": "./node_modules/@els-angular/angular-16/deps/angular-core/forms",
    "@angular/platform-browser": "./node_modules/@els-angular/angular-16/deps/angular-core/browser",
    "@angular/platform-browser-dynamic": "./node_modules/@els-angular/angular-16/deps/angular-core/platform-browser-dynamic",
    "@angular/router": "./node_modules/@els-angular/angular-16/deps/angular-core/router",
    "rxjs": "./node_modules/@els-angular/angular-16/deps/angular-core/rxjs",
    "tslib": "./node_modules/@els-angular/angular-16/deps/angular-core/tslib",
    "zone.js": "./node_modules/@els-angular/angular-16/deps/angular-core/zone.js"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "./node_modules/@els-angular/angular-16/deps/angular-devkit/build-angular",
    "@angular/cli": "./node_modules/@els-angular/angular-16/deps/angular/cli",
    "@angular/compiler-cli": "./node_modules/@els-angular/angular-16/deps/angular/compiler-cli",
    "@types/jasmine": "./node_modules/@els-angular/angular-16/deps/types/jasmine",
    "jasmine-core": "./node_modules/@els-angular/angular-16/deps/jasmine-core",
    "karma": "./node_modules/@els-angular/angular-16/deps/karma",
    "karma-chrome-launcher": "./node_modules/@els-angular/angular-16/deps/karma-chrome-launcher",
    "karma-coverage": "./node_modules/@els-angular/angular-16/deps/karma-coverage",
    "karma-jasmine": "./node_modules/@els-angular/angular-16/deps/karma-jasmine",
    "karma-jasmine-html-reporter": "./node_modules/@els-angular/angular-16/deps/karma-jasmine-html-reporter",
    "typescript": "./node_modules/@els-angular/angular-16/deps/typescript"
  }
  ```

* In your terminal, run the following command to install ELS for Angular 16 dependencies: 
  ```
  npm install --userconfig .npmrc
  ```
  You will see an output like:
  ```
  added 12 packages, removed 931 packages, changed 22 packages, and audited 57 packages in 23s

  found 0 vulnerabilities
  ```

* You've successfully integrated the TuxCare ELS for Angular repository into your project.

## Endless Lifecycle Support for AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS that have reached its end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended. 

<span style="color: red;">_ELS for AngularJS is currently in active development and will be available soon. If you’re interested or would like to stay informed, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 

### Supported AngularJS Versions

* AngularJS 1.8
* Other versions available upon request

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for AngularJS scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for AngularJS offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span>
* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.  
<span style="color: red;">_Note: This feature is under consideration for future development and may be available at a later date. If you’re interested, please, contact [sales@tuxcare.com](mailto:sales@tuxcare.com)._</span> 
* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Technical Support

TuxCare provides technical support according to the [<u>support policy</u>](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.
