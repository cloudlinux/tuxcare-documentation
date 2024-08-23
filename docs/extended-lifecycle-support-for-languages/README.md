# Extended Lifecycle Support for Languages

## Extended Lifecycle Support for PHP

Extended Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows to continue running Linux server vulnerability-free.

### Supported OS

TuxCare provides Extended Lifecycle Support through four years after the EOL date.

| OS                                    | Version                                               |
| :-----------------------------------: | :----------------------------------------------:      |
| CentOS, CloudLinux, OracleLinux, etc. | 6.x 64-bit, 7.x 64-bit, 8.x 64-bit, 9.x 64-bit        |
| AlmaLinux                             | 8.x 64-bit, 9.x 64-bit                                |
| Ubuntu                                | 16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit|

### Supported versions

**CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.:** 5.1.6, 5.2.17, 5.3.29, 5.4.45, 5.5.38, 5.6.40, 7.0.33, 7.1.33, 7.2.34, 7.3.33, 7.4.33, 8.0.30, 8.1.27, 8.2, 8.3

**Ubuntu:** 5.6.40, 7.0.33, 7.1.33, 7.2.34, 7.3.33, 7.4.33, 8.0.30, 8.1.27, 8.2, 8.3



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


**The *bin* files:**

```
[root@localhost ~]# ll /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```


***Modules* and *pecl* extensions:**

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

**Location of *ini* config files:**

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

**Location of *default.ini*:**

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


## Extended Lifecycle Support for Spring Framework and Spring Boot

TuxCare's Extended Lifecycle Support (ELS) for Spring provides security updates, system enhancement patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Spring ecosystem components such as Spring Framework, Spring Boot, Spring Data, Spring Security, etc. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS for Spring service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring applications.

### Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

-   **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
-   **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
-   **Low-severity CVEs:** Patches provided within 90 days
-   TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

### **Incident Reporting and Response Timeframe**

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCarecommits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Spring scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

### Supported Projects and Duration of Support

TuxCare provides Extended Lifecycle Support (ELS) for more than three years (see the table below for details). This support is offered after the Spring project has reached its End of Life (EOL) or no longer receives standard support.

| Project                | End of OSS Support            | End of TuxCare Support |
| ---------------------- | ----------------------------- | ---------------------- |
| Spring Framework 5.3   | 31 Aug 2024                   | 31 Dec 2027            |
| Spring Boot 2.7        | 24 Nov 2023                   | 31 Dec 2027            |
| Spring Security 5.6    | 31 Dec 2024                   | 31 Dec 2027            |
| Spring Data 2.7        | 24 Nov 2023                   | 31 Dec 2027            |
| Spring Integration 5.5 | 31 Dec 2024 **(coming soon)** | Planned                |
| Spring Batch 4.3.x     | 31 Dec 2024 **(coming soon)** | Planned                |

Support for additional libraries can be provided on request.

### Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Spring offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

-   **SLSA Compliance:** All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
-   **Software Bill of Materials (SBOM):** We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.
-   **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
-   **Verifiable Integrity and Provenance:** Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.
-   **Secure Distribution:** Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

### Technical Support

TuxCare provides technical support according to the [<u>support policy</u>](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

### Connection to ELS for Spring Repository

### Overview

This guide outlines the steps needed to integrate the TuxCare ELS for Spring repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

### Steps

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Spring repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)

### Step 2: Create or Modify Your Build Tool Settings

Maven

If you are using Maven as your build automation tool, you will need to make changes in your `${MAVEN_HOME}/settings.xml` file. If the file does not already exist in your Maven home directory (`${MAVEN_HOME}`), you should create one. Open the `settings.xml` file with a text editor and include the following configuration:

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

Set your credentials via the following enviromnent variables:

    export USERNAME=your-username
    export PASSWORD=your-password

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

    <repositories>
        <repository>
            <id>repository-id</id>
            <url>https://nexus-repo.corp.cloudlinux.com/repository/els_spring/</url>
        </repository>
    </repositories>

An example of maven project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven) . Do not forget to set the enviromnet variables.

Gradle

If you are using Gradle as your build automation tool, make sure to include the following configuration in your project setup:

    repositories {
      maven {
        url = uri("https://nexus-repo.corp.cloudlinux.com/repository/els_spring")
        credentials {
                username = findProperty('USERNAME')
                password = findProperty('PASSWORD')
        }
      }
    }

Set your credentials via the following enviromnent variables:

    export ORG_GRADLE_PROJECT_USERNAME=your-username
    export ORG_GRADLE_PROJECT_PASSWORD=your-password

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](https://github.com/cloudlinux/securechain-java/blob/main/details/integration_guide.md#step-1-get-user-credntials) .

An example of gradle project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle) . Do not forget to set the enviromnet variables.

### Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Spring repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Spring repository into your project. You can now benefit from the secure and vetted Spring libraries it provides.

## Extended Lifecycle Support for Python

Extended Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python 2.7 version for AlmaLinux 9. This allows to continue running Linux server vulnerability-free.

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
