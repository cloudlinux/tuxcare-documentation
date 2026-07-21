# Machine-Readable Security Data (SBOM, VEX, GPG)

TuxCare provides machine-readable security data and verification tooling for ELS for Open-Source Applications:

* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in SPDX and CycloneDX formats
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format
* **Package signatures (GPG)** — detached OpenPGP signatures to verify each downloaded archive's authenticity and integrity
* **Integrity violation logging** — detecting and retaining integrity-check failures for administrator review

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

## Software Bill of Materials (SBOM)

Each application package built by TuxCare ships with an SBOM that lists its components, versions, and dependency relationships. SBOMs are provided in industry-standard formats — SPDX and CycloneDX — so they can be consumed by any SBOM-aware scanner or supply-chain tool.

SBOMs for these applications are published to TuxCare Nexus and require credentials:

* Java applications (Apache Tomcat, WildFly, Apache Hive, Apache Hadoop) - [els-java-sbom](https://nexus.repo.tuxcare.com/#browse/browse:els-java-sbom)
* Go applications (Grafana, Loki, MinIO) - [els-golang-sbom](https://nexus.repo.tuxcare.com/#browse/browse:els-golang-sbom)

To check whether an SBOM is available for other applications or to request a copy, reach out to [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Vulnerability Exploitability eXchange (VEX)

TuxCare publishes VEX as CycloneDX VEX documents, distributed alongside each package version and updated with every release. The feed is available at [security.tuxcare.com/vex/cyclonedx](https://security.tuxcare.com/vex/cyclonedx/). A VEX document tells you which known CVEs actually affect a given artifact version and which don't, so scanner results stay focused on real exposure.

Each entry links one CVE to one artifact version and carries a status:

* **exploitable** - the CVE affects this artifact version and has not yet been patched in this release.
* **resolved** - the CVE has been patched through a TuxCare release.

Each VEX document reports the CVEs that directly affect the artifact. The feed covers every supported base version and every released `-tuxcare.N` iteration, so the entry count reflects these combinations rather than the number of unique CVEs. When checking coverage, filter to the artifact versions you actually use — usually the latest `-tuxcare.N` iteration of your chosen base version. Earlier iterations remain in the feed for historical completeness but aren't relevant once you've adopted a newer release.

## Package Signature Verification (GPG)

Every archive TuxCare builds is signed with a detached OpenPGP signature so you can confirm, before installing or updating, that the archive was produced by TuxCare and has not been altered in transit. The signature is published as a separate `.asc` file in TuxCare Nexus and is created with TuxCare's signing key (SHA-256 detached signature).

A successful verification proves two things about the artifact:

* **Authenticity** — it was signed by TuxCare's private key.
* **Integrity** — its bytes match exactly what was signed; no tampering or corruption occurred.

A failed verification is an **integrity violation**: the artifact must be treated as untrusted and not installed. Do not work around a failed check by re-downloading over an insecure channel or skipping verification — investigate the source instead.

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
Import the public key once. It can verify every TuxCare-signed archive, so this step is not repeated for each artifact.
:::

### Verify a Downloaded Archive

ELS applications are distributed as archives you download from TuxCare Nexus. To verify one, download its detached `.asc` signature from Nexus and run `gpg --verify` against the archive you downloaded. Select your ecosystem below.

:::warning
The signature repository and artifact naming differ per ecosystem: for the Java-based applications the `.asc` is published in `els-java-sbom`, and for the Go-based applications in `els-golang-sbom` (separate from the `els-golang` archive itself). Confirm the exact path and artifact naming for your archive with your TuxCare contact.
:::

<TableTabs label="Choose ecosystem: ">

<template #Java>

<ELSSteps>

1. **Obtain the exact published archive**

   Download the archive as described in the application's setup page (see, for example, [Apache Tomcat](/els-for-applications/apache-tomcat/)). Verification works on the byte-for-byte artifact that was signed, so keep the downloaded `.tar.gz` as-is:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz
   ```

2. **Download the matching signature**

   For the Java-based applications, the `.asc` is published in the SBOM repository (`els-java-sbom`), keyed by artifact name and version:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els-java-sbom/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz.asc
   ```

3. **Verify the signature against the archive**

   ```text
   gpg --verify tomcat-8.5.100-tuxcare.3.tar.gz.asc tomcat-8.5.100-tuxcare.3.tar.gz
   ```

   A `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the archive is authentic and unmodified. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the archive from TuxCare over a trusted channel.

</ELSSteps>

</template>

<template #Go>

<ELSSteps>

1. **Obtain the exact published archive**

   Download the archive as described in the application's setup page (see, for example, [Grafana](/els-for-applications/grafana/)). Verification works on the byte-for-byte artifact that was signed, so keep the downloaded `.tar.gz` as-is:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian13/grafana-10.4.1-tuxcare.1.tar.gz
   ```

2. **Download the matching signature**

   For the Go-based applications, the `.asc` is published in the SBOM repository (`els-golang-sbom`). Authenticate with your TuxCare Nexus credentials:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els-golang-sbom/grafana/debian13/grafana-10.4.1-tuxcare.1.tar.gz.asc
   ```

3. **Verify the signature against the archive**

   Pass the signature file first, then the archive you downloaded:

   ```text
   gpg --verify grafana-10.4.1-tuxcare.1.tar.gz.asc grafana-10.4.1-tuxcare.1.tar.gz
   ```

   A valid signature produces output similar to:

   ```text
   gpg: Signature made Mon 12 May 2025 10:14:21 UTC
   gpg:                using RSA key <TUXCARE_KEY_ID>
   gpg: Good signature from "TuxCare <...>" [unknown]
   ```

   The `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the archive is authentic and unmodified. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the archive from TuxCare over a trusted channel.

</ELSSteps>

</template>

</TableTabs>

## Integrity Violation Events

An **integrity violation** is any event where an artifact obtained from TuxCare — or the channel it was retrieved over — fails a verification check, indicating the archive may not be authentic or may have been altered in transit. To align with the EU Cyber Resilience Act (CRA), these events should be treated as security-relevant and retained in a dedicated log so a system administrator can review them regardless of when or how the download was triggered.

### What Counts as an Integrity Violation

ELS applications are downloaded as signed archives from TuxCare Nexus over HTTPS. Select your ecosystem for the integrity checks — and therefore the violation types — that apply to it:

<TableTabs label="Choose ecosystem: ">

<template #Java>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the archive, or the archive was not signed by TuxCare's key. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Downloaded Archive](#verify-a-downloaded-archive) above. |
| **Checksum / integrity-hash mismatch** | For applications resolved as Maven or Gradle dependencies (for example Apache Hive and Apache Hadoop), the build tool verifies the artifact checksum against the `.sha1`/`.sha256` published next to it. | **Maven**, run with strict checksums (`mvn -C`), fails with `Checksum validation failed`. **Gradle**, with dependency verification enabled, fails with `Dependency verification failed`. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by `nexus.repo.tuxcare.com` cannot be validated, so the transport itself cannot be trusted. | A direct download aborts with `curl: (60) SSL certificate problem`; Maven/Gradle fail with `PKIX path building failed`. |

</template>

<template #Go>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the archive, or the archive was not signed by TuxCare's key. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Downloaded Archive](#verify-a-downloaded-archive) above. |
| **HTTPS / TLS certificate error** | The TLS certificate presented by `nexus.repo.tuxcare.com` cannot be validated, so the transport itself cannot be trusted. | `curl` aborts the download with `curl: (60) SSL certificate problem` and a non-zero exit code. |

</template>

</TableTabs>

:::tip
There is no separately signed repository metadata index in this delivery model, so **metadata signature mismatch** does not apply. For the Go-based applications the detached **GPG signature is the integrity mechanism** — it covers authenticity and tamper-detection for the downloaded bytes; Java applications pulled as Maven/Gradle dependencies additionally get build-tool checksum verification.
:::

### Capturing Integrity Violations in a Dedicated Log

Because the download and signature check run as `curl` and `gpg` commands, their outcome lives only in the command's exit code and console output. To retain violations for later review — as CRA expects — run the download and verification inside a wrapper that writes the result to a dedicated log, separate from ordinary output. Doing this in a CI job or an install/deploy script guarantees the event is captured no matter who triggered the download or whether anyone was watching the terminal.

<TableTabs label="Choose ecosystem: ">

<template #Java>

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log
ARCHIVE=tomcat-8.5.100-tuxcare.3.tar.gz
ARCHIVE_URL=https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/${ARCHIVE}
SIG_URL=https://nexus.repo.tuxcare.com/repository/els-java-sbom/tomcat/8.5.100-tuxcare.3/${ARCHIVE}.asc

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

# TLS is enforced on every download; a certificate failure fails these curls:
run "download archive"   curl -u "${USERNAME}:${PASSWORD}" -fsSL -o "${ARCHIVE}"     "${ARCHIVE_URL}"
run "download signature" curl -u "${USERNAME}:${PASSWORD}" -fsSL -o "${ARCHIVE}.asc" "${SIG_URL}"
# GPG signature verification:
run "gpg verify ${ARCHIVE}" gpg --verify "${ARCHIVE}.asc" "${ARCHIVE}"
```

</template>

<template #Go>

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log
ARCHIVE=grafana-10.4.1-tuxcare.1.tar.gz
ARCHIVE_URL=https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian13/${ARCHIVE}
SIG_URL=https://nexus.repo.tuxcare.com/repository/els-golang-sbom/grafana/debian13/${ARCHIVE}.asc

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

# TLS is enforced on every download; a certificate failure fails these curls:
run "download archive"   curl -u "${USERNAME}:${PASSWORD}" -fsSL -o "${ARCHIVE}"     "${ARCHIVE_URL}"
run "download signature" curl -u "${USERNAME}:${PASSWORD}" -fsSL -o "${ARCHIVE}.asc" "${SIG_URL}"
# GPG signature verification:
run "gpg verify ${ARCHIVE}" gpg --verify "${ARCHIVE}.asc" "${ARCHIVE}"
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