import{_ as e,n as i,p as n,a6 as d}from"./framework-620c4f90.js";const s={},a=d(`<h1 id="eportal-api" tabindex="-1"><a class="header-anchor" href="#eportal-api" aria-hidden="true">#</a> ePortal API</h1><p>以下のコマンドで、API使用のための別のePortalアカウントを作成する必要がある場合があります。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kc.eportal user -a api-user -p &lt;password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Basic認証を介してHTTP API資格情報を渡すことができると、SSO/LDAP設定に役立つ場合があります。</p><p>一般に、ePortal APIは構成管理が簡単で、冪等性があります。既存の状態を確認するのに追加のリクエストを行う必要はありません。たとえば、存在しないエンティティを削除したとしても、エラーは発生しません。また、エンティティの作成／変更は、単一のリクエストで実行され、問題なく、容易にご希望の最終状態を得ることができます。</p><h2 id="サーバーのリスト表示" tabindex="-1"><a class="header-anchor" href="#サーバーのリスト表示" aria-hidden="true">#</a> サーバーのリスト表示</h2><p><strong>GET /admin/api/servers</strong></p><p>さまざまな基準でサーバーをフィルタリングして、リストを反復処理して、サーバー数を取得します。</p><p>読み取り専用のユーザー権限のBasic認証が必要です。</p><p><strong>クエリ文字列パラメータ：</strong></p><ul><li><code>hostname</code>：String（オプション）。パターンとマッチするホスト名のサーバーを返します。パターンには、任意の文字列にマッチする%プレースホルダーを含めることができます。</li><li><code>ip</code>：String（オプション）。パターンとマッチするIPのサーバーを返します。パターンには、任意の文字列に一致するプレースホルダーを含めることができます。</li><li><code>feed</code>：String（オプション）。フィードに接続されたサーバーを返します。デフォルトフィードにはmainを使用してください。</li><li><code>key</code>：String（オプション）。キーに登録されているサーバーを返します。</li><li><code>registered_age</code>：Integer（オプション）。<code>registered_age</code>日前よりも前に登録されたサーバーを返します。<code>registered_age</code>が負の値の場合、<code>-registered_age</code>日前以降に登録されたサーバーを返します。例えば、<code>registered_age=-3</code>の場合は、3日前以降に登録されたサーバーを返すことになります。hサフィックスを追加して、時間を指定できます。<code>registered_age=4h</code>の場合は、4時間前よりも前に登録されたサーバーを選択します。</li><li><code>checkin_age</code>：Integer（オプション）。<code>checkin_age</code>日前よりも前にチェックインを送信したサーバーを返します。負の値の場合は、<code>registered_age</code>を参照してください。</li><li><code>updated_age</code>：Integer（オプション）。updated_age日前よりも前にパッチをロードしたサーバーを返します。負の値の場合は、<code>registered_age</code>を参照してください。</li><li><code>is_updated</code>：Boolean（オプション）。<code>true</code>の場合、利用可能な最新のパッチに更新されているサーバーを返します。<code>false</code>の場合、最新のパッチが適用されていないサーバーを返します。</li><li><code>limit</code>：Integer（オプション）。結果を指定されたエントリ数に制限します。デフォルトでは、<code>limit</code>は10です。</li><li><code>offset</code>：Integer（オプション）。結果を指定された開始位置に設定します。<code>limit</code>とoffsetを使用して、結果を反復処理できます。</li><li><code>only_count</code>：Boolean（オプション）。サーバー数のみを返します。</li><li><code>tag</code>：String（オプション）。サーバータグによるフィルターを追加します。例：<code>tag=env:test</code>または<code>tag=ubuntu</code>.</li></ul><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;count&quot;: 42,
    &quot;limit&quot;: 10,
    &quot;offset&quot;: 0,
    &quot;result&quot;: [
        {
            &quot;id&quot;: &quot;99c97tz44uKX13b5&quot;,
            &quot;ip&quot;: &quot;10.51.16.72&quot;,
            &quot;hostname&quot;: &quot;localhost.localdomain&quot;,
            &quot;key&quot;: &quot;some-key&quot;,
            &quot;feed&quot;: &quot;main&quot;,
            &quot;registered&quot;: &quot;2021-04-08 16:43:23.907671&quot;,
            &quot;checkin&quot;: &quot;2021-07-12 17:35:56.065077&quot;,
            &quot;updated&quot;: &quot;2021-06-01 16:37:03.000000&quot;,
            &quot;euname&quot;: &quot;3.10.0-1160.25.1.el7&quot;,        // effective kernel version
            &quot;release&quot;: &quot;3.10.0-957.5.1.el7.x86_64&quot;,  // installed kernel version
            &quot;kernel_id&quot;: &quot;9647204d2708cad906a75944ee56ac68fc5b5704&quot;,
            &quot;patch_level&quot;: 49,
            &quot;patch_type&quot;: &quot;default&quot;,
            &quot;tags&quot;: null,
            &quot;uptime&quot;: 6394092,
            &quot;version&quot;: &quot;#1 SMP Fri Feb 1 14:54:57 UTC 2019&quot;,
            &quot;virt&quot;: &quot;kvm&quot;,
            &quot;kcare_version&quot;: &quot;2.44-2&quot;,
            &quot;distro&quot;: &quot;CentOS Linux&quot;,
            &quot;distro_version&quot;: &quot;7.6.1810&quot;,
            &quot;machine&quot;: &quot;x86_64&quot;,
            &quot;processor&quot;: &quot;x86_64&quot;
        },
        ...
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ホストの登録" tabindex="-1"><a class="header-anchor" href="#ホストの登録" aria-hidden="true">#</a> ホストの登録</h2><p><strong>POST /admin/api/register</strong></p><p>指定されたキーとホスト名でホストを登録します。</p><p><strong>フォーム（URLエンコードされた）パラメータ：</strong></p><ul><li><code>key</code>：String（必須）。登録に使用するePortalキー。</li><li><code>hostname</code>：String（オプション）。使用するサーバーのホスト名。</li></ul><p><strong>成功した場合の応答（200）：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;server_id&quot;: &quot;some-server-id&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>エラーの場合の応答（400）：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;error&quot;: &quot;error code&quot; # invalid-key | key-limit-reached
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST https://eportal.corp.com/admin/api/register -F key=test
{&quot;server_id&quot;:&quot;lw1MO1Du5sF3Cj39&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ホストの登録解除" tabindex="-1"><a class="header-anchor" href="#ホストの登録解除" aria-hidden="true">#</a> ホストの登録解除</h2><p><strong>POST /admin/api/delete_server</strong></p><p>IPまたはホスト名で登録済みサーバーを削除します。</p><p>管理者ユーザー権限によるBasic認証が必要です。</p><p><strong>クエリ文字列パラメータ：</strong></p><ul><li><code>hostname</code>：String（オプション）。削除するサーバーのホスト名。</li><li><code>ip</code>：String（オプション）。削除するサーバーのIP。</li></ul><p>エンドポイントには、少なくとも1つのパラメータ（ホスト名またはIP）が必要です。</p><p><strong>応答：</strong></p><p>応答には、削除されたサーバー数が含まれています。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;result&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例えば、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --user admin:admin-password -X POST https://eportal.corp.com/admin/api/delete_server?ip=192.168.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下は、さまざまなCM製品で<code>/admin/api/delete_server</code>エンドポイントを使用する例です。注意：API経由で削除するには、ホストIPまたはホスト名が必要です。以下の方法のいずれかを使用する方が便利です。</p><ul><li>（稼働している）ホストへのアクセス権がある場合、<code>kcarectl --unregister</code>を呼び出してホストを削除する方がはるかに簡単です。</li><li>ホストがすでに破棄されている場合は、一括で<a href="#clean-inactive-servers">非アクティブサーバーのクリーンアップ</a>を使用することを検討できます。</li></ul><h3 id="ansible-playbook" tabindex="-1"><a class="header-anchor" href="#ansible-playbook" aria-hidden="true">#</a> Ansible playbook</h3><p>ePortal APIアクセスをAnsibleと統合できるようになりました。kernelcareエージェントを呼び出してタスクを実行する代わりに、ePortalを直接呼び出して同じ結果を得ることができます。</p><p>API Playbookを使用して、KernelCareエージェントを登録解除します。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>- hosts: kernelcare
  vars:
    eportal_srv: http://eportal.address.here[:port if needed]

  tasks:
    - name: unregister kernelcare agent through API
      uri:
        url: &quot;{{ eportal_srv }}/admin/api/delete_server?ip={{ ansible_default_ipv4.address|default(ansible_all_ipv4_addresses[0]) }}&quot;
        method: POST
        user: your-api-user
        password: your-api-user-password
        force_basic_auth: yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例えば、</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>- hosts: kernelcare
  vars:
    eportal_srv: http://192.168.246.110

  tasks:
    - name: unregister kernelcare agent through API
      uri:
        url: &quot;{{ eportal_srv }}/admin/api/delete_server?ip={{ ansible_default_ipv4.address|default(ansible_all_ipv4_addresses[0]) }}&quot;
        method: POST
        user: api-user
        password: dummy
        force_basic_auth: yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下のコマンドをアドホック実行します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-playbook -u ansible  ./kernelcare.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。</p><h3 id="chefのrecipe" tabindex="-1"><a class="header-anchor" href="#chefのrecipe" aria-hidden="true">#</a> Chefのrecipe</h3><p>Chefのような自動化ツールとより緊密に統合することは、KernelCareとePortalのような関連ツールにとって常に目標でした。以下のrecipeは、delete_server APIを使用して、ティアダウン中にePortalから正確にサーバーを削除する方法を示しています。このrecipeは、他のrecipeと統合して、手動操作を回避できます。</p><p>APIを使用して、KernelCareエージェントを登録解除するrecipe：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>eportal_url = &quot;EPORTAL URL&quot;
eportal_user = &quot;EPORTAL API USER NAME&quot;
eportal_password = &quot;EPORTAL API USER PASSWORD&quot;

# the ip to unregister can be pulled automatically from the system where the recipe is applied, or specified manually (by replacing the following line with a simple assignment)
ip_to_unregister = &quot;#{node[&#39;network&#39;][&#39;interfaces&#39;][node[&#39;network&#39;][&#39;default_interface&#39;]][&#39;addresses&#39;].select{|k,v| v[&#39;family&#39;] == &quot;inet&quot;}.keys.first}&quot;


http_request &quot;kernelcare-unregister-api&quot; do
  url &quot;#{eportal_url}/admin/api/delete_server?ip=#{ip_to_unregister}&quot;
  action :post
  headers({&#39;AUTHORIZATION&#39; =&gt; &quot;Basic #{
    Base64.encode64(&quot;#{eportal_user}:#{eportal_password}&quot;)}&quot;,
  })
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例（kernelcare-unregister-api.rb）：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>eportal_url = &quot;http://192.168.246.110&quot;
eportal_user = &quot;api-user&quot;
eportal_password = &quot;dummy&quot;

ip_to_unregister = &quot;#{node[&#39;network&#39;][&#39;interfaces&#39;][node[&#39;network&#39;][&#39;default_interface&#39;]][&#39;addresses&#39;].select{|k,v| v[&#39;family&#39;] == &quot;inet&quot;}.keys.first}&quot;

http_request &quot;kernelcare-unregister-api&quot; do
  url &quot;#{eportal_url}/admin/api/delete_server?ip=#{ip_to_unregister}&quot;
  action :post
  headers({&#39;AUTHORIZATION&#39; =&gt; &quot;Basic #{
    Base64.encode64(&quot;#{eportal_user}:#{eportal_password}&quot;)}&quot;,
  })
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下をアドホック実行します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chef-apply kernelcare-unregister-api.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出力：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Recipe: (chef-apply cookbook)::(chef-apply recipe)
  * http_request[kernelcare-unregister-api] action post
    - http_request[kernelcare-unregister-api] POST to http://192.168.246.110/admin/api/delete_server?ip=192.168.246.40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。</p><h3 id="puppetのタスク" tabindex="-1"><a class="header-anchor" href="#puppetのタスク" aria-hidden="true">#</a> Puppetのタスク</h3><p>Puppetは、対象のシステムでタスクを実行するためのフレームワークを提供しています。以下は、そのようなタスクとして実行できるbashスクリプトで、delete_server APIを使用して、ティアダウン中にePortalから正確にサーバーを削除する方法を示しています。他の削除スクリプトやタスクと統合して、手動操作を回避できます。</p><p>API呼び出しを介してKernelCareエージェントを登録解除します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

EPORTAL_API_USERNAME=&lt;your ePortal api user name&gt;
EPORTAL_API_PASSWORD=&lt;your ePortal api user password&gt;
EPORTAL_URL=&#39;your ePortal URL&#39;

#this is taken from the primary ip in the system. If awk is available, it is used, but a fallback using other common tools is also provided
if hash awk 2&gt;/dev/null; then
        IP_TO_UNREGISTER=\`ip route get 1 | awk &#39;{print $(NF-2);exit}&#39;\`     # using awk
else
        IP_TO_UNREGISTER=\`ip route get 1 | cut -f 3 -d&quot; &quot;| head -1\`        # simpler alternative for when awk is not available
fi

curl -kL -u &quot;\${EPORTAL_API_PASSWORD}&quot;&#39;:&#39;&quot;\${EPORTAL_API_PASSWORD}&quot; -X POST &quot;\${EPORTAL_URL}&quot;&#39;/admin/api/delete_server?ip=&#39;&quot;\${IP_TO_UNREGISTER}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例（unregister_server.sh）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

EPORTAL_API_USERNAME=admin
EPORTAL_API_PASSWORD=admin
EPORTAL_URL=&#39;http://192.168.246.110&#39;

#this is taken from the primary ip in the system. If you want to pick a different one, adjust the next line.
if hash awk 2&gt;/dev/null; then
        IP_TO_UNREGISTER=\`ip route get 1 | awk &#39;{print $(NF-2);exit}&#39;\`     # using awk
else
        IP_TO_UNREGISTER=\`ip route get 1 | cut -f 3 -d&quot; &quot;| head -1\`        # simpler alternative for when awk is not available
fi

curl -kL -u &quot;\${EPORTAL_API_PASSWORD}&quot;&#39;:&#39;&quot;\${EPORTAL_API_PASSWORD}&quot; -X POST &quot;\${EPORTAL_URL}&quot;&#39;/admin/api/delete_server?ip=&#39;&quot;\${IP_TO_UNREGISTER}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="puppetのプラン" tabindex="-1"><a class="header-anchor" href="#puppetのプラン" aria-hidden="true">#</a> Puppetのプラン</h3><p>タスクではなくプランの作成をご希望の場合は、以下の手順でこのスクリプトから作成できます。</p><ul><li><code>eportal_puppet</code>という新しいディレクトリを作成します</li><li>このディレクトリ内に、以下のコマンドでboltプロジェクトを作成します<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt project init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>その中にスクリプトディレクトリを作成します</li><li>その中に上記のスクリプトを配置します（このスクリプトを<code>unregister_server.sh</code>と呼びます）</li><li>以下を使用して、boltのプランを作成します<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan new eportal_puppet::unregister_server --script eportal_puppet/scripts/unregister_server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>これでプランができました。以下の方法で直接呼び出すことができます。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan run eportal_puppet:unregister_server -t &lt;TARGETS&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>アドホック実行の例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan run eportal_puppet::unregister_server -t 192.168.246.110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>マシンのティアダウン中にこのコマンドを呼び出して、ePortalから適切にサーバーを削除できます。</p><h2 id="フィードの作成-変更" tabindex="-1"><a class="header-anchor" href="#フィードの作成-変更" aria-hidden="true">#</a> フィードの作成／変更</h2><p><strong>POST /admin/api/feeds/</strong></p><p>フィードが既に存在する場合は、リクエストによってフィードが変更されます。</p><p>書き込み権限が必要で、Basic認証を受け入れます。</p><p><strong>クエリ文字列／フォーム／JSONパラメータ：</strong></p><ul><li><code>name</code>：String（必須）。作成または変更されたフィードの名前。</li><li><code>auto</code>：Boolean（オプション）。自動更新プロパティを設定します。デフォルトでは、falseです。</li><li><code>deploy_after</code>：Integer（オプション）。遅延期間を時間単位で設定します。デフォルトでは、0（遅延なし）です。</li></ul><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: {
    &quot;name&quot;: &quot;test-feed&quot;,
    &quot;auto&quot;: true,
    &quot;deploy_after&quot;: 0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin -d name=test-feed -d auto=true https://eportal.corp.com/admin/api/feeds/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="フィードのリスト表示" tabindex="-1"><a class="header-anchor" href="#フィードのリスト表示" aria-hidden="true">#</a> フィードのリスト表示</h2><p><strong>GET /admin/api/feeds/</strong></p><p>既存のフィードのリストを返します。注意：<code>main</code>フィードは常に存在し、変更できません。</p><p>読み取り権限が必要で、Basic認証を受け入れます。</p><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;auto&quot;: false,
      &quot;deploy_after&quot;: 0,
      &quot;name&quot;: &quot;feed-name&quot;
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin https://eportal.corp.com/admin/api/feeds/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="フィードの削除" tabindex="-1"><a class="header-anchor" href="#フィードの削除" aria-hidden="true">#</a> フィードの削除</h2><p><strong>DELETE /admin/api/feeds/:feed-name</strong></p><p>書き込み権限が必要で、Basic認証を受け入れます。</p><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: 1  // number of deleted records, 0 if there is no such feed.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X DELETE -u admin https://eportal.corp.com/admin/api/feeds/test-feed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="登録キーの作成-変更" tabindex="-1"><a class="header-anchor" href="#登録キーの作成-変更" aria-hidden="true">#</a> 登録キーの作成／変更</h2><p><strong>POST /admin/api/keys/</strong></p><p>キーがすでに存在する場合は、リクエストによってキーが変更されます。</p><p>書き込み権限が必要で、Basic認証を受け入れます。</p><p><strong>クエリ文字列／フォーム／JSONパラメータ：</strong></p><ul><li><code>key</code>：String（オプション）。作成または変更されたキーの名前。空の場合は、ランダムキーが生成されます。</li><li><code>feed</code>：String（オプション）。接続されたフィードの名前。デフォルトでは、<code>main</code>です。</li><li><code>note</code>：String（オプション）。キーの説明。</li><li><code>server_limit</code>：Integer（オプション）。キーに登録できる最大ホスト数の推奨制限。</li></ul><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: {
    &quot;key&quot;: &quot;key&quot;,
    &quot;feed&quot;: &quot;feed-name&quot;,
    &quot;note&quot;: &quot;some-note&quot;,
    &quot;server_limit&quot;: 0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin -d key=test-key -d feed=test-feed https://eportal.corp.com/admin/api/keys/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="キーのリスト表示" tabindex="-1"><a class="header-anchor" href="#キーのリスト表示" aria-hidden="true">#</a> キーのリスト表示</h2><p><strong>GET /admin/api/keys/</strong></p><p>既存のキーのリストを返します。</p><p>読み取り権限が必要で、Basic認証を受け入れます。</p><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;key&quot;: &quot;test&quot;,
      &quot;feed&quot;: &quot;main&quot;,
      &quot;note&quot;: null,
      &quot;server_limit&quot;: 0
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin https://eportal.corp.com/admin/api/keys/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="キーの削除" tabindex="-1"><a class="header-anchor" href="#キーの削除" aria-hidden="true">#</a> キーの削除</h2><p><strong>DELETE /admin/api/keys/:key</strong></p><p>書き込み権限が必要で、Basic認証を受け入れます。</p><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: 1  // number of deleted records, 0 if there is no such key.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X DELETE -u admin https://eportal.corp.com/admin/api/keys/test-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="パッチセットのリスト表示" tabindex="-1"><a class="header-anchor" href="#パッチセットのリスト表示" aria-hidden="true">#</a> パッチセットのリスト表示</h2><p><strong>GET /admin/api/patchsets/</strong></p><p>エンドポイントには、フィードと製品で利用可能なパッチセットがリスト表示されます。最も古いパッチセットから最も新しいパッチセットの順に表示されます。</p><p>読み取り権限が必要で、Basic認証を受け入れます。</p><p><strong>クエリ文字列パラメータ：</strong></p><ul><li><code>feed</code>：String（オプション）。パッチセットをリスト表示するフィードの名前。デフォルトでは、<code>main</code>です。</li><li><code>product</code>：String（オプション）。可能な値は、<code>kernel</code>、<code>user</code>、<code>qemu</code>、dbです。指定された製品のパッチストアを選択します。デフォルトでは、<code>kernel</code>です。</li></ul><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;patchset&quot;: &quot;patchset-name&quot;,
      &quot;status&quot;: &quot;enabled&quot; // possible values are: enabled, disabled, not-downloaded, undeployed
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin &#39;https://eportal.corp.com/admin/api/patchsets/?feed=main&amp;product=kernel&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="パッチセットの管理" tabindex="-1"><a class="header-anchor" href="#パッチセットの管理" aria-hidden="true">#</a> パッチセットの管理</h2><p><strong>POST /admin/api/patchsets/manage</strong></p><p>パッチセットでデプロイアクションの実行を許可します。</p><p>書き込み権限が必要で、Basic認証を受け入れます。</p><p><strong>クエリ文字列パラメータ：</strong></p><ul><li><code>patchset</code>：String（必須）。操作するパッチセットの名前。</li><li><code>feed</code>：String（必須）。操作するフィードの名前。複数回指定できます。</li><li><code>action</code>：String（必須）。実行する操作： <ul><li><code>enable</code>：指定したパッチセットを有効にします。</li><li><code>disable</code>：指定したパッチセットを無効にします。</li><li><code>enable-upto</code>：指定されたパッチセットまでの（より古い）すべてのパッチセットを有効にします。</li><li><code>undeploy-downto</code>：指定されたパッチセットまでの（より新しい）すべてのパッチセットをアンデプロイします。</li></ul></li><li><code>product</code>：String（オプション）。可能な値は、<code>kernel</code>、<code>user</code>、<code>qemu</code>、<code>db</code>です。指定された製品のパッチストアを選択します。デフォルトでは、kernelです。</li></ul><p><strong>応答：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: &quot;ok&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例：</strong></p><p>mainフィードとtest-feedフィードで、libcareパッチセット<code>U20200506_01</code>を有効にします。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin &#39;https://eportal.corp.com/admin/api/patchsets/manage?patchset=U20200506_01&amp;feed=main&amp;feed=test-feed&amp;product=user&amp;action=enable&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,141),l=[a];function r(t,o){return i(),n("div",null,l)}const c=e(s,[["render",r],["__file","index.html.vue"]]);export{c as default};