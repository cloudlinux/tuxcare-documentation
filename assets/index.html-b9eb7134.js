import{_ as e,n as t,p as n,v as a,a4 as i}from"./framework-69764084.js";const l={},s=i(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><p>Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.</p><h2 id="supported-os-and-python-versions" tabindex="-1"><a class="header-anchor" href="#supported-os-and-python-versions" aria-hidden="true">#</a> Supported OS and Python versions</h2><p><strong>Supported architecture:</strong> 64-bit.</p><table><thead><tr><th style="text-align:center;">OS</th><th style="text-align:center;">Package Type</th><th style="text-align:center;">OS Version</th><th style="text-align:center;">Python version</th></tr></thead><tbody><tr><td style="text-align:center;">CentOS, CloudLinux, OracleLinux, etc.</td><td style="text-align:center;">RPM</td><td style="text-align:center;">6.x, 7.x, 8.x</td><td style="text-align:center;">2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13</td></tr><tr><td style="text-align:center;">AlmaLinux</td><td style="text-align:center;">RPM</td><td style="text-align:center;">9.x</td><td style="text-align:center;">2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13</td></tr><tr><td style="text-align:center;">Ubuntu</td><td style="text-align:center;">DEB</td><td style="text-align:center;">16.04, 18.04, 20.04, 22.04, 24.04</td><td style="text-align:center;">3.8, 3.11</td></tr><tr><td style="text-align:center;">Debian</td><td style="text-align:center;">DEB</td><td style="text-align:center;">10, 11, 12</td><td style="text-align:center;">3.8, 3.11</td></tr></tbody></table><p>*Other distros and architectures upon request.</p><h2 id="installation-instructions-for-linux" tabindex="-1"><a class="header-anchor" href="#installation-instructions-for-linux" aria-hidden="true">#</a> Installation Instructions for Linux</h2><h3 id="rpm-based" tabindex="-1"><a class="header-anchor" href="#rpm-based" aria-hidden="true">#</a> RPM-based</h3><p>These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).</p><ol><li>Download the installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>yum upgrade</code> command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info alt-python36

Available Packages
Name         : alt-python36
Version      : 3.6.15
Release      : 4.el9
Architecture : x86_64
Size         : 26 k
Source       : alt-python36-3.6.15-4.el9.src.rpm
Repository   : alt-python
Summary      : Version 3 of the Python programming language aka Python 3000
URL          : https://www.python.org/
License      : Python
Description  : Python 3 is a new version of the language that is incompatible
             : with the 2.x line of releases. The language is mostly the same,
             : but many details, especially how built-in objects like
             : dictionaries and strings work, have changed considerably, and a
             : lot of deprecated features have finally been removed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>To install python, it&#39;s necessary to enable the CodeReady Builder(CRB) repository, which contains the <code>gdbm</code> package.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install alt-python36 --enablerepo crb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><code>alt-python</code> versions are intended to be installed alongside the system&#39;s default python and allow multiple versions to coexist. To use a specific <code>alt-python</code> version, please, run it directly from its installation directory, for example:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Apr 10 2024, 00:00:00) 
[GCC 11.5.0 20240719 (Red Hat 11.5.0-5)] on linux
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; print(&quot;Hello, World!&quot;)
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deb-based" tabindex="-1"><a class="header-anchor" href="#deb-based" aria-hidden="true">#</a> DEB-based</h3><p>These steps are suitable for DEB-based systems (Ubuntu, Debian).</p><ol><li>Download the installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>apt upgrade</code> command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-cache show alt-python36
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29);function r(o,d){return t(),n("div",null,[s,a(`
## Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.

* To obtain access to the local mirroring facility, provide your IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com)

* To create a local mirror of the repository with security updates via \`rsync\`, use the following:

\`\`\`text
rsync://repo.cloudlinux.com/PYTHON_ELS/
\`\`\`

* Example of creating a local mirror for all supported OS versions:

\`\`\`text
rsync -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
\`\`\`

## OVAL data

### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration. Currently, we provide OVAL data for AlmaLinux 9.

### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

### How to use OVAL

1. Install OpenSCAP:

\`\`\`text
yum install openscap openscap-utils scap-security-guide -y
\`\`\`

2. Download an OVAL stream:

\`\`\`text
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
\`\`\`

3. Run a scan:

\`\`\`text
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
\`\`\`
`)])}const u=e(l,[["render",r],["__file","index.html.vue"]]);export{u as default};
