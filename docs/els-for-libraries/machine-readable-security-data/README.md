# Machine-Readable Security Data (SBOM, VEX, GPG)

TuxCare provides machine-readable security data and verification tooling for Endless Lifecycle Support (ELS) for Language Ecosystems:

* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in CycloneDX format
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format
* **Package signatures (GPG)** — detached OpenPGP signatures to verify each artifact's authenticity and integrity
* **Integrity violation logging** — detecting and retaining integrity-check failures for administrator review

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

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
Import the public key once. It can verify every TuxCare-signed package, so this step is not repeated for each artifact.
:::


## Software Bill of Materials (SBOM)

A Software Bill of Materials (SBOM) lists the components, versions, and dependency relationships of a package. TuxCare publishes SBOMs in CycloneDX format on [security.tuxcare.com](https://security.tuxcare.com/sbom/cyclonedx/), so any SBOM-aware scanner or supply-chain tool can read them.

SBOMs are available for:

* Java — [els_lang_java](https://security.tuxcare.com/sbom/cyclonedx/els_lang_java/), laid out as `<group path>/<artifactId>/<version>/<artifactId>-<version>.sbom.json`, where the group path is the `groupId` with `/` in place of `.`, for example `org/apache/commons/commons-lang3/3.12.0-tuxcare.1/`
* JavaScript — [els_lang_javascript](https://security.tuxcare.com/sbom/cyclonedx/els_lang_javascript/), laid out as `<package>/<version>/<package>-<version>.sbom.json`
* Python — [els_lang_python](https://security.tuxcare.com/sbom/cyclonedx/els_lang_python/), laid out as `<package>/<version>/<package>-<version>-sbom.json`
* PHP — [els_lang_php](https://security.tuxcare.com/sbom/cyclonedx/els_lang_php/), laid out as `<vendor>/<package>/<version>/<package>-<version>.sbom.json`
* .NET — [els_lang_dotnet](https://security.tuxcare.com/sbom/cyclonedx/els_lang_dotnet/), laid out as `<package>/<version>/<package>.<version>.sbom.json`

Not every package has an SBOM yet. To ask about a package, ask through the [TuxCare Support Portal](https://tuxcare.com/support-portal/).

### Verify an SBOM

Every SBOM except .NET has a detached `.asc` signature made with the TuxCare SecureChain key. Import the key first, as described in [Obtain the TuxCare Public Key](#obtain-the-tuxcare-public-key).

| Ecosystem | Signature location |
| --- | --- |
| Java, Python | Same directory as the SBOM, named after the SBOM file with `.asc` added |
| JavaScript | `signatures/els_lang_javascript/<package>/<version>/<package>-<version>.sbom.json.asc` |
| PHP | `signatures/els_lang_php/<vendor>/<package>/<version>/<package>-<version>.sbom.json.asc` |
| .NET | No signature |

For example, to verify the SBOM of `commons-lang3` `3.12.0-tuxcare.1`:

```text
curl -fsSLO https://security.tuxcare.com/sbom/cyclonedx/els_lang_java/org/apache/commons/commons-lang3/3.12.0-tuxcare.1/commons-lang3-3.12.0-tuxcare.1.sbom.json
curl -fsSLO https://security.tuxcare.com/sbom/cyclonedx/els_lang_java/org/apache/commons/commons-lang3/3.12.0-tuxcare.1/commons-lang3-3.12.0-tuxcare.1.sbom.json.asc
gpg --verify commons-lang3-3.12.0-tuxcare.1.sbom.json.asc commons-lang3-3.12.0-tuxcare.1.sbom.json
```

A valid signature reports `using RSA key 7BF120293948A27B` and `Good signature from "TuxCare SecureChain <support@tuxcare.com>"`. If the `.asc` is missing or `gpg` reports a different key, ask through the [TuxCare Support Portal](https://tuxcare.com/support-portal/).

## Vulnerability Exploitability eXchange (VEX)

TuxCare publishes VEX as CycloneDX VEX documents, distributed alongside each package version and updated with every release. A VEX document tells you which known CVEs actually affect a given artifact version and which don't, so scanner results stay focused on real exposure.

Feeds are published per ecosystem:

* Java - [els_lang_java](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/)
* Python - [els_lang_python](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/) — Python releases iterate as `X.Y.Z.postN+tuxcare` (e.g. `2021.10.8.post2+tuxcare`), not `-tuxcare.N`
* JavaScript - [els_lang_javascript](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/)
* PHP - [els_lang_php](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/) — PHP releases iterate as `-pN+tuxcare`, for example `5.2.28-p1+tuxcare`, not `-tuxcare.N`
* .NET - [els_lang_dotnet](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/)

Each entry links one CVE to one artifact version and carries a status:

* **exploitable** — the CVE affects this artifact version and has not yet been patched in this release.
* **resolved** — the CVE has been patched through a TuxCare release.

Each VEX document reports the CVEs that directly affect the artifact. The feed covers every supported base version and every released `-tuxcare.N` iteration, so the entry count reflects these combinations rather than the number of unique CVEs. When checking coverage, filter to the artifact versions you actually use — usually the latest `-tuxcare.N` iteration of your chosen base version. Earlier iterations remain in the feed for historical completeness but aren't relevant once you've adopted a newer release.

## Package Signature Verification (GPG)

Packages TuxCare builds are signed so you can confirm, before installing or updating, that the artifact was produced by TuxCare and has not been altered in transit. For most ecosystems the signature is published as a separate `.asc` file, created with TuxCare's signing key (SHA-256 detached signature).

A successful verification proves two things about the artifact:

* **Authenticity** — it was signed by TuxCare's private key.
* **Integrity** — its bytes match exactly what was signed; no tampering or corruption occurred.

A failed verification is an **integrity violation**: the artifact must be treated as untrusted and not installed. Do not work around a failed check by re-downloading over an insecure channel or skipping verification — investigate the source instead.

### Where Signatures Are Published

TuxCare publishes two kinds of `.asc` file, and they sign different things: one signs the **SBOM**, the other signs the **package**. To check an SBOM, follow [Verify an SBOM](#verify-an-sbom). This section is about package signatures.

Package signatures are published per ecosystem:

* **Java** — in TuxCare Nexus, next to the artifact in `els_java`
* **JavaScript** — on [security.tuxcare.com](https://security.tuxcare.com/signatures/els_lang_javascript/), under `signatures/els_lang_javascript/`
* **Python** — in TuxCare Nexus, in `els-python-whl` and `els-python-source`
* **PHP** — in TuxCare Nexus, next to the archive in the `els_php_raw_custom1` raw repository
* **.NET** — no detached signature; the `.nupkg` carries an embedded NuGet signature

Except for JavaScript, downloading a package signature needs the same TuxCare Nexus credentials as the package itself. The steps under [Verify a Package](#verify-a-package) give the exact path for each ecosystem.

### Verify a Package

The procedure is the same for Java, JavaScript, Python, and PHP: obtain the exact published artifact, download its detached `.asc` signature, and run `gpg --verify`. Select your ecosystem below.

:::tip
TuxCare does not publish a detached `.asc` file for .NET packages. A TuxCare `.nupkg` carries an embedded NuGet signature instead, which the NuGet client checks for you when the package is installed, so there is no separate `gpg --verify` step for .NET.
:::

<TableTabs label="Choose ecosystem: ">

<template #Java>

<ELSSteps>

1. **Obtain the exact published artifact**

   With the TuxCare Maven repository configured (see the [Java libraries](/els-for-libraries/java-libraries/) setup), copy the published `.jar` out of it:

   ```text
   mvn dependency:copy \
     -Dartifact=org.apache.commons:commons-lang3:3.12.0-tuxcare.1 \
     -DoutputDirectory=.
   ```

2. **Download the matching signature**

   For Java, TuxCare publishes the `.asc` next to the artifact itself in the `els_java` repository, at the same Maven coordinate path:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -fsSL \
     https://nexus.repo.tuxcare.com/repository/els_java/org/apache/commons/commons-lang3/3.12.0-tuxcare.1/commons-lang3-3.12.0-tuxcare.1.jar.asc \
     -o commons-lang3-3.12.0-tuxcare.1.jar.asc
   ```

3. **Verify the signature against the artifact**

   ```text
   gpg --verify commons-lang3-3.12.0-tuxcare.1.jar.asc commons-lang3-3.12.0-tuxcare.1.jar
   ```

   A `Good signature` line confirms authenticity and integrity. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the package from TuxCare over a trusted channel.

</ELSSteps>

</template>

<template #JavaScript>

<ELSSteps>

1. **Obtain the exact published tarball**

   Verification works on the byte-for-byte artifact that TuxCare signed, so download the published `.tgz` rather than repacking it locally. With the TuxCare npm registry configured (see the [JavaScript libraries](/els-for-libraries/javascript-libraries/) setup), `npm pack` with a version spec downloads the registry tarball as-is:

   ```text
   npm pack @els-js/angular@1.8.3-tuxcare.8
   ```

   The command writes `els-js-angular-1.8.3-tuxcare.8.tgz` to the current directory. npm normalizes the filename, but the contents are identical to the published artifact.

2. **Download the matching signature**

   Fetch the `.asc` file for the same version from [security.tuxcare.com](https://security.tuxcare.com/signatures/els_lang_javascript/); the path is `signatures/els_lang_javascript/<package>/<version>/<package>-<version>.tgz.asc`:

   ```text
   curl -fsSL \
     https://security.tuxcare.com/signatures/els_lang_javascript/angular/1.8.3-tuxcare.8/angular-1.8.3-tuxcare.8.tgz.asc \
     -o angular-1.8.3-tuxcare.8.tgz.asc
   ```

   The same directory also holds the `.asc` of the package's SBOM; TuxCare publishes the SBOM under `sbom/cyclonedx/els_lang_javascript/<package>/<version>/`.

3. **Verify the signature against the tarball**

   Pass the signature file first, then the tarball you downloaded:

   ```text
   gpg --verify angular-1.8.3-tuxcare.8.tgz.asc els-js-angular-1.8.3-tuxcare.8.tgz
   ```

   A valid signature produces output similar to:

   ```text
   gpg: Signature made Mon 12 May 2025 10:14:21 UTC
   gpg:                using RSA key 7BF120293948A27B
   gpg: Good signature from "TuxCare SecureChain <support@tuxcare.com>" [unknown]
   ```

   The `Good signature` line, and a key ID that matches the TuxCare public key you imported, confirm the artifact is authentic and unmodified. The `[unknown]` trust level only reflects that you have not personally signed TuxCare's key in your web of trust; it does not affect the validity of the signature.

</ELSSteps>

</template>

<template #Python>

<ELSSteps>

1. **Obtain the exact published artifact**

   With the TuxCare PyPI-compatible index configured (see the [Python libraries](/els-for-libraries/python-libraries/) setup), `pip download` fetches the published wheel as-is (the index serves wheels):

   ```text
   pip download anyio==3.7.1.post2+tuxcare --no-deps -d .
   ```

   This writes `anyio-3.7.1.post2+tuxcare-py3-none-any.whl` to the current directory.

2. **Download the matching signature**

   For Python, TuxCare publishes the `.asc` next to the wheel in the `els-python-whl` repository, under `packages/<name>/<version>/`; TuxCare signs source distributions the same way in `els-python-source`. Authenticate with your TuxCare Nexus credentials:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -fsSL \
     "https://nexus.repo.tuxcare.com/repository/els-python-whl/packages/anyio/3.7.1.post2+tuxcare/anyio-3.7.1.post2+tuxcare-py3-none-any.whl.asc" \
     -o anyio-3.7.1.post2+tuxcare-py3-none-any.whl.asc
   ```

3. **Verify the signature against the artifact**

   ```text
   gpg --verify anyio-3.7.1.post2+tuxcare-py3-none-any.whl.asc anyio-3.7.1.post2+tuxcare-py3-none-any.whl
   ```

   A `Good signature` line confirms authenticity and integrity. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the package from TuxCare over a trusted channel.

</ELSSteps>

</template>

<template #PHP>

<ELSSteps>

1. **Obtain the exact published artifact**

   GPG verifies the byte-for-byte archive that TuxCare signed, so use the file exactly as you downloaded it rather than repacking it locally. For PHP, TuxCare publishes the signed archive together with its detached `.asc` signature in the `els_php_raw_custom1` raw repository on TuxCare Nexus, laid out as `<vendor>/<package>/<version>/`.

   Authenticate with the same Nexus credentials you use for the `els_php` Composer repository; any PHP library's setup shows them, for example [PHPMailer](/els-for-libraries/phpmailer/). Then download the archive for the version you use.

   This example uses `symfony/yaml` `v4.4.45-p1+tuxcare`:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -fsSL \
     https://nexus.repo.tuxcare.com/repository/els_php_raw_custom1/symfony/yaml/v4.4.45-p1+tuxcare/yaml-v4.4.45-p1+tuxcare.zip \
     -o yaml-v4.4.45-p1+tuxcare.zip
   ```

   Check the exact package, version, and path in your TuxCare Nexus account. TuxCare publishes signatures per artifact, so a package only has an `.asc` if a signed build exists for it.

   Alternatively, verify the copy Composer downloaded during `composer install`, provided it is the same build. Composer stores it under a content-hashed filename such as `<vendor>/<package>/<hash>.zip` in its files cache, so locate it and copy it out under the published name first. The cache location varies by operating system:

   * **Linux**: `~/.composer/cache`, or `$XDG_CACHE_HOME/composer` if set
   * **macOS**: `~/Library/Caches/composer`
   * **Windows**: `C:\Users\<user>\AppData\Local\Composer`

   Confirm your exact path with `composer config cache-dir`; Composer stores the downloaded package archives in its `files/` subdirectory.

2. **Download the matching signature**

   TuxCare publishes the `.asc` next to the archive in the same `els_php_raw_custom1` repository:

   ```text
   curl -u "${USERNAME}:${PASSWORD}" -fsSL \
     https://nexus.repo.tuxcare.com/repository/els_php_raw_custom1/symfony/yaml/v4.4.45-p1+tuxcare/yaml-v4.4.45-p1+tuxcare.zip.asc \
     -o yaml-v4.4.45-p1+tuxcare.zip.asc
   ```

3. **Verify the signature against the artifact**

   ```text
   gpg --verify yaml-v4.4.45-p1+tuxcare.zip.asc yaml-v4.4.45-p1+tuxcare.zip
   ```

   A `Good signature` line confirms authenticity and integrity. `BAD signature`, or a missing public key, is an integrity violation — stop and re-obtain the package from TuxCare over a trusted channel.

</ELSSteps>

</template>


</TableTabs>

If `gpg` reports `BAD signature`, or cannot find the matching public key, treat the artifact as an integrity violation: stop the installation and re-obtain the package and signature from TuxCare over a trusted channel.

:::tip
TuxCare signs all ELS for Language Ecosystems packages the same way. For the public key, see [Obtain the TuxCare Public Key](#obtain-the-tuxcare-public-key); if you cannot find the signature for an artifact, ask through the [TuxCare Support Portal](https://tuxcare.com/support-portal/).
:::

## Integrity Violation Events

An **integrity violation** is any event where an artifact obtained from TuxCare — or the channel you retrieved it over — fails a verification check, indicating the package may not be authentic or someone may have altered it in transit. The package manager already **blocks** the install or update, but by default the only trace is the command's exit code and its console output. To align with the EU Cyber Resilience Act (CRA), treat these events as security-relevant and retain them in a dedicated log so a system administrator can review them regardless of when or how the update started.

### What Counts as an Integrity Violation

The ELS for Language Ecosystems delivery model is a set of per-ecosystem registries hosted on TuxCare Nexus (an npm registry for JavaScript, a PyPI-compatible index for Python, a Maven repository for Java, a Composer repository for PHP, and a NuGet feed for .NET), served exclusively over HTTPS, plus a detached GPG signature published alongside each artifact. Select your ecosystem for the integrity checks — and therefore the violation types — that apply to it:

<TableTabs label="Choose ecosystem: " :labels="{ DotNET: '.NET' }">

<template #Java>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or TuxCare's key did not sign the artifact. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded artifact's checksum does not match the `.sha1`/`.sha256` published next to it — the bytes changed in transit or someone substituted the artifact. | **Maven**, run with strict checksums (`mvn -C`), fails with `Checksum validation failed`. **Gradle**, with dependency verification enabled, fails with `Dependency verification failed`. |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | Maven/Gradle fail with `PKIX path building failed` / `unable to find valid certification path`. |

</template>

<template #JavaScript>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or TuxCare's key did not sign the artifact. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded tarball's hash does not match the integrity value recorded in `package-lock.json` — the bytes changed in transit or someone substituted the artifact. | `npm` aborts the install with `EINTEGRITY` (`sha512-… integrity checksum failed`). |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | `npm` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` / `SELF_SIGNED_CERT_IN_CHAIN`. |

</template>

<template #Python>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or TuxCare's key did not sign the artifact. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded artifact's hash does not match the hash pinned for it — the bytes changed in transit or someone substituted the artifact. | `pip`, when run in hash-checking mode (`--require-hashes`), aborts with `THESE PACKAGES DO NOT MATCH THE HASHES…`. |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | `pip` fails with `SSLError` / `CERTIFICATE_VERIFY_FAILED`. |

</template>

<template #PHP>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or TuxCare's key did not sign the artifact. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The downloaded package archive's hash does not match the `dist.shasum` recorded in `composer.lock` — the bytes changed in transit or someone substituted the artifact. | **Composer** aborts with `The checksum verification of the file failed`. |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | **Composer** fails with `curl error 60` / `SSL certificate problem` — traffic to Nexus is HTTPS-only under the default `secure-http`. |

</template>

<template #DotNET>

| Event | What it means | How it surfaces |
|---|---|---|
| **GPG signature failure** | The detached `.asc` signature does not match the artifact, or TuxCare's key did not sign the artifact. | `gpg --verify` reports `BAD signature` or `No public key` — see [Verify a Package](#verify-a-package) above. |
| **Checksum / integrity-hash mismatch** | The restored package's content hash does not match the value recorded in `packages.lock.json` — the bytes changed in transit or someone substituted the artifact. | **NuGet** (`dotnet restore --locked-mode`) fails with `NU1403` (`Package content hash validation failed`). |
| **HTTPS / TLS certificate error** | The client cannot validate the TLS certificate that `nexus.repo.tuxcare.com` presents, so you cannot trust the transport itself. | `dotnet restore` fails with `The SSL connection could not be established` / `The remote certificate is invalid`. |

</template>

</TableTabs>

:::tip
**Metadata signature mismatch** is an OS-package-manager concept (yum/dnf and apt verify a GPG signature over the *repository metadata index* — `repomd.xml`, `InRelease`). The language registries used by ELS for Language Ecosystems — npm, pip, Maven, Composer, and NuGet — do not distribute a separately signed metadata index, so this specific violation type does not map to the setup. The checksum/integrity-hash check and the detached GPG signature listed above provide the equivalent authenticity and integrity guarantee **per artifact**.
:::

### Capturing Integrity Violations in a Dedicated Log

Because these checks run inside the package manager (`npm`, `pip`, `mvn`, `composer`, `dotnet`) or `gpg`, the only record of their outcome is the command's exit code and console output. To retain violations for later review — as CRA expects — run the install or verification inside a wrapper that writes the result to a dedicated log, separate from ordinary build output. Doing this in a CI job or an install/deploy script guarantees that the log captures the event no matter who triggered the update or whether anyone monitored its output.

<TableTabs label="Choose ecosystem: " :labels="{ DotNET: '.NET' }">

<template #Java>

`mvn -C` (`--strict-checksums`) makes a checksum mismatch fail the build; the connection to Nexus always uses TLS. The script below writes a failure to a dedicated log file and to the system journal. (For Gradle, enable dependency verification and run `./gradlew build` in place of the Maven command.)

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if mvn -C clean install; then
  logger -t tuxcare-integrity -p authpriv.info "OK: mvn build"
else
  rc=$?
  msg="INTEGRITY VIOLATION: mvn build (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

</template>

<template #JavaScript>

`npm ci` enforces the `package-lock.json` integrity hashes (checksum check) and TLS on every download; the on-demand `gpg --verify` adds signature verification. The script below writes a non-zero exit from either to a dedicated log file and to the system journal under a distinct tag.

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

`--require-hashes` turns on pip's checksum verification against the hashes pinned in `requirements.txt`; the connection to the Nexus index always uses TLS. The script below writes a failure to a dedicated log file and to the system journal.

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

<template #PHP>

Composer verifies each downloaded package against the `dist.shasum` in `composer.lock` as a checksum check and enables the HTTPS-only `secure-http` setting by default. The script below writes a failure to a dedicated log file and to the system journal.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if composer install; then
  logger -t tuxcare-integrity -p authpriv.info "OK: composer install"
else
  rc=$?
  msg="INTEGRITY VIOLATION: composer install (exit ${rc})"
  echo "$(date -u +%FT%TZ) ${msg}" | tee -a "$LOG"
  logger -t tuxcare-integrity -p authpriv.err "${msg}"
  exit 1
fi
```

</template>

<template #DotNET>

`dotnet restore --locked-mode` enforces the `packages.lock.json` content hashes (checksum check) and TLS on every download. The script below writes a failure to a dedicated log file and to the system journal.

```bash
#!/usr/bin/env bash
set -o pipefail
LOG=/var/log/tuxcare-integrity.log

if dotnet restore --locked-mode; then
  logger -t tuxcare-integrity -p authpriv.info "OK: dotnet restore"
else
  rc=$?
  msg="INTEGRITY VIOLATION: dotnet restore (exit ${rc})"
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
Forward `/var/log/tuxcare-integrity.log` (or the `tuxcare-integrity` journald tag) to your central log collector or SIEM so that it alerts on integrity violations and retains them under your standard log-retention policy.
:::
