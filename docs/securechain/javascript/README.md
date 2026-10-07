# JavaScript

SecureChain delivers verified, signed, continuously patched JavaScript packages from a TuxCare-managed npm registry. This page shows how to connect a project to it with the SecureChain CLI.

## Installation

A project is connected to SecureChain with the SecureChain CLI: one tool configures the registry, finds the packages that have a patched build, including transitive ones, pins them and verifies the result.

`securechain` is a single binary. It detects your package manager (`npm`, `pnpm`, `yarn` or `bun`), points it at the TuxCare registry, compares the whole resolved dependency tree with the TuxCare catalogue, pins the patched builds — through `overrides` or `resolutions` for transitive packages — and verifies that the installed tree really changed. In CI, `securechain check` fails the build when a patched build exists and the project is not on it.

<ELSPrerequisites>

* A user in a SecureChain workspace on [sc.tuxcare.cloud](https://sc.tuxcare.cloud), with the member or the admin role. An admin creates the workspace and invites the team; to get a workspace, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
* A JavaScript project with `package.json` and the lockfile of its package manager. If you are starting from scratch, run your package manager's init command (`npm init -y`, `pnpm init`, `yarn init`, `bun init`) in your project directory to create one.
* The package manager your project uses (`npm`, `pnpm`, `yarn` or `bun`) installed on the machine: the CLI reads the tree that tool resolves. For npm, version 10 or later is recommended.
* The SecureChain CLI installed. The quickest way is the install script:

  ```
  curl -fsSL https://securechain.tuxcare.com/get/securechain | sh
  ```

  Other installation methods: [Install the CLI](https://sc.tuxcare.cloud/guide/cli#install).

</ELSPrerequisites>

<ELSSteps>

1. Make an access token

   The CLI uses one secret: an access token of your workspace.

   * Open your workspace, for example `https://name.sc.tuxcare.cloud`, and sign in.
   * Open **Access tokens** in the workspace menu.
   * Give the token a **Name** that says where it is used, for example `laptop jane`.
   * Select the **CI upload** rights — the CLI channel with the `submit` and `read` permissions.
   * Set an **Expiry**, for example 90 days.
   * Select **Mint token** and copy the token. The portal shows it once.

   The token starts with `tuxr_` and the name of your workspace. Keep it in a password manager and do not commit it to a repository.

2. Give the token to the CLI

   On your machine, run:

   ```text
   securechain auth login
   ```

   In CI, keep the token in a masked variable named `SECURECHAIN_PORTAL_TOKEN`; the CLI reads it from there and writes it nowhere. There is no command-line option for the token.

3. Connect the project

   In the root directory of your project, run:

   ```text
   securechain init
   ```

   `init` detects the package manager and writes:

   * `.npmrc` (or `.yarnrc.yml` for Yarn 2+) — the TuxCare registry
   * `.securechain.yaml` — the project settings
   * `renovate.json` and `.github/dependabot.yml` — an `ignore` block, so the update bots do not propose plain upstream over a TuxCare build

   Commit these files.

4. Install the project

   ```text
   npm ci
   ```

   Use the install command of your package manager (`pnpm install --frozen-lockfile`, `yarn install`, `bun install`). The CLI reads the installed tree, so the project has to be installed before the next steps.

5. Send the dependencies and read the findings

   ```text
   securechain sca
   ```

   `sca` sends the list of packages and versions to your workspace — never your source code — waits for the portal to match it, and prints the findings: vulnerable packages, the CVEs, and the TuxCare build that closes them.

6. Move the project to the TuxCare builds

   ```text
   securechain harden
   ```

   `harden` pins the TuxCare builds, reinstalls, and verifies the result. Add `--dry-run` to preview the change without writing anything.

7. Gate the build

   ```text
   securechain check
   ```

   `check` reads the installed tree, compares it with the catalogue, and exits 1 when a patched build exists and the project is not on it, or when a lockfile entry still installs the unpatched package. Run it in CI after the install step.

8. Commit the changes

   Commit:

   * `package.json` and the lockfile
   * `.npmrc` (or `.yarnrc.yml`)
   * `.securechain.yaml`
   * `renovate.json` and `.github/dependabot.yml`

</ELSSteps>

## Troubleshooting

If an install resolves to the public registry instead of TuxCare, or a `securechain` command stops, use the checks below.

* **Confirm the CLI is connected**

   ```text
   securechain auth status
   ```

   It prints the workspace, the portal address and the subscription of the workspace (the `entitlement` line). If it reports no token, run `securechain auth login` again. In CI, check that the `SECURECHAIN_PORTAL_TOKEN` variable is set and not expired.

* **Confirm the active registry**

   ```text
   npm config get registry
   ```

   Run it from the project root. The output must be `https://artifacts.tuxcare.com/npm-upstream/`, the line `securechain init` writes into the project `.npmrc`. If it returns `https://registry.npmjs.org/`, npm is not reading that file — check the directory you run from, and that no `--registry` argument or `npm_config_registry` variable overrides it. pnpm, Bun and Yarn 1 read the same `.npmrc` (`pnpm config get registry` works too); for Yarn 2+ the equivalent is `yarn config get npmRegistryServer`.

* **Confirm authentication and connectivity**

   ```text
   npm ping
   npm whoami
   ```

   `npm ping` must print `PONG` — the registry is reachable with the credential `securechain auth login` wrote. `npm whoami` succeeding (it prints a service identity, not your account name) confirms the credential is accepted. A `403 Forbidden` on every request means the credential is missing or revoked: run `securechain auth login` again, which writes it anew.

* **`EINTEGRITY` checksum mismatch during install**

   A lockfile entry still carries the hash of the public tarball while the TuxCare build of that version legitimately differs from it. Run `securechain harden`: it repairs the entries of the packages your subscription rebuilds and verifies the install. If the mismatch stays, `securechain harden --reresolve` resolves the whole tree again instead of repairing entries one by one.

* **`ETARGET` / `No matching version found` for a `-tuxcare` version**

   The requested build is not in your subscription, or an override names a build the registry does not serve. `securechain check` lists what the catalogue publishes for the tree; `npm view <package> versions` shows exactly what your credential can install.

* **`securechain harden` exits 6**

   The installed tree did not change as planned and every file was restored. The message names the packages that did not land and why; the usual causes are an npm older than 10, which does not apply every override (upgrade with `npm install -g npm@10`), and a lockfile that another tool rewrote between the write and the install. Run the command again after the cause is fixed.

## What's Next?

<WhatsNext hide-title>

* ![](/images/bolt.webp) [SecureChain CLI](/securechain/cli/) — What the CLI does, and where its full documentation lives
* ![](/images/wrench.webp) [Managing the SecureChain repository](/securechain/managing-securechain-repository/) — Upgrade to a newer version
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/) — Vulnerability Exploitability eXchange feed

</WhatsNext>
