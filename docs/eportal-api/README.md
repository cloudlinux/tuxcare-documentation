---
sidebarDepth: 1
---

# ePortal API

You may need to create a separate ePortal account for API usage with:

```
kc.eportal user -a api-user -p <password>
```

It can be useful for SSO/LDAP setups to be able to pass HTTP API credentials via
basic auth.

In general ePortal API is configuration management friendly and idempotent. You
don't need to make additional request to check existing state. For example
entity deletion doesn't raise an error in case there is no such entity.
Or entity creation/modification is a single request that just works and
simply brings desired final state.


## List servers

**GET /admin/api/servers**

Filters servers on various criteria, iterate through list and get
server counts.

Requires basic authorization with read only user permissions.

**Query string parameters:**

* `hostname`: String, optional. Return servers with a hostname like value. Value can
  contain `%` placeholder to match any string.
* `ip`: String, optional. Return servers with IP like value. Value can
  contain `%` placeholder to match any string.
* `feed`: String, optional. Return servers attached to feed. Use `main`
  for default feed.
* `key`: String, optional. Return servers registered to key.
* `registered_age`: Integer, optional. Return servers registered more than
  `registered_age` days ago. If `registered_age` is negative then return
  servers registered less or equal -`registered_age` days ago. For example:
  `registered_age=-3` means to return servers registered 3 or less days ago.
  Hours can be specified by adding `h` suffix: `registered_age=4h` selects
  servers registered more than 4 hours ago.
* `checkin_age`: Integer, optional. Return servers sent check-in more than
  `checkin_age` days ago. For negative values see `registered_age`.
* `updated_age`: Integer, optional. Return servers loaded patches more than
  `updated_age` days ago. For negative values see `registered_age`.
* `is_updated`: Boolean, optional. If `true` then return servers updated to latest
  available patches. If `false` return servers without latest patches.
* `limit`: Integer, optional. Limit result to a specified number of entries. By
  default `limit` is 10.
* `offset`: Integer, optional. Set result to a specified offset. `limit` and
  `offset` can be used to iterate through result.
* `only_count`: Boolean, optional. Return server count only.
* `tag`: String, optional. Adds filter by server tag. E.g `tag=env:test` or `tag=ubuntu`.

**Response:**

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

## Register host

**POST /admin/api/register**

Registers host by provided key and hostname.

**Form (urlencoded) parameters:**

* `key`: String, required. ePortal key to use for registration.
* `hostname`: String, optional. Server's hostname to use.

**Success response (200):**

```json
{
    "server_id": "some-server-id"
}
```

**Error response (400):**

```json
{
    "error": "error code" # invalid-key | key-limit-reached
}
```

**Example:**

```
curl -X POST https://eportal.corp.com/admin/api/register -F key=test
{"server_id":"lw1MO1Du5sF3Cj39"}
```


## Unregister host

**POST /admin/api/delete_server**

Removes registered servers by IP or hostname

Requires basic authorization with admin user permissions.

**Query string parameters:**

* `hostname`: String, optional. Server's hostname to delete.
* `ip`: String, optional. Server's IP to delete.

Endpoint requires at least one parameter `hostname` or `ip`.

**Response:**

Response contains number of deleted servers.

```json
{
    "result": 1
}
```

For example:

```
curl --user admin:admin-password -X POST https://eportal.corp.com/admin/api/delete_server?ip=192.168.1.1
```

Below are examples of using `/admin/api/delete_server` endpoint with various
CM products. Take note, you need a host IP or a hostname to delete it via API.
It can be more convenient to use on of:

* if you have an access to a host (it is alive) it's a way more simpler to call `kcarectl --unregister` to delete the host.
* if host is already destroyed you can consider using bulk [inactive server cleanup](#clean-inactive-servers).


## Create/modify feed

**POST /admin/api/feeds/**

If feed already exists request modifies it.

Requires write permissions and accepts basic authorization.

**Query string/Form/JSON parameters:**

* `name`: String, required. Name of created or modified feed.
* `auto`: Boolean, optional. Sets auto-update property. Default is false.
* `deploy_after`: Integer, optional. Sets delayed period in hours. Default is 0 (not delayed).

**Response:**

```json
{
  "result": {
    "name": "test-feed",
    "auto": true,
    "deploy_after": 0
  }
}
```

**Example:**

```
curl -X POST -u admin -d name=test-feed -d auto=true https://eportal.corp.com/admin/api/feeds/
```


## List feeds

**GET /admin/api/feeds/**

Returns list of existing feeds. Take note: `main` feed is alway present
and couldn't be modified.

Requires read permissions and accepts basic authorization.

**Response:**

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


**Example:**

```
curl -u admin https://eportal.corp.com/admin/api/feeds/
```


## Delete feed

**DELETE /admin/api/feeds/:feed-name**

Requires write permissions and accepts basic authorization.

**Response:**

```json
{
  "result": 1  // number of deleted records, 0 if there is no such feed.
}
```

**Example:**

```
curl -X DELETE -u admin https://eportal.corp.com/admin/api/feeds/test-feed
```


## Create/modify registration key

**POST /admin/api/keys/**

If key already exists request modifies it.

Requires write permissions and accepts basic authorization.

**Query string/Form/JSON parameters:**

* `key`: String, optional. Name of created or modified key. If it's empty
  random key is generated.
* `feed`: String, optional. Name of attached feed. `main` by default.
* `note`: String, optional. Description of the key.
* `server_limit`: Integer, optional. Advisory limit of a maximum number of hosts
  one can register on the key.

**Response:**

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

**Example:**

```
curl -X POST -u admin -d key=test-key -d feed=test-feed https://eportal.corp.com/admin/api/keys/
```


## List keys

**GET /admin/api/keys/**

Returns list of existing keys.

Requires read permissions and accepts basic authorization.

**Response:**

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


**Example:**

```
curl -u admin https://eportal.corp.com/admin/api/keys/
```


## Delete key

**DELETE /admin/api/keys/:key**

Requires write permissions and accepts basic authorization.

**Response:**

```json
{
  "result": 1  // number of deleted records, 0 if there is no such key.
}
```

**Example:**

```
curl -X DELETE -u admin https://eportal.corp.com/admin/api/keys/test-key
```

## List patchsets

**GET /admin/api/patchsets/**

Endpoint lists available patchsets for a feed and product.
Sort order is from oldest to newest patchsets.

Requires read permissions and accepts basic authorization.

**Query string parameters:**

* `feed`: String, optional. Name of the feed to list patchsets for. `main` by default.
* `product`: String, optional. Possible values are: `kernel`, `user`, `qemu`, `db`.
  Selects a patchstore for a specified product. `kernel` by default.

**Response:**

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

**Example:**

```
curl -u admin 'https://eportal.corp.com/admin/api/patchsets/?feed=main&product=kernel'
```


## Manage patchsets

**POST /admin/api/patchsets/manage**

Allows to perform deploy actions on the patchsets.

Requires write permissions and accepts basic authorization.

**Query string parameters:**

* `patchset`: String, required. Name of the patchset to operate on.
* `feed`: String, required. Name of the feed to operate on. Can be specified
  multiple times.
* `action`: String, requred. Operartion to perform:
  - `enable`: enable specified patchset.
  - `disable`: disable specified patchset.
  - `enable-upto`: enable all patchset up to (older than) specified.
  - `undeploy-downto`: undeploy all patchsets down to (newer than) specified.
* `product`: String, optional. Possible values are: `kernel`, `user`, `qemu`, `db`.
  Selects a patchstore for a specified product. `kernel` by default.

**Response:**

```json
{
  "result": "ok"
}
```

**Example:**

Enable libcare patchset `U20200506_01` in `main` and `test-feed` feeds:

```
curl -X POST -u admin 'https://eportal.corp.com/admin/api/patchsets/manage?patchset=U20200506_01&feed=main&feed=test-feed&product=user&action=enable'
```

## List users

**GET /admin/api/users/**

Returns list of existing users.

Requires read permissions and accepts basic authorization.

**Response:**

```json
{
  "result": [
    {
      "id": 1,
      "username": "test",
      "description": "test user",
      "readonly": false
    },
    ...
  ]
}
```


**Example:**

```
curl -u admin https://eportal.corp.com/admin/api/users/
```


## Set tags

**POST /admin/api/set_tags**

Allows assign tags to server

Requires write permissions and accepts basic authorization.

**Query string parameters:**

* `server_id`: String, required. ID of the server to attach tags.
* `tags`: String, optional. String with semicolon divided tags. If the parameter is not presented, all tags will be removed

These parameters can also be provided in the JSON body with the header `Content-Type: application/json`

**Response:**

```json
{
  "result": "ok"
}
```

**Example:**

Assign tags `test` and `stage` to server with id `test-centos`

```
curl -X POST -u admin 'https://eportal.corp.com/admin/api/set_tags?server_id=test-centos&tags=test;stage'
```


## Configuration manager integration

### Ansible playbook

Integrating ePortal API access with Ansible is now possible. Rather than calling the kernelcare agent to perform tasks, it is possible to replace it with direct calls to ePortal to achieve the same results.

Unregister KernelCare agent through API playbook:

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

Example:

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

Ad hoc run with:

```
ansible-playbook -u ansible  ./kernelcare.yml
```

This can be called during machine tear down to properly remove the server from ePortal.

### Chef recipe

Having tighter integration with automation tools like Chef has always been a goal for KernelCare and related tools like ePortal. The following recipe demonstrates how to use the delete_server api to correctly remove a server from ePortal during tear down, and can be integrated with your other recipes to avoid manual operations.

Unregister KernelCare agent through API recipe:

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

Example (kernelcare-unregister-api.rb):

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

Ad hoc run with:

```
chef-apply kernelcare-unregister-api.rb
```

Output:

```json
Recipe: (chef-apply cookbook)::(chef-apply recipe)
  * http_request[kernelcare-unregister-api] action post
    - http_request[kernelcare-unregister-api] POST to http://192.168.246.110/admin/api/delete_server?ip=192.168.246.40
```

This can be called during machine tear down to properly remove the server from ePortal.

### Puppet task

Puppet provides the framework to run tasks on target systems. The following is a bash script that can run as such a task and demonstrates how to use the delete_server api to correctly remove a server from ePortal during tear down. It can be integrated with your other removal scripts or tasks to avoid manual operations.

Unregister KernelCare agent through API call:

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

Example (unregister_server.sh):

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

### Puppet Plan

If you prefer to have a plan rather than a task, then you can create one from this script with the following steps:

* Create a new directory called `eportal_puppet`
* Inside this directory, create a bolt project:
  ```
  bolt project init
  ```
* Create a scripts directory inside it
* Place the script above inside of it (call it `unregister_server.sh`)
* Create the bolt plan using:
  ```
  bolt plan new eportal_puppet::unregister_server --script eportal_puppet/scripts/unregister_server.sh
  ```
* Now your plan is ready and can be called directly with:
  ```
  bolt plan run eportal_puppet:unregister_server -t <TARGETS>
  ```

Ad hoc run example with:

```
bolt plan run eportal_puppet::unregister_server -t 192.168.246.110
```

This can be called during machine tear down to properly remove the server from ePortal.
