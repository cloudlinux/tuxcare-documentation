# サブスクリプション管理ポータル


TuxCareサブスクリプション管理ポータル（CLN）は、TuxCareの製品とサービスのライセンスをユーザーフレンドリーなインターフェイスで簡単に管理できるように設計されています。

## 概要


CLNでは、以下のことができます。

* ライセンスの追加、削除、編集
* サーバーの追加、削除、編集
* お支払い方法の選択とライセンスの購入
* 関連するすべての費用の追跡

### 新しいアカウントの作成

初めてのユーザーの方は、[https://portal.tuxcare.com](https://portal.tuxcare.com/register/customer?originUrl=%2Fdashboard%2Fproducts)にアクセスして、簡単な登録フォームに記入して、アカウントを作成してください。ログイン名とパスワードは、登録確認メールでご案内しています。

### ログイン

[https://portal.tuxcare.com](https://portal.tuxcare.com/auth/login?originUrl=%2Fdashboard%2Fproducts)にアクセスして、ログイン名とパスワードでログインします。


## Dashboard

Dashboardは、*Products*に迅速にアクセスするのに役立ちます。以下のタブがあります。

* [Products](/jp/tuxcare-cln/#products)
* [Servers](/jp/tuxcare-cln/#servers)

### Products

*Dashboard*をクリックすると、*My Products*ページにリダイレクトされます。

![](/images/dashboard.png)

以下のアクションをご利用いただけます。

* **Manage licenses and billing cycle**。リンクをクリックすると、当社セールスチームに連絡できます。ライセンス数や製品クォータを変更したり、請求サイクルを管理したりする際にご利用ください。
* **Manage activation keys**。[Extended Support Services | Activation Keys](/jp/tuxcare-cln/#activation-keys)ページへのショートカット。

### Servers

Dashboard → Serversの順にクリックして、All Serversページに移動します。このアカウントに属する全サーバーが、各サーバーにインストールされている製品とともにリスト表示されます。

![](/images/allservers.png)

表には、アカウント内の全製品のアクティブ化されたサーバーがすべて含まれています。表には、以下の列が含まれています。

* **Server name** — サーバーのホスト名
* **IP** — サーバーのIPアドレス
* **Registered** — サーバーがアクティブ化された日付。サーバーは、この情報をCLNに送信します
* **Group** — サーバーグループ（サーバーグループの詳細については、[CLNのドキュメント](https://docs.cln.cloudlinux.com/dashboard/#server-groups)を参照してください）
* **Installed products** — サーバー上でアクティブ化された製品のロゴの表示
* **Actions**
    * アイテムを削除するには、![](/images/remove.png) をクリックしてください

サーバーの詳細を表示するには、サーバー名をクリックしてください。

* **Installed products** — インストール済み製品の完全な名前
* **Last check-in** — サーバーが正常にチェックインに応答した最後の日付

以下のフィルターを利用できます。

* **Product** — *Product*ボタンをクリックすると、1つ以上の製品を選択できま
* **Registered date** — *Registered date*をクリックすると、カレンダーが表示されます。選択した日付または期間でフィルタリングできます
* **Search** — クエリを入力します。検索は、*Server name*と*Activation key*エンティティで実行されます

## Live Patching Services

*Live Patching Services*をクリックすると、*Server License Types*ページにリダイレクトされます。

![](/images/serverlicensetypes.png)

このページでは、サーバーライセンス数を確認できます。また、TuxCareセールスチームに連絡して、ライセンスと請求サイクルを管理できます。

## Extended Support Services

*Extended Support Services*をクリックすると、*Server License Types*ページにリダイレクトされます。

![](/images/serverlicensetypes1.png)

### Server License Types

このページでは、各製品のサーバーライセンス数を確認できます。

* **Manage servers** –[Servers | Selected product](/jp/tuxcare-cln/#servers-2)へのショートカット
* **Manage activation keys** –[Activation Keys | Selected product](/jp/tuxcare-cln/#activation-keys)ページへのショートカット

### Activation Keys

Extended Support Services → Activation Keysの順にクリックすると、Activation Keysページにリダイレクトされます。

![](/images/activationkeys.png)

表には、アカウント内の全製品のアクティベーションキーがすべて含まれています。表には、以下の列が含まれています。

* **Activation key** — 製品のアクティベーションに使用される英数字の文字列です
* **License type** — 使用されるサーバーライセンスの種類です。サーバーユーザーの制限を決定します
* **Note** — このアクティベーションキーに追加した情報
* **Servers (used/limits)** — このキーですでにアクティブ化されたサーバー数（used）と、この特定のキーで登録できるサーバーの総数（limits）
* **チェック** — 1つ以上のアクティベーションキーにチェックを入れて、削除アクションを実行します（(use ![](/images/delete.png)) を使用）

:::tip 注意
デフォルトのアクティベーションキーは削除できません。
:::

以下のフィルターを利用できます。

* **Server limits** — サーバー制限／無制限でフィルタリング
* **License type** — ライセンスの種類でフィルタリング

アクティベーションキーをクリックすると、そのキーの[Activation Key Details（アクティベーションキー詳細）](/jp/tuxcare-cln/#activation-key-details)ページに移動します。

#### 製品別アクティベーションキー

*Extended Support Services* → *Product*の順にクリックすると、その*Product Activation Keys*ページにリダイレクトされます。

![](/images/productactivationkeypage.png)

* 製品のアクティベーションキーがない場合は、*Create activation key*をクリックしてキーを作成できます。
* 製品のデフォルトのアクティベーションキーがある場合は、*Generate new activation key*をクリックして、新しいキーを生成できます。新しいキーは自動的に作成され、表に追加されます。
* *Copy*をクリックすると、アクティベーションキーをコピーできます。

この表には、製品のすべてのアクティベーションキーが含まれています。表には、以下の列が含まれます。

* **Activation key** — 製品のアクティベーションに使用される英数字の文字列です。
* **Note** — このアクティベーションキーに追加した情報
* **Servers (used/limits)** – このキーですでにアクティブ化されているサーバー数（used）と、この特定のキーで登録できるサーバーの総数（limits）

キーを削除するには、キーを選択して ![](/images/delete.png) をクリックしてください。

以下のフィルターを利用できます。

* **Server limits** — サーバー制限／無制限でフィルタリング
* **検索**

キーをクリックして、このキーの*Activation Key Details*ページに移動します。

#### Activation Key Details

![](/images/activationkeydetails.png)

このページでは、以下のことができます。

* アクティベーションキーの完全な情報の閲覧
* キーの編集。 *Edit key*をクリックしてください
* キーの削除。 ![](/images/delete1.png) をクリックしてください
* サーバーリストの確認

表には、そのキーで登録されたすべてのサーバーが含まれています。表には以下の列があります。

* **Server name** — サーバーのホスト名
* **IP** — サーバーのIPアドレス
* **Registered** — サーバーがアクティブ化された日付。サーバーはこの情報をCLNに送信します
* **Last check-in** — サーバーがチェックインに正常に応答した最後の日付

以下のフィルターを利用できます。

* **Server limits** — サーバー制限／無制限でフィルタリング
* **検索欄**

### サーバー

*Extended Support Services* → *Servers*の順にクリックすると、Serversページにリダイレクトされます。

![](/images/servers.png)

表には、延長ライフサイクルサポート内のあらゆる製品に対してアクティブ化されたすべてのサーバーが含まれています。表には以下の列があります。

* **Server name** — サーバーのホスト名
* **IP** — サーバーのIPアドレス
* **Registered** — サーバーがアクティブ化された日付。サーバーは、この情報をCLNに送信します
* **Installed products** — サーバー上でアクティブ化された製品のロゴの表示
* **Actions**
    * アイテムを削除するには、 ![](/images/remove.png) をクリックしてください

サーバーの詳細を表示するには、サーバー名をクリックしてください。

* **Installed products** – インストール済み製品の完全な名前
* **Last check-in** — サーバーが正常にチェックインに応答した最後の日付


以下のフィルターを利用できます。

* **Product** — *Product*ボタンをクリックして、1つ以上の製品を選択します
* **Registered date** — *Registered date*をクリックすると、カレンダーが表示されます。選択した日付または期間でフィルタリングできます
* **検索** — クエリを入力します

#### 製品別サーバー

*Extended Support Service*s → *Servers* → *Product*の順にクリックすると、その製品の*Product Servers*ページにリダイレクトされます。

![](/images/productservers.png)

表には、延長ライフサイクルサポート内でその製品用にアクティブ化されたすべてのサーバーが含まれています。表には以下の列があります。

* **Server name** — サーバーのホスト名
* **IP** — サーバーのIPアドレス
* **Registered** — サーバーがアクティブ化された日付。サーバーは、この情報をCLNに送信します
* **Installed products** — サーバー上でアクティブ化された製品のロゴの表示
* **Actions**
    * アイテムを削除するには、 ![](/images/remove.png) をクリックしてください

サーバーの詳細を表示するには、サーバー名をクリックしてください。

* **Installed products** — インストール済み製品の完全な名前
* **Last check-in** — サーバーが正常にチェックインに応答した最後の日付


以下のフィルターを利用できます。

* **Registered date** — *Registered date*をクリックすると、カレンダーが表示されます。選択した日付または期間でフィルタリングできます
* **検索** — クエリを入力します

*Get servers list*をクリックすると、サーバーリストをダウンロードできます。

## Billing

### Balance & Top up

*Billing*をクリックすると、*Balance & Top up*ページにリダイレクトされます。

![](/images/billingmain.png)

このページでは、以下のことがわかります。

* 現在のプランと価格
* 残高

金額を入力して*Top up*をクリックすると、アカウントに入金できます。

### Payment methods

*Billing* → *Payment methods*の順にクリックすると、*Payment methods*ページにリダイレクトされます。

以下のタブを使用できます。

* **Billing information**
* **Payment methods**
* **Autopayment**

#### Billing information

![](/images/billingcontacts.png)

ここでは、請求先のEメールアドレスを変更できます。 変更を適用するには、*Save*をクリックしてください。

#### Payment methods

![](/images/paymentmethods.png)

ここでは、支払い方法を管理できます。変更を適用するには、*Save*をクリックしてください。

#### Autopayment

![](/images/autopayment.png)

ここでは、自動支払いの種類を変更できます。

* Auto add funds（自動資金追加）
* Auto repay（自動支払）
* Do not add funds automatically（自動で資金を追加しない）

変更を適用するには、*Save*をクリックしてください。

### Invoices

![](/images/invoices.png)

表には以下の列があります。

* **Invoice id** — 一意の請求書番号
* **Created** — 請求書の発行日
* **Type** — 支払いの種類：請求書または支払いの受領
* **Pay period** — 発行された請求書の対象期間の開始日
* **Total** — 受領済み／支払う必要がある合計金額
* **Balance** — 現在の残高
* **Actions** — 以下のアクションを利用できます。
    * **請求書の閲覧** — — 請求書の詳細を閲覧するには、![](/images/eye.png)をクリックしてください。詳細は、新しいポップアップで開きます。
    * **請求書のダウンロード** — — 請求書をダウンロードするには、![](/images/download.png)をクリックしてください。

請求書の詳細を表示するには、![](/images/details.png) をクリックしてください。

## Settings

アカウントの詳細に移動するには、右上隅にある Userアイコン → *Settings*をクリックします。*Account details*ページにリダイレクトされます。

![](/images/accountsettings.png)

### Account details

以下のタブを使用できます。

* Personal information（個人情報）
* Company information（企業情報）
* Billing contact information（請求連絡先情報）

#### P個人情報

![](/images/personalinformation.png)

*の付いた入力欄はすべて必須です。

* **API secret key** – この鍵をCLN APIで使用します
* **IM Upgrade URL** – Imunify製品をアップグレードするためのURL（URLがデフォルトのものではない場合）

パスワードを変更するには、*Change password*をクリックします。

2要素認証を有効にするには、スイッチを*On*にします。

変更を適用するには、*Save*をクリックしてください。

#### 企業情報

![](/images/companyinformation.png)

変更を適用するには、*Save*をクリックしてください。

#### 請求連絡先

![](/images/billinginformation.png)

変更を適用するには、*Save*をクリックしてください。


### Account sublogins

Eメールアドレスの形式で、ご利用のアカウントに追加のログイン名を作成できます。サブログイン名は、以下に一覧表示されている、さまざまな権限がある任意の役割を持つことができます。マスターサーバー管理者アカウントには、すべての権限があり、アカウントサブログイン名を作成できます。

![](/images/accountsublogins.png)

変更を適用するには、*Save*をクリックしてください。

#### #役割

#### Full Access/Admin

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* レポーティング
* サーバーの追加／削除
* アクティベーションキーの作成
* ライセンスの注文／削除
* 請求書の閲覧
* 請求情報の閲覧
* クレジットカード情報の編集
* アカウント情報の編集
* 請求情報の編集／再販業者用入金
* 料金の閲覧
* アカウント情報の表示
* パスワードの変更

#### Billing

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* 請求書の閲覧
* 請求情報の閲覧
* クレジットカード情報の編集
* アカウント情報の編集
* 請求情報の編集／再販業者用入金
* 料金の閲覧
* アカウント情報の閲覧

#### Server and License Management

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* レポーティング
* サーバーの追加／削除
* アクティベーションキーの作成
* ライセンスの注文／削除

#### Server Management Only

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* レポーティング
* サーバーの追加／削除
* アクティベーションキーの作成

#### Read Only — Billing

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* レポーティング
* 請求書の閲覧
* 請求情報の閲覧

#### Read Only — Server Management

* 製品の閲覧
* サーバー／ライセンス情報の閲覧
* レポーティング

### Reports

ご希望のEメールアドレスにアカウントのレポートを受信するように設定できます。

![](/images/reports.png)


新しいレポートの設定を追加するには、*Add config*をクリックしてください。