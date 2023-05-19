import{_ as e,o as l,c as n,a as i}from"./app-d6b3729a.js";const a={},s=i(`<h1 id="延長ライフサイクルサポート" tabindex="-1"><a class="header-anchor" href="#延長ライフサイクルサポート" aria-hidden="true">#</a> 延長ライフサイクルサポート</h1><p>TuxCareの<a href="https://tuxcare.com/extended-lifecycle-support/" target="_blank" rel="noopener noreferrer">延長ライフサイクルサポート</a>（ELS）をご利用いただければ、オペレーティングシステムのライフサイクル終了後も引き続きLinuxサーバーを稼働できます。</p><p>他のバージョンのディストリビューションのサポートをご希望の場合は、SLA対象のサポートに他のパッケージを追加してください。ご不明な点がございましたら、<a href="https://tuxcare.com/faq/" target="_blank" rel="noopener noreferrer">FAQ欄</a>をお読みください。ご意見がございましたら、<a href="mailto:sales@cloudlinux.com">sales@tuxcare.com</a>までご連絡ください。</p><h3 id="サポート期間" tabindex="-1"><a class="header-anchor" href="#サポート期間" aria-hidden="true">#</a> サポート期間</h3><p>TuxCareは、EOL日から4年間延長ライフサイクルサポートを提供します。</p><table><thead><tr><th style="text-align:center;">ディストリビューション</th><th style="text-align:center;">EOL</th><th style="text-align:center;">ELS</th></tr></thead><tbody><tr><td style="text-align:center;">CentOS 6</td><td style="text-align:center;">2020年12月</td><td style="text-align:center;">2024年12月</td></tr><tr><td style="text-align:center;">Oracle Linux 6</td><td style="text-align:center;">2020年12月</td><td style="text-align:center;">2024年12月</td></tr><tr><td style="text-align:center;">Ubuntu 16.04</td><td style="text-align:center;">2021年4月</td><td style="text-align:center;">2025年4月</td></tr><tr><td style="text-align:center;">CentOS 8.4</td><td style="text-align:center;">2022年1月</td><td style="text-align:center;">2026年1月</td></tr><tr><td style="text-align:center;">CentOS 8.5</td><td style="text-align:center;">2022年1月</td><td style="text-align:center;">2026年1月</td></tr></tbody></table><h3 id="対応パッケージ" tabindex="-1"><a class="header-anchor" href="#対応パッケージ" aria-hidden="true">#</a> 対応パッケージ</h3><p>TuxCareは、カーネル、Apache、PHP、Glibc、OpenSSL、OpenSSH、Pythonパッケージを継続的にアップデートします。</p><h3 id="アップデート情報の入手方法" tabindex="-1"><a class="header-anchor" href="#アップデート情報の入手方法" aria-hidden="true">#</a> アップデート情報の入手方法</h3><p><a href="https://cve.tuxcare.com/" target="_blank" rel="noopener noreferrer">CVEダッシュボード</a>を使用して、アップデートを受信するように登録できます。CVEダッシュボードでは、各CVEに対する当社の進捗状況、CVEに関する情報、CVEの既知の悪用事例の詳細などに関する詳しい情報を確認できます。</p><p>ダッシュボードをより良く、より便利にするためのご意見がございましたら、<a href="mailto:sales@cloudlinux.com">sales@tuxcare.com</a>までご連絡ください。</p><p>また、<a href="https://blog.tuxcare.com/" target="_blank" rel="noopener noreferrer">TuxCareブログ</a>を購読して、パッチされた脆弱性の詳細な分析や、TuxCareチームのメンバーが作成したその他のサイバーセキュリティコンテンツを読むこともできます。</p><h3 id="elsへの移行" tabindex="-1"><a class="header-anchor" href="#elsへの移行" aria-hidden="true">#</a> ELSへの移行</h3><p>TuxCareの延長ライフサイクルサポートサービスでは、移行の必要がありません。新しいリポジトリ ファイルを追加するインストールスクリプトを実行するだけです。再起動は必要ありません。</p><h3 id="elsリポジトリのインストール方法" tabindex="-1"><a class="header-anchor" href="#elsリポジトリのインストール方法" aria-hidden="true">#</a> ELSリポジトリのインストール方法</h3><p>サーバーに延長ライフサイクルサポートリポジトリをインストールするには、インストールスクリプトをダウンロードして、キーを使用してスクリプトを実行するだけです。インストールスクリプトを実行すると、そのキーと一緒にCLNにサーバーが登録され、サーバーにPGPキーが追加され、ELSリポジトリが作成されます。</p><p>延長ライフサイクルサポートのご利用には、以下の宛先に対してTCP ポート443を開く必要があります。</p><ul><li>cln.cloudlinux.com</li><li>repo.cloudlinux.com</li></ul><h2 id="yumリポジトリのインストール手順" tabindex="-1"><a class="header-anchor" href="#yumリポジトリのインストール手順" aria-hidden="true">#</a> yumリポジトリのインストール手順</h2><h3 id="centos-6-els" tabindex="-1"><a class="header-anchor" href="#centos-6-els" aria-hidden="true">#</a> CentOS 6 ELS</h3><ol><li>インストールスクリプトをダウンロードします。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>キーを使用してインストールスクリプトを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、PGPキーがサーバーに追加され、クライアントがアップストリームリポジトリではなく、CentOSリポジトリを使用するように切り替わります。したがって、基本的に、base、updates、extras、centosplus、contrib、fasttrackリポジトリは、すべてミラー用に再構成されます。</p><ol start="3"><li>インストールが成功したことを確認します</li></ol><p>インストールが正常に完了したことを確認するには、以下のコマンドを実行します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[els@centos6 ~]# python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXX
Get dist name... centos
Check that repository isn&#39;t created... Ok
Check that repository isn&#39;t created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos6-els.repo... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos-els-release.repo... Ok
Install necessarily packages ([&#39;centos-els-release&#39;])... Ok
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oracle-linux-6-els" tabindex="-1"><a class="header-anchor" href="#oracle-linux-6-els" aria-hidden="true">#</a> Oracle Linux 6 ELS</h3><ol><li>インストールスクリプトをダウンロードします。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>キーを使用して、インストールスクリプトを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。</p><ol start="3"><li>インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[els@oraclelinux6 ~]# python install-oraclelinux-els-repo.py --license-key XXXX-XXXXXXX
Check that repository isn&#39;t created... Ok
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-16-04-els" tabindex="-1"><a class="header-anchor" href="#ubuntu-16-04-els" aria-hidden="true">#</a> Ubuntu 16.04 ELS</h3><ol><li>インストールスクリプトをダウンロードします。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu-els-repo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>キーを使用して、インストールスクリプトを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python install-ubuntu-els-repo.py --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。</p><ol start="3"><li>インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-cache show els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[els@ubuntu16 ~]# python install-ubuntu-els-repo.py --license-key XXXX-XXXXXXXXX
Get dist name... Ubuntu
Check that repository isn&#39;t created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Save repo file to /etc/apt/sources.list.d/ubuntu-els.list... Ok
Add Cloudlinux gpg key to apt... Ok
Cleaning repository cache... Ok


[els@ubuntu16 ~]# apt-cache show els-define
Package: els-define
Version: 1-1.0.1
Architecture: amd64
Maintainer: Darya Malyavkina &lt;dmalyavkina@cloudlinux.com&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="centos-8-els" tabindex="-1"><a class="header-anchor" href="#centos-8-els" aria-hidden="true">#</a> CentOS 8 ELS</h3><ol><li>インストールスクリプトをダウンロードします。</li></ol><ul><li>CentOS 8.4の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/el8-els/centos8.4-els/install-centos8.4-els-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CentOS 8.5の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/el8-els/centos8.5-els/install-centos8.5-els-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>キーを使用して、インストールスクリプトを実行します。</li></ol><ul><li>CentOS 8.4の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-centos8.4-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CentOS 8.5の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>インストールスクリプトを実行すると、そのキーと共にCLNにサーバーが登録され、サーバーにPGPキーが追加されます。</p><ol start="3"><li>インストールが成功したことを確認します。インストールが正常に完了したことを確認するには、以下のコマンドを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>このコマンドを実行すると、利用可能なパッケージの情報が返されるはずです。パッケージに関する情報を閲覧できれば、インストール成功と考えて間違いありません。この後、通常のyum upgradeコマンドを使用して、リポジトリからアップデートをインストールできるようになります。</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[els@centos8_5 ~]#  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXX
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elsアップデートのローカルミラーのインストールに関する説明" tabindex="-1"><a class="header-anchor" href="#elsアップデートのローカルミラーのインストールに関する説明" aria-hidden="true">#</a> ELSアップデートのローカルミラーのインストールに関する説明</h2><p>延長ライフサイクルサポートのアップデートのローカルミラーを作成する機能を提供しています。</p><p>ローカルミラーリングへのアクセスを取得するには、外部IPアドレスをアカウントマネージャーに提供するか<a href="mailto:sales@cloudlinux.com">sales@tuxcare.com</a>に送信してください。rsync経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のいずれかを使用する必要があります。</p><h3 id="centos-6-els-1" tabindex="-1"><a class="header-anchor" href="#centos-6-els-1" aria-hidden="true">#</a> CentOS 6 ELS</h3><p>centos6-elsセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/CENTOS6ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CentOS 6のローカルミラーを作成するには、以下を使用します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/CENTOS6/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oracle-linux-6-els-1" tabindex="-1"><a class="header-anchor" href="#oracle-linux-6-els-1" aria-hidden="true">#</a> Oracle Linux 6 ELS</h3><p><code>rsync</code>経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/ORALINUX6ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ubuntu-16-04-els-1" tabindex="-1"><a class="header-anchor" href="#ubuntu-16-04-els-1" aria-hidden="true">#</a> Ubuntu 16.04 ELS</h3><p><code>rsync</code>経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/UBUNTU1604ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="centos-8-els-1" tabindex="-1"><a class="header-anchor" href="#centos-8-els-1" aria-hidden="true">#</a> CentOS 8 ELS</h3><p><code>rsync</code>経由でセキュリティアップデートのリポジトリのローカルミラーを作成するには、以下のコマンドを使用します。</p><ul><li>CentOS 8.4の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/CENTOS84_ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CentOS 8.5の場合、</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/CENTOS85_ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ovalデータ" tabindex="-1"><a class="header-anchor" href="#ovalデータ" aria-hidden="true">#</a> #OVALデータ</h2><h3 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h3><p>この欄には、パートナーアプリケーションに統合するのに使用できるTuxCare ELS OVALストリームに関する情報が含まれています。</p><p>現在、以下の製品のOVALデータを提供しています。</p><ul><li>CentOS 6 ELS</li><li>Oracle Linux 6 ELS</li><li>CentOS 8 ELS</li><li>Ubuntu 16.04</li></ul><h3 id="tuxcare-els-ovalストリーム" tabindex="-1"><a class="header-anchor" href="#tuxcare-els-ovalストリーム" aria-hidden="true">#</a> TuxCare ELS OVALストリーム</h3><ul><li>CentOS 6: <a href="https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml</a></li><li>Oracle Linux 6: <a href="https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml</a></li><li>CentOS 8.4: <a href="https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml</a></li><li>CentOS 8.5: <a href="https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml</a></li><li>Ubuntu 16.04: <a href="https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml</a></li></ul><h3 id="elsでovalを使用する方法" tabindex="-1"><a class="header-anchor" href="#elsでovalを使用する方法" aria-hidden="true">#</a> ELSでOVALを使用する方法</h3><h4 id="centos-6、8、oracle-linux-6の場合" tabindex="-1"><a class="header-anchor" href="#centos-6、8、oracle-linux-6の場合" aria-hidden="true">#</a> CentOS 6、8、Oracle Linux 6の場合</h4><p>OVALを使用するには、システムがELSとして定義されていることを確認してください。</p><ol><li>以下のコマンドを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ rpm -qi els-define centos-els-release | grep -o &quot;8c55a6628608cb71&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>コマンドの結果が<code>8c55a6628608cb71</code>の場合、ご利用のシステムはELSとして定義されていますので、OVALを使用できます。</p><ol start="2"><li>それ以外の場合は、以下のコマンドを使用して、<code>els-define</code>パッケージをインストールする必要があります。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ yum install els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ubuntu-16-04の場合" tabindex="-1"><a class="header-anchor" href="#ubuntu-16-04の場合" aria-hidden="true">#</a> Ubuntu 16.04の場合</h4><p>OVALを使用するには、システムがELSとして定義されていることを確認してください。</p><ol><li>以下のコマンドを実行します。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ apt list els-define | grep -o &quot;installed&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>コマンドの結果が<code>installed</code>の場合、ご利用のシステムはELSとして定義されていますので、OVALを使用できます。</p><ol start="2"><li>それ以外の場合は、以下のコマンドを使用して、<code>els-define</code>パッケージをインストールする必要があります。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ apt-get install els-define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,122),d=[s];function t(r,c){return l(),n("div",null,d)}const o=e(a,[["render",t],["__file","index.html.vue"]]);export{o as default};
