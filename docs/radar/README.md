# TuxCare Radar

This guide describes [TuxCare Radar](https://tuxcare.com/radar/) and how to install and use it.

## What is TuxCare Radar?

TuxCare Radar is an intelligent vulnerability scanner for Linux systems, fully integrated with TuxCare's live patching and ELS technologies. It swiftly uncovers vulnerabilities and ensures their effective prioritization using a unique algorithm that assesses the risk to your company based on a comprehensive set of risk factors.

## Installation

First you need to install our repository configuration:

RPM-based distributions (AlmaLinux, RHEL etc):

```text
cat > /etc/yum.repos.d/tuxcare-radar.repo <<EOL
[tuxcare-radar]
name=TuxCare Radar
baseurl=https://repo.tuxcare.com/radar/\$releasever/\$basearch/
enabled=1
gpgcheck=1
skip_if_unavailable=1
gpgkey=https://repo.tuxcare.com/radar/RPM-GPG-KEY-TuxCare
EOL
```

APT-based distributions (Debian, Ubuntu etc):

```text
curl -s https://repo.tuxcare.com/radar/tuxcare.gpg -o /usr/share/keyrings/tuxcare.gpg

source /etc/os-release

printf '%s' \
  "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/tuxcare.gpg] " \
  "https://repo.tuxcare.com/radar/$ID/$VERSION_ID " \
  "stable main" > /etc/apt/sources.list.d/tuxcare-radar.list
```

You should now be able to install Radar as simply as running one of the following:

RPM-based distributions (AlmaLinux, RHEL etc):

```text
yum install tuxcare-radar
```

APT-based distributions (Debian, Ubuntu etc):

```text
apt-get update
apt-get install tuxcare-radar
```

:::warning
If you do an in-place upgrade of your APT-based OS, you should change the version number in `/etc/apt/sources.list.d/tuxcare-radar.list` beforehand.
:::

## Configuration

You should have received your initial API key (something like `bc061b2b-c330-49f6-8953-849637d593ac`) along with your password.

You will need to edit /etc/tuxcare-radar/radar.yaml on each server you wish to scan using Radar and insert your API key. In most instances we would recommend doing this via a centralised config-management tool such as Ansible or Puppet, but you could of course use `vim` or `sed` on the server itself, for example:

```text
sed -i 's/apikey:.*/apikey: bc061b2b-c330-49f6-8953-849637d593ac/' /etc/tuxcare-radar/radar.yaml
```

By default the file will look like this, where `FILLME` should be replaced with your API key:

```text
base-url: https://radar.tuxcare.com
logfile: /var/log/tuxcare-radar/radar.log
statefile: /var/cache/tuxcare-radar/radar.json
time-between-runs: 23h
enabled: true
apikey: FILLME
```

If you are registered to the EU instance instead of the default US one, you should also change the `base-url` like so:

```text
base-url: https://eu.radar.tuxcare.com
```

## Tagging

Tags are a powerful feature that let you easily identify and filter hosts based on tags. You can create tags to describe your environment, for example `prod`, `dev`, `staging` or the TuxCare products such as `esu`, `esa`, `kce`, or maybe location, such as `eu`, `us`, `apac`. To use tags, simply add them to /etc/tuxcare-radar/radar.yaml like so:

```text
tags: esu,prod,us-east-1
```

The next time a scan is run, the tags will appear in the asset overview.

## Firewall and Proxy Settings

TuxCare Radar requires outbound connectivity on tcp/443 (TLS) to `radar.tuxcare.com` (default US instance) or `eu.radar.tuxcare.com` (EU instance). IPv6 or IPv4 can be used. No inbound connectivity is required, tuxcare-radar does not open any listening ports.

To use via a proxy, set the `https_proxy` environment variable based on your infrastructure. For running the service from cron, you can use this:

```text
echo "https_proxy=http://proxy.domain.com:port" >> /etc/environment
```

For running manually, you may need to set it in the user profile like so (or simply via the CLI):

```text
echo "export https_proxy=http://proxy.domain.com:port" > /etc/profile.d/proxy.sh
```

## Proxying via ePortal

If you are an [ePortal](/eportal) user, you can proxy Radar via ePortal instead of configuring a dedicated proxy as above.

In /etc/tuxcare-radar/radar.yaml change the `base-url` to point to your eportal server with a trailing `/radar`, for example:

```text
#base-url: https://radar.tuxcare.com
base-url: https://eportal.example.com/radar
```

Then on your ePortal server, update /etc/eportal/config with the following:

```text
RADAR_PROXY_ENABLE = True
```

If you are registered to the EU instance instead of the default US one, you should also add the following (remove/comment the line to revert to the US instance):

```text
RADAR_PROXY_BASEURL = 'https://eu.radar.tuxcare.com'
```

Then restart ePortal:

```text
systemctl restart eportal
```

When it is working, you will see messages like the following, mentioning the ePortal URL in /var/log/tuxcare-radar/radar.log on your TuxCare Radar client:

```text
radar INFO: fetching oval file from https://eportal.example.com/radar/oval/alma/9.5?fips=false&oval=0
radar INFO: fetching oval file from https://eportal.example.com/radar/oval/alma/9.5?fips=false&oval=1
radar INFO: sending output to https://eportal.example.com/radar
```

## Usage

The installer should have created an /etc/cron.d/tuxcare-radar file that will run from a randomized time every 6 hours, it will check if a scan has been run in the last 23 hours (`time-between-runs` in radar.yaml) and if not, it will run a scan.

If you need to manually run a scan instantly for any reason, you can run:

```text
su -s /bin/bash nobody -c "tuxcare-radar --config /etc/tuxcare-radar/radar.yaml"
```

If you would like to run a CIS benchmark compliance scan, you can run the following as root:

```text
tuxcare-radar securescan --config /etc/tuxcare-radar/radar.yaml
```

Then visit [https://radar.tuxcare.com](https://radar.tuxcare.com/) (US) or [https://eu.radar.tuxcare.com](https://eu.radar.tuxcare.com/) (EU) to view the results.
