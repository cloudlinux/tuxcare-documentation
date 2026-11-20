# Machine-Readable Security Data (SBOM, VEX, GPG)

TuxCare provides machine-readable security data and verification tooling for Endless Lifecycle Support (ELS) for Open-Source Applications:

* **Errata, OVAL, CSAF** — security advisories and patch definitions for the database applications
* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in CycloneDX format
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format
* **Package signatures (GPG)** — detached OpenPGP signatures to verify each downloaded archive's authenticity and integrity
* **Integrity violation logging** — detecting and retaining integrity-check failures for administrator review

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

## Errata, OVAL and CSAF

TuxCare publishes security advisories and patch definitions for the database applications:

| Application | OS | Errata | OVAL | CSAF |
|---|---|---|---|---|
| MariaDB | EL 7 | [errata](https://security.tuxcare.com/errata/els_mariadb/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_mariadb/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_mariadb/el7/) |
| MariaDB | EL 8 | [errata](https://security.tuxcare.com/errata/els_mariadb/el8/) | — | — |
| MariaDB | EL 9 | [errata](https://security.tuxcare.com/errata/els_mariadb/el9/) | — | — |
| MySQL | EL 7 | [errata](https://security.tuxcare.com/errata/els_mysql/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_mysql/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_mysql/el7/) |
| MySQL | EL 8 | [errata](https://security.tuxcare.com/errata/els_mysql/el8/) | [oval.xml](https://security.tuxcare.com/oval/els_mysql/el8/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_mysql/el8/) |
| Percona Server | EL 7 | [errata](https://security.tuxcare.com/errata/els_percona/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_percona/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_percona/el7/) |
| PostgreSQL | EL 7 | [errata](https://security.tuxcare.com/errata/els_postgresql/el7/) | [oval.xml](https://security.tuxcare.com/oval/els_postgresql/el7/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_postgresql/el7/) |
| PostgreSQL | EL 9 | [errata](https://security.tuxcare.com/errata/els_postgresql/el9/) | [oval.xml](https://security.tuxcare.com/oval/els_postgresql/el9/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_postgresql/el9/) |
| PostgreSQL | Ubuntu 22.04 | [errata](https://security.tuxcare.com/errata/els_postgresql/ubuntu22.04/) | [oval.xml](https://security.tuxcare.com/oval/els_postgresql/ubuntu22.04/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_postgresql/ubuntu22.04/) |

## Obtain the TuxCare Public Key

To verify a signature you first need TuxCare's public signing key, the TuxCare SecureChain key. TuxCare publishes it at [security.tuxcare.com/gpg/GPG-KEY-TuxCare-SecureChain](https://security.tuxcare.com/gpg/GPG-KEY-TuxCare-SecureChain); downloading it requires no credentials:

```text
curl -fsSL https://security.tuxcare.com/gpg/GPG-KEY-TuxCare-SecureChain -o tuxcare-els-public.asc
```

The file holds two TuxCare SecureChain keys. Before importing, list them with their fingerprints:

```text
gpg --show-keys --with-fingerprint tuxcare-els-public.asc
```

TuxCare creates the signatures published on security.tuxcare.com with the key whose fingerprint is `AD13 9411 89BF 2258 AA30  72C9 7BF1 2029 3948 A27B`; `gpg --verify` reports it as `using RSA key 7BF120293948A27B`. If `gpg` reports a different key, or `No public key` after you import this file, ask through the [TuxCare Support Portal](https://tuxcare.com/support-portal/).

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

## Software Bill of Materials (SBOM)

A Software Bill of Materials (SBOM) lists the components, versions, and dependency relationships of an application package. TuxCare publishes SBOMs in CycloneDX format on [security.tuxcare.com](https://security.tuxcare.com/sbom/cyclonedx/):

* Java applications — [els_lang_java](https://security.tuxcare.com/sbom/cyclonedx/els_lang_java/), laid out as `<group path>/<artifactId>/<version>/<artifactId>-<version>.sbom.json`, for example `org/apache/tomcat/tomcat/8.5.46-tuxcare.1/`
* Go applications (Grafana, Loki, MinIO) — [els_lang_go](https://security.tuxcare.com/sbom/cyclonedx/els_lang_go/), laid out as `<application>/<version>/<build>.sbom.json`, with one SBOM per build target, for example `grafana-debian12.sbom.json`

TuxCare publishes a detached `.asc` signature next to each SBOM, made with the TuxCare SecureChain key.

To find out whether an SBOM is available for another application, ask through the [TuxCare Support Portal](https://tuxcare.com/support-portal/).

## Vulnerability Exploitability eXchange (VEX)

TuxCare publishes VEX as CycloneDX VEX documents, distributed alongside each package version and updated with every release. The feed is available at [security.tuxcare.com/vex/cyclonedx](https://security.tuxcare.com/vex/cyclonedx/). A VEX document tells you which known CVEs actually affect a given artifact version and which don't, so scanner results stay focused on real exposure.

Each entry links one CVE to one artifact version and carries a status:

* **exploitable** - the CVE affects this artifact version, and TuxCare has not yet patched it in this release.
* **resolved** - TuxCare has released a patch for the CVE.

Each VEX document reports the CVEs that directly affect the artifact. The feed covers every supported base version and every released `-tuxcare.N` iteration, so the entry count reflects these combinations rather than the number of unique CVEs. When checking coverage, filter to the artifact versions you actually use — usually the latest `-tuxcare.N` iteration of your chosen base version. Earlier iterations remain in the feed for historical completeness but aren't relevant once you've adopted a newer release.

## Package Signature Verification (GPG)

TuxCare signs every archive it builds with a detached OpenPGP signature so you can confirm, before installing or updating, that TuxCare produced the archive and nobody altered it in transit. TuxCare creates the signature with its signing key (SHA-256 detached signature) and publishes it as a separate `.asc` file in TuxCare Nexus.

A successful verification proves two things about the artifact:

* **Authenticity** — TuxCare signed it with its private key.
* **Integrity** — its bytes match exactly what TuxCare signed; no tampering or corruption occurred.

A failed verification is an **integrity violation**: treat the artifact as untrusted and do not install it. Do not work around a failed check by re-downloading over an insecure channel or skipping verification — investigate the source instead.

### Verify a Downloaded Archive

TuxCare distributes ELS applications as archives you download from TuxCare Nexus. The signatures on [security.tuxcare.com](https://security.tuxcare.com/) sign the SBOMs, not the archives. To verify an archive, download its detached `.asc` signature from TuxCare Nexus with the credentials you use for the archive, and run `gpg --verify` against the archive. Select your ecosystem below.

<TableTabs label="Choose ecosystem: ">

<template #Java>

<ELSSteps>

1. **Obtain the exact published archive**

   Download the archive as described in the application's setup page (see, for example, [Apache Tomcat](/els-for-applications/apache-tomcat/)). Verification works on the byte-for-byte artifact that TuxCare signed, so keep the downloaded `.tar.gz` as-is:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.46-tuxcare.1/tomcat-8.5.46-tuxcare.1.tar.gz
   ```

2. **Download the matching signature**

   For the Java-based applications, TuxCare publishes the `.asc` next to the archive itself in the `els_java` repository, at the same path:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.46-tuxcare.1/tomcat-8.5.46-tuxcare.1.tar.gz.asc
   ```

3. **Verify the signature against the archive**

   ```text
   gpg --verify tomcat-8.5.46-tuxcare.1.tar.gz.asc tomcat-8.5.46-tuxcare.1.tar.gz
   ```

   A `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the archive is authentic and unmodified. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the archive from TuxCare over a trusted channel.

</ELSSteps>

</template>

<template #Go>

<ELSSteps>

1. **Obtain the exact published archive**

   Download the archive as described in the application's setup page (see, for example, [MinIO](/els-for-applications/minio/)). Verification works on the byte-for-byte artifact that TuxCare signed, so keep the downloaded `.tar.gz` as-is:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els-golang/minio/minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.19.tar.gz
   ```

   The layout inside `els-golang` comes from each application's build configuration, so it differs between applications:

   * Grafana and Loki use a directory per operating system: `<application>/<os>/<application>[-<arch>]-<version>.tar.gz`
   * MinIO keeps every build in one directory and puts the platform in the file name: `<application>/<application>_<os>_<arch>-<version>.tar.gz`

   **MinIO file names also differ from its version.** MinIO's upstream release identifier is not an ordinary version number, so the Nexus file name drops the `RELEASE.` prefix and writes the timestamp with dots instead of dashes. The release itself is `RELEASE.2025-10-15T17-29-55Z-tuxcare.19`, the form published on security.tuxcare.com; only the Nexus file name is written differently.

2. **Download the matching signature**

   For the Go-based applications, TuxCare always publishes the `.asc` next to the archive, in the same `els-golang` repository and the same directory. Authenticate with your TuxCare Nexus credentials:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -O \
     https://nexus.repo.tuxcare.com/repository/els-golang/minio/minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.19.tar.gz.asc
   ```

3. **Verify the signature against the archive**

   Pass the signature file first, then the archive you downloaded:

   ```text
   gpg --verify minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.19.tar.gz.asc minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.19.tar.gz
   ```

   A valid signature produces output similar to:

   ```text
   gpg: Signature made <date>
   gpg:                using RSA key <TUXCARE_KEY_ID>
   gpg: Good signature from "TuxCare <...>" [unknown]
   ```

   The `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the archive is authentic and unmodified. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the archive from TuxCare over a trusted channel.

</ELSSteps>

</template>

</TableTabs>

## Integrity Violation Events

An **integrity violation** is any event where an artifact obtained from TuxCare — or the channel you retrieved it over — fails a verification check, indicating the archive may not be authentic or someone may have altered it in transit. To align with the EU Cyber Resilience Act (CRA), treat these events as security-relevant and retain them in a dedicated log so a system administrator can review them regardless of when or how the download started.

### What Counts as an Integrity Violation

ELS applications are downloaded as signed archives from TuxCare Nexus over HTTPS. Select your ecosystem for the integrity checks — and therefore the violation types — that apply to it:

<TableTabs label="Choose ecosystem: ">

<template #Java>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the archive, or TuxCare's key did not sign the archive. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Downloaded Archive](#verify-a-downloaded-archive) above. |
| **Checksum / integrity-hash mismatch** | For applications resolved as Maven or Gradle dependencies, the build tool verifies the artifact checksum against the `.sha1`/`.sha256` published next to it. | **Maven**, run with strict checksums (`mvn -C`), fails with `Checksum validation failed`. **Gradle**, with dependency verification enabled, fails with `Dependency verification failed`. |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | A direct download aborts with `curl: (60) SSL certificate problem`; Maven/Gradle fail with `PKIX path building failed`. |

</template>

<template #Go>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the archive, or TuxCare's key did not sign the archive. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Downloaded Archive](#verify-a-downloaded-archive) above. |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | `curl` aborts the download with `curl: (60) SSL certificate problem` and a non-zero exit code. |

</template>

</TableTabs>

:::tip
There is no separately signed repository metadata index in this delivery model, so **metadata signature mismatch** does not apply. For the Go-based applications the detached **GPG signature is the integrity mechanism** — it covers authenticity and tamper-detection for the downloaded bytes; Java applications pulled as Maven/Gradle dependencies additionally get build-tool checksum verification.
:::

### Capturing Integrity Violations in a Dedicated Log

Because the download and signature check run as `curl` and `gpg` commands, their outcome lives only in the command's exit code and console output. To retain violations for later review — as CRA expects — run the download and verification inside a wrapper that writes the result to a dedicated log, separate from ordinary output. Doing this in a CI job or an install/deploy script guarantees that the log captures the event no matter who triggered the download or whether anyone was watching the terminal.

<TableTabs label="Choose ecosystem: ">

<template #Java>

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log
ARCHIVE=tomcat-8.5.46-tuxcare.1.tar.gz
ARCHIVE_URL=https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.46-tuxcare.1/${ARCHIVE}
SIG_URL=https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.46-tuxcare.1/${ARCHIVE}.asc

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
ARCHIVE=minio_linux_amd64-2025.10.15T17.29.55Z-tuxcare.19.tar.gz
ARCHIVE_URL=https://nexus.repo.tuxcare.com/repository/els-golang/minio/${ARCHIVE}
SIG_URL=https://nexus.repo.tuxcare.com/repository/els-golang/minio/${ARCHIVE}.asc

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
Forward `/var/log/tuxcare-integrity.log` (or the `tuxcare-integrity` journald tag) to your central log collector or SIEM so that it alerts on integrity violations and retains them under your standard log-retention policy.
:::