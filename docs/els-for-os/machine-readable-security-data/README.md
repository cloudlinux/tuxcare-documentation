# Machine-Readable Security Data (Errata, OVAL, CSAF)

TuxCare provides the following security updates for ELS for OS:

* **Errata** — qualified security and selected bug-fix errata advisories
* **OVAL** — Open Vulnerability and Assessment Language patch definitions for use with OpenSCAP and similar tools
* **CSAF** — Common Security Advisory Framework advisories in [OASIS](https://www.csaf.io/) CSAF 2.0 format (VEX and Security Advisory)
* **RSS** — release feeds for tracking updates

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/fixes) and [security.tuxcare.com](https://security.tuxcare.com).

## Security data feeds

| OS | OVAL | CSAF | RSS |
|----|------|------|-----|
| Alpine Linux 3.18 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/alpinelinux3.18els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/alpinelinux3.18els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Alpine+Linux+3.18+ELS) |
| Amazon Linux 2 ELS | — | [csaf](https://security.tuxcare.com/csaf/v2/els_os/amazonlinux2els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Amazon+Linux+2+ELS) |
| CentOS 6 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos6els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos6els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+6+ELS) |
| CentOS 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+7+ELS) |
| CentOS 8.4 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+8.4+ELS) |
| CentOS 8.5 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+8.5+ELS) |
| CentOS Stream 8 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos-stream8els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos-stream8els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+Stream+8+ELS) |
| Debian 10 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/debian10els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/debian10els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Debian+10+ELS) |
| Oracle Linux 6 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux6els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Oracle+Linux+6+ELS) |
| Oracle Linux 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Oracle+Linux+7+ELS) |
| Red Hat Enterprise Linux 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/rhel7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/rhel7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Red+Hat+Enterprise+Linux+7+ELS) |
| Red Hat Enterprise Linux 8 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/rhel8els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/rhel8els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Red+Hat+Enterprise+Linux+8+ELS) |
| Ubuntu 16.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu16.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+16.04+ELS) |
| Ubuntu 18.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu18.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+18.04+ELS) |
| Ubuntu 20.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+20.04+ELS) |

## Errata advisories

TuxCare Endless Lifecycle Support provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which CVEs are resolved and which bugs have been addressed.

You can view the full list of released fixes on [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/fixes/).

## OVAL patch definitions

Leveraging the Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities.

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy. We provide OVAL data that contain instructions to the vulnerability scanner to determine the addressed vulnerabilities from the ELS updates. OVAL streams for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

### How to use OpenSCAP with TuxCare ELS

OpenSCAP is an open source vulnerability scanner and compliance tool and it can be used to scan a system protected by TuxCare ELS. The following steps show how to produce a vulnerability report for the system:

1. Install the ELS release package and OpenSCAP:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install els-define openscap openscap-utils scap-security-guide -y` },
     { title: 'DEB', content: `apt-get install els-define libopenscap8 -y` },
     { title: 'APK', content: `apk add els-alpine-release openscap` }
   ]" />

2. Before running a scan, make sure the system is up to date and running the latest kernel:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update -y` },
     { title: 'DEB', content: `apt-get update && apt-get upgrade -y` },
     { title: 'APK', content: `apk update && apk upgrade` }
   ]" />

3. Reboot the system.

4. **RPM-based system only**: after reboot, remove older kernel versions:

   <CodeTabs :tabs="[
     { title: 'EL 6, EL 7', content: `package-cleanup --oldkernels --count=1 -y` },
     { title: 'EL 8, EL 9', content: `dnf remove --oldinstallonly -y` }
   ]" />

5. Download the OVAL stream. For example, Ubuntu 18.04:

   ```
   wget https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml
   ```

6. Run the scan:

   ```
   oscap oval eval --results results.xml --report report.html oval.xml
   ```

7. Examine the scan results report.

   Following the example above, the scan results report will be saved to the report.html file in the current directory. This file can then be downloaded for analysis or published directly with a local web server, for example:

   ```
   python3 -m http.server 8000
   ```

   or for python2

   ```
   python -m SimpleHTTPServer 8000
   ```

   Assuming the above command is run from the directory with the report.html file, the webpage with the report can then be accessed on `http://<server-ip-address>:8000/report.html` through a web browser.

   **Note: the OpenSCAP report below is provided as an example. The results will vary depending on the OS and version you are scanning.**

   ![](/images/available-cve-fixes-and-their-status.webp)

   The report includes a table with vulnerabilities and their status on the examined system. A line such as the one below reports that the system is vulnerable to CVE-2023-2828:

   ```
   update oval:com.tuxcare.clsa:def:1688677755 true patch [CLSA-2023:1688677755], [CVE-2023-2828] Fix CVE(s): CVE-2023-2828
   ```

   The table also includes corresponding hyperlinks to advisory pages where the package and the version containing the fix can be found as well as the command to run on the target system in order to install the update.

   Lines like the one below designate that the fix for the corresponding CVE is already installed on the system, and no further action is needed:

   ```
   oval:com.tuxcare.clsa:def:1694538670 false patch [CLSA-2023:1694538670], [CVE-2022-40433] Fix CVE(s): CVE-2022-40433
   ```

### How to integrate the OVAL data with a new vulnerability scanner

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy.

To detect whether a system has TuxCare ELS installed, check for the following file being present: `/etc/els-release`.

Once that is validated, you can use the OVAL files corresponding to your operating system from above to scan for vulnerabilities.

## Common Security Advisory Framework

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). It's designed to enable consistent and automated sharing of security advisory information. CSAF links for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

TuxCare publishes the following CSAF files at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/):
* CSAF Vulnerability Exploitability eXchange (VEX) files – VEX documents, indexed by CVE, are available in CSAF 2.0 format, including past CVEs.
* CSAF Security Advisory files – advisories are published in CSAF 2.0 format and indexed by Security Advisory.

`provider-metadata.json` contains information for tools and users about where and how to retrieve CSAF advisories published by TuxCare. By OASIS requirements, it is available at two URLs (both serving the same file):
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

## RSS release feeds

TuxCare provides RSS feeds for tracking new ELS releases. RSS links for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

## Package Signature Verification (GPG)

Every package TuxCare builds for ELS for OS is cryptographically signed, so the
package manager can confirm — before anything is installed or updated — that the
package was produced by TuxCare and has not been altered in transit. Unlike a
manual, per-file check, this verification is **built into the native package
manager (`yum`/`dnf`, `apt`, `apk`) and enabled by default**: the ELS release
package you install during setup imports TuxCare's signing key and turns
signature checking on, so every subsequent transaction is verified automatically.

A successful verification proves two things about a package:

* **Authenticity** — it was signed by TuxCare's private key.
* **Integrity** — its bytes match exactly what was signed; no tampering or corruption occurred.

A failed verification is an **integrity violation**: the package manager refuses
to install the package. Do not work around a failed check — for example by
disabling GPG checking or downloading over an insecure channel — investigate the
source instead.

### How Packages and Repository Metadata Are Signed

<TableTabs label="Choose distribution: ">

<template #RPM>

The ELS release package (`els-define` / `els-os-release`) installs TuxCare's
public key at `/etc/pki/rpm-gpg/RPM-GPG-KEY-TuxCare` and configures the
repositories under `/etc/yum.repos.d/` with `gpgcheck=1`. Every RPM carries a
GPG signature in its header, which `yum`/`dnf` verifies against that key on every
install and update.

TuxCare also publishes a detached signature of the repository metadata index
(`repodata/repomd.xml.asc`). Verifying it additionally protects the metadata
itself against tampering; enable it with `repo_gpgcheck=1`.

:::warning
By default the ELS `.repo` files enable `gpgcheck=1` (package signatures) but do
**not** enable `repo_gpgcheck=1` (repository metadata signature). To have the
package manager also enforce the metadata signature, add `repo_gpgcheck=1` to the
repository section:

```text
[centos7-els]
...
gpgcheck=1
repo_gpgcheck=1
```
:::

</template>

<template #DEB>

The `els-os-release` package installs TuxCare's public key at
`/etc/apt/trusted.gpg.d/tuxcare-keyring.gpg` and adds the repository under
`/etc/apt/sources.list.d/`. `apt` verifies the OpenPGP signature over the
repository release index (`InRelease` / `Release.gpg`) on every `apt-get update`,
and then verifies each downloaded `.deb` against the checksums recorded in that
signed index. In the Debian/apt model the package guarantee is anchored in this
signed metadata index rather than in a separate per-`.deb` signature.

</template>

<template #APK>

The `els-alpine-release` package installs TuxCare's public key in
`/etc/apk/keys/` and adds the repository under `/etc/apk/repositories.d/`. Every
Alpine package and the repository index (`APKINDEX.tar.gz`) are signed; `apk`
verifies both against the key on every `apk add` and `apk upgrade`.

</template>

</TableTabs>

### Confirm the TuxCare Signing Key Is Installed

<CodeTabs :tabs="[
  { title: 'RPM', content: `rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\\t%{SUMMARY}\\n' | grep -i tuxcare` },
  { title: 'DEB', content: `gpg --show-keys /etc/apt/trusted.gpg.d/tuxcare-keyring.gpg` },
  { title: 'APK', content: `ls /etc/apk/keys/` }
]" />

### Verify a Package

Because verification is automatic, the primary check is simply that a normal
install or update succeeds. You can also verify a downloaded package explicitly.

<TableTabs label="Choose distribution: ">

<template #RPM>

A normal transaction verifies signatures automatically:

```text
yum install <package>
```

To verify an already-downloaded `.rpm` file explicitly:

```text
rpm -K <package>.rpm
```

`<package>.rpm: digests signatures OK` confirms authenticity and integrity.
`NOT OK`, or a missing public key, is an integrity violation — stop and
re-obtain the package from TuxCare over a trusted channel.

</template>

<template #DEB>

`apt` verifies the signed repository index on update and the package checksums on
install:

```text
apt-get update
apt-get install <package>
```

A `GPG error` on `apt-get update`, or a `Hash Sum mismatch` on install, is an
integrity violation — the operation stops.

</template>

<template #APK>

`apk` verifies the package and index signatures automatically:

```text
apk add <package>
```

An `UNTRUSTED signature` or `BAD signature` message is an integrity violation —
the operation stops.

</template>

</TableTabs>

## Integrity Violation Events

An **integrity violation** is any event where a package obtained from TuxCare — or
the channel it was retrieved over — fails a verification check, indicating the
package may not be authentic or may have been altered in transit. The package
manager already **blocks** the operation (the install or update stops), but by
default the only trace is the command's exit code and whatever scrolled past in
the terminal. To align with the EU Cyber Resilience Act (CRA), these events
should be treated as security-relevant and retained in a dedicated log so a
system administrator can review them regardless of when or how the update was
triggered.

### What Counts as an Integrity Violation

ELS for OS is delivered through the native OS package repositories — `yum`/`dnf`
for RPM-based systems (CentOS, Oracle Linux, RHEL, AlmaLinux, and similar),
`apt` for Debian and Ubuntu, and `apk` for Alpine — served exclusively over
HTTPS, with GPG-signed packages and repository metadata. The following
verification failures are integrity violations. Select your distribution:

<TableTabs label="Choose distribution: ">

<template #RPM>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The package's header signature does not match, or the package was not signed by TuxCare's key. Enforced by default (`gpgcheck=1`). | `yum`/`dnf` abort with `GPG check FAILED` / `Package <name> is not signed`; `rpm -K` reports `NOT OK`. |
| **Metadata signature mismatch** | The detached signature over the repository metadata index (`repomd.xml.asc`) does not verify. TuxCare signs the metadata; verification is off unless `repo_gpgcheck=1` is set (see [Package Signature Verification](#package-signature-verification-gpg)). | `dnf` aborts with `repomd.xml GPG signature verification error` / `Error: Failed to download metadata for repo '<id>': repomd.xml signature could not be verified`. |
| **Checksum / integrity-hash mismatch** | A downloaded package does not match the checksum recorded in the repository metadata — the bytes changed in transit or the package was substituted. Always enforced. | `yum` fails with `[Errno -1] Package does not match intended download`; `dnf` with `checksum ... does not match`. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by the repository host cannot be validated, so the transport itself cannot be trusted. Enforced by default (`sslverify=1`). | `Curl error (60): SSL certificate problem` / `Peer's certificate issuer has been marked as not trusted`. |

</template>

<template #DEB>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The repository release index (`InRelease` / `Release.gpg`) is not signed by a trusted key, or the signing key is missing. Enforced by default. | `apt-get update` reports `NO_PUBKEY <id>` / `The following signatures were invalid` / `is not signed`. |
| **Metadata signature mismatch** | The signed release index does not match its contents (a tampered metadata index). apt verifies this as part of the same OpenPGP check over `InRelease`. | `apt-get update` reports a `GPG error` / `Hash Sum mismatch` on `InRelease`. |
| **Checksum / hash mismatch** | A downloaded `.deb` does not match the hash recorded in the signed index. Enforced by default. | `apt-get install` fails with `Hash Sum mismatch` / `Size mismatch`. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by the repository host cannot be validated. | `apt-get update` fails with `server certificate verification failed` / `gnutls_handshake() failed`. |

:::tip
For apt, package trust is anchored in the GPG-signed release index rather than in
individual `.deb` signatures, so "GPG signature failure" and "metadata signature
mismatch" are two facets of the same `InRelease` check. Both are enforced by
default.
:::

</template>

<template #APK>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG / package signature failure** | The package is signed by a key that is not in `/etc/apk/keys/`, or the signature does not match. Enforced by default. | `apk add` reports `UNTRUSTED signature` / `BAD signature`. |
| **Metadata signature mismatch** | The signature over the repository index (`APKINDEX.tar.gz`) does not verify. Enforced by default. | `apk update` reports `UNTRUSTED` on the index / a verification error. |
| **Checksum / integrity-hash mismatch** | A downloaded package does not match the hash recorded in the signed index. Enforced by default. | `apk` aborts with a `sha256` mismatch / integrity error. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by the repository host cannot be validated. | `apk` fails with `tls_handshake:` / `certificate verification failed`. |

</template>

</TableTabs>

### Capturing Integrity Violations in a Dedicated Log

Because these checks run inside the package manager, their outcome lives only in
the command's exit code and console output. To retain violations for later
review — as CRA expects — run the update or install inside a wrapper that writes
the result to a dedicated log, separate from ordinary output. Running this from a
scheduled job, a cron task, or a configuration-management run guarantees the
event is captured no matter who triggered the update or whether anyone was
watching the terminal.

<TableTabs label="Choose distribution: ">

<template #RPM>

`yum`/`dnf` verify package signatures (`gpgcheck=1`), checksums, and TLS on every
transaction; add `repo_gpgcheck=1` to the repository configuration to also
enforce the metadata signature. A non-zero exit is written to a dedicated log
file and to the system journal.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if yum -y update; then
  logger -t tuxcare-integrity -p authpriv.info "OK: yum update"
else
  rc=$?
  msg="INTEGRITY VIOLATION: yum update (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

(On dnf-based systems, use `dnf -y update` in place of `yum -y update`.)

</template>

<template #DEB>

`apt` verifies the signed release index and package checksums, and enforces TLS,
on every run. A non-zero exit from either step is written to a dedicated log file
and to the system journal.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if apt-get update && apt-get -y upgrade; then
  logger -t tuxcare-integrity -p authpriv.info "OK: apt upgrade"
else
  rc=$?
  msg="INTEGRITY VIOLATION: apt upgrade (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

</template>

<template #APK>

`apk` verifies package and index signatures, checksums, and TLS on every run. A
non-zero exit is written to a dedicated log file and to the system journal.

```bash
#!/bin/sh
LOG=/var/log/tuxcare-integrity.log

if apk update && apk upgrade; then
  logger -t tuxcare-integrity -p authpriv.info "OK: apk upgrade"
else
  rc=$?
  msg="INTEGRITY VIOLATION: apk upgrade (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

</template>

</TableTabs>

`logger` hands the event to journald/rsyslog under the `tuxcare-integrity` tag.
To route these events into their own file, add an rsyslog rule:

```text
# /etc/rsyslog.d/30-tuxcare-integrity.conf
:programname, isequal, "tuxcare-integrity"   /var/log/tuxcare-integrity.log
& stop
```

Reload rsyslog afterwards (`systemctl restart rsyslog`). To review the captured
events through journald instead of a file:

```text
journalctl -t tuxcare-integrity
```

:::tip
Forward `/var/log/tuxcare-integrity.log` (or the `tuxcare-integrity` journald
tag) to your central log collector or SIEM so integrity violations are alerted on
and retained under your standard log-retention policy.
:::
