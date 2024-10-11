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
apikey: FILLME
```

## Usage

The installer should have created an /etc/cron.d/tuxcare-radar file that will run every 4th hour, it will check if a scan has been run in the last 23 hours (`time-between-runs` in radar.yaml) and if not, it will run a scan.

If you need to manually run a scan instantly for any reason, you can run:

```text
su -s /bin/bash nobody -c "tuxcare-radar --config /etc/tuxcare-radar/radar.yaml"
```

Then visit [https://radar.tuxcare.com](https://radar.tuxcare.com/) to view the results.
