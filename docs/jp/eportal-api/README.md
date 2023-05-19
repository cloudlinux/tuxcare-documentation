---
sidebarDepth: 1
---

# ePortal API

以下のコマンドで、API使用のための別のePortalアカウントを作成する必要がある場合があります。

```
kc.eportal user -a api-user -p <password>
```

Basic認証を介してHTTP API資格情報を渡すことができると、SSO/LDAP設定に役立つ場合があります。

一般に、ePortal APIは構成管理が簡単で、冪等性があります。既存の状態を確認するのに追加のリクエストを行う必要はありません。たとえば、存在しないエンティティを削除したとしても、エラーは発生しません。また、エンティティの作成／変更は、単一のリクエストで実行され、問題なく、容易にご希望の最終状態を得ることができます。

## サーバーのリスト表示

**GET /admin/api/servers**

さまざまな基準でサーバーをフィルタリングして、リストを反復処理して、サーバー数を取得します。

読み取り専用のユーザー権限のBasic認証が必要です。

**クエリ文字列パラメータ：**

* `hostname`：String（オプション）。パターンとマッチするホスト名のサーバーを返します。パターンには、任意の文字列にマッチする%プレースホルダーを含めることができます。
* `ip`：String（オプション）。パターンとマッチするIPのサーバーを返します。パターンには、任意の文字列に一致するプレースホルダーを含めることができます。
* `feed`：String（オプション）。フィードに接続されたサーバーを返します。デフォルトフィードにはmainを使用してください。
* `key`：String（オプション）。キーに登録されているサーバーを返します。
* `registered_age`：Integer（オプション）。`registered_age`日前よりも前に登録されたサーバーを返します。`registered_age`が負の値の場合、`-registered_age`日前以降に登録されたサーバーを返します。例えば、`registered_age=-3`の場合は、3日前以降に登録されたサーバーを返すことになります。hサフィックスを追加して、時間を指定できます。`registered_age=4h`の場合は、4時間前よりも前に登録されたサーバーを選択します。
* `checkin_age`：Integer（オプション）。`checkin_age`日前よりも前にチェックインを送信したサーバーを返します。負の値の場合は、`registered_age`を参照してください。
* `updated_age`：Integer（オプション）。updated_age日前よりも前にパッチをロードしたサーバーを返します。負の値の場合は、`registered_age`を参照してください。
* `is_updated`：Boolean（オプション）。`true`の場合、利用可能な最新のパッチに更新されているサーバーを返します。`false`の場合、最新のパッチが適用されていないサーバーを返します。
* `limit`：Integer（オプション）。結果を指定されたエントリ数に制限します。デフォルトでは、`limit`は10です。
* `offset`：Integer（オプション）。結果を指定された開始位置に設定します。`limit`とoffsetを使用して、結果を反復処理できます。
* `only_count`：Boolean（オプション）。サーバー数のみを返します。
* `tag`：String（オプション）。サーバータグによるフィルターを追加します。例：`tag=env:test`または`tag=ubuntu`.

**応答：**

```json
{
    "count": 42,
    "limit": 10,
    "offset": 0,
    "result": [
        {
            "id": "99c97tz44uKX13b5",
            "ip": "10.51.16.72",
            "hostname": "localhost.localdomain",
            "key": "some-key",
            "feed": "main",
            "registered": "2021-04-08 16:43:23.907671",
            "checkin": "2021-07-12 17:35:56.065077",
            "updated": "2021-06-01 16:37:03.000000",
            "euname": "3.10.0-1160.25.1.el7",        // effective kernel version
            "release": "3.10.0-957.5.1.el7.x86_64",  // installed kernel version
            "kernel_id": "9647204d2708cad906a75944ee56ac68fc5b5704",
            "patch_level": 49,
            "patch_type": "default",
            "tags": null,
            "uptime": 6394092,
            "version": "#1 SMP Fri Feb 1 14:54:57 UTC 2019",
            "virt": "kvm",
            "kcare_version": "2.44-2",
            "distro": "CentOS Linux",
            "distro_version": "7.6.1810",
            "machine": "x86_64",
            "processor": "x86_64"
        },
        ...
    ]
}
```

## ホストの登録

**POST /admin/api/register**

指定されたキーとホスト名でホストを登録します。

**フォーム（URLエンコードされた）パラメータ：**

* `key`：String（必須）。登録に使用するePortalキー。
* `hostname`：String（オプション）。使用するサーバーのホスト名。

**成功した場合の応答（200）：**

```json
{
    "server_id": "some-server-id"
}
```

**エラーの場合の応答（400）：**

```json
{
    "error": "error code" # invalid-key | key-limit-reached
}
```

**例：**

```
curl -X POST https://eportal.corp.com/admin/api/register -F key=test
{"server_id":"lw1MO1Du5sF3Cj39"}
```


## ホストの登録解除

**POST /admin/api/delete_server**

IPまたはホスト名で登録済みサーバーを削除します。

管理者ユーザー権限によるBasic認証が必要です。

**クエリ文字列パラメータ：**

* `hostname`：String（オプション）。削除するサーバーのホスト名。
* `ip`：String（オプション）。削除するサーバーのIP。

エンドポイントには、少なくとも1つのパラメータ（ホスト名またはIP）が必要です。

**応答：**

応答には、削除されたサーバー数が含まれています。

```json
{
    "result": 1
}
```

例えば、

```
curl --user admin:admin-password -X POST https://eportal.corp.com/admin/api/delete_server?ip=192.168.1.1
```

以下は、さまざまなCM製品で`/admin/api/delete_server`エンドポイントを使用する例です。注意：API経由で削除するには、ホストIPまたはホスト名が必要です。以下の方法のいずれかを使用する方が便利です。

* （稼働している）ホストへのアクセス権がある場合、`kcarectl --unregister`を呼び出してホストを削除する方がはるかに簡単です。
* ホストがすでに破棄されている場合は、一括で[非アクティブサーバーのクリーンアップ](#clean-inactive-servers)を使用することを検討できます。


### Ansible playbook

ePortal APIアクセスをAnsibleと統合できるようになりました。kernelcareエージェントを呼び出してタスクを実行する代わりに、ePortalを直接呼び出して同じ結果を得ることができます。

API Playbookを使用して、KernelCareエージェントを登録解除します。

```json
- hosts: kernelcare
  vars:
    eportal_srv: http://eportal.address.here[:port if needed]

  tasks:
    - name: unregister kernelcare agent through API
      uri:
        url: "{{ eportal_srv }}/admin/api/delete_server?ip={{ ansible_default_ipv4.address|default(ansible_all_ipv4_addresses[0]) }}"
        method: POST
        user: your-api-user
        password: your-api-user-password
        force_basic_auth: yes
```

例えば、

```json
- hosts: kernelcare
  vars:
    eportal_srv: http://192.168.246.110

  tasks:
    - name: unregister kernelcare agent through API
      uri:
        url: "{{ eportal_srv }}/admin/api/delete_server?ip={{ ansible_default_ipv4.address|default(ansible_all_ipv4_addresses[0]) }}"
        method: POST
        user: api-user
        password: dummy
        force_basic_auth: yes
```

以下のコマンドをアドホック実行します。

```
ansible-playbook -u ansible  ./kernelcare.yml
```

マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。

### Chefのrecipe

Chefのような自動化ツールとより緊密に統合することは、KernelCareとePortalのような関連ツールにとって常に目標でした。以下のrecipeは、delete_server APIを使用して、ティアダウン中にePortalから正確にサーバーを削除する方法を示しています。このrecipeは、他のrecipeと統合して、手動操作を回避できます。

APIを使用して、KernelCareエージェントを登録解除するrecipe：

```json
eportal_url = "EPORTAL URL"
eportal_user = "EPORTAL API USER NAME"
eportal_password = "EPORTAL API USER PASSWORD"

# the ip to unregister can be pulled automatically from the system where the recipe is applied, or specified manually (by replacing the following line with a simple assignment)
ip_to_unregister = "#{node['network']['interfaces'][node['network']['default_interface']]['addresses'].select{|k,v| v['family'] == "inet"}.keys.first}"


http_request "kernelcare-unregister-api" do
  url "#{eportal_url}/admin/api/delete_server?ip=#{ip_to_unregister}"
  action :post
  headers({'AUTHORIZATION' => "Basic #{
    Base64.encode64("#{eportal_user}:#{eportal_password}")}",
  })
end
```

例（kernelcare-unregister-api.rb）：

```json
eportal_url = "http://192.168.246.110"
eportal_user = "api-user"
eportal_password = "dummy"

ip_to_unregister = "#{node['network']['interfaces'][node['network']['default_interface']]['addresses'].select{|k,v| v['family'] == "inet"}.keys.first}"

http_request "kernelcare-unregister-api" do
  url "#{eportal_url}/admin/api/delete_server?ip=#{ip_to_unregister}"
  action :post
  headers({'AUTHORIZATION' => "Basic #{
    Base64.encode64("#{eportal_user}:#{eportal_password}")}",
  })
end
```

以下をアドホック実行します。

```
chef-apply kernelcare-unregister-api.rb
```

出力：

```json
Recipe: (chef-apply cookbook)::(chef-apply recipe)
  * http_request[kernelcare-unregister-api] action post
    - http_request[kernelcare-unregister-api] POST to http://192.168.246.110/admin/api/delete_server?ip=192.168.246.40
```

マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。

### Puppetのタスク

Puppetは、対象のシステムでタスクを実行するためのフレームワークを提供しています。以下は、そのようなタスクとして実行できるbashスクリプトで、delete_server APIを使用して、ティアダウン中にePortalから正確にサーバーを削除する方法を示しています。他の削除スクリプトやタスクと統合して、手動操作を回避できます。

API呼び出しを介してKernelCareエージェントを登録解除します。

```bash
#!/bin/bash

EPORTAL_API_USERNAME=<your ePortal api user name>
EPORTAL_API_PASSWORD=<your ePortal api user password>
EPORTAL_URL='your ePortal URL'

#this is taken from the primary ip in the system. If awk is available, it is used, but a fallback using other common tools is also provided
if hash awk 2>/dev/null; then
        IP_TO_UNREGISTER=`ip route get 1 | awk '{print $(NF-2);exit}'`     # using awk
else
        IP_TO_UNREGISTER=`ip route get 1 | cut -f 3 -d" "| head -1`        # simpler alternative for when awk is not available
fi

curl -kL -u "${EPORTAL_API_PASSWORD}"':'"${EPORTAL_API_PASSWORD}" -X POST "${EPORTAL_URL}"'/admin/api/delete_server?ip='"${IP_TO_UNREGISTER}"
```

例（unregister_server.sh）：

```bash
#!/bin/bash

EPORTAL_API_USERNAME=admin
EPORTAL_API_PASSWORD=admin
EPORTAL_URL='http://192.168.246.110'

#this is taken from the primary ip in the system. If you want to pick a different one, adjust the next line.
if hash awk 2>/dev/null; then
        IP_TO_UNREGISTER=`ip route get 1 | awk '{print $(NF-2);exit}'`     # using awk
else
        IP_TO_UNREGISTER=`ip route get 1 | cut -f 3 -d" "| head -1`        # simpler alternative for when awk is not available
fi

curl -kL -u "${EPORTAL_API_PASSWORD}"':'"${EPORTAL_API_PASSWORD}" -X POST "${EPORTAL_URL}"'/admin/api/delete_server?ip='"${IP_TO_UNREGISTER}"
```

### Puppetのプラン

タスクではなくプランの作成をご希望の場合は、以下の手順でこのスクリプトから作成できます。

* `eportal_puppet`という新しいディレクトリを作成します
* このディレクトリ内に、以下のコマンドでboltプロジェクトを作成します
  ```
  bolt project init
  ```
* その中にスクリプトディレクトリを作成します
* その中に上記のスクリプトを配置します（このスクリプトを`unregister_server.sh`と呼びます）
* 以下を使用して、boltのプランを作成します
  ```
  bolt plan new eportal_puppet::unregister_server --script eportal_puppet/scripts/unregister_server.sh
  ```
* これでプランができました。以下の方法で直接呼び出すことができます。
  ```
  bolt plan run eportal_puppet:unregister_server -t <TARGETS>
  ```

アドホック実行の例：

```
bolt plan run eportal_puppet::unregister_server -t 192.168.246.110
```

マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。


## フィードの作成／変更

**POST /admin/api/feeds/**

フィードが既に存在する場合は、リクエストによってフィードが変更されます。

書き込み権限が必要で、Basic認証を受け入れます。

**クエリ文字列／フォーム／JSONパラメータ：**

* `name`：String（必須）。作成または変更されたフィードの名前。
* `auto`：Boolean（オプション）。自動更新プロパティを設定します。デフォルトでは、falseです。
* `deploy_after`：Integer（オプション）。遅延期間を時間単位で設定します。デフォルトでは、0（遅延なし）です。

**応答：**

```json
{
  "result": {
    "name": "test-feed",
    "auto": true,
    "deploy_after": 0
  }
}
```

**例：**

```
curl -X POST -u admin -d name=test-feed -d auto=true https://eportal.corp.com/admin/api/feeds/
```


## フィードのリスト表示

**GET /admin/api/feeds/**

既存のフィードのリストを返します。注意：`main`フィードは常に存在し、変更できません。

読み取り権限が必要で、Basic認証を受け入れます。

**応答：**

```json
{
  "result": [
    {
      "auto": false,
      "deploy_after": 0,
      "name": "feed-name"
    },
    ...
  ]
}
```


**例：**

```
curl -u admin https://eportal.corp.com/admin/api/feeds/
```


## フィードの削除

**DELETE /admin/api/feeds/:feed-name**

書き込み権限が必要で、Basic認証を受け入れます。

**応答：**

```json
{
  "result": 1  // number of deleted records, 0 if there is no such feed.
}
```

**例：**

```
curl -X DELETE -u admin https://eportal.corp.com/admin/api/feeds/test-feed
```


## 登録キーの作成／変更

**POST /admin/api/keys/**

キーがすでに存在する場合は、リクエストによってキーが変更されます。

書き込み権限が必要で、Basic認証を受け入れます。

**クエリ文字列／フォーム／JSONパラメータ：**

* `key`：String（オプション）。作成または変更されたキーの名前。空の場合は、ランダムキーが生成されます。
* `feed`：String（オプション）。接続されたフィードの名前。デフォルトでは、`main`です。
* `note`：String（オプション）。キーの説明。
* `server_limit`：Integer（オプション）。キーに登録できる最大ホスト数の推奨制限。

**応答：**

```json
{
  "result": {
    "key": "key",
    "feed": "feed-name",
    "note": "some-note",
    "server_limit": 0
  }
}
```

**例：**

```
curl -X POST -u admin -d key=test-key -d feed=test-feed https://eportal.corp.com/admin/api/keys/
```


## キーのリスト表示

**GET /admin/api/keys/**

既存のキーのリストを返します。

読み取り権限が必要で、Basic認証を受け入れます。

**応答：**

```json
{
  "result": [
    {
      "key": "test",
      "feed": "main",
      "note": null,
      "server_limit": 0
    },
    ...
  ]
}
```


**例：**

```
curl -u admin https://eportal.corp.com/admin/api/keys/
```


## キーの削除

**DELETE /admin/api/keys/:key**

書き込み権限が必要で、Basic認証を受け入れます。

**応答：**

```json
{
  "result": 1  // number of deleted records, 0 if there is no such key.
}
```

**例：**

```
curl -X DELETE -u admin https://eportal.corp.com/admin/api/keys/test-key
```

## パッチセットのリスト表示

**GET /admin/api/patchsets/**

エンドポイントには、フィードと製品で利用可能なパッチセットがリスト表示されます。最も古いパッチセットから最も新しいパッチセットの順に表示されます。

読み取り権限が必要で、Basic認証を受け入れます。

**クエリ文字列パラメータ：**

* `feed`：String（オプション）。パッチセットをリスト表示するフィードの名前。デフォルトでは、`main`です。
* `product`：String（オプション）。可能な値は、`kernel`、`user`、`qemu`、dbです。指定された製品のパッチストアを選択します。デフォルトでは、`kernel`です。

**応答：**

```json
{
  "result": [
    {
      "patchset": "patchset-name",
      "status": "enabled" // possible values are: enabled, disabled, not-downloaded, undeployed
    },
    ...
  ]
}
```

**例：**

```
curl -u admin 'https://eportal.corp.com/admin/api/patchsets/?feed=main&product=kernel'
```


## パッチセットの管理

**POST /admin/api/patchsets/manage**

パッチセットでデプロイアクションの実行を許可します。

書き込み権限が必要で、Basic認証を受け入れます。

**クエリ文字列パラメータ：**

* `patchset`：String（必須）。操作するパッチセットの名前。
* `feed`：String（必須）。操作するフィードの名前。複数回指定できます。
* `action`：String（必須）。実行する操作：
  - `enable`：指定したパッチセットを有効にします。
  - `disable`：指定したパッチセットを無効にします。
  - `enable-upto`：指定されたパッチセットまでの（より古い）すべてのパッチセットを有効にします。
  - `undeploy-downto`：指定されたパッチセットまでの（より新しい）すべてのパッチセットをアンデプロイします。
* `product`：String（オプション）。可能な値は、`kernel`、`user`、`qemu`、`db`です。指定された製品のパッチストアを選択します。デフォルトでは、kernelです。

**応答：**

```json
{
  "result": "ok"
}
```

**例：**

mainフィードとtest-feedフィードで、libcareパッチセット`U20200506_01`を有効にします。

```
curl -X POST -u admin 'https://eportal.corp.com/admin/api/patchsets/manage?patchset=U20200506_01&feed=main&feed=test-feed&product=user&action=enable'
```
