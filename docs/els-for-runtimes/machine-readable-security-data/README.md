# Machine-Readable Security Data (Errata, OVAL, CSAF)

TuxCare provides machine-readable security data for ELS for Runtimes in the following formats:

* **Errata** — qualified security and selected bug-fix errata advisories
* **OVAL** — Open Vulnerability and Assessment Language patch definitions for use with OpenSCAP and similar tools
* **CSAF** — Common Security Advisory Framework advisories in [OASIS](https://www.csaf.io/) CSAF 2.0 format (VEX and Security Advisory)
* **RSS** — release feeds for tracking updates

Every package is also signed so you can verify its authenticity and integrity before installing — see [Package Signature Verification (GPG)](#package-signature-verification-gpg).

Released fixes are also available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/fixes) and [security.tuxcare.com](https://security.tuxcare.com).

## PHP

| OS | Errata | OVAL | CSAF | RSS |
|----|--------|------|------|-----|
| EL 7 | [errata](https://security.tuxcare.com/errata/els_alt_php/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/el7/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| EL 8 | [errata](https://security.tuxcare.com/errata/els_alt_php/el8/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el8/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/el8/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| EL 9 | [errata](https://security.tuxcare.com/errata/els_alt_php/el9/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el9/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/el9/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| EL 10 | [errata](https://security.tuxcare.com/errata/els_alt_php/el10/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/el10/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/el10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Ubuntu 16.04 | [errata](https://security.tuxcare.com/errata/els_alt_php/ubuntu16.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu16.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu16.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Ubuntu 18.04 | [errata](https://security.tuxcare.com/errata/els_alt_php/ubuntu18.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu18.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu18.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Ubuntu 20.04 | [errata](https://security.tuxcare.com/errata/els_alt_php/ubuntu20.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu20.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu20.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Ubuntu 22.04 | [errata](https://security.tuxcare.com/errata/els_alt_php/ubuntu22.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu22.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu22.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Ubuntu 24.04 | [errata](https://security.tuxcare.com/errata/els_alt_php/ubuntu24.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/ubuntu24.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/ubuntu24.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Debian 10 | [errata](https://security.tuxcare.com/errata/els_alt_php/debian10/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian10/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/debian10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Debian 11 | [errata](https://security.tuxcare.com/errata/els_alt_php/debian11/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian11/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/debian11/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Debian 12 | [errata](https://security.tuxcare.com/errata/els_alt_php/debian12/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian12/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/debian12/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Debian 13 | [errata](https://security.tuxcare.com/errata/els_alt_php/debian13/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_php/debian13/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/debian13/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |
| Alpine Linux 3.22 | — | — | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_php/alpinelinux3.22/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=PHP) |

## Python

| OS | Errata | OVAL | CSAF | RSS |
|----|--------|------|------|-----|
| EL 7 | [errata](https://security.tuxcare.com/errata/els_alt_python/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/el7/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| EL 8 | [errata](https://security.tuxcare.com/errata/els_alt_python/el8/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el8/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/el8/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| EL 9 | [errata](https://security.tuxcare.com/errata/els_alt_python/el9/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el9/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/el9/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| EL 10 | [errata](https://security.tuxcare.com/errata/els_alt_python/el10/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/el10/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/el10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Ubuntu 16.04 | [errata](https://security.tuxcare.com/errata/els_alt_python/ubuntu16.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu16.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu16.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Ubuntu 18.04 | [errata](https://security.tuxcare.com/errata/els_alt_python/ubuntu18.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu18.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu18.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Ubuntu 20.04 | [errata](https://security.tuxcare.com/errata/els_alt_python/ubuntu20.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu20.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu20.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Ubuntu 22.04 | [errata](https://security.tuxcare.com/errata/els_alt_python/ubuntu22.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu22.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu22.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Ubuntu 24.04 | [errata](https://security.tuxcare.com/errata/els_alt_python/ubuntu24.04/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/ubuntu24.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/ubuntu24.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Debian 10 | [errata](https://security.tuxcare.com/errata/els_alt_python/debian10/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian10/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/debian10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Debian 11 | [errata](https://security.tuxcare.com/errata/els_alt_python/debian11/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian11/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/debian11/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Debian 12 | [errata](https://security.tuxcare.com/errata/els_alt_python/debian12/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian12/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/debian12/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Debian 13 | [errata](https://security.tuxcare.com/errata/els_alt_python/debian13/) | [oval.xml](https://security.tuxcare.com/oval/els_alt_python/debian13/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/debian13/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |
| Alpine Linux 3.22 | — | — | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_python/alpinelinux3.22/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Python) |

## Node.js

| OS | Errata | CSAF | RSS |
|----|--------|------|-----|
| EL 7 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/el7/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/el7/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| EL 8 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/el8/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/el8/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| EL 9 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/el9/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/el9/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| EL 10 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/el10/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/el10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Ubuntu 16.04 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/ubuntu16.04/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/ubuntu16.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Ubuntu 18.04 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/ubuntu18.04/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/ubuntu18.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Ubuntu 20.04 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/ubuntu20.04/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/ubuntu20.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Ubuntu 22.04 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/ubuntu22.04/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/ubuntu22.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Ubuntu 24.04 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/ubuntu24.04/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/ubuntu24.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Debian 10 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/debian10/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/debian10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Debian 11 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/debian11/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/debian11/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Debian 12 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/debian12/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/debian12/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Debian 13 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/debian13/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/debian13/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |
| Alpine Linux 3.22 | [errata](https://security.tuxcare.com/errata/els_alt_nodejs/alpinelinux3.22/) | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_nodejs/alpinelinux3.22/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Node.js) |

## Ruby

| OS | CSAF | RSS |
|----|------|-----|
| EL 7 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/el7/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| EL 8 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/el8/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| EL 9 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/el9/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| EL 10 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/el10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Ubuntu 16.04 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/ubuntu16.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Ubuntu 18.04 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/ubuntu18.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Ubuntu 20.04 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/ubuntu20.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Ubuntu 22.04 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/ubuntu22.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Ubuntu 24.04 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/ubuntu24.04/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Debian 10 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/debian10/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Debian 11 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/debian11/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Debian 12 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/debian12/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Debian 13 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/debian13/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |
| Alpine Linux 3.22 | [csaf](https://security.tuxcare.com/csaf/v2/els_alt_ruby/alpinelinux3.22/) | [rss](https://tuxcare.com/cve-tracker/api/cves/export/rss?product=Ruby) |

## How to use OVAL

OVAL can be used with the OpenSCAP tool.

1. Install OpenSCAP

    <CodeTabs :tabs="[
      { title: 'RPM', content: `yum install openscap openscap-utils scap-security-guide -y` },
      { title: 'DEB', content: `apt-get install libopenscap8 -y` }
    ]" />

2. Download an OVAL stream. For example, Python on EL 8:

    ```text
    wget https://security.tuxcare.com/oval/els_alt_python/el8/oval.xml
    ```

3. Run a scan:

   ```text
   oscap oval eval --results result.xml --report report.xml oval.xml
   ```

## How to use CSAF

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). TuxCare publishes CSAF VEX and Security Advisory files in CSAF 2.0 format at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/).

`provider-metadata.json` is available at:
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

The CSAF files are published in JSON format — OASIS provides a [list of reference tools](https://www.csaf.io/tools.html) that support CSAF.

## Package Signature Verification (GPG)

ELS for Runtimes (PHP, Python, Node.js, Ruby, and other runtimes delivered as `alt-*` packages) is distributed as native RPM, DEB, and APK packages from TuxCare-managed repositories. Every package and the repository metadata that indexes it are signed with TuxCare's OpenPGP key, so that before anything is installed or updated you can confirm two things about each artifact:

* **Authenticity** — it was signed with TuxCare's private key.
* **Integrity** — its bytes match exactly what was signed; no tampering or corruption occurred in transit.

Unlike a manual, registry-based flow, verification here is built into the native package manager. The repository setup script you run during [installation](/els-for-runtimes/) imports the TuxCare signing key and enables signature checking (`gpgcheck=1` on RPM; signed `InRelease`/index on DEB and APK), so `yum`/`dnf`, `apt`, and `apk` verify each package automatically on every install and update. A verification that fails is an **integrity violation**: the package manager refuses to install the artifact. Do not work around a failed check by disabling verification or re-downloading over an insecure channel — investigate the source instead (see [Integrity Violation Events](#integrity-violation-events)).

### Confirm the TuxCare Signing Key Is Installed

The repository setup script installs the key for you. To confirm it is present in the trust store your package manager uses:

<CodeTabs :tabs="[
  { title: 'RPM', content: `rpm -qi $(rpm -qa 'gpg-pubkey*') | grep -i tuxcare` },
  { title: 'DEB', content: `ls /etc/apt/trusted.gpg.d/ | grep -i tuxcare` },
  { title: 'APK', content: `ls /etc/apk/keys/ | grep -i tuxcare` }
]" />

If the key is missing, re-run the repository setup script from the [installation instructions](/els-for-runtimes/) rather than importing a key from an untrusted source.

:::tip Obtaining the key manually
The TuxCare public signing key is also published at [`repo.tuxcare.com/tuxcare/RPM-GPG-KEY-TuxCare`](https://repo.tuxcare.com/tuxcare/RPM-GPG-KEY-TuxCare) and, on RPM systems, installed to `/etc/pki/rpm-gpg/RPM-GPG-KEY-TuxCare`. If you need the key for a different ecosystem or for an air-gapped mirror, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

### Verify a Package

With signature checking enabled, verification happens automatically during install and update. You can also verify explicitly before installing. On RPM, download the package (`yumdownloader alt-php74` or `dnf download alt-php74`) and check its signature; on DEB, `apt` verifies the signed index on update and the `.deb` checksums on download; on APK, `apk` verifies the signed index and package checksum on `apk add`, or run `apk verify` on a downloaded file:

<CodeTabs :tabs="[
  { title: 'RPM', content: `rpm --checksig alt-php74-*.rpm` },
  { title: 'DEB', content: `apt-get update && apt-get install --reinstall --download-only alt-php74-meta` },
  { title: 'APK', content: `apk verify alt-php74-*.apk` }
]" />

A successful RPM check reports `digests signatures OK`; `apt-get update` completes with no `NO_PUBKEY`, `not signed`, or `Hash Sum mismatch` warnings; and `apk verify` prints `OK`. Any other result is an integrity violation — stop and re-obtain the package over a trusted channel.

:::warning Repository metadata signing on RPM
On RPM-based systems, package signatures are enforced by default (`gpgcheck=1`), and TuxCare also signs the repository metadata (`repomd.xml.asc` is published). However, metadata-signature checking (`repo_gpgcheck`) is not always enabled by default, so tampering with the repository index itself is not caught out of the box. To have `yum`/`dnf` reject unsigned or altered metadata, enable it in the repository configuration (`/etc/yum.repos.d/*.repo`):

```text
repo_gpgcheck=1
```

On DEB and APK, the signed repository index (`InRelease`/`Release.gpg` and the APK index signature) is verified by default, so this step is RPM-specific.
:::

:::tip Windows runtimes
ELS runtimes delivered for Windows (for example .NET and PHP for Windows) are distributed as individually signed archives rather than through a Linux package manager. For signature-verification guidance on those artifacts, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

## Integrity Violation Events

For compliance with regulations such as the EU Cyber Resilience Act (CRA), an administrator must be able to detect and retain evidence when an integrity check fails — not just have the installation blocked at the terminal. This section defines what counts as an integrity violation for ELS for Runtimes and shows how to capture these events in a dedicated log.

### What Counts as an Integrity Violation

An **integrity violation** is any failure of the package manager to confirm that an artifact is authentic and unmodified. Four event types apply:

**1. GPG signature failure** — a package is signed with an unknown key, or its signature does not match its contents.

<CodeTabs :tabs="[
  { title: 'RPM', content: `Public key for alt-php74-*.rpm is not installed` },
  { title: 'DEB', content: `The following signatures couldn't be verified because the public key is not available: NO_PUBKEY ...` },
  { title: 'APK', content: `UNTRUSTED signature` }
]" />

**2. Repository metadata signature mismatch** — the signed repository index cannot be verified against the trusted key (index tampered with, unsigned, or signed by the wrong key).

<CodeTabs :tabs="[
  { title: 'RPM', content: `repomd.xml signature could not be verified for ...` },
  { title: 'DEB', content: `GPG error: https://repo.alt.tuxcare.com ... : The repository is not signed.` },
  { title: 'APK', content: `UNTRUSTED signature (APKINDEX)` }
]" />

**3. Checksum error** — a package's bytes do not match the checksum recorded in the signed index (corruption or tampering after signing).

<CodeTabs :tabs="[
  { title: 'RPM', content: `Package does not match intended download.` },
  { title: 'DEB', content: `Failed to fetch ... Hash Sum mismatch` },
  { title: 'APK', content: `... sha256 ... mismatch` }
]" />

**4. HTTPS/TLS certificate error** — the connection to the repository could not be authenticated, so the transport itself is untrusted.

<CodeTabs :tabs="[
  { title: 'RPM', content: `SSL certificate problem: unable to get local issuer certificate` },
  { title: 'DEB', content: `server certificate verification failed. CAfile: ... CRLfile: none` },
  { title: 'APK', content: `TLS error: certificate verification failed` }
]" />

:::warning
Never bypass one of these errors with flags such as `--nogpgcheck`, `[trusted=yes]`, `--allow-untrusted`, or `--no-check-certificate`. Treat the artifact as compromised, log the event (below), and re-obtain the package and repository configuration from TuxCare over a trusted channel.
:::

### Retaining Integrity Violation Events in a Dedicated Log

By default an integrity violation is only printed to the terminal of whoever ran the command, so an unattended update (cron, automation, or a fetch triggered while nobody is watching) leaves no durable record. To satisfy the CRA requirement, route these events to a dedicated log the administrator can review, separate from standard package-manager output.

The approach is to run the update through a wrapper that scans the package manager's output for the violation signatures above and forwards any match to the system log via `logger`, tagged so it can be isolated:

```bash
#!/bin/sh
# /usr/local/sbin/tuxcare-secure-update
# Run the ELS update and record any integrity violation to syslog.

TAG=tuxcare-integrity
PATTERN='NO_PUBKEY|not signed|GPG check FAILED|is not signed|signature could not be verified|UNTRUSTED signature|BAD signature|BAD archive|Hash Sum mismatch|checksum .* does not match|does not match intended download|certificate verification failed|unable to get local issuer certificate|NOT trusted'

# Detect the package manager once and run only that one, so a genuine
# integrity failure is not masked by a fall-through to a missing tool
# (a missing manager would otherwise overwrite the exit code with 127).
if command -v yum >/dev/null 2>&1; then
  out=$(yum -y update 'alt-*' 2>&1);       status=$?
elif command -v dnf >/dev/null 2>&1; then
  out=$(dnf -y update 'alt-*' 2>&1);       status=$?
elif command -v apt-get >/dev/null 2>&1; then
  out=$(apt-get -y upgrade 2>&1);          status=$?
elif command -v apk >/dev/null 2>&1; then
  out=$(apk upgrade 'alt-*' 2>&1);         status=$?
else
  echo "No supported package manager found" >&2
  exit 1
fi

echo "$out"
echo "$out" | grep -Ei "$PATTERN" \
  | while IFS= read -r line; do
      logger -t "$TAG" -p auth.err "INTEGRITY VIOLATION: $line"
    done

exit "$status"
```

Then route the tagged messages to a dedicated file. With **rsyslog**, add `/etc/rsyslog.d/60-tuxcare-integrity.conf`:

```text
# Send everything tagged tuxcare-integrity to a dedicated log
:syslogtag, contains, "tuxcare-integrity"  /var/log/tuxcare-integrity.log
& stop
```

Reload rsyslog and secure the log so it is append-only for auditing:

```text
systemctl restart rsyslog
touch /var/log/tuxcare-integrity.log
chmod 0640 /var/log/tuxcare-integrity.log
chattr +a /var/log/tuxcare-integrity.log   # append-only (optional)
```

On systems using **journald**, the `logger` tag is queryable without extra configuration:

```text
journalctl -t tuxcare-integrity
```

Run the wrapper from your normal update mechanism (interactively, from cron, or from configuration management) instead of calling the package manager directly. Every blocked installation is then captured in `/var/log/tuxcare-integrity.log` (or the journal), regardless of when or how the update was triggered, giving administrators a durable, reviewable record of integrity violations.
