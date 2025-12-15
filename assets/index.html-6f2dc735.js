import{_ as i,n as s,p as n,a6 as a}from"./framework-a770bce2.js";const t={};function r(d,e){return s(),n("div",null,e[0]||(e[0]=[a(`<h1 id="eportal-api" tabindex="-1"><a class="header-anchor" href="#eportal-api" aria-hidden="true">#</a> ePortal API</h1><p>You may need to create a separate ePortal account for API usage with:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kc.eportal user -a api-user -p &lt;password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It can be useful for SSO/LDAP setups to be able to pass HTTP API credentials via basic auth.</p><p>Starting with version 2.14-1, an API key can be used for authentication as an alternative to basic authentication. First, you need to generate an API token using ePortal admin UI. Then you can put it in the <em>X-Api-Key</em> http header. In this case the Authorization header is no longer needed. If for some reason the &quot;X-Api-Key&quot; header doesn&#39;t work for you, you can define your own header name in the API_AUTH_HEADER setting in eportal.conf.</p><p>In general ePortal API is configuration management friendly and idempotent. You don&#39;t need to make additional request to check existing state. For example entity deletion doesn&#39;t raise an error in case there is no such entity. Or entity creation/modification is a single request that just works and simply brings desired final state.</p><h2 id="list-servers" tabindex="-1"><a class="header-anchor" href="#list-servers" aria-hidden="true">#</a> List servers</h2><p><strong>GET /admin/api/servers</strong></p><p>Filters servers on various criteria, iterate through list and get server counts.</p><p>Requires basic authorization with read only user permissions.</p><p><strong>Query string parameters:</strong></p><ul><li><code>hostname</code>: String, optional. Return servers with a hostname like value. Value can contain <code>%</code> placeholder to match any string.</li><li><code>ip</code>: String, optional. Return servers with IP like value. Value can contain <code>%</code> placeholder to match any string.</li><li><code>service_id</code>: String, optional. Return a single server with the service ID equal to the provided value.</li><li><code>feed</code>: String, optional. Return servers attached to feed. Use <code>main</code> for default feed.</li><li><code>key</code>: String, optional. Return servers registered to key.</li><li><code>registered_age</code>: Integer, optional. Return servers registered more than <code>registered_age</code> days ago. If <code>registered_age</code> is negative then return servers registered less or equal -<code>registered_age</code> days ago. For example: <code>registered_age=-3</code> means to return servers registered 3 or less days ago. Hours can be specified by adding <code>h</code> suffix: <code>registered_age=4h</code> selects servers registered more than 4 hours ago.</li><li><code>checkin_age</code>: Integer, optional. Return servers sent check-in more than <code>checkin_age</code> days ago. For negative values see <code>registered_age</code>.</li><li><code>updated_age</code>: Integer, optional. Return servers loaded patches more than <code>updated_age</code> days ago. For negative values see <code>registered_age</code>.</li><li><code>is_updated</code>: Boolean, optional. If <code>true</code> then return servers updated to latest available patches. If <code>false</code> return servers without latest patches.</li><li><code>limit</code>: Integer, optional. Limit result to a specified number of entries. By default <code>limit</code> is 10.</li><li><code>offset</code>: Integer, optional. Set result to a specified offset. <code>limit</code> and <code>offset</code> can be used to iterate through result.</li><li><code>only_count</code>: Boolean, optional. Return server count only.</li><li><code>tag</code>: String, optional. Adds filter by server tag. E.g <code>tag=env:test</code> or <code>tag=ubuntu</code>.</li></ul><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="register-host" tabindex="-1"><a class="header-anchor" href="#register-host" aria-hidden="true">#</a> Register host</h2><p><strong>POST /admin/api/register</strong></p><p>Registers host by provided key and hostname.</p><p><strong>Form (urlencoded) parameters:</strong></p><ul><li><code>key</code>: String, required. ePortal key to use for registration.</li><li><code>hostname</code>: String, optional. Server&#39;s hostname to use.</li></ul><p><strong>Success response (200):</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;server_id&quot;: &quot;some-server-id&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Error response (400):</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;error&quot;: &quot;error code&quot; # invalid-key | key-limit-reached
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST https://eportal.corp.com/admin/api/register -F key=test
{&quot;server_id&quot;:&quot;lw1MO1Du5sF3Cj39&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unregister-host" tabindex="-1"><a class="header-anchor" href="#unregister-host" aria-hidden="true">#</a> Unregister host</h2><p><strong>POST /admin/api/delete_server</strong></p><p>Removes registered servers by IP, hostname or server_id</p><p>Requires basic authorization with admin user permissions.</p><p><strong>Query string parameters:</strong></p><ul><li><code>hostname</code>: String, optional. Server&#39;s hostname to delete.</li><li><code>ip</code>: String, optional. Server&#39;s IP to delete.</li><li><code>server_id</code>: String, optional. Server&#39;s id to delete.</li></ul><p>Endpoint requires at least one parameter <code>hostname</code>, <code>ip</code> or <code>server_id</code>.</p><p><strong>Response:</strong></p><p>Response contains number of deleted servers.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;result&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --user admin:admin-password -X POST https://eportal.corp.com/admin/api/delete_server?ip=192.168.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below are examples of using <code>/admin/api/delete_server</code> endpoint with various CM products. Take note, you need a host IP, a hostname or a server_id to delete it via API. It can be more convenient to use on of:</p><ul><li>if you have an access to a host (it is alive) it&#39;s a way more simpler to call <code>kcarectl --unregister</code> to delete the host.</li><li>if host is already destroyed you can consider using bulk <a href="#clean-inactive-servers">inactive server cleanup</a>.</li></ul><h2 id="bulk-unregister-hosts" tabindex="-1"><a class="header-anchor" href="#bulk-unregister-hosts" aria-hidden="true">#</a> Bulk unregister hosts</h2><p><strong>DELETE /admin/api/servers</strong></p><p>Removes registered servers by the latest check-in age.</p><p>Requires basic authorization with admin user permissions.</p><p><strong>Query string parameters:</strong></p><ul><li><code>checkin_age</code>: Integer, required, greater or equal 1. Delete servers that sent latest check-in more than <code>checkin_age</code> days ago.</li></ul><p><strong>Response:</strong></p><p>Response contains number of deleted servers.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
    &quot;result&quot;: 1200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --user admin:admin-password -X DELETE https://eportal.corp.com/admin/api/servers?checkin_age=15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create/modify-feed" tabindex="-1"><a class="header-anchor" href="#create/modify-feed" aria-hidden="true">#</a> Create/modify feed</h2><p><strong>POST /admin/api/feeds/</strong></p><p>If feed already exists request modifies it.</p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Query string/Form/JSON parameters:</strong></p><ul><li><code>name</code>: String, required. Name of created or modified feed.</li><li><code>auto</code>: Boolean, optional. Sets auto-update property. Default is false.</li><li><code>deploy_after</code>: Integer, optional. Sets delayed period in hours. Default is 0 (not delayed).</li><li><code>channel</code>: String, optional. Sets patchset channel to use. Default is <code>default</code>. Available channels: <ul><li><code>default</code>: stable patches.</li><li><code>test</code>: testing patches.</li></ul></li></ul><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: {
    &quot;name&quot;: &quot;test-feed&quot;,
    &quot;auto&quot;: true,
    &quot;deploy_after&quot;: 0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin -d name=test-feed -d auto=true https://eportal.corp.com/admin/api/feeds/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-feeds" tabindex="-1"><a class="header-anchor" href="#list-feeds" aria-hidden="true">#</a> List feeds</h2><p><strong>GET /admin/api/feeds/</strong></p><p>Returns list of existing feeds. Take note: <code>main</code> feed is alway present and couldn&#39;t be modified.</p><p>Requires read permissions and accepts basic authorization.</p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;auto&quot;: false,
      &quot;deploy_after&quot;: 0,
      &quot;name&quot;: &quot;feed-name&quot;
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin https://eportal.corp.com/admin/api/feeds/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-feed" tabindex="-1"><a class="header-anchor" href="#delete-feed" aria-hidden="true">#</a> Delete feed</h2><p><strong>DELETE /admin/api/feeds/:feed-name</strong></p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: 1  // number of deleted records, 0 if there is no such feed.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X DELETE -u admin https://eportal.corp.com/admin/api/feeds/test-feed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create/modify-registration-key" tabindex="-1"><a class="header-anchor" href="#create/modify-registration-key" aria-hidden="true">#</a> Create/modify registration key</h2><p><strong>POST /admin/api/keys/</strong></p><p>If key already exists request modifies it.</p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Query string/Form/JSON parameters:</strong></p><ul><li><code>key</code>: String, optional. Name of created or modified key. If it&#39;s empty random key is generated.</li><li><code>feed</code>: String, optional. Name of attached feed. <code>main</code> by default.</li><li><code>note</code>: String, optional. Description of the key.</li><li><code>server_limit</code>: Integer, optional. Advisory limit of a maximum number of hosts one can register on the key.</li></ul><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: {
    &quot;key&quot;: &quot;key&quot;,
    &quot;feed&quot;: &quot;feed-name&quot;,
    &quot;note&quot;: &quot;some-note&quot;,
    &quot;server_limit&quot;: 0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin -d key=test-key -d feed=test-feed https://eportal.corp.com/admin/api/keys/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-keys" tabindex="-1"><a class="header-anchor" href="#list-keys" aria-hidden="true">#</a> List keys</h2><p><strong>GET /admin/api/keys/</strong></p><p>Returns list of existing keys.</p><p>Requires read permissions and accepts basic authorization.</p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin https://eportal.corp.com/admin/api/keys/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-key" tabindex="-1"><a class="header-anchor" href="#delete-key" aria-hidden="true">#</a> Delete key</h2><p><strong>DELETE /admin/api/keys/:key</strong></p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: 1  // number of deleted records, 0 if there is no such key.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X DELETE -u admin https://eportal.corp.com/admin/api/keys/test-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-patchsets" tabindex="-1"><a class="header-anchor" href="#list-patchsets" aria-hidden="true">#</a> List patchsets</h2><p><strong>GET /admin/api/patchsets/</strong></p><p>Endpoint lists available patchsets for a specified feed and product, optionally filtered by distribution(s). The distro filter narrows results to only those patchsets that apply to the specified distributions. If no distro is provided, patchsets for all available distributions are returned. Results are returned from oldest to newest patchsets.</p><p>Requires read permissions and accepts basic authorization.</p><p><strong>Query string parameters:</strong></p><ul><li><code>feed</code>: String, optional. Name of the feed to list patchsets for. <code>main</code> by default.</li><li><code>product</code>: String, optional. Possible values are: <code>kernel</code>, <code>user</code>, <code>qemu</code>, <code>db</code>. Selects a patchstore for a specified product. <code>kernel</code> by default.</li><li><code>distro</code>: String (multi), optional. Filters results by one or more Linux distributions. Can be passed multiple times, e.g., <code>?distro=centos7&amp;distro=almalinux8</code>.</li></ul><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;patchset&quot;: &quot;patchset-name&quot;,
      &quot;status&quot;: &quot;enabled&quot;, // possible values are: enabled, disabled, not-downloaded, undeployed
      &quot;distros&quot;: [&quot;distro-1&quot;, &quot;distro-2&quot;]
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin &#39;https://eportal.corp.com/admin/api/patchsets/?feed=main&amp;product=kernel&amp;distro=almalinux8&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="manage-patchsets" tabindex="-1"><a class="header-anchor" href="#manage-patchsets" aria-hidden="true">#</a> Manage patchsets</h2><p><strong>POST /admin/api/patchsets/manage</strong></p><p>Allows to perform deploy actions on the patchsets.</p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Query string parameters:</strong></p><ul><li><code>patchset</code>: String, required. Name of the patchset to operate on.</li><li><code>feed</code>: String, required. Name of the feed to operate on. Can be specified multiple times.</li><li><code>action</code>: String, requred. Operartion to perform: <ul><li><code>enable</code>: enable specified patchset.</li><li><code>disable</code>: disable specified patchset.</li><li><code>enable-upto</code>: enable all patchset up to (older than) specified.</li><li><code>undeploy-downto</code>: undeploy all patchsets down to (newer than) specified.</li></ul></li><li><code>product</code>: String, optional. Possible values are: <code>kernel</code>, <code>user</code>, <code>qemu</code>, <code>db</code>. Selects a patchstore for a specified product. <code>kernel</code> by default.</li></ul><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: &quot;ok&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><p>Enable libcare patchset <code>U20200506_01</code> in <code>main</code> and <code>test-feed</code> feeds:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin &#39;https://eportal.corp.com/admin/api/patchsets/manage?patchset=U20200506_01&amp;feed=main&amp;feed=test-feed&amp;product=user&amp;action=enable&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-users" tabindex="-1"><a class="header-anchor" href="#list-users" aria-hidden="true">#</a> List users</h2><p><strong>GET /admin/api/users/</strong></p><p>Returns list of existing users.</p><p>Requires read permissions and accepts basic authorization.</p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: [
    {
      &quot;id&quot;: 1,
      &quot;username&quot;: &quot;test&quot;,
      &quot;description&quot;: &quot;test user&quot;,
      &quot;readonly&quot;: false
    },
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -u admin https://eportal.corp.com/admin/api/users/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-tags" tabindex="-1"><a class="header-anchor" href="#set-tags" aria-hidden="true">#</a> Set tags</h2><p><strong>POST /admin/api/set_tags</strong></p><p>Allows assign tags to server</p><p>Requires write permissions and accepts basic authorization.</p><p><strong>Query string parameters:</strong></p><ul><li><code>server_id</code>: String, required. ID of the server to attach tags.</li><li><code>tags</code>: String, optional. String with semicolon divided tags. If the parameter is not presented, all tags will be removed</li></ul><p>These parameters can also be provided in the JSON body with the header <code>Content-Type: application/json</code></p><p><strong>Response:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;result&quot;: &quot;ok&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><p>Assign tags <code>test</code> and <code>stage</code> to server with id <code>test-centos</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST -u admin &#39;https://eportal.corp.com/admin/api/set_tags?server_id=test-centos&amp;tags=test;stage&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configuration-manager-integration" tabindex="-1"><a class="header-anchor" href="#configuration-manager-integration" aria-hidden="true">#</a> Configuration manager integration</h2><h3 id="ansible-playbook" tabindex="-1"><a class="header-anchor" href="#ansible-playbook" aria-hidden="true">#</a> Ansible playbook</h3><p>Integrating ePortal API access with Ansible is now possible. Rather than calling the kernelcare agent to perform tasks, it is possible to replace it with direct calls to ePortal to achieve the same results.</p><p>Unregister KernelCare agent through API playbook:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>- hosts: kernelcare
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>- hosts: kernelcare
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example of server tagging:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>- hosts: kernelcare
  vars:
    eportal_srv: http://192.168.246.110
    eportal_tags: &#39;staging;location:Boston&#39;
  tasks:
    - name: get systemid content
      slurp:
        src: /etc/sysconfig/kcare/systemid
      register: systemid_file

    - name: set server_id
      set_fact:
        eportal_server_id: &quot;{{ systemid_file.content | b64decode | trim | regex_replace(&#39;^server_id=(\\\\w+)$&#39;, &#39;\\\\1&#39;) }}&quot;

    - name: set server tags using ePortal API
      uri:
        url: &#39;{{ eportal_srv }}/admin/api/set_tags&#39;
        method: POST
        headers:
          X-Api-Key: &#39;{{ lookup(&quot;env&quot;, &quot;EPORTAL_API_TOKEN&quot;) }}&#39;
        body_format: form-urlencoded
        body:
          server_id: &#39;{{eportal_server_id }}&#39;
          tags: &#39;{{ eportal_tags }}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ad hoc run with:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-playbook -u ansible  ./kernelcare.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This can be called during machine tear down to properly remove the server from ePortal.</p><h3 id="chef-recipe" tabindex="-1"><a class="header-anchor" href="#chef-recipe" aria-hidden="true">#</a> Chef recipe</h3><p>Having tighter integration with automation tools like Chef has always been a goal for KernelCare and related tools like ePortal. The following recipe demonstrates how to use the delete_server api to correctly remove a server from ePortal during tear down, and can be integrated with your other recipes to avoid manual operations.</p><p>Unregister KernelCare agent through API recipe:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>eportal_url = &quot;EPORTAL URL&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example (kernelcare-unregister-api.rb):</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>eportal_url = &quot;http://192.168.246.110&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example of server tagging (kernelcare-tag-server.rb):</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>eportal_url = &quot;http://192.168.246.110&quot;
eportal_api_key = &quot;Lgk5-qWeBypejSEc6nYmalGbv11Kh_OyWi2_vigrTro&quot;
tags = &quot;staging;location:Boston&quot;

ruby_block &#39;get-server-id&#39; do
  block do
    node.run_state[&#39;server_id&#39;] = File::read(&#39;/etc/sysconfig/kcare/systemid&#39;).gsub(/server_id=(\\w+)\\s*/, &#39;\\1&#39;)
  end
  action :run
end

http_request &#39;kernelcare-set-server-tags&#39; do
  url &quot;#{eportal_url}/admin/api/set_tags&quot;
  action :post
  message lazy {{&#39;server_id&#39; =&gt; &quot;#{node.run_state[&#39;server_id&#39;]}&quot;, &#39;tags&#39; =&gt; tags}.to_json}
  headers({&#39;X-Api-Key&#39; =&gt; eportal_api_key, &#39;Content-Type&#39; =&gt; &#39;application/json&#39;})
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ad hoc run with:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chef-apply kernelcare-unregister-api.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Recipe: (chef-apply cookbook)::(chef-apply recipe)
  * http_request[kernelcare-unregister-api] action post
    - http_request[kernelcare-unregister-api] POST to http://192.168.246.110/admin/api/delete_server?ip=192.168.246.40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This can be called during machine tear down to properly remove the server from ePortal.</p><h3 id="puppet-task" tabindex="-1"><a class="header-anchor" href="#puppet-task" aria-hidden="true">#</a> Puppet task</h3><p>Puppet provides the framework to run tasks on target systems. The following is a bash script that can run as such a task and demonstrates how to use the delete_server api to correctly remove a server from ePortal during tear down. It can be integrated with your other removal scripts or tasks to avoid manual operations.</p><p>Unregister KernelCare agent through API call:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example (unregister_server.sh):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example of server tagging (tag_server.sh)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

EPORTAL_URL=&#39;http://192.168.246.110&#39;
EPORTAL_TAGS=&#39;staging;location:Boston&#39;
EPORTAL_API_KEY=&#39;Lgk5-qWeBypejSEc6nYmalGbv11Kh_OyWi2_vigrTro&#39;

EPORTAL_SERVER_ID=$( grep -oP &#39;server_id=\\K(.+)&#39; /etc/sysconfig/kcare/systemid )

curl -kL -H &quot;X-Api-Key: \${EPORTAL_API_KEY}&quot; --data-urlencode &quot;server_id=\${EPORTAL_SERVER_ID}&quot; --data-urlencode &quot;tags=\${EPORTAL_TAGS}&quot; &quot;\${EPORTAL_URL}/admin/api/set_tags&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="puppet-plan" tabindex="-1"><a class="header-anchor" href="#puppet-plan" aria-hidden="true">#</a> Puppet Plan</h3><p>If you prefer to have a plan rather than a task, then you can create one from this script with the following steps:</p><ul><li>Create a new directory called <code>eportal_puppet</code></li><li>Inside this directory, create a bolt project:<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt project init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Create a scripts directory inside it</li><li>Place the script above inside of it (call it <code>unregister_server.sh</code>)</li><li>Create the bolt plan using:<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan new eportal_puppet::unregister_server --script eportal_puppet/scripts/unregister_server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Now your plan is ready and can be called directly with:<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan run eportal_puppet:unregister_server -t &lt;TARGETS&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>Ad hoc run example with:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bolt plan run eportal_puppet::unregister_server -t 192.168.246.110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This can be called during machine tear down to properly remove the server from ePortal.</p>`,180)]))}const l=i(t,[["render",r],["__file","index.html.vue"]]);export{l as default};
