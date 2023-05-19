# ライブパッチ適用サービス

ライブパッチ適用サービスの一環として、TuxCareは以下のサービスを提供します。

* KernelCare Enterprise
* LibCare
* KernelCare for IOT
* QEMUCare
* DBCare（ベータ版で利用可能）


## KernelCare Enterprise

### 概要

KernelCare Enterpriseは、さまざまな人気のLinuxカーネルに、システムを再起動することなしにインストール可能なセキュリティパッチとバグ修正を提供するライブカーネルパッチ適用サービスです。

### メリット

現在、システム管理者は、最新のカーネルアップデートを適用するのに、サーバーを再起動する必要があります。このアップデートは、セキュリティ上の問題を防ぐために必要です。ただし、再起動に伴うダウンタイムのせいで、このようなアップデートは遅れがちで、深夜の時間帯になりがちです。ダウンタイムを回避するために、サーバーの所有者が数ヶ月、数年もシステムをアップデートせずに、脆弱なシステムを実行し続けることはめずらしいことではありません。マネージドサービスプロバイダは、ダウンタイムを計画し、リソースを圧迫しながら短時間に数千台のサーバーのアップデートと再起動をする問題に直面しています。KernelCareは、再起動不要のライブカーネルパッチ適用サービスを提供することで、このアップデートと再起動の問題を解決します。

### 主な機能

* 再起動不要のLinuxカーネルパッチ適用とカスタムパッチ適用
* オンプレミスでも、クラウドでも利用可能
* 保護されたインフラストラクチャ用のプライベートパッチサーバー、ePortal
* 追加設定不要で、パッチ管理・脆弱性評価ツールと統合

### 試用ライセンスの取得

KernelCare Enterpriseのご利用には、試用版アクティベーションキーが必要です。試用ライセンスは7日間有効です。

アクティベーションキーの取得に問題がある場合や試用版の使用に関してご不明点がある場合は、[sales@cloudlinux.com](mailto:sales@cloudlinux.com) までご連絡ください。私たちがお助けします。

### インストール

KernelCare Enterpriseは、64ビット版のAlmaLinux/CloudLinuxOS/CentOS/RHEL 6、7、8、Oracle Linux 6、7、Amazon Linux 1、2、Virtuozzo／PCS／OpenVZ 2.6.32、Debian 8、9、10、Proxmox VE 5 、6、Virt-SIG／Xen 4CentOS 6、7、Ubuntu 14.04、15.04、16.04、18.04、20.04カーネルと互換性があります。互換性のあるカーネル一覧は、[https://patches.kernelcare.com/](https://patches.kernelcare.com/) からご覧いただけます。

KernelCare Enterpriseをインストールするには、以下を実行します。

```
curl -s -L https://kernelcare.com/installer | bash
```

または

```
wget -qq -O - https://kernelcare.com/installer | bash
```

IPベースのライセンスをご利用の場合は、他に何もする必要はありません。

キーベースのライセンスをご利用の場合は、以下を実行します。

```
$ /usr/bin/kcarectl --register KEY
```

`KEY`は、製品の購入または試用の申し込みの際に提供された登録キー文字列です。

もし試用期間終了後に**_Key limit reached_**というエラーが発生している場合は、まず以下のコマンドを実行して、サーバーの登録を解除する必要があります。

```
kcarectl --unregister
```

パッチが適用済みかどうかを確認するには、以下を実行します。

```
$ /usr/bin/kcarectl --info
```

ソフトウェアは、4時間ごとに新しいパッチを自動的に確認します。

アップデートを手動で実行する場合

```
$ /usr/bin/kcarectl --update
```

現在のカーネルとKernelCareの互換性を確認するには、以下の[スクリプト](https://raw.githubusercontent.com/iseletsk/kernelchecker/master/py/kc-compat.py)を実行します。

```
curl -s -L https://kernelcare.com/checker | python
```

または

```
wget -qq -O - https://kernelcare.com/checker | python
```

### アップデート 

エージェントパッケージを最新バージョンにアップデートするには、以下を使用します。

* rpmベースのディストリビューション（CentOS、RedHatなど）の場合

```
yum install -y kernelcare
```

* aptベースのディストリビューション（Debian、Ubuntuなど）の場合

```
apt-get install kernelcare
```

### アンインストール


KernelCare Enterpriseをアンインストールするには、以下を実行します。

_CloudLinux、CentOS、RHEL、Virtuozzo、OpenVZの場合_

```
$ yum remove kernelcare
```

_Ubuntu、Debian、Proxmox VEの場合_

```
apt-get remove kernelcare
```
```
dpkg --remove kernelcare
```

また、これにより、システムはアクティベーションキーとのリンクが解除されます（CLNポータルへのネットワーク接続がある場合）。ただし、今後サービスの利用予定がない場合は、CLNポータルから手動でライセンスを削除する必要があります。


### Kspliceからの切り替え

KspliceからKernelCare Enterpriseに切り替えるには、以下のスクリプトを使用してください。Kspliceがアンインストールされ、代わりにKernelCare Enterpriseがインストールされます。

システムが64ビットでない場合は、自動的に検出され、中止されます（KernelCare Enterpriseは64ビットではないシステムをサポートしていません）。

Kspliceモジュールをアンインストールできない場合も検出され、複数回再試行されます。

こちらからスクリプトをダウンロードしてください。 [https://patches.kernelcare.com/ksplice2kcare](https://patches.kernelcare.com/ksplice2kcare).

以下のコマンドを実行します。

```
$ bash ksplice2kcare $KERNELCARE_KEY$
```

キーは、CLNの「KernelCare Enterprise Keys」欄で作成／取得できます。

IPベースのライセンスの使用をご希望の場合は、以下を実行します。

```
$ bash ksplice2kcare IP
```

そのサーバー用のIPライセンスを追加する必要があります。実際のIPではなく、「IP」という2文字のみを入力してください。

デフォルトでは、スクリプトはKspliceのアンインストールを3回試行します。試行間の待機時間は60秒です。待機をご希望でない場合は、nohupを使用して実行できます。

スクリプトを編集して、`RETRY`と`SLEEP`の値を変更することで、試行回数と待機時間を変更することができます。

成功すると、スクリプトは終了コード`0`を返し、_Done_というメッセージが表示されます。それ以外の場合は、終了コード`-1`が返されます。

完全なログ ファイルは、`/var/log/ksplice2kcare.log` にあります。

#### Canonical Livepatch

KernelCare Enterpriseは、Canonical Livepatchとは互換性がありません。同じシステムで使用しないでください。

### 基本管理


自動アップデートを無効にするには、ファイル`/etc/sysconfig/kcare/kcare.conf`を編集してください。

```
AUTO_UPDATE=False 
```

アップデート済みの（「有効な」）バージョンを確認するには、以下を実行します。

```
$ /usr/bin/kcarectl --uname 
```

`uname`と同じ構文の便利スクリプト`/usr/bin/kcare-uname` を提供しています。

適用済みのパッチを表示するには、以下を実行します。

```
$ /usr/bin/kcarectl --patch-info 
```


### コマンドラインツール


`/usr/bin/kcarectl` - ご利用のカーネル用のKernelCare Enterpriseパッチを管理します。

`/usr/bin/kcare-uname` - 特定のシステム情報を出力します。

#### kcarectl

| | |
|-|-|
|`-i, --info` | KernelCare Enterpriseによってインストールされたパッチに関する情報を表示します。|
|`-u, --update ` | 最新のパッチをダウンロードして、現在のカーネルに適用します。|
|`--smart-update  [since 1.6] ` | --updateと同じですが、[UPDATE_POLICY](/jp/live-patching-services/#config-options)を使用して、パッチの入手先を決定します。|
|`--unload` | パッチをアンロードします。|
|`--auto-update` | アップデートが必要かどうかを確認し、アップデートします。|
|`--patch-info` | 適用済みのパッチを一覧表示します。|
|`--force  [since 2.3] ` | updateと共に使用すると、フリーズできないスレッドがある場合でも、強制的にパッチを適用します。|
|`--uname` | 安全なカーネルバージョンを出力します。|
|`--license-info` | 現在のライセンス情報を出力します。|
|`--register KEY` | KernelCare Enterprise Keyを使用して登録します。|
|`--register-autoretry [since 2.5]` | 登録が失敗した場合、無期限に再試行を行います。|
|`--unregister` | キーベースのサーバー用KernelCare Enterpriseから登録解除します。|
|`--userspace-update [PATCHES]` | 最新のパッチをダウンロードして、対応するユーザー空間プロセスに適用します。特定の種類のパッチのみが適用されるように設定できます。|
|`--test` | 本番ビルドの代わりにテストビルドを試行します（非推奨、代わりに--prefix=testを使用してください）。|
|`--prefix` | プレフィックスに基づいて、異なる場所からビルドをダウンロードすることにより、さまざまなビルドをテストするのに使用されるパッチソース用プレフィックス（バージョン2.2以上）|
|`--version` | KernelCare Enterpriseのバージョンを出力します。|
|`--import-key PATH` | gpgキーをインポートします。|
|`--set-monitoring-key` | IPベースのライセンスの監視キーを設定します。16文字以上32 文字以内、英数字のみ（バージョン2.1以上）|
|`--freezer  [since 2.3] ` | none：どのスレッドもフリーズしません。<br>full：すべてのスレッドをフリーズします。<br>smart：パッチ適用のためにフリーズする必要があるスレッドのみをフリーズします。オプションが選択されていない場合、最適なフリーズ方法が自動的に選択されます。|
|`--check [since 2.4-1]` | 新しいパッチセットが利用可能かどうかをアップデートすることなしに確認します。終了コードは、新しいカーネルがある場合は0、ない場合は1になります。|
|`--doctor [since 2.6]` | 診断のためにTuxCareサポートスタッフにレポートを送信します。|
|`--set-patch-type extra ` | 追加のパッチを有効にします。|
|`--set-patch-type free` | 無料パッチを有効にします。|
|`--set-sticky-patch SET_STICKY_PATCH` | パッチをDDMMYY形式の日付に固定するように設定するか、KEYに日付が設定されている場合はKEYから取得します（ePortalはサポートされていません）。固定しない場合は、空にしてください。詳細は、[Stickyパッチ](/jp/live-patching-services/#sticky-patches)を参照してください。|
|`--tag COMMAND` | サーバー用のその他の_Tag_フィールドを追加します。 COMMANDはユーザー定義のパラメータです。|

:::tip 注
現在利用可能なユーザースペースパッチタイプは、`libs`と`qemu`です。共有ライブラリのみにパッチを適用するには、`--userspace-update libs`を使用してください。
:::

#### kcare-uname


特定のシステム情報を出力します。オプションなしの場合は、`-s`と同じです。

| | |
|-|-|
|`-a, --all` | すべての情報を以下の順序で出力します。ただし、不明な場合は、`-p`と`-i`を省略します|
|`-s, --kernel-name` | カーネル名を出力します|
|`-n, --nodename` | ネットワークノードのホスト名を出力します|
|`-r, --kernel-release` | カーネルリリースを出力します|
|`-v, --kernel-version` | カーネルのバージョンを出力します|
|`-m, --machine` | マシンのハードウェア名を出力します|
|`-p, --processor` | プロセッサタイプ（不明な場合には`unknown`）を出力します|
|`-i, --hardware-platform` | ハードウェアプラットフォーム（不明な場合には`unknown`）を出力します|
|`-o, --operating-system` | オペレーティングシステムを出力します|
|`--help` | このヘルプを表示して終了します|
|`--version` | バージョン情報を出力して終了します|


#### kernelcare doctor

このツールは、KernelCare環境に関する重要な情報を収集し、サポートチームに送信します。

```
# kcarectl --doctor
Generating report...
Uploading...
Key: FRWf74Zw11111111.83991334-1111-1111-1111-681ddd653e5f
Please, provide above mentioned key to KernelCare Support Team

```

このコマンドはレポートを生成し、サポートチケットとリンク可能なIDを出力します。

:::tip 注
レポートのアップロード中に接続の問題が発生した場合、レポートは`/root/cl-report` としてローカルに保存されます。このファイルは、サポートチームに手動で送信する必要があります。
:::

### 設定オプション


`kcarectl`の動作は、`/etc/sysconfig/kcare/kcare.conf`を使用して設定することができます。

| | |
|-|-|
|`AUTO_UPDATE=YES|NO` | `YES` - 自動アップデートを有効にします。<br>`NO` - 自動アップデートを無効にします。|
|`chkconfig kcare off` | 再起動後の自動アップデートを無効にします。|
|`PATCH_METHOD=normal|nofreeze|smart` | `Normal` - フリーザーを使用します。（デフォルト）<br>`Nofreeze` - プロセスをフリーズするのに、フリーザーを使用しません。<br>`Smart` - スマートフリーザーが、パッチを適用するのにフリーズする必要があるスレッドのみフリーズします。（KernelCare 2.3以上）|
|`PATCH_SERVER` | パッチをダウンロードするのに使用するサーバー。|
|`REGISTRATION_URL` | ライセンスサーバー。|
|`PREFIX=prefix` | プレフィックスに基づいて、異なる場所からビルドをダウンロードすることにより、さまざまなビルドをテストするために使用されるパッチソースプレフィックス（バージョン2.2以上）|
|`UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [since 1.6] ` | サーバー起動ポリシーに応じて、以下を使用します。<br>`REMOTE` - パッチサーバーからパッチを適用します。（デフォルト）<br>`LOCAL` - ローカルにキャッシュされたパッチのみを適用します。キャッシュされたパッチが存在しない場合（キャッシュは自動的に行われます）は、何も行いません。<br>`LOCAL_FIRST` - ローカルにキャッシュされたパッチがあるかどうか確認し、ある場合にはロードし、ない場合にはリモートサーバーからパッチの取得を試みます。
|
|`IGNORE_UNKNOWN_KERNEL=True|False` `[since 2.5-4]` | 自動アップデート中のカーネルが不明な場合、通知を行いません。|
|`LOAD_KCARE_SYSCTL [since 2.7-1]` | パッチセットのロード時に`/etc/sysconfig/kcare/sysctl.conf`をロードするかどうかを制御します。デフォルトでは、Trueです。|
|`--set-patch-type extra` | 追加のパッチを有効にします。|
|`--set-patch-type free` | 無料パッチを有効にします。|
|`STICKY_PATCH=KEY` | `KEY`からStickyパッチを取得します（CLNのKey Editを参照してください）。 IPベースのサーバーやePortalではサポートされていません。|
|`STICKY_PATCH=DDMMYY` | 特定の日付をパッチ適用日に指定します。詳細については、[Sticky パッチ](/live-patching-services/#sticky-patches)を参照してください。|
|`REPORT_FQDN=True|False` | ホスト名として完全修飾ドメインの使用を強制します。デフォルトでは、Falseです。|
|`FORCE_GID=N`|このグループIDをシンボリックリンク保護パッチに使用します。デフォルトでは、48（デフォルトのApacheユーザーGID）または99（`nobody`ユーザー）です。|
|`USERSPACE_PATCHES=libs,qemu`| デフォルトでどのユーザー空間パッチが適用されるかを定義します|


### 一部パッチの無効化

一部のパッチは、システムの動作に影響を与える可能性があります。それらのパッチを無効化する方法を作成してあります。

これは、`sysctl`コマンドを通して行われます。

新しいパッチセットがロードされると、KernelCare Enterpriseのsysctlオプションがリセットされます。これを防止するために、以下のファイルを追加してあります。

`/etc/sysconfig/kcare/sysctl.conf`

このファイルのオプションは、新しいパッチセットがロードされる時に自動的にロードされます。

これらのオプションの読み込みを無効にするには、以下を見つけてください。

`/etc/sysconfig/kcare/kcare.conf`の`LOAD_KCARE_SYSCTL=0`

パッチを無効にするには、対応するkcareのオプションを1に設定します。

無効にできるパッチは、以下です。

| | |
|-|-|
|パッチ |sysctlオプション|
|CVE-2015-5157 | kcare_modify_ldt|


# 追加のパッチセット

::: tip 注
KernelCare Enterprise 2.12-5以降
:::

KernelCare Enterprise Extraパッチセットには、AlmaLinux、CentOS 6、CentOS 7、CentOS 8用KernelCare Enterpriseからすべてのセキュリティ修正と、CentOS 6用シンボリックリンク保護、IPSetバグ修正が含まれています。

追加のパッチを有効にして、パッチを適用するには、以下を実行します。

```
kcarectl --set-patch-type extra --update
```

アップデートせずに追加のパッチを有効にするには、以下を実行します。

```
kcarectl --set-patch-type extra
```

「追加の」パッチは、次の自動アップデートで適用されます。

詳細を見るには、以下を実行します。

```
kcarectl --patch-info
```

以下のような出力が表示されるはずです。

```
OS: centos6
kernel: kernel-2.6.32-696.6.3.el6
time: 2017-07-31 22:46:22
uname: 2.6.32-696.6.3.el6
 
kpatch-name: 2.6.32/symlink-protection.patch
kpatch-description: symlink protection // If you see this patch, it mean that you can enable symlink protection.
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/symlink-protection.kpatch-1.patch
kpatch-description: symlink protection (kpatch adaptation)
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/ipset-fix-list-shrinking.patch
kpatch-description: fix ipset list shrinking for no reason
kpatch-kernel: N/A
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://bugs.centos.org/view.php?id=13499
```

Symlink Owner Match Protectionを有効にするには、以下の行を追加します。

`fs.enforce_symlinksifowner=1`

を`/etc/sysconfig/kcare/sysctl.conf`へ。

そして、以下を実行してください。

```
sysctl -w fs.enforce_symlinksifowner=1
```


### Stickyパッチ

:::tip 注
この機能は、ePortalのお客様にはご利用いただけません。ePortalをご利用の場合は、代わりに[Feeds](/jp/eportal/#feed-management)を使用してください。
:::

最新のパッチの使用をご希望でない代わりに、インストールするパッチの制御をご希望の場合があります。たとえば、2018年5月25日にリリースされたパッチをテスト済みで、そのパッチをすべてのサーバーで使用したいとします。

これは、`/etc/sysconfig/kcare/kcare.conf`で`STICKY_PATCH=250518`（`DDMMYY`形式）と設定することで、実現できます。これにより、`kcarectl --update`または`kcarectl --auto-update`が呼びだされたときに、最新のパッチではなく、その日付からパッチが取得されることが保証されます。

`STICKY_PATCH`を使用すれば、60日前までさかのぼることができます。

また、代わりに`STICKY_PATCH=KEY`を設定することもできます。このようにして、CLNのKernelCareキーを使用して、どの日付からパッチが適用されるかを制御することができます。特定のサーバーを登録するのに使用されるキーにより、アップデート時にCLNから（キー設定から）実際の日付が取得されます（IPベースのサーバー向けはサポートされていません）。

これは、最初にパッチを検証環境でテストし、後でシステムを何も変更することなしに本番環境にロールアウトするのをご希望の場合に、非常に便利です。

手順は以下になります。

* すべてのサーバーで、`STICKY_PATCH=KEY`を設定します。
* 検証サーバーをあるKEYで登録し、本番サーバーを別のKEYで登録します。
* T次に、本番サーバーの新規のアップデートを停止します。CLNで`Sticky Tag`を`yesterday`に設定します。これは、CLNのKEYをDDMMYY形式で編集することで実現できます。
* ここで、たとえば、03052018（DDMMYY形式）時点のパッチを使用してみましょう。パッチを検証サーバーのキーに設定します。次回の自動アップデートで、検証サーバーはそのパッチを取得します（通常、自動アップデートは4時間ごとに行われます）。

このパッチに問題がない場合は、本番サーバーのキーに同じSticky Tagを設定します。4時間以内に、本番サーバーにも検証サーバーと同じパッチが適用されるはずです。

:::tip 注
過去60日以内の任意の日付を選択できます。今日の日付や未来の日付は選択できません。
:::


#### 適切なStickyパッチ名の見つけ方

適用をご希望のカーネルパッチがあるとします。必要なのは、そのパッチの適切なラベルを見つけることだけです。

![sticky-proper-label](/images/sticky-proper-label.png)

ご覧のとおり、パッチのリリース日は2020年09月16日です。ラベルの日付形式を適用すると、Stickyパッチの値の16092020になります。


### スキャナーインタフェース

#### 問題の説明

一般的に使用されているセキュリティスキャナーによって、KernelCare Enterpriseによってパッチが適用済みの場合も、CVEが検出される場合があります。 判明したところによると、CVEに関するすべての決定は、以下に基づいています。

* 現在インストールされている（または、されていない）カーネルパッケージ
* uname情報

#### 使用方法

使用方法は、かなり単純です。パッケージをインストールしてパッチセットを適用した後の新しいスキャン結果には、KernelCare Enterpriseによって処理済みのカーネルCVEは非表示になるべきです。

たとえば、古いカーネルに対して、Nessusは検出されたCVEを多数表示します。

![](/images/scanner-manipulation-before.png)

パッチ適用後には、カーネル関連のCVEはありません

![](/images/scanner-manipulation-after.png)


### UEFIセキュアブートのサポート


:::tip 注
この機能は、採用の初期段階にあります。すべてのディストリビューションにサポートされているわけではありません。
:::


この新機能により、KernelCareは、UEFIファームウェアでセキュアブートが設定されたシステムで動作します。KernelCareがモジュールの署名に使用するMOK（Machine Owner Keys）データベースに公開証明書を追加予定です。

最新のKernelCareパッケージには、公開証明書が含まれており、`/usr/libexec/kcare/kernelcare_pub.der`で入手できます。以前のバージョンの場合は、 [https://patches.kernelcare.com/kernelcare_pub.der](https://patches.kernelcare.com/kernelcare_pub.der) からその場所にダウンロードすることができます。

例えば、

``` bash
curl -o /usr/libexec/kcare/kernelcare_pub.der https://patches.kernelcare.com/kernelcare_pub.der

```


1. rootユーザーで`mokutil`を使用して、この新しいMOKをUEFIファームウェアに追加します。

```bash
$ mokutil --import /usr/libexec/kcare/kernelcare_pub.der
 input password:
 input password again:
```

MOKのパスワードはないので、`mokutil`によってパスワードを作成するように求められます。これは仮のパスワードで、次回の起動時に使用されます。

2. マシンを再起動して、MOKマネージャーEFIユーティリティに入ります。

  まず、「Enroll MOK」に移動します。

![alt text](/images/uefi-enroll-mok.png "Select Enroll MOK")

次に、ファームウェアにより、新しいMOKを閲覧するか続行するか選択を求められます。「Continue」を選択してください。

![alt text](/images/uefi-continue.png "Select Continue")

次に、登録の確認を求められます。

![alt text](/images/uefi-yes.png "Select Yes")

次に、`mokutil --import`の実行時に使用したパスワードを入力する必要があります。

![alt text](/images/uefi-password.png "Enter the password")

最後に、ファームウェアによって、再起動が要求されます。

![alt text](/images/uefi-ok.png  "Select OK")

3. 以下のコマンドの出力でキーを見つけて、キーがロードされたことを確認します。

``` bash
$ mokutil --list-enrolled | egrep -i 'SHA1|Issuer'

```

登録済みのキーが表示されない場合がありますが、以下のコマンドで確認できます。

```bash
$ dmesg | grep -i 'cloud linux' 
[   0.722149] EFI: Loaded cert 'Cloud Linux Software, Inc: Kernel Module Signing Key: 12ff0613c0f80cfba3b2f8eba71ebc27c5a76170' linked to '.system_keyring'
```

作業は以上になります。これで、通常どおりパッチを適用できるはずです。

セキュアブート用カーネルモジュールへの署名に関して、詳しくは以下をご覧ください。
[https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel).


### ファイアウォールとプロキシの設定


#### ファイアウォールを介したサーバーへのパッチ適用
 
サーバーがインターネットにアクセスできる限り、たとえNAT環境だとしても、問題なくKernelCareパッチサーバーを使用できます。

通常、KernelCareが適切に動作するためには、2台のサーバーのみの接続が必要になります。

```
cln.cloudlinux.com
patches.kernelcare.com
```

KernelCareエージェントのインストール／アップデートには、追加のアドレスが使用されます。

```
repo.cloudlinux.com
```

![](/images/patchingthroughfirewall.png)

#### プロキシ経由のサーバーパッチ適用

 
サーバーがインターネットに直接アクセスはできないけれども、プロキシを使用してインターネットにアクセスできる場合、構成にそれほど違いはありません。KernelCareは、プロキシ用の標準環境変数を取得できます。

プロキシ設定用の環境設定があることを確認してください。それ以外はすべて、サーバーが直接インターネットに接続されている場合と同じになります。

```
# export http_proxy=http://proxy.domain.com:port
# export https_proxy=http://proxy.domain.com:port
```

:::tip 注
`export`によって定義される設定では、大文字と小文字の区別がないため、上記の例は以下のようにしてもかまいません。
:::

```
# export HTTP_PROXY=http://proxy.domain.com:port
# export HTTPS_PROXY=http://proxy.domain.com:port
```

これらの設定は、KernelCareのconfig `/etc/sysconfig/kcare/kcare.conf`で定義できます。

例

```
$ cat /etc/sysconfig/kcare/kcare.conf
AUTO_UPDATE=True
HTTPS_PROXY=http://myproxy.com:59794
```

これらの設定をconfigで定義すると、`kcarectl`を起動するたびに設定をエクスポートする必要がなくなり、cronジョブを編集する必要もなくなります。

`kcarectl`を起動する度に、configからプロキシ設定が取得されます。この場合、プロキシ設定を一度だけ設定する必要があります。

![](/images/patchingthroughproxy.png)


### KernelCare on AWS – デプロイユーザーガイド


#### 紹介資料

#### 概要

Linuxカーネルは、サーバー上で最も重要なソフトウェアです。Linuxカーネルにセキュリティ上の欠陥があると、すべてのサービスと顧客データが流出する可能性があります。KernelCareは、常時Linuxカーネルを自動的に安全に保つことを可能にするテクノロジーです。サーバーを停止する必要は決してありませんし、ダウンタイムやメンテナンスウィンドウの不便なスケジューリングが発生するサーバーの再起動もありません。これにより、可用性、安全性、安定性、運用コスト、顧客満足度が向上します。また、Linuxのほぼすべての主流ディストリビューションで動作します。シンプルで、高速で、デプロイするのが非常に簡単な一方、必要に応じて、非常に複雑なパッチやカスタマイズされたカーネルを処理することもできます。

#### 前提条件と要件

KernelCareをインストールできるのは、以下のいずれかのディストリビューションを実行しているx86_64互換サーバーまたはVMです。

* Amazon Linux 1、2
* CentOS 6、7、Xen4CentOS、CentOS-Plus、ElRepo
* CloudLinux 6、7
* Debian 7、8、9、8-backports
* Oracle Linux 6、7
* ProxmoxVE 3、4、5
* RedHat EL 6、7
* Ubuntu 14.04、16.04、18.04
* Virtuozzo 6

互換性のあるカーネルの正確なリストは、以下のリンクにあります。[https://patches.kernelcare.com/](https://patches.kernelcare.com/).

カスタムカーネルがサポートされていない限り、ほとんどの場合、標準OSカーネルが必要です。

ソフトウェアは実行中のサーバーにインストールすることができ、再起動は必要ありません。

KernelCareをAWSにデプロイするには、基本的なLinuxのスキルがあれば十分です。単純なデプロイには、EC2インスタンスのみが必要です。KernelCareはBYOLモデルとしてご利用いただけます。試用ライセンスを取得するには、[カスタマーポータル](https://cln.cloudlinux.com)で登録する必要があります。試用ライセンスを取得したら、アクティベーションキーを使って、実行中のEC2インスタンスを登録する必要があります。


#### アーキテクチャ図

サーバーがインターネットにアクセスできる限り、たとえNAT環境だとしても、問題なくKernelCareパッチサーバーを使用できます。

通常、KernelCareが適切に動作するためには、2台のサーバーのHTTPS接続が必要になります。

* cln.cloudlinux.com
* patches.kernelcare.com


![](/images/AWS_arch2.png)

サーバーがインターネットに直接アクセスはできないけれども、プロキシを使用してインターネットにアクセスできる場合、構成にそれほど違いはありません。KernelCareは、プロキシ用の標準環境変数を取得できます。

![](/images/AWS_proxy_arch2.png)

プロキシ設定用の環境設定があることを確認してください。それ以外はすべて、サーバーが直接インターネットに接続されている場合と同じになります。

```
# export http_proxy=http://proxy.domain.com:port
# export https_proxy=http://proxy.domain.com:port
```

#### 計画ガイダンス

#### セキュリティ

KernelCareデプロイをインストール／制御できるようにするのに必要なのは、SSHアクセスだけです（rootの認証情報、キーベースの認証／sudo、または同様のメカニズムが推奨されています）。

#### 費用

KernelCareは、サブスクリプションサービスとして提供されています。料金の詳細については、以下の表を参照してください。

| **ライセンス数** | **月額** | **年額** |
| ----------- | ----------- | ----------- |
| 1      | $3.95       | $45       |
| 2-49   | $2.95       | $33       |
| 50-499 | $2.55       | $28       |
| 500+   | $2.25       | $25       |

#### サイジング

KernelCareエージェントのRAMフットプリントは微小です。バイナリパッチに必要なのは、通常1MB未満です。

#### デプロイガイダンス

#### デプロイアセット

KernelCareをインストールするには、以下を実行します。

```
curl -s -L https://kernelcare.com/installer | bash
```

または

```
wget -qq -O - https://kernelcare.com/installer | bash
```
IPベースのライセンスをご利用の場合は、他に何もする必要はありません。キーベースのライセンスをご利用の場合は、以下を実行します。

```
$ /usr/bin/kcarectl --register KEY
```

`KEY`は、製品の購入または試用の申し込みの際に提供された登録キー文字列です。

Ansible、Puppet、Chef、またはその他の自動化ツールを使用して、KernelCareのデプロイを簡単に自動化することができます。自動化できる手順は、以下のとおりです。

1. KernelCareエージェントパッケージ（オプション。インターネットにアクセスできないサーバーにのみ必要です）とKernelCareエージェント構成ファイル（`/etc/sysconfig/kcare/kcare.conf`）を配布します。
2. 必要な環境変数を設定します（オプション）。
3. ローカルで利用可能なパッケージ、または中央のKernelCareダウンロード場所のどちらかから、KernelCareエージェントをインストールします。
4. ライセンスキーまたはIPベースのライセンスのどちらかを使用して、KernelCareを登録します。

#### 運用ガイダンス

#### ヘルスチェック

KernelCareによって保護されたシステムは、 [https://cln.cloudlinux.com](https://cln.cloudlinux.com). で利用可能なCloudLinux Network（CLN）ポータルで監視することができます。登録済みのKernelCareインストールは、ライセンスキーによってグループ化されています。<span style="color:#E76930">琥珀色</span>の「！」マークつきのカーネルには、最新のパッチがインストールされていません。

![](/images/KC-Ent-monit.png)

いずれの場合も、KernelCareで保護されたシステムで以下のコマンドを実行することによって、利用可能な最新のパッチが適用済みかどうかを確認できます。

```
$ /usr/bin/kcarectl --check
```

#### バックアップとリカバリー

KernelCareは何もデータも保存していないので、KernelCareをバックアップする必要はありません。KernelCareは、いつでも再インストールして、再登録することができます。KernelCareの構成ファイルを変更済みの場合に、構成ファイルをバックアップするには、`/etc/sysconfig/kcare/`フォルダをバックアップします。

#### 定期メンテナンス

KernelCareは、RPM／DEBパッケージ（Linuxディストリビューションによって異なります）にパッケージ化されていて、システムパッケージがアップデートされる度にアップデートされます。追加のメンテナンスは必要ありません。

#### 緊急メンテナンス

インスタンスの1つが劣化した場合、EBSやスナップショットに基づいて別のインスタンスを起動すると、KernelCareは以前と同様に動作し続けます。そのため、追加の作業は必要ありません。代わりに新しいサーバーをセットアップする場合は、新しいサーバーにKernelCareを再登録してください。パッチをアンインストールすることにした場合は、以下のコマンドを実行します。

```
# kcarectl --unload
```

または、以下のコマンドを実行して、*kernelcare*パッケージを完全に削除します。

* RPMベースのシステムの場合
    ```
    # rpm -e kernelcare
    ```
または
*  DEBベースのシステムの場合
    ```
    # dpkg --remove kernelcare
    ```
#### パッチフィードの詳細オプション

##### **テストフィードと遅延フィード**

KernelCareパッチサーバーには、標準（本番）フィードに加えて、いくつかのパッチフィードが用意されています。

* **テストフィード**: 完全なテスト工程を経ていない最新のパッチ（テストビルド）。テストフィードを使用すると、新しいパッチのテストを早期に開始することができます。
* **遅延フィード**: 過去12／24／48時間以内にリリースされたパッチのロードをスキップするように、KernelCareに指示がされます。

代わりとなるフィードオプションは、`/etc/sysconfig/kcare/kcare.conf`の`PREFIX`変数をtest／`12h`／`24h`／`48h`のいずれかに設定することで有効になります。

##### **Stickyパッチ機能によるフィード管理**

検証環境と本番環境を処理する最善の方法は、CloudLinux Network（CLN）ポータルから発行されたKernelCareライセンスキーのStickyタグ機能を使用することです。このタグを使用するには、CLNポータル→KernelCareタブ→対象のキーをクリック→「Edit Key」をクリック→キー情報編集ウィンドウに移動します。

![](/images/KC-Ent-list.png)

![](/images/KC-Ent-edit.png)

各環境に個別のキーを提供し、全環境に特定のStickyタグを設定する必要があります。実は、Stickyタグは、環境内の全サーバーにパッチを適用しなければならない日付になっています。

![](/images/KC-Ent-sticky.png)

「Sticky tag」フィールドの日付は、2018年5月28日から今日の1日前までの任意の日付にすることができます。

パッチを適用するサーバーでStickyタグ機能を使用するには、以下のコマンドを実行します。

```
$ /usr/bin/kcarectl --set-sticky-patch=KEY
```

または、`/etc/sysconfig/kcare/kcare.conf`ファイルに`STICKY_PATCH=KEY`を追加して、同じことをすることもできます。
  
:::tip 警告
`KEY`という語を、サーバーを登録するのに使用される実際のKernelCareライセンスキーに置き換え**ないでください**。
:::

特定のサーバーでStickyタグ機能が有効になっている場合、そのような全サーバーにおいて、「Sticky tag」フィールドで指定されている日付以前にリリースされたパッチのみを取得します。

このようにして、CLNポータルのフィールドを1つだけアップデートすることで、ある環境の（つまり、同じKernelCareライセンスキーで登録されている）全サーバーに新しいパッチを追加できます。

#### サポート

24時間、週7日、年365日、無制限のサポートを提供しています。[リクエストを送信する](https://cloudlinux.zendesk.com/hc/requests/new)か、Eメールで  [support@cloudlinux.com](mailto:support@cloudlinux.com)までお問い合わせください。

* 全てのお問い合わせに、1営業日以内に回答いたします。ほとんどの場合、数時間以内です。迅速なサポートをご希望の場合は、サーバーで（rootユーザーとして）以下のコマンドを実行します。
```
# kcarectl --doctor
```
次に、生成されたキーをサポートリクエストに貼り付けます。

#### サポート費用

KernelCareサブスクリプションには、24時間年中無休の無料サポートが含まれています。

#### アクセシビリティ

#### 参考資料

* KernelCare Webサイト：[https://www.kernelcare.com](https://www.kernelcare.com)
* KernelCareブログ： [https://www.kernelcare.com/blog/](https://www.kernelcare.com/blog/)
* KernelCareパッチサーバー： [https://patches.kernelcare.com](https://patches.kernelcare.com)
* CloudLinux Network – CLN（請求ポータル）: [https://cln.cloudlinux.com](https://cln.cloudlinux.com)
* CloudLinux 24時間年中無休オンラインサポートシステム： [https://tuxcare.zendesk.com](https://tuxcare.zendesk.com)
  
#### ローカリゼーション

KernelCareは、英語でのみご利用いただけます。

### リセラーパートナーUI


リセラーパートナーのアクセス権を取得したら、IPリセラーパートナーUIにて、IPライセンス、請求オプション、プロフィールの詳細を閲覧、管理できます。ここでは、残高、ライセンス数、ライセンス価格を追跡できるだけでなく、IPアドレス検索を使用して顧客を見つけることもできます。KernelCareライセンスの詳細については、[こちら](https://www.kernelcare.com/pricing/)を参照してください。


#### サーバー欄

アカウントに資金を追加する（以下の**請求情報／資金の追加**を参照してください）と、すぐにクライアント用の新しいライセンスを追加できます。IP KernelCareライセンスを追加するには、

1. **Add IP License**フィールドにIPアドレスを入力し、プルダウンメニュー（KernelCare）でライセンスの種類を選択して、**Add license**をクリックします。

![](/images/reseller001.jpg)

2. ライセンスを削除するには、削除が必要なIPアドレスの前にある**Delete** をクリックします。

3. KernelCare Keyライセンスを追加するには、**KernelCare Keys**タブに移動し、**Max Servers**にライセンスで許可されているサーバー数を入力し、必要に応じて説明を追加して、**Add**をクリックします。キーが生成され、下にあるリストに表示されます。

**Operations List**では、キーを編集または削除できます。

![](/images/reseller007_zoom96.png)

#### 請求情報／資金の追加

資金を追加するには、

1. 残高の近くにある**Add Funds**をクリックするか、アカウントの開始ページの上部にある**Billing Info/Add Funds**に移動します。

2. まず、**Add**をクリックして、クレジットカードの詳細を追加します。次に、金額を入力して**TopUp**をクリックします。**Process to Checkout**をクリックして、PayPalで支払うこともできます。


![](/images/reseller002.jpg)

クレジットカードの詳細を追加する際に、**Auto add funds**オプションを選択することもできます。残高が100ドルを下回ると、プルダウンメニューで選択した金額が自動的に追加されます。

**Auto repay**を選択すると、残高がマイナスになるときに、カードに自動的に請求されます。最低請求金額は20ドルです（たとえば、残高が15ドルの場合、20ドルが請求されます。残高が134.2ドルの場合、134.2ドルが請求されます）。


![](/images/reseller003.jpg)

:::tip 注
残高がマイナスで表示されている場合は、さらに資金を入金する必要があることを意味しています。
:::

#### API欄

CloudLinuxとKernelCareのIPライセンスの追加・削除は、さまざまなホスティング・ドメイン管理や請求システム・プラットフォームと互換性があります。API欄では、可能なすべてのCloudLinuxモジュールとプラグインAPIに関する包括的な情報を見つけることができます。

![](/images/reseller004.jpg)

#### プロフィール

**Profile**欄をクリックして、プロフィール情報を編集できます。必要な情報を編集し、**Update Account**をクリックしてください。

![](/images/reseller5.jpg)
![](/images/reseller006.jpg)


### 方法

#### 再起動せずにハイパースレッディング（SMT）を無効にする方法：KernelCareの場合

この記事では、最近のMDS／Zombieloadの脆弱性を軽減するのに役立つように、KernelCareを使用して再起動せずにSMT（同時マルチスレッディング）を無効または有効にする方法について説明します。

CPU同時マルチスレッディング（SMT）の無効化は、最近のMDSの脆弱性（別称、「Zombieload」）に対抗するために必要な緩和策の1つです。ホスティングプラットフォームの構成とそのワークロードパターンによって、パフォーマンスに影響があります。専用コアをゲスト（例えば、VM）に割り当てるなど、その他の緩和策の影響も考慮する必要があります。

カーネルの`sysfs`インターフェイスを使用して、SMTの状態を制御および取得できます。2つのファイルがありますが、両方とも`/sys/devices/system/cpu/smt`ディレクトリにあります。

* `control`
* `active`


`/sys/devices/system/cpu/smt`ディレクトリが見つからない場合、実行中のカーネルがSMTをサポートしていないことを意味します。この場合、KernelCareパッチを適用して、システムがSMTコントロールを使用できるようにする必要があります。以下の`kcarectrl`コマンドを使用してください。

```
kcarectl --update
Kernel is safe
```

```
ls -l /sys/devices/system/cpu/smt
-r--r--r-- 1 root root 4096 May 17 13:06 active
-rw-r--r-- 1 root root 4096 May 17 13:06 control
```

これらのファイルが配置されるとすぐに、SMTの無効化を進めることができます。


<iframe width="560" height="315" src="https://www.youtube.com/embed/RUGCvEO1hAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### SMTコントロール

`/sys/devices/system/cpu/smt/control`

このファイルを使用すると、SMTを有効または無効にして、その状態を表示できます。以下の3つの値があります。

1. `on`：CPUがSMTをサポートしており、SMTが有効になっています。すべての論理CPUは、制限なくオフラインまたはオンラインにすることができます。
2. `off`：CPUはSMTをサポートしていますが、SMTが無効になっています。いわゆるプライマリーSMTスレッドのみが、制限なしでオフライン／オンラインにできます。非プライマリーシブリングスレッドをオンラインにしようとすると、拒否されます。
3. `notsupported`：CPUがSMTをサポートしていません。コントロールファイルに書き込むことはできません。

#### SMTステータス

`/sys/devices/system/cpu/smt/active`

このファイルの内容は、SMTのステータスを示しています（たとえば、2つ以上のシブリングスレッドが同じ物理コアでアクティブな場合、このファイルの内容は 1、そうでない場合は0になります）。

SMTサポートを制御するためのコマンドは、以下になります（ルート権限が必要です）。

#### SMTの状態を確認する

```
cat /sys/devices/system/cpu/smt/active
```

#### SMTを有効にする

```
echo on > /sys/devices/system/cpu/smt/control
```

#### SMTを無効にする

```
echo off > /sys/devices/system/cpu/smt/control
```

SMTを無効にし、[マイクロコードをアップデート](/jp/how-to/#how-to-update-microcode-without-reboot-with-vendor-provided-package)し、KernelCareパッチを適用すると、ZombieLoadの脆弱性からシステムが保護されます。仮想システム（たとえば、VM、VPS、その他のクラウドインスタンスタイプ）の場合は、最後のアクション（KernelCareパッチの適用）のみが適用されることに注意してください。

#### ベンダー提供のパッケージで再起動せずにマイクロコードをアップデートする方法

この記事では、Linuxを実行しているIntel CPUのマイクロコードをアップデートする方法を解説します。

:::warning 警告
マイクロコードのアップデートで発生する可能性のある問題を回避するには、アップデート前にSMTを有効にしてください。
:::


::: tip 注
この記事は変更される可能性があります。他のディストリビューション向けの説明を追加して、更新される予定です。
:::


::: tip 注
* 以下の手順はrootとして実行する必要があります。
* 示されている例は、Debian向けです。
* システムがCPUやカーネル関連の脆弱性から完全に保護されているか疑問がある場合は、[お問い合わせください](mailto:sales@cloudlinux.com)。
:::

#### UbuntuとDebianでのマイクロコードのアップデート

1. ご利用のプラットフォームのマイクロコードパッケージダウンロードリンクを見つけます
   
    * Ubuntu: [https://usn.ubuntu.com/3977-1/](https://usn.ubuntu.com/3977-1/)
    * Debian: [https://packages.debian.org/search?keywords=intel-microcode](https://packages.debian.org/search?keywords=intel-microcode)
  
2. パッケージをダウンロードします

:::tip 注
以下に示されている例は、Debian 9用です。
:::

```
cd <a temporary directory, e.g. /tmp>
mkdir firmware
cd firmware
wget http://security.debian.org/debian-security/pool/updates/non-free/i/intel-microcode/intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

3. ダウンロードしたパッケージを確認します

```
md5sum intel-microcode_3.20190514.1~deb9u1_amd64.deb
c7bc9728634137453e0f4821fb6bb436  intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

チェックサムのリストは、[Debianパッケージダウンロードページ](https://packages.debian.org/stretch/amd64/intel-microcode/download)にあります。

4. パッケージを展開します

```
dpkg -x intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

5. 展開したファイルを確認します

```
ls -l
total 1896
drwxr-xr-x 5 root root   53 May 15 04:18 etc
-rw-r--r-- 1 root root 1940140 May 17 11:42 intel-microcode_3.20190514.1~deb9u1_amd64.deb
drwxr-xr-x 3 root root   22 May 15 04:18 lib
drwxr-xr-x 3 root root   19 May 15 04:18 usr
```
6. 既存のマイクロコードのバックアップを作成します

```
test -d /lib/firmware/intel-ucode/ && mv /lib/firmware/intel-ucode/ /lib/firmware/intel-ucode.backup
```

7. 新しいマイクロコードをコピーして、確認します
```
cp -r lib/firmware/intel-ucode/ /lib/firmware/
ls -l /lib/firmware/ | grep intel-ucode
drwxr-xr-x  2 root root 4096 May 17 11:47 intel-ucode
drwxr-xr-x  2 root root 4096 May 16 20:54 intel-ucode.backup
```

8. 現在のマイクロコードのバージョンを確認します

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
```

9. (（オプション）現在のマイクロコードのバージョン（コアごとのリビジョン）を再確認します

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x12
microcode : 0x12
microcode : 0x12
microcode : 0x12
```

10. マイクロコードリロードファイルが存在することを確認します

```
ls -l /sys/devices/system/cpu/microcode/reload
--w------- 1 root root 4096 May 17 11:54 /sys/devices/system/cpu/microcode/reload
```

11. カーネルに新しいマイクロコードを強制的にロードさせます

```
echo 1 > /sys/devices/system/cpu/microcode/reload
```

12. 新しいマイクロコードを確認します

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13
[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
```

13. （オプション）新しいマイクロコードのバージョン（コアごとのリビジョン）を再確認します

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x21
microcode : 0x21
microcode : 0x21
microcode : 0x21
```

#### Red HatとCentOS でのマイクロコードのアップデート

RHELベースのディストリビューションには、マイクロコードをアップデートするのに、`microcode_ctl utility`を使用できます。

1. `microcode_ctl`パッケージをアップデートして、最新のマイクロコードを取得します

```
yum update microcode_ctl
```

2. forceファイルを作成します

ファームウェアディレクトリ内に、`force-late-intel–06–4f–01`を作成します。

```
touch /lib/firmware/`uname -r`/force-late-intel-06-4f-01
```

3. マイクロコードのアップデートを実行します

```
/usr/libexec/microcode_ctl/update_ucode
```

4. カーネルに新しいマイクロコードを強制的にロードさせます

```
echo 1 > /sys/devices/system/cpu/microcode/reload
```

5. 新しいマイクロコードを確認します

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13
[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
```

6. （オプション）新しいマイクロコードのバージョン（コアごとのリビジョン）を再確認します

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x21
microcode : 0x21
microcode : 0x21
microcode : 0x21
```

#### CentOS 6でのマイクロコードのアップデート

1. `microcode_ctl`パッケージをアップデートして、最新のマイクロコードを取得します

```
yum update microcode_ctl
```

2. `yum update microcode_ctl`が以下を出力する場合、

```   
Package(s) microcode_ctl available, but not installed.
No Packages marked for Update
```

手動でパッケージをインストールする必要があります。

3. `microcode_ctl`パッケージをインストールするには、以下のコマンドを実行します。

```
yum install microcode_ctl
```

以下のようなコマンドが出力されます。

```
Installed:
  microcode_ctl.x86_64 2:1.17-33.11.el6_10                                                                                                                                 

Complete!
```

4. CPUマイクロコードのバージョンを確認します。

```
cat /proc/cpuinfo | grep microcode
microcode       : 9
microcode       : 9
microcode       : 9
microcode       : 9
```

5. マイクロコードのアップデートを試みます

```
microcode_ctl -u
```

以下のような出力が表示された場合

```
microcode_ctl: writing microcode (length: 2370560)
microcode_ctl: cannot open /dev/cpu/microcode for writing errno=2 (No such file or directory)
```

マイクロコードドライバをロードする必要があります。

6. マイクロコードドライバをロードします

```
modprobe microcode
```

7. もう一度マイクロコードのアップデートを試みてください。

```
microcode_ctl -u
```
以下のような出力が表示された場合、

```
microcode_ctl: writing microcode (length: 2370560)
microcode_ctl: microcode successfully written to /dev/cpu/microcode
```
アップデートは成功です。

8. バージョンを確認します。

```
cat /proc/cpuinfo | grep microcode
microcode       : 17
microcode       : 17
microcode       : 17
microcode       : 17
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/EydWy-b9uns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### Plesk関連

#### 拡張PleskライセンスからKernelCareアクティベーションキーを取得する方法

多くの場合、お客様はPleskまたはOdinを通してKernelCareライセンスを購入します。そのような場合、KernelCareライセンスと、Pleskプラグイン用のその他の追加キーが含まれているユニバーサルキーを取得することになります。このキーは、`A00B00-0CDE00-F0G000-HIGK00-LM0N00`のようなシンタックスです。最初に、Pleskを通して自動的にキーがインストールされ、次に、ライセンスが正常にアクティベートされます。

ただし、何らかの理由でエージェントを再登録する必要がある場合や、単にKernelCareアクティベーションキーを別途取得する必要がある場合は、上記の方法を適用することはできません。当社が、KernelCareサービスを別途処理する必要があります。

拡張PleskライセンスキーからKernelCareアクティベーションキーを取得するには、以下の手順に進む必要があります。

1. 以下の順に移動します。 _Tools & Settings >> Plesk >> License Management >> Additional License Keys_

  ![](/images/LicenseManagement.png)

  ![](/images/AdditionalLicenseKeys.png)

2. ページに記載されているKernelCareライセンスの隣にある*Download key*をクリックし、テキストエディタでダウンロードしたファイルを開きます

3. 以下のコードを見つけます

  ```
  <!--Key body-->
  <aps-3:key-body core:encoding="base64" core:type="binary">YOUR_BASE64_ENCODED_LICENSE_KEY==</aps-3:key-body>
  <!--Information about additional key-->
  ```

4. これはbase64でエンコードされたキーなので、CLIユーティリティやオンラインのbase64デコーダー（例えば、 [https://www.base64decode.org](https://www.base64decode.org) ）を使用して、UTF-8にデコードする必要があります。新しいライセンスキーは、xxxxxxxxxxxxxxxxのようなフォーマットのはずです。大文字と小文字の英字および数字が含まれています。

5. サービスを有効にするには、デコードされた新しいキーを使用します。

  ```
  /usr/bin/kcarectl --register DECODED_KEY_HERE
  ```

以上です！


## LibCare

LibCare（旧KernelCare+）は、メモリ上の共有ライブラリを検出して、アップデートします。共有ライブラリを使用中のアプリケーションが、中断されることはありません。

### 概要

LibCareは、共有ライブラリ向けパッチ適用ツールです。ライブラリ関連の脆弱性を検出し、再起動することなしにメモリ内のライブラリファイルにパッチを適用します。

### メリット

今日、多くの組織では、サーバーとアプリケーションの再起動に必要なメンテナンスウィンドウの承認を得るのが、非常に困難です。現在、GlibcとOpenSSLのライブラリを共有する単一のサーバーで、複数のアプリケーションが実行されています。

再起動することなしに手動でパッチを適用した場合でも、共有ライブラリに脆弱性がある可能性があります。ライブラリがディスク上でアップデートされると、パッチ未適用の古いファイルがサーバーのメモリ上に残る場合があります。さらに、メモリ内のこの古いパッチ未適用のライブラリファイルは、脆弱性スキャナによって検出されません。LibCareを使用すると、ローカルサーバーライブラリは、熟知した攻撃者と脆弱性から完全に保護されます。

### 主な機能

* 再起動不要のライブラリパッチ適用
* アプリケーションの再起動を回避
* OpenSSLとGlibcをサポート

### 試用ライセンスの取得

KernelCare Enterpriseのご利用には、試用版アクティベーションキーが必要です。試用ライセンスは7日間有効です。

アクティベーションキーの取得に問題がある場合や試用版の使用に関してご不明点がある場合は、 [sales@cloudlinux.com](mailto:sales@cloudlinux.com) までご連絡ください。私たちがお助けします。

### サポートされているオペレーティングシステム

LibCareのパッチ適用は、現在、以下のオペレーティングシステムで利用できます。

* CentOS/RHEL/CloudLinux OS 7
* CloudLinux OS 8
* AlmaLinux 8
* Oracle Linux 7
* Oracle Linux 8
* Debian 9/10
* Ubuntu 16.04/18.04/20.04
* Proxmox VE 6
* Scientific Linux

### インストールとアップグレード

ユーザー空間プロセスのパッチ適用機能は、KernelCareパッケージで利用できます。

### 使用方法

利用可能なパッチをすべてのユーザー空間プロセスに適用するには、以下のコマンドを実行します。

```
$ kcarectl --lib-update
```

どのプロセスにパッチが適用されたかに関する情報を収集するには、以下のコマンドを実行します。

```
$ kcarectl --lib-info
```

適用済みのパッチに関する情報を収集するには、以下のコマンドを実行します。

```
$ kcarectl --lib-patch-info
```

関連するすべてのプロセスのパッチを解除するには、以下のコマンドを実行します。

```
$ kcarectl --lib-unload
```

#### ブラックリスト作成

特定のプロセスへのパッチ適用を回避する必要がある場合は、ブラックリストを定義することによって行うことができます。デフォルトのブラックリストは、`/var/lib/libcare/blacklist`にあり、パッケージが提供したリストが含まれています。優先度の高い`/var/cache/kcare/userspace/blacklist`ファイルを作成することで、それらの値を上書きできます。

#### 自動アップデート

ユーザー空間パッチ適用cronジョブは、デフォルトでは無効です。有効にするには、以下のコマンドを実行してください。

```
libcare-cron init
```

### トラブルシューティング

#### Auditdログ

LibCareツールでは、ptraceシステムコールを多用しています。`auditd`トレースが呼び出される場合、ログに多数のレコードが記録されます。`/etc/audit/rules.d/kernelcare.rules`に、KernelCareパッケージによって提供されたルールがあり、これによって、監査からKernelCareプロセスが除外されます。

注：古いautditdの制限により、el6にはそのようなルールが提供されていません。そのようなルールを実行時に追加する以下のようなコマンドがあります。

```
auditctl -l | grep kcare | cut -d' ' -f2- | xargs -t -L1 -r auditctl -d && pgrep libcare-server | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcarever | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcare
```

これにより、現在有効になっているすべてのKernelCareルールが削除され、LibCareのプロセスIDによって新しいルールが追加されます。


### パッチ未適用ライブラリディテクター（UChecker）

#### 説明

UCheckerは、ネットワークLinuxサーバーを確認し、ディスクとメモリの両方で古いライブラリを検出するスキャナーです。KernelCareのオープンソーススキャナーは、他のスキャナーによってアップデート済みと報告される可能性のある、メモリ上で実行されている脆弱なライブラリを正しく報告することで、検知漏れを検出します。

UChecker（「ユーザー空間チェッカー」に由来します）は、最新のすべてのLinuxディストリビューションで動作します。UCheckerは、無料のオープンソースで、GNU一般公衆ライセンスに基づいて配布されています。

#### UCheckerの仕組み

このアクティビティ図は、どのようにUCheckerが動作するかを示しています。

![](/images/uchecker.jpg)

#### 使用方法

システムをスキャンするには、以下のコマンドを実行します。

```
$ curl -s -L https://kernelcare.com/uchecker | sudo python
```

以下の出力が表示されます。

```
[*] Process httpd[15516] linked to the `libc-2.17.so` that is not up to date.

You may want to update libraries above and restart corresponding processes.

KernelCare+ allows to resolve such issues with no process downtime. To find 
out more, please, visit https://lp.kernelcare.com/kernelcare-early-access?
```

出力では、以下の情報が利用できます。

* プロセスID
* プロセス名


#### トラブルシューティング

詳細な出力用に、`ERROR`、`WARNING`、`INFO`、`DEBUG`からログレベルを選択できます。

例えば、

```
$ curl -s -L https://kernelcare.com/uchecker | sudo LOGLEVEL=debug python
```

詳細については、[UChecker Githubページ](https://github.com/cloudlinux/kcare-uchecker)にアクセスしてください。


## KernelCare for IOT

エンタープライズIoTユーザーや相手先商標製造会社向のARM64ベースの組み込みシステムにライブセキュリティパッチを提供します。

サポートされているディストリビューションとチップセットのリストについては、[こちらのページにアクセスしてください](https://tuxcare.com/live-patching-services/kernelcare-iot/)。

### KernelCare IoTの仕組み

* KernelCareチームは、脆弱性をチェックするためにセキュリティメーリングリストを常時監視しています。脆弱性が発見されると、すぐにチームはパッチを準備して、配信サーバーに送信します。
* ご利用のデバイス上で、エージェントがプロセスを実行し、4時間ごとに配布サーバーをチェックします。そして、新しいパッチが見つかれば、カーネルの停止不要で、実行中のカーネルに安全に適用します。
* パッチを適用するには、特別なカーネルモジュールが使用されます。まず、カーネルアドレス空間にアップデートをロードします。次に、元のコード／データを再配置して、アップデート中にコードブロックが実行されないようにします。アップデートが完了したら、元のコードからアップデートされたコードに、安全に実行パスを切り替え、古いコードが二度と実行されないようにします。
* KernelCareは、以上の全作業を即座に、自動的に、サービスを中断することなしで、実行します。

KernelCare for IOT の詳細については、[こちらのページにアクセスしてください](https://tuxcare.com/live-patching-services/kernelcare-iot/)。

## QEMUCare

QEMUCareは、クラウド提供事業者、VPSホスティング会社、QEMUベースの仮想化システムを使用するその他の企業向けの仮想パッチ適用です。バーチャルテナントのシステムを中断することなく、インフラストラクチャにパッチが適用された状態を保ちます。

### QEMUCareの仕組み

* 各仮想化ホストにエージェントがインストールされ、QEMUCareリポジトリから直接パッチがインストールされます。
* ePortal環境では、仲介するQEMUCare ePortalサーバーと仮想化ホストが通信します。

### QEMUパッチセットの展開

バージョン1.25より、ePortalはQEMUパッチセット管理をサポートしています。QEMUパッチセット管理は、`Patches / QEMUcare`ナビゲーション項目からアクセスできます。QEMUパッチは、同じパッチソースの資格情報を使用するため、追加の構成を行う必要はありません。

![](/images/eportal-qemu-feed.png)

QEMUパッチ管理向けユーザーインターフェイスは、KernelCareパッチ向けと同じです。[パッチセット・デプロイメント](/jp/eportal/#patchset-deployment)のドキュメントを参照できます。

#### 最新のパッチセットをインストールするCLI

デフォルトのフィードをアップデートするには、以下のコマンドを実行します。

```
kc.eportal qemu update
```

`test`フィードをアップデートするには、以下のコマンドを実行します。

```
kc.eportal qemu update --feed test
```

すべての自動フィードをアップデートするには、以下のコマンドを実行します。

```
kc.eportal qemu auto-update
```

#### アーカイブからパッチセットをデプロイするCLI

```
~$ kc.eportal qemu deploy --help
usage: kc.eportal qemu deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

例えば、

```
kc.eportal qemu deploy --feed test /tmp/U20210818_01-qemu.tar.bz2
```

このコマンドは、`U20210818_01-qemu`パッチセットを`test`フィードにデプロイして、有効にします。


## DBCare

DBCareのベータテストが利用可能です！[こちら](https://tuxcare.com/live-patching-services/databasecare/)からお申し込みください。

### 概要

DBCareは、MariaDB向けのライブパッチ適用サービスです。 DBCareを使用すると、データベースのバックエンドがアップデートされている間もアプリケーションを実行し続けることができるので、データベースのパフォーマンス、信頼性、セキュリティ、コンプライアンスが強化されます。

### メリット

データベースのアップデートは、バグの修正、システムパフォーマンスの向上、脆弱性数の削減のために行われますが、これらの活動には多大な影響と労力が必要になります。DBCareを使用すると、データベースのダウンタイム一切不要で、パッチがメモリに適用されます。 

ライブパッチ適用は、メンテナンスウィンドウまでの待機不要で、迅速にセキュリティアップデートを適用します。実は、DBCareを導入している組織は、データベースシステムのほとんどのメンテナンスウィンドウを完全に削除していて、それでいて、これまで以上に安全になっています。

### 主な機能

* 現時点で、MariaDBをサポート
* 高可用性環境におけるデータベースのフェイルオーバーの回避
* ダウンタイム中のワークロードの移行の回避

### DBCareの仕組み

* データベースサーバーにエージェントがインストールされ、当社のリポジトリから直接パッチがインストールされます。
* このエージェントは、すべてのTuxCare製品にわたって、パッチをダウンロードして適用するために使用されます。そのため、複数のTuxCare製品を使用する場合でも、実行中のエージェントは1つだけです。

DBCareの詳細については、[こちらのページにアクセスしてください](https://tuxcare.com/live-patching-services/databasecare/)。
