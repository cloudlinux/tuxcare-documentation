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

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Angular scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Angular offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

## Technical Support

TuxCare provides technical support according to the [support policy](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

## Installation Instructions for Linux

The following steps are provided for both **RPM-based** (CentOS, CloudLinux, Oracle Linux, AlmaLinux, etc) and **DEB-based** (Debian, Ubuntu) systems. Please select the appropriate tab for your distribution.


1. Download the installer script:

    <CodeTabs :tabs="[
      { title: 'rpm', content: 'wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-rpm-repo.sh' },
      { title: 'deb', content: 'wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-deb-repo.sh' }
    ]" />

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.

    <CodeTabs :tabs="[
      { title: 'rpm', content: 'sh install-els-alt-php-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX' },
      { title: 'deb', content: 'bash install-els-alt-php-deb-repo.sh --license-key XXX-XXXXXXXXXXXX' }
    ]" />

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

    <CodeTabs :tabs="[
      { title: 'rpm', content: 'yum upgrade' },
      { title: 'deb', content: 'apt upgrade' }
    ]" />

4. To display information about the installed package, run the following command: 
    
    <CodeTabs :tabs="[
      { title: 'rpm', content: 'yum info alt-php73' },
      { title: 'deb', content: 'alt-php73-cli' }
    ]" />

    **An example output:**

    <CodeTabs :tabs="[
    { title: 'rpm', content: 
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
    { title: 'deb', content: 
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

#### How to install packages

Each version of PHP can be installed individually or all versions at once.

* Standard commands to install each version separately, for example, installing alt-php73:

  <CodeTabs :tabs="[
    { title: 'rpm', content: 'yum install alt-php73*' },
    { title: 'deb', content: 'apt-get install alt-php73*' }
  ]" />

* To install all versions at the same time:

  <CodeTabs :tabs="[
    { title: 'rpm', content: 'yum groupinstall alt-php' },
    { title: 'deb', content: 'apt-get install alt-php' }
  ]" />

## Installation Instructions for Windows

### Get user credentials

1. Obtain the required license to get access to the service.
2. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.

### Download TuxCare PHP Windows

1. Follow the instructions provided by [sales@tuxcare.com](mailto:sales@tuxcare.com) to create your secure download link.
2. Use this link to download the latest version of PHP.
3. Extract the downloaded archive (ZIP file) to a preferred directory, for example`C:\PHP`.
4. PHP doesn't have a traditional "installer" on Windows, it’s a portable application. Once you extract the files and set up a few things, it's ready to use.

### Configure PHP

Configure TuxCare ELS PHP for Windows to work as intended on Windows:

1. Navigate to your PHP directory (e.g. `C:\PHP`).
2. Find and rename the `php.ini-development` file to `php.ini`. This is the main configuration file PHP uses when running.

### Additional configurations (optional)

Depending on your ELS PHP usage purpose, additional configurations may be required. Here are some commonly useful configurations.

### Extensions

Many PHP features come as extensions and are disabled by default to keep PHP lightweight. TuxCare provides the required `.dll` files to support these extensions.
To enable the functionality you need, update the `php.ini` file:

1. Open the `php.ini` file in an editor of your choice (e.g. Notepad).
2. Uncomment necessary extensions by removing the `;` like so:

    <CodeWithCopy>

    ```text
    extension=curl
    extension=gd2
    extension=mbstring
    extension=mysqli
    extension=pdo_mysql
    ```

    </CodeWithCopy>

### Increase Upload/Memory Limits

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

### Add PHP to the System Path

Adding PHP to the system PATH lets you run the `php` command from a terminal window without typing its full location. This is useful for running scripts and using PHP with other tools.

1. Right-click **This PC** and select **Properties**, or search for **Settings > System > About** in the Start menu.
2. Click **Advanced system settings**.

  ![image](/images/php-windows-advanced-settings.png)

3. Click on **Environment Variables**.

  ![image](/images/php-windows-environment-variables.png)

4. Under *System variables*, find **Path** and click **Edit**.

  ![image](/images/php-windows-add-path.png)

5. Click **New** and add your PHP `C:\PHP` directory.

  ![image](/images/php-windows-add-path-2.png)

6. Click **OK** to save the changes.

### Validate the Installation

To confirm PHP is working:

1. Open **Command Prompt**, **PowerShell**, or **Terminal**.
2. Run the following command:

    <CodeWithCopy>

    ```text
    php -v
    ```

    </CodeWithCopy>

    You should see output like:

    ```text
    PHP 7.4.33 (cli) (built: Mar 14 2025 04:59:07) ( NTS Visual C++ 2017 x64 )
    Copyright (c) The PHP Group
    Zend Engine v3.4.0, Copyright (c) Zend Technologies
    ```

### Example Use Cases

You can integrate PHP with other tools, for example, IIS or WordPress. For further details and documentation, refer to the [official PHP documentation](https://www.php.net/manual/en/index.php).


## OVAL data

This section contains information about available ELS for PHP OVAL streams that can be used by vulnerability scanners.

### TuxCare PHP ELS OVAL Streams

Currently, we provide OVAL data for the following OS versions:

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_lang_php/el6/oval.xml)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_lang_php/el7/oval.xml)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_lang_php/el8/oval.xml)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [oval.xml](https://security.tuxcare.com/oval/els_lang_php/el9/oval.xml)
* Ubuntu 16.04: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/ubuntu16.04/oval.xml)
* Ubuntu 18.04: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/ubuntu18.04/oval.xml)
* Ubuntu 20.04: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/ubuntu20.04/oval.xml)
* Ubuntu 22.04: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/ubuntu22.04/oval.xml)
* Ubuntu 24.04: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/ubuntu24.04/oval.xml)
* Debian 10: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/debian10/oval.xml)
* Debian 11: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/debian11/oval.xml)
* Debian 12: [oval.xml](https://security.tuxcare.com/oval/els_lang_php/debian12/oval.xml)

### How to use OVAL

OVAL can be used with the OpenSCAP tool.

1. Install OpenSCAP

    <CodeTabs :tabs="[
      { title: 'rpm', content: 'yum install openscap openscap-utils scap-security-guide -y' },
      { title: 'deb', content: 'apt-get install libopenscap8 -y' }
    ]" />

2. Download an OVAL stream. For example, EL 6:

   <CodeWithCopy>
   
    ```text
    wget https://security.tuxcare.com/oval/els_lang_php/el6/oval.xml
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

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/csaf/v2/els_lang_php/el6/](https://security.tuxcare.com/csaf/v2/els_lang_php/el6/)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/csaf/v2/els_lang_php/el7/](https://security.tuxcare.com/csaf/v2/els_lang_php/el7/)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/csaf/v2/els_lang_php/el8/](https://security.tuxcare.com/csaf/v2/els_lang_php/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/csaf/v2/els_lang_php/el9/](https://security.tuxcare.com/csaf/v2/els_lang_php/el9/)
* Ubuntu 16.04: [security.tuxcare.com/csaf/v2/els_lang_php/ubuntu16.04/](https://security.tuxcare.com/csaf/v2/els_lang_php/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/csaf/v2/els_lang_php/ubuntu18.04/](https://security.tuxcare.com/csaf/v2/els_lang_php/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/csaf/v2/els_lang_php/ubuntu20.04/](https://security.tuxcare.com/csaf/v2/els_lang_php/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/csaf/v2/els_lang_php/ubuntu22.04/](https://security.tuxcare.com/csaf/v2/els_lang_php/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/csaf/v2/els_lang_php/ubuntu24.04/](https://security.tuxcare.com/csaf/v2/els_lang_php/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/csaf/v2/els_lang_php/debian10/](https://security.tuxcare.com/csaf/v2/els_lang_php/debian10/)
* Debian 11: [security.tuxcare.com/csaf/v2/els_lang_php/debian11/](https://security.tuxcare.com/csaf/v2/els_lang_php/debian11/)
* Debian 12: [security.tuxcare.com/csaf/v2/els_lang_php/debian12/](https://security.tuxcare.com/csaf/v2/els_lang_php/debian12/)

### How to Use CSAF

The CSAF files are published in JSON format which is easy to parse and integrate with other tools - OASIS provides a [list of reference tools](https://www.csaf.io/tools.html) that support CSAF.

## Errata

Currently, we provide errata for the following OS versions:

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/errata/els_lang_php/el6/](https://security.tuxcare.com/errata/els_lang_php/el6/)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/errata/els_lang_php/el7/](https://security.tuxcare.com/errata/els_lang_php/el7/)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.): [security.tuxcare.com/errata/els_lang_php/el8/](https://security.tuxcare.com/errata/els_lang_php/el8/)
* EL 9 (AlmaLinux, CentOS, CloudLinux, etc.): [security.tuxcare.com/errata/els_lang_php/el9/](https://security.tuxcare.com/errata/els_lang_php/el9/)
* Ubuntu 16.04: [security.tuxcare.com/errata/els_lang_php/ubuntu16.04/](https://security.tuxcare.com/errata/els_lang_php/ubuntu16.04/)
* Ubuntu 18.04: [security.tuxcare.com/errata/els_lang_php/ubuntu18.04/](https://security.tuxcare.com/errata/els_lang_php/ubuntu18.04/)
* Ubuntu 20.04: [security.tuxcare.com/errata/els_lang_php/ubuntu20.04/](https://security.tuxcare.com/errata/els_lang_php/ubuntu20.04/)
* Ubuntu 22.04: [security.tuxcare.com/errata/els_lang_php/ubuntu22.04/](https://security.tuxcare.com/errata/els_lang_php/ubuntu22.04/)
* Ubuntu 24.04 [security.tuxcare.com/errata/els_lang_php/ubuntu24.04/](https://security.tuxcare.com/errata/els_lang_php/ubuntu24.04/)
* Debian 10: [security.tuxcare.com/errata/els_lang_php/debian10/](https://security.tuxcare.com/errata/els_lang_php/debian10/)
* Debian 11: [security.tuxcare.com/errata/els_lang_php/debian11/](https://security.tuxcare.com/errata/els_lang_php/debian11/)
* Debian 12: [security.tuxcare.com/errata/els_lang_php/debian12/](https://security.tuxcare.com/errata/els_lang_php/debian12/)

## PHP extensions list

You can find the list of the supported add-ons [here](https://docs.cloudlinux.com/cloudlinuxos/alt-ea_packages/#bundled-php-extensions).

## How to use PHP-ELS

When you deploy an updated version of PHP through PHP ELS, using your system's regular update tool (yum, dnf, apt) the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

### The *bin* files

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

### *Modules* and *pecl* extensions

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

### Running code on a specific version through the CLI

<CodeWithCopy>

```text
/opt/alt/phpXY/usr/bin/php helloworld.php
```

</CodeWithCopy>

**An example output:**


```text
Hello, World!
```

### Location of *ini* config files

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

### Location of *default.ini*

<CodeWithCopy>

```text
ls /opt/alt/phpXY/etc/php.d/default.ini
```

</CodeWithCopy>

### Listing enabled modules on a specific version

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

### Enabling a module through the CLI

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

### Conclusion

As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments.