# Machine-Readable Security Data (SBOM, VEX, GPG)

TuxCare provides machine-readable security data and verification tooling for ELS for Libraries:

* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in SPDX and CycloneDX formats
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format
* **Package signatures (GPG)** — detached OpenPGP signatures to verify each artifact's authenticity and integrity
* **Integrity violation logging** — detecting and retaining integrity-check failures for administrator review

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

## Software Bill of Materials (SBOM)

Each package built by TuxCare ships with an SBOM that lists its components, versions, and dependency relationships. SBOMs are provided in industry-standard formats — SPDX and CycloneDX — so they can be consumed by any SBOM-aware scanner or supply-chain tool.

Per-package SBOMs for Python and JavaScript libraries are published to TuxCare Nexus and require credentials:

* Python - [els_python_sbom](https://nexus.repo.tuxcare.com/#browse/browse:els_python_sbom)
* JavaScript - [els-js-sbom](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom)

For other ecosystems, reach out to [sales@tuxcare.com](mailto:sales@tuxcare.com) to check SBOM availability.

## Vulnerability Exploitability eXchange (VEX)

TuxCare publishes VEX as CycloneDX VEX documents, distributed alongside each package version and updated with every release. A VEX document tells you which known CVEs actually affect a given artifact version and which don't, so scanner results stay focused on real exposure.

Feeds are published per ecosystem:

* Java - [els_lang_java](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/)
* Python - [els_lang_python](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/)
* JavaScript - [els_lang_javascript](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/)
* PHP - [els_lang_php](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/)
* .NET - [els_lang_dotnet](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/)

Each entry links one CVE to one artifact version and carries a status:

* **exploitable** — the CVE affects this artifact version and has not yet been patched in this release.
* **resolved** — the CVE has been patched through a TuxCare release.

The feed covers every supported base version, every released `-tuxcare.N` iteration, and transitive dependencies, so the entry count reflects all of these combinations rather than the number of unique CVEs. When checking coverage, filter to the artifact versions you actually use — usually the latest `-tuxcare.N` iteration of your chosen base version. Earlier iterations remain in the feed for historical completeness but aren't relevant once you've adopted a newer release.

## Package Signature Verification (GPG)

Every package TuxCare builds is signed with a detached OpenPGP signature so you can confirm, before installing or updating, that the artifact was produced by TuxCare and has not been altered in transit. The signature is published as a separate `.asc` file alongside the package and is created with TuxCare's signing key (SHA-256 detached signature).

A successful verification proves two things about the artifact:

* **Authenticity** — it was signed by TuxCare's private key.
* **Integrity** — its bytes match exactly what was signed; no tampering or corruption occurred.

A failed verification is an **integrity violation**: the artifact must be treated as untrusted and not installed. Do not work around a failed check by re-downloading over an insecure channel or skipping verification — investigate the source instead.

### Where Signatures Are Published

Signature files are published to a dedicated Nexus signatures repository, separate from the package repositories and mirroring the path of the package they sign. Accessing them requires the same TuxCare Nexus credentials as the package repositories.

### Obtain the TuxCare Public Key

To verify a signature you first need TuxCare's public signing key. Obtain the key from your TuxCare account, or request it from [sales@tuxcare.com](mailto:sales@tuxcare.com) or your TuxCare support contact.

Once you have the key file (for example, `tuxcare-els-public.asc`), import it into your keyring:

```text
gpg --import tuxcare-els-public.asc
```

Confirm it imported by listing the keys in your keyring:

```text
gpg --list-keys
```

:::tip
Import the public key once. It can verify every TuxCare-signed package, so this step is not repeated for each artifact.
:::

### Verify a Package

Select the ecosystem you work with, then follow the steps to verify a package signature.

<TableTabs label="Choose ecosystem: ">

<template #JavaScript>

<ELSSteps>

1. **Obtain the exact published tarball**

   Verification works on the byte-for-byte artifact that was signed, so download the published `.tgz` rather than repacking it locally. With your TuxCare registry configured (see the [JavaScript libraries](/els-for-libraries/javascript-libraries/) setup), `npm pack` with a version spec downloads the registry tarball as-is:

   ```text
   npm pack @els-js/angular@1.8.3-tuxcare.8
   ```

   This writes `els-js-angular-1.8.3-tuxcare.8.tgz` to the current directory. The filename is normalized by npm, but the contents are identical to the published artifact.

2. **Download the matching signature**

   Fetch the `.asc` file for the same version from the signatures repository, authenticating with the TuxCare registry token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com) (the same token used in your `.npmrc`):

   ```text
   curl -H "Authorization: Basic ${TOKEN}" -fsSL \
     https://nexus.repo.tuxcare.com/repository/els-js-signatures/angular/1.8.3-tuxcare.8/angular-1.8.3-tuxcare.8.tgz.asc \
     -o angular-1.8.3-tuxcare.8.tgz.asc
   ```

3. **Verify the signature against the tarball**

   Pass the signature file first, then the tarball you downloaded:

   ```text
   gpg --verify angular-1.8.3-tuxcare.8.tgz.asc els-js-angular-1.8.3-tuxcare.8.tgz
   ```

   A valid signature produces output similar to:

   ```text
   gpg: Signature made Mon 12 May 2025 10:14:21 UTC
   gpg:                using RSA key <TUXCARE_KEY_ID>
   gpg: Good signature from "TuxCare <...>" [unknown]
   ```

   The `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the artifact is authentic and unmodified. (The `[unknown]` trust level only reflects that you have not personally signed TuxCare's key in your web of trust; it does not affect the validity of the signature.)

</ELSSteps>

</template>

</TableTabs>

If `gpg` reports `BAD signature`, or cannot find the matching public key, treat the artifact as an integrity violation: stop the installation and re-obtain the package and signature from TuxCare over a trusted channel.

:::tip
Signatures for other ecosystems follow the same model. If you need the signature repository for a non-JavaScript ecosystem, or the TuxCare public key, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

## Integrity Violation Events

An **integrity violation** is any event where an artifact obtained from TuxCare — or the channel it was retrieved over — fails a verification check, indicating the package may not be authentic or may have been altered in transit. The package manager already **blocks** such an operation (the install or update stops), but by default the only trace is the command's exit code and whatever scrolled past in the terminal. To align with the EU Cyber Resilience Act (CRA), these events should be treated as security-relevant and retained in a dedicated log so a system administrator can review them regardless of when or how the update was triggered.

### What Counts as an Integrity Violation

The ELS for Libraries delivery model is a set of per-ecosystem registries hosted on TuxCare Nexus (an npm registry for JavaScript, a PyPI-compatible index for Python, and so on), served exclusively over HTTPS, plus a detached GPG signature published alongside each artifact. Select your ecosystem for the integrity checks — and therefore the violation types — that apply to it:

<TableTabs label="Choose ecosystem: ">

<template #JavaScript>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or the artifact was not signed by TuxCare's key. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded tarball's hash does not match the integrity value recorded in `package-lock.json` — the bytes changed in transit or the artifact was substituted. | `npm` aborts the install with `EINTEGRITY` (`sha512-… integrity checksum failed`). |
| **HTTPS / TLS certificate error** | The TLS certificate presented by `nexus.repo.tuxcare.com` cannot be validated, so the transport itself cannot be trusted. | `npm` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` / `SELF_SIGNED_CERT_IN_CHAIN`. |

</template>

<template #Python>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or the artifact was not signed by TuxCare's key. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded artifact's hash does not match the hash pinned for it — the bytes changed in transit or the artifact was substituted. | `pip`, when run in hash-checking mode (`--require-hashes`), aborts with `THESE PACKAGES DO NOT MATCH THE HASHES…`. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by `nexus.repo.tuxcare.com` cannot be validated, so the transport itself cannot be trusted. | `pip` fails with `SSLError` / `CERTIFICATE_VERIFY_FAILED`. |

</template>

</TableTabs>

:::tip
**Metadata signature mismatch** is an OS-package-manager concept (yum/dnf and apt verify a GPG signature over the *repository metadata index* — `repomd.xml`, `InRelease`). The npm and pip ecosystems do not distribute a separately signed metadata index, so this specific violation type does not map to the ELS for Libraries setup. The equivalent authenticity and integrity guarantee is provided **per artifact** by the checksum/integrity-hash check and the detached GPG signature listed above.
:::

### Capturing Integrity Violations in a Dedicated Log

Because these checks run inside `npm`, `pip`, or `gpg`, their outcome lives only in the command's exit code and console output. To retain violations for later review — as CRA expects — run the install or verification inside a wrapper that writes the result to a dedicated log, separate from ordinary build output. Doing this in a CI job or an install/deploy script guarantees the event is captured no matter who triggered the update or whether anyone was watching the terminal.

<TableTabs label="Choose ecosystem: ">

<template #JavaScript>

`npm ci` enforces the `package-lock.json` integrity hashes (checksum check) and TLS on every download; the on-demand `gpg --verify` adds signature verification. A non-zero exit from either is written to a dedicated log file and to the system journal under a distinct tag.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

run() {
  # $1 = event label, remaining args = the command to check
  local label="$1"; shift
  if "$@"; then
    logger -t tuxcare-integrity -p authpriv.info "OK: ${label}"
  else
    local rc=$?
    local msg="INTEGRITY VIOLATION: ${label} (exit ${rc})"
    echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
    logger -t tuxcare-integrity -p authpriv.err "${msg}"
    exit 1
  fi
}

# Checksum (EINTEGRITY) and TLS are enforced by this install:
run "npm ci" npm ci

# On-demand GPG check of a pulled artifact:
run "gpg verify @els-js/angular@1.8.3-tuxcare.8" \
  gpg --verify angular-1.8.3-tuxcare.8.tgz.asc els-js-angular-1.8.3-tuxcare.8.tgz
```

</template>

<template #Python>

`--require-hashes` turns on pip's checksum verification against the hashes pinned in `requirements.txt`; TLS to the Nexus index is always enforced. A failure is written to a dedicated log file and to the system journal.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if pip install --require-hashes -r requirements.txt; then
  logger -t tuxcare-integrity -p authpriv.info "OK: pip install"
else
  rc=$?
  msg="INTEGRITY VIOLATION: pip install (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

</template>

</TableTabs>

`logger` hands the event to journald/rsyslog under the `tuxcare-integrity` tag. To route these events into their own file, add an rsyslog rule:

```text
# /etc/rsyslog.d/30-tuxcare-integrity.conf
:programname, isequal, "tuxcare-integrity"   /var/log/tuxcare-integrity.log
& stop
```

Reload rsyslog afterwards (`systemctl restart rsyslog`). To review the captured events through journald instead of a file:

```text
journalctl -t tuxcare-integrity
```

:::tip
Forward `/var/log/tuxcare-integrity.log` (or the `tuxcare-integrity` journald tag) to your central log collector or SIEM so integrity violations are alerted on and retained under your standard log-retention policy.
:::
