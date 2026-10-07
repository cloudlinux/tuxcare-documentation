<!-- markdownlint-disable MD029 MD024 MD036 MD033 -->

# SecureChain CLI

`securechain` is the command-line tool of SecureChain. It runs on a developer machine and in a CI job, sends the dependencies of a project to your workspace in the portal, fails a build on findings, and moves a project to the TuxCare builds.

One static binary with no runtime of its own, for Linux, macOS and Windows on x86-64 and ARM64.

:::tip Where the full documentation lives
This page is an overview. Every command, option, exit code, the CI setup and the configuration file are described in the **[SecureChain user guide](https://sc.tuxcare.cloud/guide/cli)**, which is maintained together with the product and is the source of truth for the CLI.
:::

## What the CLI Does

* **Sends your dependencies.** `securechain sca` reads the tree your package manager resolved — or a container image — and sends the list of packages and versions to your workspace. It never sends your source code. The portal matches the list with the advisory data and the TuxCare catalogue, and checks it again when a new advisory comes out.
* **Gates CI.** `securechain check` fails the build when a finding crosses the policy of your workspace, or when a TuxCare build with a fix exists and the project is not on it.
* **Moves a project to TuxCare builds.** `securechain harden` writes the right override for your package manager — `overrides`, `pnpm.overrides`, `resolutions` — so the patched build is installed wherever the package appears, including transitive dependencies, refreshes the lockfile entries that matter, reinstalls and **verifies** the result. A run that cannot verify its result rolls the project back.
* **Keeps it current.** `securechain update` moves a hardened project to the newer TuxCare builds as they are published.
* **Works in the dark.** The catalogue can be exported on a connected machine and imported on an isolated one, so the same commands work in an air-gapped network.

Every writing command has `--dry-run`, and the CLI never changes a file without saying what it changed.

## What's Next?

<WhatsNext hide-title>

* ![](/images/bolt.webp) [SecureChain user guide: the CLI and CI](https://sc.tuxcare.cloud/guide/cli) — The complete reference for every command
* ![](/images/eye.webp) [SecureChain Portal](/securechain/portal/) — Findings, triage, alerts and tokens
* ![](/images/wrench.webp) [Managing the SecureChain repository](/securechain/managing-securechain-repository/) — Upgrade to a newer version
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/) — Vulnerability Exploitability eXchange feed

</WhatsNext>
