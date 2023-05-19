---
sidebarDepth: 1
---

# ePortal

TuxCare ePortalは、KernelCare Enterpriseライブ パッチ管理専用のWeb管理コンソールです。

ePortalソフトウェアは、ファイアウォールの内側にある（つまり、インターネットにアクセスできない）サーバーを保護するのに役立ちます。また、オンプレミスにもクラウドにもインストールできます。

![Overview](/images/eportal-overview.svg)


## ePortalハードウェア要件

**ディスク**

* 最小100 GB、推奨200 GB（キャッシュモードの場合は、20 GB）
* 100 IOPS以上のSSD

:::tip 注
SSDベースのストレージは、ePortalサーバーに必須の要件です。
:::

**CPU**

その他の要件に関して、以下の構成と接続サーバー数をテストしました。

* 以下の要件では、最大接続マシン数は10kです。
  * VM
  * 1 vCPU
  * 1 GB RAM

* 以下の要件では、最大接続マシン数は75kです。
  * Core i5
  * 1 CPU
  * 4 GB RAM


## インストール

ePortalは、CentOS 7/8、AlmaLinux 8、Ubuntu 20.04/22.04などのEL7/8ベースのディストリビューションの64bit版と互換性があります。

### RHELベースのディストリビューション

ePortalをインストールして実行するには、NginxのWebサーバーが必要です。Nginxの公式リポジトリからインストールした安定版を使用することをお勧めします。

```
cat > /etc/yum.repos.d/nginx.repo <<EOL
[nginx]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOL
```

詳細については、 [https://nginx.org/en/linux_packages.html#stable](https://nginx.org/en/linux_packages.html#stable) を参照してください。

ePortalリポジトリをセットアップします。

```
cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL
[kcare-eportal]
name=KernelCare ePortal
baseurl=https://www.repo.cloudlinux.com/kcare-eportal/\$releasever/\$basearch/
enabled=1
gpgkey=https://repo.cloudlinux.com/kernelcare/RPM-GPG-KEY-KernelCare
gpgcheck=1
EOL
```

ePortalをインストールします。

```
yum install -y kcare-eportal
```

### Ubuntu 20.04

ePortalリポジトリをセットアップします。

```
apt-get install -y --no-install-recommends curl ca-certificates

curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/20.04 focal main
EOL
```

ePortalをインストールします。

```
apt-get update && apt-get install -y --no-install-recommends kcare-eportal
```

### Ubuntu 22.04

ePortalリポジトリをセットアップします。

```
apt-get install -y --no-install-recommends curl ca-certificates

curl https://repo.cloudlinux.com/kernelcare/kernelcare.gpg -o /usr/share/keyrings/kcare-eportal.gpg

cat > /etc/apt/sources.list.d/kcare-eportal.list <<EOL
deb [signed-by=/usr/share/keyrings/kcare-eportal.gpg] https://repo.cloudlinux.com/kcare-eportal/22.04 jammy main
EOL
```

ePortalをインストールします。

```
apt-get update && apt-get install -y --no-install-recommends kcare-eportal
```

## キャッシュモード

キャッシュモードを使用すると、ディスク使用要件が大幅に緩和され、最初のダウンロード手順が迅速に行われます。

キャッシュモードでは、ePortalはパッチセットに関する軽量のメタ情報のみをダウンロードして、KernelCareエージェントからパッチサーバー（パッチソース）にパッチリクエストをプロキシします。ダウンロードされたパッチバイナリは2週間キャッシュされ、以下のリクエストでePortalから直接アクセスできるので、パブリックインターネットの帯域幅を消費しません。

![Cache mode](/images/eportal-cache-mode.svg)

### キャッシュモードの有効化

1. [ePortal構成ファイル](#config-files)に

```
CACHE_MODE = True
```

の設定を追加します

2. ePortalを再起動します

   ```
   systemctl restart eportal
   ```

既存のインストールの場合は、既存のパッチセット用メタ情報を再取得する必要があります。

```
kcare/kc.eportal cache-mode --fetch-meta
```

### キャッシュモードの無効化

1. [ePortal構成ファイル](#config-files)内で

   ```
   CACHE_MODE = True
   ```

を削除またはコメントアウトします

2. 不足しているパッチセットをダウンロードします

   ```
   kcare/kc.eportal kcare download-missing
   ```

3. ePortalを再起動します

   ```
   systemctl restart eportal
   ```


## プロキシ設定

ePortalは、お客様のプロキシサーバー経由でパッケージとパッチを取得することができます。

![Proxy](/images/eportal-with-proxy.svg)

ePortalマシンでは、コマンドラインで使用するのと同じプロキシ設定を定義する必要があります。

これを行うには、`PROXY = 'http://example.com:3128'`を[ePortal構成ファイル](#config-files)に追加します。

```
echo -e "\nPROXY = 'http://example.com:3128'" >> /etc/eportal/config
```

ePortalは、`socks5://`プロキシスキームを介してSOCKS5プロキシをサポートしています。

```
PROXY = 'socks5://example.com:1080'
```

ePortalを再起動します（[停止と開始](#stopping-starting)欄を参照し、対応するOSを選択してください）。


## 認証設定

| | |
|-|-|
| `AUTH_RESTRICTED_INDEX`    | 登録ユーザーのみインデックスページへのアクセスを許可します|
| `AUTH_PASSWORD_MIN_LENGTH` | 最小パスワード長。デフォルトでは5|
| `AUTH_SESSION_LIFETIME`    | セッションの有効期間秒数。デフォルトでは、セッションはブラウザを閉じるまで続きます|
| `AUTH_REFRESH_SESSION`     | `False`（デフォルト）の場合、ログインから有効期間秒数経過後、セッションが期限切れになります。`True`の場合、非アクティブな状態が有効期間秒数継続後、セッションが期限切れになります。|

[ePortal構成ファイル](#config-files)にて構成を設定できます。


## ユーザーの管理

`kc.eportal user`ユーティリティを使用して、ポータルを管理できます。

```
usage: kc.eportal user [-h] [-a] [-c] [-d] [-p PASSWORD] [-r {admin,readonly}] [--note NOTE] [user]

list available users by default

positional arguments:
  user                  user name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new user
  -c                    action: change user
  -d                    action: delete user
  -p PASSWORD, --password PASSWORD
  -r {admin,readonly}, --role {admin,readonly}
  --note NOTE           description
```

ユーザーを追加するには、

```
kc.eportal user -a -p AdminPassword admin
```

ユーザーのパスワードを変更するには、

```
kc.eportal user -c -p NewPassword admin
```

ユーザーを読み取り専用に設定するには、

```
kc.eportal user -c -r readonly admin
```


## LDAPを使用した認証

ePortalはバインド操作を介したLDAP認証をサポートしています。すべてのユーザーに、バインドリクエストを実行できるDNが必要です。ePortalはユーザーを同期しないので、LDAPサーバーにアクセスするために特別なDN／パスワードを設定する必要はありません。


### 構成

LDAP構成設定は、`Settings / LDAP`ナビゲーション項目内で利用できます。

#### URL

接続するLDAPサーバーのホスト、ポート、プロトコルを指定します。

フォーマットは、`<scheme>://<host>[:port][?params]`です。

* **scheme**:
  * `ldap`：認証済みの暗号化されたTLS接続。安全でない接続を使用するには、tls=0を指定できます。
  * `ldaps`：SSL接続。
* **host**：ご利用のLDAPサーバーのホスト名またはIP。
* **port**：カスタムポート。デフォルトでは、ldapスキーム用は389、ldapsスキーム用は636です。
* **params**:
  * `strict_check=0`：厳密なSSL証明書の認証を有効／無効にします（デフォルトでは有効です）。
  * `tls=0`：接続時のTLSハンドシェイクを有効／無効にします（デフォルトでは有効です）。
  * `timeout=30`：LDAPサーバー接続タイムアウト（秒単位。デフォルトでは5です）。

例えば、

* `ldap://ldap.forumsys.com?tls=0&timeout=30`：接続タイムアウトが30秒の、安全ではない接続を使用します。

#### 接続文字列（DNテンプレート）

接続文字列は、LDAPバインド操作で使用されるDNテンプレートです。すべての`%`sテンプレートプレースホルダーは、ログインフォームから取得したユーザー名に置き換えられます。

例えば、`uid=%s,dc=example,dc=com`です。

一部のLDAP実装は、バインドリクエスト用の追加のテンプレートをサポートしています。

* Active Directoryは、`%s@example.com`テンプレートを受け入れます。
* `cn=%s,dc=example,dc=com`または`email=%s,dc=example,dc=com`も有効な場合があります。

#### フィルター

フィルターは追加オプションの設定で、追加のLDAP検索要求向けパラメーターを指定して、ePortalにアクセスできるユーザーを制限します。通常は、ユーザーが所属するグループの確認です。検索の結果、空でない値が返されると、ユーザーは認証済みとみなされます。

`<base>??<scope>?<filter>`というフォーマットは、[The LDAP URL Format RFC](https://tools.ietf.org/html/rfc2255)の一部です。

* **base**：検索ベース。検索実行の起点となるルートノード。
* **scope**：検索範囲。
  * `base`：ベースのみを検索します（デフォルト）。
  * `one`：直接の子のみ（ベースから1階層下）を検索します。
  * `sub`：ツリー全体を検索します。
* **filter**：適用する検索フィルター。

例 `dc=example,dc=com??one?(&(ou=mathematicians)(uniqueMember=uid=%s,dc=example,dc=com))`

注意。`Filter`設定でも、`%s`プレースホルダーを使用できます。`%s`は、ログインフォームから取得したユーザー名に置き換えられます。

### ログイン処理

ユーザーがePortalにログインすると、ePortalは最初にローカルデータベース内のユーザー資格情報を確認します。資格情報が見つかった場合、ユーザーは認証されます。ユーザー資格情報が見つからなかった場合にのみ、ePortalからLDAPにリダイレクトされます。

LDAP認証情報で初めてePortalにログインする場合、デフォルトで、データベースにユーザーが作成されます。ユーザー名はLDAPユーザー名、権限は読み取り専用、説明はLDAPになります。（(`https://<eportal>/admin/user/`）。

以下の画像では、`kc.eportal`コマンドラインインターフェイスで作成された1ユーザーと、LDAP資格情報でログインした2ユーザーが表示されています。

![](/images/eportalLDAPusers.png)

:::tip 注
注意。すべての新しいLDAPユーザーの権限は、読み取り専用です。`User edit`ページにて、`Readonly`フィールドをオフにすることで、管理者権限を設定できます。
:::


### 基本設定例

この例と次の例は、LDAPパブリックテストサーバー [ldap.forumsys.com](https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/) に基づいています。

ユーザーのリストは、以下のとおりです。

```
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(objectClass=person)' dn
dn: uid=tesla,dc=example,dc=com
dn: uid=gauss,dc=example,dc=com
...
```

基本設定では、提供されたユーザー名／パスワードがディレクトリサービスにバインド可能かどうかの確認のみが行われます。注意：すべての新規ユーザーには、読み取り専用権限があります。そのため、すべてのLDAPユーザーにePortalへのログインを安全に許可して、個別に適切な権限を設定できます。

基本的な設定では、`Url`と`Connection string`の設定を入力する必要があります。

|設定|値|
|-|-|
|URL|ldap://ldap.forumsys.com?tls=0|
|Connection string|uid=%s,dc=example,dc=com|

その後、`gauss:password`または`tesla:password`の資格情報を使用してログインできます。

### フィルター設定例

フィルターを使用すると、ePortalへのログインを許可された一連のユーザー（例：`mathematicians`グループに属するユーザー）を制限できます。

以下が、グループの例です。

```
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(objectClass=groupOfUniqueNames)' dn
dn: ou=mathematicians,dc=example,dc=com
dn: ou=scientists,dc=example,dc=com
...
```

そして、以下が`mathematicians`グループの属性です。

```
~$ ldapsearch -H ldap://ldap.forumsys.com -LLL -x -b 'dc=example,dc=com' '(ou=mathematicians)'
dn: ou=mathematicians,dc=example,dc=com
uniqueMember: uid=euclid,dc=example,dc=com
uniqueMember: uid=riemann,dc=example,dc=com
uniqueMember: uid=euler,dc=example,dc=com
uniqueMember: uid=gauss,dc=example,dc=com
uniqueMember: uid=test,dc=example,dc=com
ou: mathematicians
cn: Mathematicians
objectClass: groupOfUniqueNames
objectClass: top
```

許可されたユーザーを制限するためのePortal LDAP設定は以下のとおりです。

|設定|値|
|-|-|
|URL|ldap://ldap.forumsys.com?tls=0|
|Filter|dc=example,dc=com??one?(&(ou=mathematicians)(uniqueMember=uid=%s,dc=example,dc=com))|
|Connection string|uid=%s,dc=example,dc=com|

フィルターの考え方は、ログインしようとするユーザーのDNと等しい`uniqueMember`属性を持つ`mathematicians`グループを見つけることです。

その後、`gauss:password`資格情報を使用してログインできます。ただし、`tesla:password`資格情報ではログインできません。


## ePortalへのアクセス

KernelCare.ePortal管理コンソールにアクセスするには、**http://YOUR_IP/admin** に接続します。

そして、ユーザー名とパスワードを入力します

![](/images/access_eportal.png)

[kc.eportalツール](#managing-users)を使用してログイン情報を管理できます。


## パッチセットの展開

ePortalには、最新のパッチをダウンロードするメカニズムが組み込まれています。使用を開始するには、まずePortalナビゲーションバーのSettingsリンクをクリックし、次にPatch Sourceをクリックします。アクセスするには、 [sales@tuxcare.com](mailto:sales@tuxcare.com) に連絡して、ご利用のePortalアクセス資格情報をリクエストしてください。

![](/images/eportal-edit-patch-source.png)

ディスク容量とネットワーク帯域幅の要件を緩和するために、ディストリビューションを限定して取得するように選択できます。

パッチソースアクセス情報を設定すると、利用可能なパッチセットのリストを閲覧できます。

![](/images/eportal-dashboard.png)

* **Usage**：任意のフィードで特定のパッチセットを使用しているサーバー数。数字をクリックすると、パッチセットを使用しているサーバーのリストが表示されます。

* **Patchsets**：パッチセットの名前。名前をクリックすると、パッチセットの変更ログが表示されます。

* **Feed name**：セルには、特定のフィードでのパッチセットの展開とサーバーの使用状況が表示されます。数字をクリックして、サーバー一覧をフィルターすることもできます。

* **Manage**：ダイアログを開いて、パッチセットを有効／無効にできます。

### パッチセットページの管理

![](/images/eportal-manage.png)

このダイアログでは、対応するフィードでどのパッチセットを有効／無効にするかを制御できます。

* **Enable all up to this patchset**：このパッチセットまでのすべてのパッチセット（**disabled**を除く）を有効にするアクション。

* **Enable**：現在のパッチセットのみを有効にするアクション。

* **Disable**：現在のパッチセットのみを無効にするアクション。無効化されたパッチセットは、**Enable all up to this patchset**アクションによる自動更新や一括有効化の影響がありません。

CLIからパッチセットを展開するには、以下を実行します。

```
kc.eportal --unroll 16012017_1
```

### 自動更新

Settings→Feedsからご希望のフィードでAutoupdateを有効にすることで、自動更新の設定ができます。

:::danger 注
**デフォルトフィード**は、Settingsページでは自動更新を受信するように設定できません。**デフォルトフィード**の自動更新の設定については、次の欄を参照してください。
:::

### デフォルトフィードの自動更新

cronジョブを作成することによって、デフォルトフィードの自動更新を設定できます。自動更新を受信するには、以下のコマンドが使用できます。

以下のコマンドは、最新のパッチが利用可能かどうかを判断し、**デフォルトフィード**にインストールします。

```
kc.eportal --get-latest
```

### ファイルからリリースをデプロイするスクリプト

ePortalサーバーをKernelCareパッチサーバーに接続して、パッチセットを直接ダウンロードする機会がない場合は、手動で行うことができます。

既にダウンロード済みのパッチセットの場所があり、アップロードする最新のパッチセットファイルの選択をご希望の場合は、お持ちのアーカイブのリストを`/usr/share/kcare-eportal/arch/`フォルダの内容と比較できます。

その後、選択したパッチセットをePortalサーバーにアップロードして、それぞれのパッチセットに対して`kc.eportal --deploy`コマンドを実行します。

#### 例

ePortalのテストインスタンスと本番インスタンスの違いを見てみましょう。

```bash
$ comm -23 \
    <(ssh eportal-test "ls /usr/share/kcare-eportal/arch/K*.tar.bz2" | sort -h) \
    <(ssh eportal-prod "ls /usr/share/kcare-eportal/arch/K*.tar.bz2" | sort -h) | tee patchsets.diff
```

本番環境にパッチセットをアップロードします。

```bash
$ cat patchsets.diff | xargs -Phav {} rsync -iv eportal-test:{} /tmp/
$ rsync -Phav /tmp/K*.tar.bz2 eportal-prod:/tmp/
```

パッチセットファイル名をパラメーターとして、展開ツールを実行します。

```bash
$ ssh eportal-prod 'ls /tmp/K*.tar.bz2 | sort -h | xargs -n1 kc.eportal kcare deploy'
2021-12-02 01:25:06,555 - eportal.patches - INFO - K04082020_1 was enabled in main
...
```

:::danger 注
上記の手順は、他のすべてのタイプのパッチセット（libcareやqemuなど）に対して個別に実行する必要があることに注意してください。`kc.eportal libcare deploy`などの対応するファイルプレフィックスとコマンドを使用してください。
:::

### 古いリリースをクリーンする

月1回、提供済みパッチのリストは縮小されます（より新しいバージョンがある古いパッチは除外されます）が、リソースはePortalマシンから削除されません。リソースの削除は、ePortal管理者が行います。ePortalのディスク領域を解放するために、古いリリースのリソースを削除することができます。

どのリリースが削除されるかを確認するには、

```
DRY_RUN=1 kc.eportal --clean-releases
```

古いリリースを削除するには、

```
kc.eportal --clean-releases
```

## LibCareパッチセットの展開

バージョン1.18以降、ePortalはLibCareのパッチセット管理をサポートしています。パッチセット管理は、`Patches / LibCare`ナビゲーション項目からアクセスできます。LibCareパッチは同じパッチソース資格情報を使用しているので、追加の設定を行う必要はありません。

![](/images/eportal-libcare-feed.png)


### 最新のパッチセットをインストールするCLI

デフォルトフィードを更新するには、以下のコマンドを実行します。

```
kc.eportal libcare update
```

`test`フィードを更新するには、以下のコマンドを実行します。

```
kc.eportal libcare update --feed test
```

すべての自動フィードを更新するには、以下のコマンドを実行します。

```
kc.eportal libcare auto-update
```

### アーカイブからパッチセットを展開するCLI

```
~$ kc.eportal libcare deploy --help
usage: kc.eportal libcare deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

例えば、

```
kc.eportal libcare deploy --feed test /tmp/U20210129_02.tar.bz2
```

このコマンドは、`U20210129_02`パッチセットを`test`フィードに展開して、有効にします。

## QEMUパッチセットの展開

バージョン1.25以降、ePortalはQEMUのパッチセット管理をサポートしています。パッチセット管理は、`Patches / QEMUcare`ナビゲーション項目からアクセスできます。QEMUパッチは同じパッチソース資格情報を使用しているので、追加の設定を行う必要はありません。

![](/images/eportal-qemu-feed.png)


### 最新のパッチセットをインストールするCLI

デフォルトフィードを更新するには、以下のコマンドを実行します。

```
kc.eportal qemu update
```

`test`フィードを更新するには、以下のコマンドを実行します。

```
kc.eportal qemu update --feed test
```

すべての自動フィードを更新するには、以下のコマンドを実行します。

```
kc.eportal qemu auto-update
```

### アーカイブからパッチセットをデプロイするCLI

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

このコマンドは、`U20210818_01-qemu`パッチセットを`test`フィードに展開して、有効にします。

## キーの管理

新しいサーバーを登録するには、サーバー登録に使用されるKernelCareキーを作成する必要があります。キーのリストに移動するには、*Keys*ナビゲーション項目をクリックします。

![](/images/key-menu_zoom70.png)

* キーを編集するには、![](/images/eportal_keys_edit.png). をクリックします。 編集タブが開きます。
* キーを削除するには、![](/images/eportal_keys_remove.png). をクリックします。キーを削除すると、そのキーで登録されているすべてのサーバーが削除されることに注意してください。
* キーをクリックすると、そのキーで[登録されているサーバー](#managing-servers)のリストがあるServersタブに移動します。そのタブでサーバーを削除することもできます。

新しい登録を作成するには、*Create*タブをクリックします。

   ![](/images/key-creation_zoom70.png)

以下のフィールドに入力します。

* **Key** — キーの値を入力できます。フィールドを空にしておくこともできますが、その場合は自動生成されたキーが使用されます。
* **Description** — キーの説明を入力できます。
* **Server Limit** — そのキーで登録できるサーバー数。
* **Feed** — 特定のフィードを選択するか、空のままにします。

キーを追加するには、*Save*をクリックします。新しい登録キーが作成され、リストに追加されます。まさにこのキーが、個々のサーバーで登録コマンドの一部として使用されます。

このキーを保存し、別のキーを追加するには、*Save and Add Another*をクリックします。

キーを追加し、キー編集タブを開くには、*Save and Continue Editing*をクリックします。

新しいキーを追加せずにキーのリストのタブに戻るには、*Cancel*をクリックします。

### キーを管理するCLI

```
~$ kc.eportal key --help
usage: kc.eportal key [-h] [-a] [-c] [--note NOTE]
                      [--server-limit SERVER_LIMIT] [--feed FEED]
                      [key]

list available keys by default

positional arguments:
  key                   key name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new key
  -c                    action: change key
  --note NOTE           key description
  --server-limit SERVER_LIMIT
                        maximum number of servers allowed
  --feed FEED           feed to associate key to
```

キーのリストを表示します。

```
kc.eportal key
```

キーを自動生成します。

```
kc.eportal key -a
```

値を指定して、キーを作成します。

```
kc.eportal key -a test
```

フィードをキーに設定します。

```
kc.eportal key -c test --feed test
```


## サーバーの管理

[キーの管理](#managing-keys)インターフェイスでキー自体をクリックすると、そのキーで登録されたサーバーを閲覧できます。

![](/images/server_list_1_zoom70.png)

この画面には、そのキーで登録されているサーバー、サーバーのIP、ホスト名、有効なカーネル、登録時刻、最後のチェックイン時刻が表示されます。

特定のキー関連付けられているすべてのサーバーIDのリストを閲覧するには、以下を実行します。

* UIで、キーのリストがあるページに移動します。次に、特定のキーをクリックします。このキーに関連付けられているサーバーのリストが表示されます。

どのキーにも関連付けられていないすべてのサーバーIDのリストを閲覧するには、ナビゲーションバーの*Servers*ボタンを使用します。

![](/images/eportal-servers.png)

また、CLIを使用して、キーのペアと実行中のサーバー数を閲覧できます。

```
$ kc.eportal --list-servers
Count | Key
----- + --------------------------------
    0 | 2shcolu7Y1x6885Q
    2 | 6J89aS44j6OmTr05
```

### 非アクティブなサーバーのクリーンアップ

30日を超えて非アクティブなサーバーは、以下のコマンドを使用して削除できます。

```
$ kc.eportal server clean --inactive
2 servers were deleted
```

非アクティブなサーバーのクリーンアップは、毎日またはそれ以下の頻度で自動的に行うことができます。毎日の自動クリーンアップを有効にするには、[ePortal構成ファイル](#config-files)内に、オプション`CLEAN_INACTIVE_SERVERS_PERIOD = 3600 * 24`（秒単位の値）を追加します。

### 管理UIで拡張チェックイン統計を表示

開始ページに新しい表が追加されます。この表には、以下の情報が表示されます。

* 総サーバー数。
* 過去48時間にチェックインしたサーバー数。

各キーのサーバー数は、*Keys*ページに一覧表示されます。


## フィード管理

フィードの目的は、サーバー上のパッチセットの管理です。フィードを使用すれば、パッチセットを特定のキーにバインドすることができます。考えられる使用例は、パッチの事前テスト、同様のハードウェアのサーバーのグループへの更新の適用などです。

フィード管理インターフェイスに入るには、Settings → Feedsに移動します。

![](/images/feed-button_zoom70.png)

このページでは、ユーザーは既存のフィードを管理（作成、削除、編集）できます。

![](/images/feed-menu_zoom70.png)

利用可能なオプション：
* Name — フィードの名前。
* Auto update — このフィードへのパッチの自動ダウンロードを有効または無効にします。
* Deploy after X hours — パッチセットが展開可能になってから、フィードにインストールされるまでの時間単位の遅延。

ePortalは、10分ごとにメインのパッチサーバーで新しいパッチがないかどうか確認します。新しいパッチが利用可能な場合は、ePortalサーバーにアップロードされます。注：パッチはアップロードされますが、展開はされません。パッチの利用可能時間は、新しいパッチがePortalに表示された時点から開始するとみなされ、Deploy after X hoursオプションでは、その時刻が考慮されます。そのため、ユーザーが`Deploy after X hours = 10`のように設定すると、パッチはePortalサーバーにダウンロードされてから10時間後にフィードに展開されます。

フィードを直ちに自動更新して、新しいパッチがePortalで利用可能になった直後にフィードにロードされるようにするには、`Deploy after X hours = 0`を設定します。

特別な場合は、ePortalが新しいサーバーにインストールされた際のクリーンインストールです（パッチのあるダウンロード済みアーカイブや、デフォルトフィードなど展開されたパッチセットがあるフィードはありません）。この場合、ユーザーが新しいフィードを作成し、Deploy after X hoursオプションをすぐに設定すると、すべてのパッチ（利用できる最も古いパッチから最新のパッチまで）が指定されたX時間後にフィードに展開されます。これは、アーカイブが最初からダウンロードされ、「ePortalに表示された直後」とみなされるためです。つまり、すべてのパッチのePortal表示時刻が同じになり、Deploy after X hoursオプションは無効になります。

![](/images/feedmanagement3_zoom70.png)

ePortalのメインページで、ユーザーは対応するキーとフィードのペアを設定できます。これは、キー作成インターフェイスにて、またはキーの編集時に行われます。

![](/images/feedmanagement4_zoom70.png)

デフォルトでは、新しいキーはデフォルトフィードにバインドされます。その代わりに、ユーザーはドロップダウンメニューからご希望のフィードを選択することもできます。

![](/images/feedmanagement5_01_zoom70.png)

:::tip 注
フィードを削除すると、そのフィードに関連付けられているすべてのキーがデフォルトフィードに移動されます。
:::

![](/images/feedmanagement6_zoom70.png)

### フィードを管理するCLI

```
~$ kc.eportal feed --help
usage: kc.eportal feed [-h] [-a] [-c] [--auto] [--no-auto]
                       [--deploy-after hours]
                       [feed]

list available feeds by default

positional arguments:
  feed                  feed name

optional arguments:
  -h, --help            show this help message and exit
  -a                    action: add new feed
  -c                    action: change feed
  --auto                update feed automatically
  --no-auto             don't update feed automatically
  --deploy-after hours  deploy after specified hours
```

フィードのリストを表示します。

```
kc.eportal feed
```

自動更新フィードを追加します。

```
kc.eportal feed -a test --auto
```

フィードを遅延フィードに変更します。

```
kc.eportal feed -c test --deploy-after 12
```


## 特別なタグフィールドの追加
 
サーバーに特別なタグフィールドを追加するには、以下を実行します。

```
kcarectl --tag command
```

ここで、`command`はユーザー定義パラメーターです。このパラメーターは、UIでサーバー用に表示されます。ユーザーは、各サーバー用に複数のタグを追加できます。各タグは;記号で区切る必要があります。

例えば、

```
kcarectl --tag "env:prod;ubuntu"
```

このサーバーには、`env:prod`と`ubuntu`の2つのタグがあります。

`env:prod`は、タグ名`env`と値`prod`を持つパラメーターです。

![](/images/addingextratagfield_zoom88.png)

特定のサーバーからすべてのタグを削除するには、以下を実行します。

```
kcarectl --tag ""
```

ここで、`""`は以前に定義したタグを削除するためのパラメーターです。


## HTTPSを使用するようにePortalを設定する方法

以下が、ePortalが展開されているサーバーの前提です。

### ePortalパブリックnginx WebサーバーでのTLSの終了

1. ファイアウォールは、443ポートへの接続を許可しています。
2. 秘密鍵と公開鍵がサーバーにダウンロードされています。

* 証明書に従って、SSL設定テンプレートを編集します。

```
mv /etc/nginx/eportal.ssl.conf.example /etc/nginx/eportal.ssl.conf
vi /etc/nginx/eportal.ssl.conf
```

* この設定をメインの設定に含めます。

```
sed -e '3iinclude eportal.ssl.conf;' -i /etc/nginx/conf.d/eportal.conf
```

* nginxを再起動します。

```
service nginx restart
```

### 外部バランサーでのTLSの終了

お好みのリバースプロキシサーバーを使用して、TLSトラフィックを終了し、リクエストをePortalインスタンスに転送できます。要件は、正しい`Host`ヘッダーと`X-Forwarded-Proto`ヘッダーを提供することのみです。

たとえば、バランサnginxのconfigは以下のとおりです。

```
server {
   listen       443 ssl;
   server_name  your-eportal-domain;

   # ssl stuff ...
   # ssl_certificate  ...
   # ssl_certificate_key ...

   location / {
      proxy_pass http://eportal-instance-address;
      proxy_set_header Host $http_host;
      proxy_set_header X-Forwarded-Proto https;
   }
}
```

### エージェント設定の更新

httpsに更新されたePortalと通信するには、IPがハードコーディングされたサーバー設定の場合、すべてのサーバーのKernelCare構成ファイルを修正する必要があります。

変更を行うには、`PATCH_SERVER`と`REGISTRATION_URL`オプションを更新します。

```
vi /etc/sysconfig/kcare/kcare.conf
```

つまり、編集後に、以下の例のように、`/etc/sysconfig/kcare/kcare.conf`には更新された環境変数`PATCH_SERVER`と`REGISTRATION_URL`が含まれている必要があります。

```
PATCH_SERVER=https://eportal_domain_name/
REGISTRATION_URL=https://eportal_domain_name/admin/api/kcare
```

別の方法として、パッチサーバーアドレスを更新するのに、ePortalの特別なエンドポイントを使用できます。

```
curl -s https://eportal_domain_name/set-patch-server | bash
```


## 高可用性

バージョン1.28以降、ePortalはアプリケーションレベルのレプリケーションをサポートしています。リーダーからフォロワーへ、フォロワーからリーダーへ、両方向に変更を伝達できます。

レプリケーションに関する構成設定は、[ePortal構成ファイル](#config-files)で変更できます。

* `NODE_URL`：自動検出用に必要な自身のインスタンスへのURL
* `LEADER_URL`：変更の取得元のインスタンスへのURL
* `REPLICATION_SHARED_KEY`：レプリケーションデータにアクセスするための認証キー
* `REPLICATION_CHECK_CERT`：レプリケーションリクエストに厳密なTLS証明書認証を使用します。適切なTLS証明書を取得せずに、レプリカに自己署名証明書を展開し、暗号化されたレプリケーショントラフィックを取得すると便利な場合があります。
* `REPLICATION_CLEAN_AGE`：oplogクリーンアップ中の秒単位のデータ保存時間。デフォルトでは、7日間です。
* `REPLICATION_CLEAN_AGGRESSIVE_AGE`: 重要でない操作向けoplogクリーンアップ中の秒単位のデータ保存時間。デフォルトでは、1時間です。

リーダーノードはフォロワーを自動的に検出し、その後変更を取得します。

ePortalクラスタへのエージェントリクエストの負荷を分散する、どんな便利な方法でも使用できます。たとえば、複数のIPアドレスをDNS名に追加したり、HTTPバランサを使用したりできます。


### 基本設定

1. 2つの新しいePortalインスタンスを準備し、DNS名をIPに割り当てます。例えば、

   * eportal1.corp -> 192.168.1.11
   * eportal2.corp -> 192.168.1.12
   * eportal.corp -> 192.168.1.11、192.168.1.12

2. `eportal1`をリーダー、`eportal2`をフォロワーとして選択しましょう。`eportal.corp`は、KernelCareエージェントがあるサーバーに使用するクラスタのホスト名です。

   :::danger 警告！
   クラスタのホスト名を使用して、ePortal管理UIで操作を行わないでください。
   :::

3. `eportal1`で、構成ファイルに`NODE_URLとREPLICATION_SHARED_KEY`を定義します。

   ```
   NODE_URL = 'http://eportal1.corp'
   REPLICATION_SHARED_KEY = 'secret'
   ```

4. `eportal2`で、`NODE_URL`、`LEADER_URL`、`REPLICATION_SHARED_KEY`を定義します。

   ```
   NODE_URL = 'http://eportal2.corp'
   LEADER_URL = 'http://eportal1.corp'
   REPLICATION_SHARED_KEY = 'secret'
   ```

5. 以上になります。両ホストでePortalを再起動した後、`eportal1`での変更は`ePortal2`インスタンスに複製されるようになります。その逆も同様です。

:::tip 注
以下のコマンドで、KernelCareのエージェント設定を変更して、クラスタのホスト名を指すようにすることができます。
```
curl -s http://eportal.corp/set-patch-server | bash
```
:::

### 既存のePortalインスタンスへのノードの追加

すでに動作中のePortalインスタンスがある場合は、2番目のノードを設定し、両インスタンスで`NODE_URL`と`LEADER_URL`を定義します。その後、フォロワーインスタンスにて、以下の方法で完全同期をトリガーできます。

```
[root@eportal2.corp]$ kc.eportal replication --full-sync
```

### モニタリング

`kc.eportal replication --short-status` CLIコマンドを使用して、レプリケーションのステータスを確認できます。レプリケーションに問題がある場合はコード1で終了し、以下のようなJSONを出力します。

```json
{
  "ok": true,       // overall health status
  "lag": 1,         // overall replication lag in seconds
  "last_sync": 1,   // overall sync delta in seconds (how many seconds ago was successful communication with an upstream)
  "upstream": {     // per upstream metrics
    "node2": {
      "ok": true
      "lag": 1,
      "last_sync": 1,
    },
    "node3": {
      "ok": true
      "lag": 1,
      "last_sync": 1,
    }
  }
}
```

### その他のレプリケーション設定

1リーダーと2フォロワーの設定の場合、

```
     +-> leader <-+
     |            |
     |            |
follower1       follower2
```

リーダーノードが失われて、`follower1`と`follower2`が相互に通信できなくなる可能性があります。この問題を軽減するために、リングレプリケーションを展開できます。

```
  +-> node1 --+
  |           |
  |           v
node2 <---- node3
```

この場合、各インスタンスは別のノードに続きます。


### 警告

1. レプリケーションは、HTTPトランスポートを使用しています。 SSLターミネーションなしでePortalを展開すると、レプリケーションデータは暗号化されずにそのまま転送されます。

2. ラウンドロビンバランサー設定（DNSまたはHTTPラウンドロビンバランサー）では、KernelCareエージェントは、一連の登録とそれに続く更新の場合に、レプリケーションラグが発生する可能性があります。問題を軽減するために、構成管理ロジックに10秒のタイムアウトまたはリピートを導入できます。

3. レプリケーションログは7日間保存されます。ノードが7日間を超えて接続を失った場合、一部の変更がスキップされます。


## KernelCare Enterpriseの展開

KernelCareエージェントのインストール手順は、 [http://your-eportal-domain/admin/docs/](http://your-eportal-domain/admin/docs/)にあります。

ePortalからエージェントをインストールするには、特別なエンドポイント`http://your-eportal-domain/install-kernelcare`を使用できます。

```
$ export KCARE_MAILTO=admin@mycompany.com
$ curl -s http://eportal.mycompany.com/install-kernelcare | bash
$ kcarectl --register my-key
```

`KCARE_MAILTO`のエクスポートの手順は、オプションです。これは、KernelCareの更新失敗に関するすべての通知を受け取るように、`/etc/cron.d/kcare-cron`で対応するエントリーを設定するのに役立ちます。

### KernelCare Enterpriseクライアント構成ファイル

KernelCare Enterpriseクライアント構成ファイルは、`/etc/sysconfig/kcare/kcare.conf`にあります。

例えば、

```
AUTO_UPDATE=True
PATCH_SERVER=http://10.1.10.115/
REGISTRATION_URL=http://10.1.10.115/admin/api/kcare
```

`AUTO_UPDATE`が`True`に設定されている場合、KernelCareクライアントは4時間ごとにチェックインし、最新のパッチをダウンロードして適用しようとします。

`PATCH_SERVER` - パッチのダウンロード元サーバー

`REGISTRATION_URL` - サーバーの登録／登録解除に使用されるURL

### 展開の自動化

Ansible／Puppet／Chef／Salt などの自動化ツールを使用して、多数のシステムにKernelCareをインストールして、操作することができます。

展開のプロセスには、以下が含まれています。

* `http://your-eportal-domain/install-kernelcare`スクリプトの実行。事前にダウンロードする（チェックサムを確認する）か、`curl -s http://your-eportal-domain/install-kernelcare | bash`を直接実行できます。
* アクティベーションキーを使用したKernelCareエージェントの登録

#### Ansible

自動展開を開始するには、以下の情報を指定する必要があります。

* eportal_srv Ansible変数のePortalサーバー名（または、IP）。その他の構成ファイルオプションは、[設定オプション](/live-patching-services/#config-options)および [KernelCare Enterpriseクライアント構成ファイル](#kernelcare-enterprise-client-config-file)（ePortal）にあります。

* activation_key Ansible変数のアクティベーションキー。アクティベーションキーは、[キーの管理](#managing-keys)（ePortal）で説明されているように、ePortalで生成できます。

展開フェーズ用のAnsible Playbookは、以下に似た表示になる可能性があります。

```
- hosts: kernelcare
  vars:
    eportal_srv: http://192.168.250.19
    activation_key: my-key
  tasks:
    - name: Download the installation shell script
      get_url:
        url: "{{ eportal_srv }}/install-kernelcare"
        dest: /root/kc-install.sh
        mode: '0700'

    - name: Run the installation shell script
      command: /root/kc-install.sh

    - name: register KernelCare agents
      command: /usr/bin/kcarectl --register {{ activation_key }}
```

KernelCareエージェントを削除するためのAnsible Playbookファイルの例は、以下のとおりです。

```
- hosts: kernelcare
  tasks:
    - name: unregister KernelCare agents
      command: /usr/bin/kcarectl --unregister
      ignore_errors: yes
      args:
        removes: /usr/bin/kcarectl

    - name: remove kernelcare package
      package:
        name: kernelcare
        state: absent
```

### ePortal IP／ドメインの変更

KernelCareエージェントのあるホストで2つの特別なエンドポイントを呼び出すことにより、いつでもePortalのアドレスを変更できます。

```
curl -s http://your-eportal-domain/set-kernelcare-repo | bash
curl -s http://your-eportal-domain/set-patch-server | bash
```

* `set-kernelcare-repo`は、ePortal経由でエージェントの更新をダウンロードする新しいパッケージリポジトリを設定します。
* `set-patch-server`は、パッチサーバーの新しいアドレスを設定します。


## ePortalの移行

ここでは、あるePortalから別のePortalに、フィード／サーバー／キーの構成とパッチデータを移行する手順を解説します。新しいホストのePortalバージョンは1.18以上で、古いホストのバージョン以上である必要があります。

DebianベースのシステムからDebianベースのシステムに移行する場合、以下の簡単な手順になります。

* 両ホストでePortalを停止します。
* `/var/lib/ePortal`を新しいホストにコピーします。注：ディレクトリの所有者は、`eportal:eportal`のままにしておく必要があります。
* 構成ファイル`/etc/eportal/config`が存在する場合はコピーします。
* 新しいホストにて、`/usr/share/kcare-eportal/migratedb.py --upgrade`で移行を実行します。
* 新しいホストでePortalを開始します。

RHELベースのディストリビューションからの移行は、より複雑です。後で、スクリプトにて`$BASE_DIR`変数が参照されます。`$BASE_DIR`変数は、RHELベースのディストリビューション用にエクスポートできます。

```
export BASE_DIR=/usr/share/kcare-eportal
```

また、Debianベースのディストリビューションの場合は、

```
export BASE_DIR=/var/lib/eportal
```

また、Dockerベースのインストールの場合は、対応するデータディレクトリを使用します。たとえば、コンテナを`docker run -v /var/lib/eportal/data:/var/lib/eportal/data kernelcare/eportal`として実行する場合、`$BASE_DIR`として`/var/lib/eportal/data`を使用します。

```
export BASE_DIR=/var/lib/eportal/data
```

* 両ホストでePortalを停止します。

  ```
  [old-host ~]# systemctl stop eportal
  ```

  ```
  [new-host ~]# systemctl stop eportal
  ```

* 新しいホストでdbファイルを削除します。

  ```
  [new-host ~]# rm $BASE_DIR/*.sqlite*
  ```

* 古いホストから新しいホストにデータベースファイル`$BASE_DIR/*.sqlite*`をコピーします。

* （オプション）ランタイムLDAPとフィードソースの設定`$BASE_DIR/config/config.json`をコピーします。

* （オプション）ePortalのWebアプリ設定`/usr/share/kcare-eportal/config/local.py`を新しいePortalにコピーします。また、`/etc/eportal/config`が存在する場合は、それを新しいホストの`/etc/eportal/config`にコピーします。

* 新しいePortalへ移行が行われたことを当社の請求部門が認識できるようにし、二重請求が行われないように、`$BASE_DIR/instance-id`をコピーします。

* パッチデータ`$BASE_DIR/{arch,resources,user-resources}`を新しいホストにコピーします。

* ファイルの所有者を設定します。RHELベースのディストリビューションの場合、

  ```
  [new-host ~]# chown -R nginx:nginx $BASE_DIR
  ```

  Debianベースのディストリビューションの場合、

  ```
  [new-host ~]# chown -R eportal:eportal $BASE_DIR
  ```

* 新しいホストで、移行`/usr/share/kcare-eportal/migratedb.py --upgrade`を実行します。

* 新しいホストでePortalを開始します。

  ```
  [new-host ~]# systemctl start eportal
  ```


## データベースのバックアップ

### バックアップの作成

kc.eportalユーティリティには、データベースのバックアップを作成するオプションがあります

`kc.eportal backup-db <path_to_directory>` - 指定されたディレクトリにバックアップを作成します。ディレクトリが存在しない場合は、ディレクトリが作成されます。

例えば、

```
kc.eportal backup-db /usr/share/kcare-eportal/db-backup_$(date '+%Y-%m-%d')
```

### バックアップからの復元

既存のデータベース（デフォルトでは、ePortalホームディレクトリ内にあります）をバックアップ ファイルで置き換えることができます。

重要：データベースファイルを置き換える前に、ePortalを停止する必要があります。バックアップ ファイルには、所有者とグループ`nginx:nginx`が必要です。

例えば、

```
systemctl stop eportal
cp -f /path/to/backup_dir/* /usr/share/kcare-eportal/
chown nginx:nginx /usr/share/kcare-eportal/*.sqlite*
systemctl start eportal
```

また、リモートパッチソースの設定（ePortal UIのユーザー名、パスワード、ダウンロード URL）を確認し、その後、パッチをダウンロードする必要があります。

```
kc.eportal kcare download-missing
kc.eportal libcare download-missing
kc.eportal qemu download-missing
kc.eportal db download-missing
```


## 構成ファイル

* ePortalの構成ファイル：`/etc/eportal/config`。バージョン1.35よりも古いバージョンの構成ファイル： `/usr/share/kcare-eportal/local.py`。
* Webサーバー（nginx）の構成ファイル：`/etc/nginx/conf.d/eportal.conf`。
* データディレクトリ（RHELベースのディストリビューション）：`/usr/share/kcare-eportal`。
* データ ディレクトリ（Debianベースのディストリビューション）：`/var/lib/eportal`。


## 停止と開始

nginxサーバーの設定を停止／開始／リロード／再起動するには、

```
$ systemctl stop|start|reload|restart nginx
```

ePortalを停止／開始／再起動するには（Python）、

```
$ systemctl stop|start|restart eportal
```


## ログファイル

ePortalのログ： `journalctl -u eportal`

Nginx ePortalのアクセスログ：`/var/log/nginx/access.log`

Nginxのエラーログ：`/var/log/nginx/error.log`


### ログローテーション

デフォルトでは、ePortalのログローテーション用の定義済みパラメータはありません。上記のファイルに対してログローテーションを有効にする場合は、

 - `logrotate`パッケージをインストールする
 - `/etc/logrotate.d/eportal`構成ファイルを作成／編集する

logrotate設定の例は、以下のとおりです。

```
/var/log/nginx/kcare-eportal.log {
    daily
    rotate 5 # keep 5 last archives
    missingok # it's ok if there is no such file
    notifempty # do nothing if file is empty
    compress
}
```


## NagiosとZabbixのサポート

バージョン1.2以降のKernelCare.ePortalは、[Nagios](/kc-agent-monitoring/#nagios-plugin)と[Zabbix](/kc-agent-monitoring/#zabbix-template)の監視と同様のサーバー監視をサポートしています。

情報を受け取るには、APIを直接curlします。

```
https://yourserver/admin/api/kcare/nagios/KCAREKEY
```

または、[https://patches.kernelcare.com/downloads/nagios/check_kcare](https://patches.kernelcare.com/downloads/nagios/check_kcare) スクリプトを使用することができます。使用するには、スクリプト内のKEY_KCARE_NAGIOS_ENDPOINTをご利用のサーバーを指すように変更します。つまり、[https://cln.cloudlinux.com/clweb](https://cln.cloudlinux.com/clweb)（古いUIへのリンク）または[https://cln.cloudlinux.com/console/auth/login](https://cln.cloudlinux.com/console/auth/login)（新しいUIへのリンク）を[https://yourserver/admin](https://yourserver/admin)へ変更します。

:::tip 注
`PARTNER_LOGIN/TOKEN`を使用したアクセスは、KernelCare.ePortalではサポートされていません。
:::

## 使用状況レポート

通常、使用状況レポートは自動的に送信されます。ただし、送信できない場合は、ePortalはレポートをEメールで送信しようとします。これには、ホストに設定されたSendmail（SSMTP）が必要になります。以下が簡単な手順になります。

メールの送信に失敗した場合、ePortalはレポートを`/usr/share/kcare-eportal/reports`に保存します。これらのレポートは、手動で送信する必要があります。

### Sendmail（SSMTP）の設定方法

まず、`ssmtp`をインストールする必要があります。

    yum install -y ssmtp

SMTPサーバーの設定に従って、`/etc/ssmtp/ssmtp.conf`ファイルを編集します。以下は、Gmailアカウントに接続する一般的な方法が記述された簡単な構成ファイルです。

    root=username@gmail.com
    mailhub=smtp.gmail.com:587
    hostname=localhost
    UseSTARTTLS=YES
    AuthUser=username@gmail.com
    AuthPass=xxxxxxxxxxxxxxxxxxx
    FromLineOverride=YES
    TLS_CA_File=/etc/ssl/certs/ca-certificates.crt

TLS_CA_Filesの実際の場所は、Linuxディストリビューションによって異なります。

    "/etc/ssl/certs/ca-certificates.crt",                // Debian/Ubuntu/Gentoo etc.
    "/etc/pki/tls/certs/ca-bundle.crt",                  // Fedora/RHEL 6
    "/etc/ssl/ca-bundle.pem",                            // OpenSUSE
    "/etc/pki/tls/cacert.pem",                           // OpenELEC
    "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem", // CentOS/RHEL 7

また、以下を実行して、取得できます。

    curl-config --ca

これで、接続をテストできます。

    echo -n 'Subject: test\n\nTesting ssmtp' | sendmail -v some-recipient@gmail.com

## カスタム環境変数

ePortalプロセス用に独自の環境変数を定義できます。

`/usr/share/kcare-eportal/environment`フォルダがあり、これは基本的にデーモンツールと互換性のあるenvdirです。

たとえば、デフォルトのhttps検証を無効にするには、以下のように`PYTHONHTTPSVERIFY`環境変数を0に設定します。

```
echo 0 > /usr/share/kcare-eportal/environment/PYTHONHTTPSVERIFY`
```


## シングルサインオンによる認証

ePortalは「OAuth 2.0」標準、「認証コード」フローによるシングルサインオン認証をサポートしています。

### 設定

SSOを有効にするには、OAuth2認証サービスプロバイダーとePortalを設定する必要があります。

#### Oktaアプリケーションの設定例

Okta管理コンソール内で、OpenID Connectアプリケーションを設定します。

1. 管理コンソールで、**Applications** > **Applications**に移動します。

2. Create **App Integration**をクリックします。

3. Create a new app integrationページで、まず**Sign-in method**として**OIDC - OpenID Connect**を選択し、次に**Application type**として**Web Application**を選択します。

4. **Application Settings**を入力します。

| **設定**           | **値**
|-----------------------|-------------------------------------------
| Sign-in redirect URI  | http://eportal_ip/admin/sso/login/callback
| Sign-out redirect URI | http://eportal_ip/admin

5. *Client ID*、*Client secret*、`/authorize`、`/token`、`/userinfo`エンドポイントへの完全なURLを取得します。

#### ePortalの設定

ePortalマシンで、SSO設定を構成します。

[ePortal構成ファイル](#config-files)を編集します。

```
OIDC_AUTH_URL="https://dev-61441893.okta.com/oauth2/v1/authorize"
OIDC_TOKEN_URL="https://dev-61441893.okta.com/oauth2/v1/token"
OIDC_USERINFO_URL="https://dev-61441893.okta.com/oauth2/v1/userinfo"

OIDC_CLIENT_ID="0Aa134lzhUKj8jDMo5d7"
OIDC_CLIENT_SECRET="AoBNuWRLRu2dxIR3Q0btO53N1entmGxBjQqwmjVL"
```

ePortalを再起動します（[停止と開始](#stopping-starting)欄を参照し、対応するOSを選択してください）。

すべての設定が正しく構成されている場合、新しい**Sign In with SSO**ボタンがログインページ`http://eportal_ip/admin/login`に表示されているはずです。

![](/images/sso_eportal.png)


## カスタムパッチストレージ

デフォルトでは、パッチとデータベースは、RHELベースのシステムの場合は`/usr/share/kcare-eportal`に、debベースのシステムの場合は`/var/lib/eportal`に保存されています。たとえば、外部ブロックデバイスにパッチを保存するなど、分割ストレージを使用するように設定できます。

[ePortal構成ファイル](#config-files)を編集します。

```
PATCHES_DIR = '/path/to/patches/storage'
```

以下を実行します。

```
kc.eportal sync-nginx-conf
```

ストレージが初期化され、新しい場所からパッチが提供されるように、nginx構成ファイルに対応する変更が行われます。

`nginx`と`ePortal`サービスを再起動して、変更を適用します。

```
systemctl restart eportal nginx
```
