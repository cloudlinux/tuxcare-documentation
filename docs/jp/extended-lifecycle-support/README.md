# 延長ライフサイクルサポート

TuxCareの[延長ライフサイクルサポート](https://tuxcare.com/extended-lifecycle-support/)（ELS）をご利用いただければ、オペレーティングシステムのライフサイクル終了後も引き続きLinuxサーバーを稼働できます。

他のバージョンのディストリビューションのサポートをご希望の場合は、SLA対象のサポートに他のパッケージを追加してください。ご不明な点がございましたら、[FAQ欄](https://tuxcare.com/faq/)をお読みください。ご意見がございましたら、[sales@tuxcare.com](mailto:sales@cloudlinux.com)までご連絡ください。

### サポート期間

TuxCareは、EOL日から4年間延長ライフサイクルサポートを提供します。

|ディストリビューション   | EOL           | ELS          |
| :---:         | :----:        | :---:        |
| CentOS 6      | 2020年12月 | 2024年12月|
| Oracle Linux 6 | 2020年12月 | 2024年12月|
| Ubuntu 16.04  | 2021年4月   |  2025年4月   |
| CentOS 8.4    | 2022年1月  | 2026年1月 |
| CentOS 8.5    | 2022年1月  | 2026年1月 |


### 対応パッケージ

TuxCareは、カーネル、Apache、PHP、Glibc、OpenSSL、OpenSSH、Pythonパッケージを継続的にアップデートします。

### アップデート情報の入手方法

[CVEダッシュボード](https://cve.tuxcare.com/)を使用して、アップデートを受信するように登録できます。CVEダッシュボードでは、各CVEに対する当社の進捗状況、CVEに関する情報、CVEの既知の悪用事例の詳細などに関する詳しい情報を確認できます。

ダッシュボードをより良く、より便利にするためのご意見がございましたら、[sales@tuxcare.com](mailto:sales@cloudlinux.com)までご連絡ください。

また、[TuxCareブログ](https://blog.tuxcare.com/)を購読して、パッチされた脆弱性の詳細な分析や、TuxCareチームのメンバーが作成したその他のサイバーセキュリティコンテンツを読むこともできます。

### ELSへの移行

TuxCareの延長ライフサイクルサポートサービスでは、移行の必要がありません。新しいリポジトリ ファイルを追加するインストールスクリプトを実行するだけです。再起動は必要ありません。

### ELSリポジトリのインストール方法

サーバーに延長ライフサイクルサポートリポジトリをインストールするには、インストールスクリプトをダウンロードして、キーを使用してスクリプトを実行するだけです。インストールスクリプトを実行すると、そのキーと一緒にCLNにサーバーが登録され、サーバーにPGPキーが追加され、ELSリポジトリが作成されます。

延長ライフサイクルサポートのご利用には、以下の宛先に対してTCP ポート443を開く必要があります。

* cln.cloudlinux.com
* repo.cloudlinux.com

## yumリポジトリのインストール手順

### CentOS 6 ELS

1. インストールスクリプトをダウンロードします。

```
wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py
```

2. キーを使用してインストールスクリプトを実行します。

```
python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、PGPキーがサーバーに追加され、クライアントがアップストリームリポジトリではなく、CentOSリポジトリを使用するように切り替わります。したがって、基本的に、base、updates、extras、centosplus、contrib、fasttrackリポジトリは、すべてミラー用に再構成されます。

3. インストールが成功したことを確認します

インストールが正常に完了したことを確認するには、以下のコマンドを実行します。

```
yum info els-define
```

このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。

例：

```
[els@centos6 ~]# python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXX
Get dist name... centos
Check that repository isn't created... Ok
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos6-els.repo... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos-els-release.repo... Ok
Install necessarily packages (['centos-els-release'])... Ok
Removing repo file /etc/yum.repos.d/centos-els-release.repo... Ok

[els@centos6 ~]# yum info els-define

Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.6 k
Repo        : centos6-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release file
```

### Oracle Linux 6 ELS

1. インストールスクリプトをダウンロードします。

```
wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
```

2. キーを使用して、インストールスクリプトを実行します。

```
python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。

3. インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。   

```
yum info els-define
```

このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。

例：

```
[els@oraclelinux6 ~]# python install-oraclelinux-els-repo.py --license-key XXXX-XXXXXXX
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/oraclelinux-els.repo... Ok
Save GPG key to /etc/pki/rpm-gpg/RPM-GPG-KEY-CloudLinux... Ok
Import Cloudlinux GPG... 



[els@oraclelinux6 ~]# yum info els-define

Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.7 k
Repo        : oraclelinux-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release files
```


### Ubuntu 16.04 ELS

1. インストールスクリプトをダウンロードします。

```
wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu-els-repo.py
```

2. キーを使用して、インストールスクリプトを実行します。

```
python install-ubuntu-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。


3. インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。

```
apt-cache show els-define
```

このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。

例：

```
[els@ubuntu16 ~]# python install-ubuntu-els-repo.py --license-key XXXX-XXXXXXXXX
Get dist name... Ubuntu
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Save repo file to /etc/apt/sources.list.d/ubuntu-els.list... Ok
Add Cloudlinux gpg key to apt... Ok
Cleaning repository cache... Ok


[els@ubuntu16 ~]# apt-cache show els-define
Package: els-define
Version: 1-1.0.1
Architecture: amd64
Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
Installed-Size: 10
Homepage: https://tuxcare.com/extended-lifecycle-support/
Priority: optional
Section: utils
Filename: pool/main/e/els-define/els-define_1-1.0.1_amd64.deb
Size: 1302
SHA256: a6b68c43c88a148ecc4806d0b4eb309deb5af418c8e1d0ea980fd453f5aec8dd
SHA1: 4907b9796c40327dbd45ecf2fd0806a32e2c24bd
MD5sum: 42f69c642c27052b15e4470533fdab62
Description: ELS define package for Ubuntu 16.04
Description-md5: 39e3bb446b4c63607f8f0358484545bf
```

### CentOS 8 ELS

1. インストールスクリプトをダウンロードします。

  * CentOS 8.4の場合、
  
  ```
  wget https://repo.cloudlinux.com/el8-els/centos8.4-els/install-centos8.4-els-repo.sh
  ```

  * CentOS 8.5の場合、

  ```
  wget https://repo.cloudlinux.com/el8-els/centos8.5-els/install-centos8.5-els-repo.sh
  ```

2. キーを使用して、インストールスクリプトを実行します。

  * CentOS 8.4の場合、

  ```
  sh install-centos8.4-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```
  
  * CentOS 8.5の場合、

  ```
  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```
  
  インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。

3. インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。

```
yum info els-define
```

このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。

例：

```
[els@centos8_5 ~]#  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXX
This server is not CentOS Linux release 8.5


[els@centos8_5 ~]# yum info els-define

Available Packages
Name         : els-define
Version      : 1
Release      : 1.0.3.el8
Architecture : x86_64
Size         : 7.0 k
Source       : els-define-1-1.0.3.el8.src.rpm
Repository   : centos8.5-els
Summary      : CentOS Server els-release file
License      : GPLv2
Description  : CentOS Server els-release file
```

## ELSアップデートのローカルミラーのインストールに関する説明

延長ライフサイクルサポートのアップデートのローカルミラーを作成する機能を提供しています。

ローカルミラーリングへのアクセスを取得するには、外部IPアドレスをアカウントマネージャーに提供するか[sales@tuxcare.com](mailto:sales@cloudlinux.com)に送信してください。rsync経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のいずれかを使用する必要があります。

### CentOS 6 ELS

centos6-elsセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。

```
rsync://repo.cloudlinux.com/CENTOS6ELS/
```

CentOS 6のローカルミラーを作成するには、以下を使用します。

```
rsync://repo.cloudlinux.com/CENTOS6/
```

例えば、

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
```

### Oracle Linux 6 ELS

`rsync`経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

例えば、

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

### Ubuntu 16.04 ELS

`rsync`経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

例えば、

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

### CentOS 8 ELS

`rsync`経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。

* CentOS 8.4の場合、

```
rsync://repo.cloudlinux.com/CENTOS84_ELS/
```

例えば、

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .
```

* CentOS 8.5の場合、

```
rsync://repo.cloudlinux.com/CENTOS85_ELS/
```

例えば、

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .
```

## #OVALデータ

### 概要

この欄には、パートナーアプリケーションに統合するのに使用できるTuxCare ELS OVALストリームに関する情報が含まれています。

現在、以下の製品のOVALデータを提供しています。

* CentOS 6 ELS
* Oracle Linux 6 ELS
* CentOS 8 ELS
* Ubuntu 16.04


### TuxCare ELS OVALストリーム

* CentOS 6: [https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml](https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml)
* Oracle Linux 6: [https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml](https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml)
* CentOS 8.4: [https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml](https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml)
* CentOS 8.5: [https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml](https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml)
* Ubuntu 16.04: [https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml](https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml)

### ELSでOVALを使用する方法

#### CentOS 6、8、Oracle Linux 6の場合
 
OVALを使用するには、システムがELSとして定義されていることを確認してください。

1. 以下のコマンドを実行します。

```
$ rpm -qi els-define centos-els-release | grep -o "8c55a6628608cb71"
```

コマンドの結果が`8c55a6628608cb71`の場合、ご利用のシステムはELSとして定義されていますので、OVALを使用できます。
 
2. それ以外の場合は、以下のコマンドを使用して、`els-define`パッケージをインストールする必要があります。

```
$ yum install els-define
```


#### Ubuntu 16.04の場合

OVALを使用するには、システムがELSとして定義されていることを確認してください。

1. 以下のコマンドを実行します。

```
$ apt list els-define | grep -o "installed"
```

コマンドの結果が`installed`の場合、ご利用のシステムはELSとして定義されていますので、OVALを使用できます。
 
2. それ以外の場合は、以下のコマンドを使用して、`els-define`パッケージをインストールする必要があります。

```
$ apt-get install els-define
```
