<!-- markdownlint-disable MD029 MD024 MD036 MD033 -->

# SecureChain CLI

`securechain` is a command-line tool that connects a project to SecureChain and keeps it there. It reads the dependency tree your own package manager resolved, asks the TuxCare catalogue which hardened builds your subscription reaches, writes the pins that select them, reinstalls, and verifies that the tree really changed.

It is one static binary with no runtime of its own. It runs on Linux, macOS and Windows (x86-64 and ARM64), on a developer machine and in CI alike.

## Why use it

You can connect a project to SecureChain by hand — the [JavaScript](/securechain/javascript/) page describes every step. The CLI does the same work for you and removes the parts that are easy to get wrong:

* **Finding what is covered.** A real project resolves hundreds of packages, most of them transitive. The CLI compares the whole resolved tree with the TuxCare catalogue and tells you which packages have a patched build, which CVEs each build closes, and which ones your subscription does not reach.
* **Transitive dependencies.** A vulnerable package is usually not one you declared. The CLI writes the right override for your package manager — `overrides`, `pnpm.overrides`, `resolutions` — so the patched build is selected wherever the package appears in the tree.
* **Lockfiles that keep upstream's bytes.** A lockfile pins the exact tarball an install fetches. The CLI refreshes the entries that matter and then **verifies** the installed tree, so a project never looks hardened while it still installs the unpatched package.
* **Staying hardened.** New patched builds are released all the time. `securechain check` is a gate for CI: it fails the build when a patched build exists and the project is not on it, and `securechain update` rolls the project forward.
* **Machines with no internet access.** The catalogue can be exported on a connected machine and imported on an isolated one, so the same commands work in an air-gapped network.

The CLI never changes anything without telling you what it changed, every writing command has a `--dry-run`, and a run that cannot verify its own result rolls the project back.

## Installation

<ELSPrerequisites>

* A TuxCare token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* The package manager your project uses (`npm`, `pnpm`, `yarn` or `bun`) installed on the machine: the CLI reads the tree that tool resolves
* Linux, macOS or Windows, x86-64 or ARM64

</ELSPrerequisites>

Choose how you want to install the CLI:

<TableTabs label="Choose an installation method: " :labels="{ Install_script: 'Install script (curl)', npm: 'npm', Docker: 'Docker', pip: 'pip (PyPI)', apt: 'apt (Debian, Ubuntu)', dnf: 'dnf / yum (RHEL, AlmaLinux, Rocky, Fedora)', Maven: 'Maven plugin', Gradle: 'Gradle plugin', Manual_download: 'Manual download' }">

<template #Install_script>

The quickest way on Linux and macOS. The script detects your operating system and architecture, downloads the matching binary, checks its SHA-256 checksum and installs it. It never calls `sudo`: when `/usr/local/bin` is not writable, the binary goes to `~/.local/bin`.

```text
curl -fsSL https://securechain.tuxcare.com/get/securechain | sh
```

To install a specific version, or to choose the directory:

```text
curl -fsSL https://securechain.tuxcare.com/get/securechain | SECURECHAIN_VERSION=v0.1.0 SECURECHAIN_INSTALL_DIR="$HOME/bin" sh
```

:::tip
On Windows, use the **npm**, **pip (PyPI)** or **Manual download** option.
:::

</template>

<template #npm>

The package `@tuxcare/securechain` carries the binary for your platform — nothing is downloaded at install time.

```text
npm install --global @tuxcare/securechain
```

Or run it without installing:

```text
npx @tuxcare/securechain check
```

</template>

<template #Docker>

The image is published on Docker Hub as `tuxcare/securechain`. Mount your project and pass the token:

```text
docker run --rm -v "$PWD":/work -w /work -e TUXCARE_TOKEN tuxcare/securechain:latest-toolchains check
```

Two variants are published for every release:

| Tag | Contents |
| :-- | :-- |
| `tuxcare/securechain:latest` | The binary and nothing else. Use it as a base, or where the package manager is already in your image. |
| `tuxcare/securechain:latest-toolchains` | The binary plus `npm`, `mvn` and `pip`, for a standalone scanning job that has no package manager of its own. |

:::tip
`latest` follows the newest final release and is handy for a first run. In CI, pin a version — for example `tuxcare/securechain:0.1.0-toolchains`.
:::

</template>

<template #pip>

The `securechain` package on PyPI is a platform wheel with the binary inside. `pipx` and `uv` keep it out of your project's own environment:

```text
pipx install securechain
```

With `uv`, you can run it without installing:

```text
uvx securechain check
```

</template>

<template #apt>

```text
curl -fsSL https://securechain.tuxcare.com/apt/tuxcare-securechain.gpg | sudo tee /etc/apt/keyrings/tuxcare-securechain.gpg >/dev/null
curl -fsSL https://securechain.tuxcare.com/apt/securechain.sources | sudo tee /etc/apt/sources.list.d/securechain.sources >/dev/null
sudo apt-get update && sudo apt-get install -y securechain
```

The repository metadata is signed with the TuxCare SecureChain key, and updates arrive with the rest of your system's packages.

</template>

<template #dnf>

```text
sudo curl -fsSL -o /etc/yum.repos.d/securechain.repo https://securechain.tuxcare.com/yum/securechain.repo
sudo dnf install -y securechain
```

On a system without `dnf`, use `yum install -y securechain`. The repository metadata is signed with the TuxCare SecureChain key.

</template>

<template #Maven>

For a Java build there is nothing to install: the plugin downloads the binary for your platform, verifies its checksum, caches it in `~/.m2` and runs it.

Add the TuxCare plugin repository and the plugin to `pom.xml`:

```xml
<pluginRepositories>
  <pluginRepository>
    <id>tuxcare</id>
    <url>https://artifacts.tuxcare.com/repository/maven-plugin-securechain/</url>
    <releases><enabled>true</enabled></releases>
    <snapshots><enabled>false</enabled></snapshots>
  </pluginRepository>
</pluginRepositories>
```

Then the plugin itself, inside `<build><plugins>`:

```xml
<plugin>
  <groupId>com.tuxcare</groupId>
  <artifactId>securechain-maven-plugin</artifactId>
  <version>0.1.0</version>
  <executions>
    <execution><goals><goal>check</goal></goals><phase>verify</phase></execution>
  </executions>
</plugin>
```

Or run it once, with no change to `pom.xml`:

```text
mvn com.tuxcare:securechain-maven-plugin:check
```

</template>

<template #Gradle>

The Gradle plugin works the same way as the Maven one: it downloads the binary for your platform, verifies its checksum, caches it and runs it.

In `settings.gradle.kts`:

```kotlin
pluginManagement {
    repositories {
        maven { url = uri("https://artifacts.tuxcare.com/repository/maven-plugin-securechain/") }
        gradlePluginPortal()
    }
}
```

In `build.gradle.kts`:

```kotlin
plugins {
    id("com.tuxcare.securechain") version "0.1.0"
}
```

Then:

```text
./gradlew securechainCheck
```

</template>

<template #Manual_download>

Every release is published at `https://securechain.tuxcare.com/get/<version>/`, with a `checksums.txt`, a signature for every file and the public key `securechain.pub`.

| Platform | File |
| :-- | :-- |
| Linux x86-64 | `securechain-linux-amd64` |
| Linux ARM64 | `securechain-linux-arm64` |
| macOS Intel | `securechain-darwin-amd64` |
| macOS Apple silicon | `securechain-darwin-arm64` |
| Windows x86-64 | `securechain-windows-amd64.exe` |
| Windows ARM64 | `securechain-windows-arm64.exe` |

For example, on Linux x86-64:

```text
curl -fsSLO https://securechain.tuxcare.com/get/v0.1.0/securechain-linux-amd64
curl -fsSLO https://securechain.tuxcare.com/get/v0.1.0/checksums.txt
sha256sum --check --ignore-missing checksums.txt
install -m 0755 securechain-linux-amd64 /usr/local/bin/securechain
```

The newest final version is named in `https://securechain.tuxcare.com/get/latest/latest`.

:::warning
On macOS, download with `curl` as shown above. A binary downloaded through a web browser is quarantined by the system and is blocked on first launch.
:::

</template>

</TableTabs>

Check the installation:

```text
securechain version
```

## Usage

The examples below use an **npm** project. `pnpm`, `yarn` and `bun` projects work the same way — the CLI detects the package manager from the lockfile or the `packageManager` field in `package.json`.

<ELSSteps>

1. Set your token

   Every `securechain` command reads the token from the `TUXCARE_TOKEN` environment variable. On your machine, export it in the shell where you run the commands, before the first one. In CI, add it as a masked secret variable of the pipeline — the CLI picks it up from the environment the same way:

   ```text
   export TUXCARE_TOKEN=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare token.
   :::

2. Log in

   ```text
   securechain auth login
   ```

   The CLI validates the token and remembers what your subscription covers — SecureChain, ELS, or both. `securechain auth status` shows it at any time, and `securechain auth logout` removes it from the machine.

3. Connect the project — `init`

   Run it once, in the root of the project:

   ```text
   securechain init
   ```

   Output example:

   ```text
   securechain init

     ✓ configuration: .securechain.yaml (created by this run)
     ✓ entitlement:   securechain=true els=true
     ◆ ecosystem:     npm 11.12.1

     ✎ wrote: .github/dependabot.yml, .npmrc, .securechain.yaml, renovate.json

     ➜ next steps:
       1. commit the files generated by this run. Otherwise, refreshing the lockfile will resolve dependencies from the public npm registry.
       2. run `securechain check` to see what the catalogue covers and what `harden` or `update` would change.
   ```

   `init` points the package manager at the TuxCare registry (`.npmrc`, or `.yarnrc.yml` for Yarn 2+), writes the project configuration `.securechain.yaml`, and teaches Dependabot and Renovate not to undo the patched versions. It is safe to run again: it updates what it wrote and keeps every line that is yours. Commit the files it creates.

   **Choosing the package manager yourself.** Detection needs a lockfile or a `packageManager` field. If the project has neither yet — a Bun project before its first `bun install`, for example — name the package manager:

   ```text
   securechain init --ecosystem bun
   ```

   The choice is saved in `.securechain.yaml`, and every later command uses it without being told again. Accepted values: `npm`, `pnpm`, `yarn-classic`, `yarn-berry`, `bun`. The `--ecosystem` flag also works on any single command, for that run only.

4. Install the dependencies

   The CLI reads the tree your package manager resolved, so the project has to be installed:

   ```text
   npm install
   ```

5. See what the catalogue covers — `check`

   `check` reads and never writes. It is the command to run in CI.

   ```text
   securechain check
   ```

   Output example:

   ```text
   securechain check

     ⚙ configuration: .securechain.yaml
     ✓ entitlement:   securechain=true els=true
     ◇ catalogue:     17 Sep 2026, 4:04 pm UTC
     ◆ ecosystem:     npm 11.12.1 - 5 components, 2 direct

     coverage
       covered_mainstream: 3
       hardenable: 2

     findings
       [high][unprotected-with-fix] pkg:npm/cookie@0.4.2 resolves to the unpatched upstream build; 0.4.2-tuxcare.4 is available to this subscription, closing CVE-2024-47764
         fix: run `securechain harden`

     ✖ exit 1 (findings)
   ```

   Every finding names the package, the patched build and the CVEs it closes, and says which command fixes it. Add `--explain` to see the evidence behind each finding. `securechain status` prints the same picture without acting as a gate: findings do not make it fail.

6. Apply the patched builds — `harden`

   Preview first. `--dry-run` prints the exact diff and writes nothing:

   ```text
   securechain harden --dry-run
   ```

   Then apply:

   ```text
   securechain harden
   ```

   `harden` pins the patched builds in `package.json` — directly for the packages you declared, through `overrides` for transitive ones — refreshes the lockfile, reinstalls, and verifies that the installed tree holds the builds it selected. If the result does not match the plan, every file is restored to what it was.

   Commit `package.json` and the lockfile together, then run `securechain check` again: it should now exit `0`.

7. Keep up with new builds — `update`

   TuxCare keeps releasing patched builds for the versions you are on. When `check` reports `catalogue-drift`, roll the project forward:

   ```text
   securechain update
   ```

   Output example:

   ```text
     ✎ wrote: package.json

     ℹ notes:
       · pkg:npm/cookie@0.4.2-tuxcare.3 moved to 0.4.2-tuxcare.4, the newest build on its base version
       · 1 pin rolled forward across 1 file
   ```

   `update` never changes a package's base version — `0.4.2` stays `0.4.2` — so it is a patch, never an upgrade. `securechain update --check-only` reports what is behind, writes nothing and exits `1`, which makes it a second gate for CI.

</ELSSteps>

### All commands

| Command | What it does |
| :-- | :-- |
| `securechain init` | Connects the project: registry configuration, `.securechain.yaml`, Dependabot and Renovate rules. Run once per repository; safe to re-run. |
| `securechain auth login` | Validates the token and remembers what the subscription covers. |
| `securechain auth status` | Shows what this machine's subscription covers. |
| `securechain auth logout` | Removes the stored token and subscription details. |
| `securechain status` | Reports what would change. Writes nothing, and findings do not make it fail. |
| `securechain check` | The CI gate. Writes nothing; exits `1` when a patched build exists and the project is not on it. |
| `securechain harden` | Pins the patched builds, reinstalls and verifies. Rolls back if the result does not match the plan. |
| `securechain update` | Rolls existing pins forward to the newest patched build of the same base version. |
| `securechain migrate` | Rewrites the legacy `npm:@els-js/…` alias form to canonical package names, then reinstalls and verifies. |
| `securechain sca` | Inventories the dependencies and reports their known vulnerabilities. Writes nothing. |
| `securechain sca vuln <id>` | Prints one advisory in full, for example `securechain sca vuln CVE-2024-47764`. |
| `securechain sbom` | Writes a CycloneDX or SPDX document from the resolved tree: `securechain sbom --output bom.cdx.json`. |
| `securechain feed export` | Packs the catalogue into one file for a machine with no internet access. |
| `securechain feed import <file>` | Verifies and loads a catalogue file produced by `feed export`. |
| `securechain version` | Prints the version. |
| `securechain completion <shell>` | Prints a shell completion script for `bash`, `zsh`, `fish` or `powershell`. |

Every writing command — `init`, `harden`, `update`, `migrate` — accepts `--dry-run`.

### Options for every command

| Option | Default | Meaning |
| :-- | :-- | :-- |
| `--dir <path>` | `.` | The project root. |
| `--ecosystem <name>` | auto-detected | Use this package manager for this run. With `init`, the choice is saved. |
| `--feed-max-age <duration>` | `24h` | How old the catalogue may be. See below. |
| `--offline` | off | Never touch the network. Needs a catalogue already on the machine. |
| `--output <format>` | `human` | `human`, `json`, `sarif`, `junit` or `markdown`. |
| `--token <token>` | `TUXCARE_TOKEN` | The subscription token. Prefer the environment variable in CI. |
| `--no-color` | off | Plain output, with no colours or symbols. |
| `--timeout <duration>` | `10m` | A deadline for the whole command. |

**How old the catalogue may be — `--feed-max-age`.** The CLI keeps a copy of the catalogue on the machine and refreshes it when it is older than this value. The default is 24 hours. Pass the flag to choose another value for one run:

```text
securechain check --feed-max-age 24h
```

To set it for the whole project, pass it to `init`. The value is written into `.securechain.yaml` as `feed_max_age`, and every command reads it from there:

```text
securechain init --feed-max-age 168h
```

A value on the command line always wins over the one in the file. Durations are written as `36h`, `168h` and so on.

### Using the CLI in CI

`check` exits `0` when the project is on every patched build it can reach, and `1` when it is not — so it needs no wrapper:

```yaml
securechain:
  image: node:22-slim
  # TUXCARE_TOKEN comes from the project's CI/CD variables
  script:
    - curl -fsSL https://securechain.tuxcare.com/get/securechain | sh
    - npm ci
    - securechain check --output junit > report.xml
  artifacts:
    reports:
      junit: report.xml
```

`--output sarif` feeds GitHub and GitLab code scanning, and `--output json` is a stable, versioned format to script against.

| Exit code | Meaning |
| :-: | :-- |
| `0` | Clean. |
| `1` | Findings: a patched build exists and the project is not on it. **Fail the build.** |
| `2` | Usage: a bad flag, an unreadable configuration, no package manager detected. |
| `3` | Authentication: the token is missing, expired, or does not cover this. |
| `4` | Catalogue: it cannot be reached, or the copy on the machine is too old. |
| `5` | Toolchain: the project is not installed, or the package manager failed. |
| `6` | Verification failed: the change was rolled back. |
| `7` | Internal error. |

### Machines with no internet access — `feed export` and `feed import`

The CLI needs the TuxCare catalogue to know which patched builds exist. On an isolated machine — an air-gapped build server, a locked-down CI runner — it cannot download the catalogue, so you carry it across as a file.

<ELSSteps>

1. On a machine with internet access, export the catalogue

   ```text
   securechain feed export --fetch
   ```

   Run inside a project that `init` has configured, this writes the catalogue for the project's ecosystem to a file named `tuxcare-catalog`. `--fetch` downloads the newest catalogue first; without it, the command packs the copy already on the machine.

   Outside a project, or to choose the file name, say both explicitly:

   ```text
   securechain feed export --ecosystem npm --output ./npm-catalog.tar.zst --fetch
   ```

2. Copy the file to the isolated machine

   Use whatever transfer your policy allows. The file is signed by TuxCare, and the signature travels inside it.

3. Import it

   ```text
   securechain feed import ./tuxcare-catalog
   ```

   The CLI verifies the signature before it stores anything. A file that was changed on the way, or one older than the catalogue already on the machine, is refused.

4. Work offline

   ```text
   securechain check --offline
   ```

   `--offline` tells the CLI never to touch the network. `harden` and `update` take it too.

</ELSSteps>

:::warning
The catalogue's age is counted from the moment TuxCare published it, not from the moment you imported it. With the default `--feed-max-age` of 24 hours, a file imported today is refused tomorrow. For a transfer you make once a week, set the limit once for the project — `securechain init --feed-max-age 168h` — and keep in mind what it means: a patched build released during that week is not visible on the isolated machine until the next import.
:::

The isolated machine still needs a way to install the packages themselves — typically an internal mirror of the TuxCare registry. See [Managing the SecureChain Repository](/securechain/managing-securechain-repository/).

<WhatsNext>

* ![](/images/javascript.webp) [JavaScript](/securechain/javascript/) — Connect a JavaScript project to SecureChain by hand
* 📦 [Managing the SecureChain Repository](/securechain/managing-securechain-repository/) — Mirrors, proxies and repository managers
* 📚 [SecureChain for Open Source Software](/securechain/) — What SecureChain covers and how fast

</WhatsNext>
