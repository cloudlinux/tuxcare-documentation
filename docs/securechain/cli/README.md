<!-- markdownlint-disable MD029 MD024 MD036 MD033 -->

# SecureChain Portal and CLI

:::tip Documentation
The complete documentation of the portal and the CLI — getting started, every page and command, CI setup, administration — is the **[SecureChain user guide](https://sc.tuxcare.cloud/guide)**. It is maintained together with the product and is the source of truth. This page is a short overview.
:::

SecureChain has two tools you work with. The **portal** is the web application where your organization has a private workspace. The **CLI** is the `securechain` command that runs on a developer machine and in CI. The CLI sends the dependencies of a project to the workspace, the portal shows what is vulnerable and what to fix first, and the CLI moves the project to the TuxCare builds.

## The Portal

Your workspace in the portal — for example `name.sc.tuxcare.cloud` — keeps the dependencies of every repository and container image you send, matches them with the advisory data and the TuxCare catalogue, and keeps the result current:

* **What do we ship?** Every scan is kept, so the dependencies of every repository, branch and image are in one place, with their changes from scan to scan.
* **What is vulnerable now?** The matching runs in the portal. When a new advisory comes out, every stored scan is checked again — you learn about a new finding without a new scan.
* **What first?** Grades, known-exploited findings, fix deadlines and the CRA clocks order the findings, and the fix plan names the TuxCare build that fixes each one.
* **Who does what?** Triage states, departments, roles, alerts by email, Slack and webhook, and the audit log make the work of a team visible.
* **How do programs get in?** Access tokens for the CLI and CI, the REST API for scripts and dashboards, and the MCP server for AI assistants.

Guide: **[The portal](https://sc.tuxcare.cloud/guide/portal)**.

## The CLI

`securechain` is one static binary for Linux, macOS and Windows (x86-64 and ARM64) that runs on a developer machine and in a CI job. It sends the dependencies of a project to your workspace — never the source code — fails a build on the findings your policy names, and moves a project to the TuxCare builds, including transitive dependencies, then verifies the result. Every writing command has `--dry-run`, and a run that cannot verify its result restores every file it changed.

Guide: **[Developer start](https://sc.tuxcare.cloud/guide/developer)**, **[CI start](https://sc.tuxcare.cloud/guide/ci)**, **[The CLI and CI](https://sc.tuxcare.cloud/guide/cli)**.

## What's Next?

<WhatsNext hide-title>

* ![](/images/bolt.webp) [SecureChain user guide](https://sc.tuxcare.cloud/guide) — The complete documentation of the portal and the CLI
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/) — Vulnerability Exploitability eXchange feed

</WhatsNext>
