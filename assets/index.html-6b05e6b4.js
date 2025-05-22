import{_ as s,S as l,n as a,p as t,q as d,J as e,C as r,A as o,a4 as i}from"./framework-1d7fbccb.js";const c="/images/php-windows-advanced-settings.png",u="/images/php-windows-environment-variables.png",p="/images/php-windows-add-path.png",v="/images/php-windows-add-path-2.png",m={},h=i(`<h1 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h1><p>Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.</p><h2 id="supported-os-and-php-versions" tabindex="-1"><a class="header-anchor" href="#supported-os-and-php-versions" aria-hidden="true">#</a> Supported OS and PHP versions</h2><table><thead><tr><th style="text-align:center;">OS</th><th style="text-align:center;">Package Type</th><th style="text-align:center;">OS Version</th><th style="text-align:center;">PHP Version</th></tr></thead><tbody><tr><td style="text-align:center;">CentOS, CloudLinux, OracleLinux, etc.</td><td style="text-align:center;">RPM</td><td style="text-align:center;">6.x 64-bit, 7.x 64-bit, 8.x 64-bit, 9.x 64-bit</td><td style="text-align:center;">5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4</td></tr><tr><td style="text-align:center;">AlmaLinux</td><td style="text-align:center;">RPM</td><td style="text-align:center;">8.x 64-bit, 9.x 64-bit</td><td style="text-align:center;">5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4</td></tr><tr><td style="text-align:center;">Ubuntu</td><td style="text-align:center;">DEB</td><td style="text-align:center;">16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit</td><td style="text-align:center;">5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4</td></tr><tr><td style="text-align:center;">Debian</td><td style="text-align:center;">DEB</td><td style="text-align:center;">10, 11, 12</td><td style="text-align:center;">5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4</td></tr><tr><td style="text-align:center;">Windows</td><td style="text-align:center;">-</td><td style="text-align:center;">Windows Server 2019, 2022, 2025</td><td style="text-align:center;">5.6, 7.4</td></tr></tbody></table><p>Other distros upon request.</p><h2 id="vulnerability-coverage-and-target-response-times" tabindex="-1"><a class="header-anchor" href="#vulnerability-coverage-and-target-response-times" aria-hidden="true">#</a> Vulnerability Coverage and Target Response Times</h2><p>TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor&#39;s score is lower than the NVD score, we prioritize the NVD score.</p><p>Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI-DSS) mandates that all &#39;High&#39; vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, have similar requirements.</p><p>TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:</p><ul><li><strong>High and Critical CVEs (CVSS 7+):</strong> Patches provided within 14 days</li><li><strong>Medium-severity CVEs (CVSS 4.0 to 6.9):</strong> Patches provided within 60 days</li><li><strong>Low-severity CVEs:</strong> Patches provided within 90 days</li><li>TuxCare may offer a mitigation strategy as an alternative to a direct code fix.</li></ul><h2 id="installation-instructions-for-linux" tabindex="-1"><a class="header-anchor" href="#installation-instructions-for-linux" aria-hidden="true">#</a> Installation Instructions for Linux</h2><h3 id="rpm-based-systems" tabindex="-1"><a class="header-anchor" href="#rpm-based-systems" aria-hidden="true">#</a> RPM-based Systems</h3><p>These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).</p><ol><li><p>Download the installer script:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/php-els/install-php-els-rpm-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-php-els-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Verify that the installation was successful.</p><p>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>yum upgrade</code> command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info alt-php73

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>How to install packages:</strong></p><ul><li><p>Each version of PHP individually or all versions at once can be installed.</p></li><li><p>Standard commands to install each version separately can be used. For example, installing alt-php73:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install alt-php73*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>To install all versions at the same time, use <code>groupinstall</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum groupinstall alt-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="deb-based-systems" tabindex="-1"><a class="header-anchor" href="#deb-based-systems" aria-hidden="true">#</a> DEB-based Systems</h3><p>These steps are suitable for DEB-based systems (Ubuntu, Debian).</p><ol><li>Download an installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/php-els/install-php-els-deb-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with your key:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash install-php-els-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>apt upgrade</code> command.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-cache show alt-php73-cli

Package: alt-php73-cli
Source: php
Version: 7.3.18-1
Architecture: amd64
Maintainer: Sergey Fokin &lt;sfokin@cloudlinux.com&gt;
Installed-Size: 51694
Depends: libbz2-1.0, libc6 (&gt;= 2.14), libcurl3 (&gt;= 7.44.0), libgmp10, libreadline6 (&gt;= 6.0), libssl1.0.0 (&gt;= 1.0.2~beta3), libsystemd0, libxml2 (&gt;= 2.9.0), zlib1g (&gt;= 1:1.1.4), alt-php73-common (= 7.3.18-1), libcurl4-openssl-dev, libnghttp2-14
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>How to install packages:</strong></p><ul><li><p>Each version of PHP individually or all versions at once can be installed.</p></li><li><p>Standard commands to install each version separately can be used. For example, installing alt-php73:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install alt-php73*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>To install all versions at the same time, it is necessary to use the alt-php meta-package:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install alt-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="installation-instructions-for-windows" tabindex="-1"><a class="header-anchor" href="#installation-instructions-for-windows" aria-hidden="true">#</a> Installation Instructions for Windows</h2><h3 id="get-user-credentials" tabindex="-1"><a class="header-anchor" href="#get-user-credentials" aria-hidden="true">#</a> Get user credentials</h3><ul><li>Obtain the required license to get access to the service.</li><li>Contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> to receive instructions for generating your unique access link (tokenized URL). Anonymous access is restricted.</li></ul><h3 id="download-tuxcare-php-windows" tabindex="-1"><a class="header-anchor" href="#download-tuxcare-php-windows" aria-hidden="true">#</a> Download TuxCare PHP Windows</h3><ul><li>Follow the instructions provided by <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> to create your secure download link.</li><li>Use this link to download the latest version of PHP.</li><li>Extract the downloaded archive (ZIP file) to a preferred directory, for example<code>C:\\PHP</code>.</li><li>PHP doesn&#39;t have a traditional &quot;installer&quot; on Windows, it’s a portable application. Once you extract the files and set up a few things, it&#39;s ready to use.</li></ul><h3 id="configure-php" tabindex="-1"><a class="header-anchor" href="#configure-php" aria-hidden="true">#</a> Configure PHP</h3><p>Configure TuxCare ELS PHP for Windows to work as intended on Windows:</p><ul><li>Navigate to your PHP directory (e.g. <code>C:\\PHP</code>).</li><li>Find and rename the <code>php.ini-development</code> file to <code>php.ini</code>. This is the main configuration file PHP uses when running.</li></ul><h3 id="additional-configurations-optional" tabindex="-1"><a class="header-anchor" href="#additional-configurations-optional" aria-hidden="true">#</a> Additional configurations (optional)</h3><p>Depending on your ELS PHP usage purpose, additional configurations may be required. Here are some commonly useful configurations.</p><h3 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions" aria-hidden="true">#</a> Extensions</h3><p>Many PHP features come as extensions and are disabled by default to keep PHP lightweight. TuxCare provides the required <code>.dll</code> files to support these extensions. To enable the functionality you need, update the <code>php.ini</code> file:</p><ul><li><p>Open the <code>php.ini</code> file in an editor of your choice (e.g. Notepad).</p></li><li><p>Uncomment necessary extensions by removing the <code>;</code> like so:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extension=curl
extension=gd2
extension=mbstring
extension=mysqli
extension=pdo_mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="increase-upload-memory-limits" tabindex="-1"><a class="header-anchor" href="#increase-upload-memory-limits" aria-hidden="true">#</a> Increase Upload/Memory Limits</h3><p>If you&#39;re integrating PHP with applications like WordPress, you might need to increase memory and upload size limits:</p><ul><li><p>Open the <code>php.ini</code> file in an editor of your choice (e.g. Notepad).</p></li><li><p>Set the limits as needed, e.g:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upload_max_filesize=40M
post_max_size=40M
memory_limit=256M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="add-php-to-the-system-path" tabindex="-1"><a class="header-anchor" href="#add-php-to-the-system-path" aria-hidden="true">#</a> Add PHP to the System Path</h3><p>Adding PHP to the system PATH lets you run the <code>php</code> command from a terminal window without typing its full location. This is useful for running scripts and using PHP with other tools.</p><ul><li><p>Right-click <strong>This PC</strong> and select <strong>Properties</strong>, or search for <strong>Settings &gt; System &gt; About</strong> in the Start menu.</p></li><li><p>Click <strong>Advanced system settings</strong>.</p><p><img src="`+c+'" alt="image"></p></li><li><p>Click on <strong>Environment Variables</strong>.</p><p><img src="'+u+'" alt="image"></p></li><li><p>Under <em>System variables</em>, find <strong>Path</strong> and click <strong>Edit</strong>.</p><p><img src="'+p+'" alt="image"></p></li><li><p>Click <strong>New</strong> and add your PHP <code>C:\\PHP</code> directory.</p><p><img src="'+v+`" alt="image"></p></li><li><p>Click <strong>OK</strong> to save the changes.</p></li></ul><h3 id="validate-the-installation" tabindex="-1"><a class="header-anchor" href="#validate-the-installation" aria-hidden="true">#</a> Validate the Installation</h3><p>To confirm PHP is working:</p><ul><li><p>Open <strong>Command Prompt</strong>, <strong>PowerShell</strong>, or <strong>Terminal</strong>.</p></li><li><p>Run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should see output like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PHP 7.4.33 (cli) (built: Mar 14 2025 04:59:07) ( NTS Visual C++ 2017 x64 )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="example-use-cases" tabindex="-1"><a class="header-anchor" href="#example-use-cases" aria-hidden="true">#</a> Example Use Cases</h3><p>You can integrate PHP with other tools, for example, IIS or WordPress. For further details and documentation, refer to the <a href="https://www.php.net/manual/en/index.php" target="_blank" rel="noopener noreferrer">official PHP documentation</a>.</p><h2 id="oval-data" tabindex="-1"><a class="header-anchor" href="#oval-data" aria-hidden="true">#</a> OVAL data</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p>This section contains information about available ELS for PHP OVAL streams that can be used by vulnerability scanners.</p><p>Currently, we provide OVAL data for the following OS versions:</p><ul><li>EL 6 (CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 7 (CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 9 (AlmaLinux, CentOS, CloudLinux, etc.)</li><li>Ubuntu 16.04</li><li>Ubuntu 18.04</li><li>Ubuntu 20.04</li><li>Ubuntu 22.04</li></ul><h3 id="tuxcare-php-els-oval-streams" tabindex="-1"><a class="header-anchor" href="#tuxcare-php-els-oval-streams" aria-hidden="true">#</a> TuxCare PHP ELS OVAL Streams</h3><ul><li>EL 6: <a href="https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml</a></li><li>EL 7: <a href="https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml</a></li><li>EL 8: <a href="https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml</a></li><li>EL 9: <a href="https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml</a></li><li>Ubuntu 16.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml</a></li><li>Ubuntu 18.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml</a></li><li>Ubuntu 20.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml</a></li><li>Ubuntu 22.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml</a></li></ul><h3 id="how-to-use-oval" tabindex="-1"><a class="header-anchor" href="#how-to-use-oval" aria-hidden="true">#</a> How to use OVAL</h3><ol><li><p>Install OpenSCAP</p><ul><li>for rpm systems:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install openscap openscap-utils scap-security-guide -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>for deb systems:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install libopenscap8 -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Download an OVAL stream:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Run a scan:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>oscap oval eval --results result.xml --report report.xml centos6-els-php-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="php-extensions-list" tabindex="-1"><a class="header-anchor" href="#php-extensions-list" aria-hidden="true">#</a> PHP extensions list</h2>`,60),b=i(`<h2 id="how-to-use-php-els" tabindex="-1"><a class="header-anchor" href="#how-to-use-php-els" aria-hidden="true">#</a> How to use PHP-ELS</h2><p>When you deploy an updated version of PHP through PHP ELS, using your system&#39;s regular update tool (yum, dnf, apt) the new version will be installed under <code>/opt/alt/php[version]/</code>. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.</p><p><strong>The <em>bin</em> files:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# ls -l /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>Modules</em> and <em>pecl</em> extensions:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls /opt/alt/phpXY/usr/lib64/php/modules/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Running code on a specific version through the CLI:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Location of <em>ini</em> config files:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# ls /opt/alt/phpXY/etc/php.d.all/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Location of <em>default.ini</em>:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls /opt/alt/phpXY/etc/php.d/default.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Listing enabled modules on a specific version:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# /opt/alt/php73/usr/bin/php -m
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Enabling a module through the CLI:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# /opt/alt/php73/usr/bin/php -d &quot;extension=igbinary.so&quot; -m
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments.</p>`,17);function g(x,f){const n=l("RouterLink");return a(),t("div",null,[h,d("p",null,[e("You can find the list of the supported add-ons "),r(n,{to:"/cloudlinuxos/alt-ea_packages/#bundled-php-extensions"},{default:o(()=>[e("here")]),_:1}),e(".")]),b])}const P=s(m,[["render",g],["__file","index.html.vue"]]);export{P as default};
