# Service Descriptions


In this section you can find the AlmaCare Service Description.

## AlmaCare


### 1. Introduction

In April 2023, TuxCare, a division of CloudLinux Inc., launched AlmaCare – an accessible enterprise support extension for AlmaLinux. It provides two levels of support, the essential level, focused on the operating system, and the enhanced support extension focused on applications. This document defines those services.

**Overview of Services**

There are two levels of AlmaCare support services: 

**Essential Support** – a limited offering that covers software updates, software packaging, repository access to the AlmaLinux distribution, support for the live patching technology, self-service portal, as well as an online knowledge base and technical support.

**Enhanced Support** – an enterprise support service covering a range of open-source software running on AlmaLinux, self-service portal, as well as an online knowledge base and technical support.

### 2. Definitions

**“Customer,” “End User,” “User,” “You/Your”** shall mean an organization which has a valid license to the Product that is supported in accordance with this Program. 

**“Customer Technical Lead”** shall mean an employee or authorized contractor of Customer who shall complete required AlmaLinux product training, in order to serve as Customer’s first line of internal support for the purpose of triaging AlmaLinux related product issues, and who shall have authority to submit Technical Support Incidents and Service Requests to TuxCare Technical Support 

**“Incident”** shall mean any event reported by the Customer, which is not part of the standard operation of a Product, and which causes, or may cause, an interruption to, or a reduction in, the quality of service provided by the Product. 

**“Incident Severity/Urgency”** shall mean a measure of the business criticality of an incident or problem based on the business needs of the Customer. See Appendix 1 for more details. 

**“Known Error”** shall mean a Problem that becomes a Known Error when the root cause is known, and a temporary workaround or permanent alternative has been identified. 

**“Problem”** shall mean an unknown underlying cause of one or more Incidents. It becomes a Known Error when the root cause is known, and a temporary workaround or permanent alternative has been identified. 

**“Product(s)”** shall mean software product(s) of TuxCare, which the Customer has purchased, deployed, and installed in accordance with the terms of a License Agreement between TuxCare and the Customer. 

**“Product Error”** shall mean undeclared behavior of the Product. 

**“Response time”** shall mean the elapsed time measured from the moment of any incident receipt until confirmation of receipt by AlmaCare to the initiator (via support system). 

**“Service Request”** shall mean a request from a Customer for support, delivery, information, advice, or documentation, which is not related to an incorrect functioning or non-functioning of the Product(s). 

**“Upgrade”** shall mean a Product update associated with assigning a new version number. 

**“Workaround”** shall mean a procedure that may serve as a temporary solution to an incident.

### 3. Service Features

| Feature | Essential Support | Enhanced Support |
|------|:------|:------|
|Support|<ul><li>AlmaLinux installation/update issues (packaging, dependencies, repositories)</li><li>Migration issues (from CentOS/OracleLinux/RHEL to AlmaLinux)</li><li>TuxCare ePortal</li><li>Live patching</li><li>Operating system bugs / kernel crashes; root cause analysis</li></ul>|Coverage, includes the following applications: <ul><li>Apps - Identity / Directory<ul><li>FreeIPA, Bind</li><li>openldap</li></ul></li><li>Apps - Infrastructure<ul><li>Ceph</li><li>Samba</li></ul></li><li>Containers (docker, podman)</li><li>VMs (KVM)</li><li>Apps - Package / Config management:<ul><li>Foreman</li><li>Ansible</li><li>Puppet</li><li>Chef</li></ul></li><li>Apps - Web servers<ul><li>nginx</li><li>apache</li><li>squid</li></ul></li><li>Apps - Data<ul><li>SQL Databases (MariaDB, Postgresql)</li><li>Redis, MySQL, InfluxDB, CouchDB</li></ul></li><li>Apps - Security / Compliance<ul><li>OpenSCAP</li></ul></li><li>Devops Apps:<ul><li>gitlab/git, jenkins, kubernetes</li></ul></li><li>Apps - event streaming<ul><li>Apache Kafka</li><li>Rabbitmq</li></ul></li><li>Operating system migration (e.g, from Oracle to AlmaLinux)</li><li>Operating system upgrades (e.g, from CentOS 7 to AlmaLinux 8)</li><li>Design & Architecture (e.g., review)</li><li>Data storage, backup assistance</li><li>Configuration assistance</li></ul> ***Outside the scope: code changes or software updates***|
|Incident Support|24/7/365 support through web ticketing system|24/7/365 support through web ticketing system and email|
|Allowed Number of Customer Technical Leads|2 per 1000 hosts, with maximum 10|2 per 1000 hosts, with maximum 10|


### 4. Description of Support Program

#### Accessing Technical Support

AlmaCare Technical Support is designed for enterprise clients with trained IT staffs which provide initial ‘1st-line’ support to triage incidents. Customer and AlmaCare will agree on Customer Technical Leads with the client, who will be entitled to access AlmaCare Technical Support services; Customer Technical Leads must complete AlmaLinux training requirements. Customer Technical Leads may submit Technical Support Incidents and Service Requests to:

1. AlmaCare Technical Support ticketing system:
  * Acceptance of requests 24 hours a day, 365 days a year 
  * Unlimited number of tickets may be submitted 
  * Customers will be supplied with instructions describing use of the AlmaCare ticketing system during on-boarding 
  * User accounts will be created for each nominated user within each client organization  
  * User accounts will have access to log, view and respond to tickets
2. Email: acceptance of requests 24 hours a day, 365 days a year:
  * New tickets may be created by simply emailing the AlmaCare support desk (email address to be provided during on-boarding) 

All customers are entitled to access the Support knowledgebase, FAQs, and other self-service tools as may be offered by AlmaCare.


#### Response Time

When submitting a ticket, Customers will select the appropriate Severity Level, as defined in Appendix A, from a drop-down list; AlmaCare reserves the right to change the Severity Level based on available information. TuxCare will use reasonable efforts to respond to support requests within the initial response times described below, based on the Severity Level of the incident.

|Severity Level|Essential Support|Enhanced Support|
|------|:------|:------|
|1|2 hours|30 minutes|
|2|12 hours|2 hours|
|3|2 business days|12 hours|
|4|5 business days|2 business days|


#### Incident Resolution Cooperation

Some incidents may require reproduction by AlmaCare for the purpose of testing and verifying a product error. Customer agrees to provide AlmaCare with all information which may be necessary for reproducing the condition under which the incident will re-occur and could be examined. 

AlmaCare will endeavor to reproduce the incident as soon as all the necessary information and software and/or hardware is provided. If the incident could not be reproduced, Customer should grant to AlmaCare supervised remote access to the malfunctioning system. 
If the incident cannot be reproduced by either party, or Customer did not grant access to the network environment where the incident could be reproduced, or if it is detected that the incident’s cause lies beyond the Product, the incident cannot be classified within this Support Program. 

An incident may at any time be either on the Customer’s side (i.e., Customer is taking actions that will promote/expedite the resolution of the issue by AlmaCare) or on the AlmaLinux side. An incident is on the Customer’s side when AlmaCare engineers request information from the Customer. When Customer provides the requested information to AlmaCare, the incident is considered to be on the side of the latter. The period during which the incident may be on the Customer’s side is limited to one calendar week. If the Customer’s response is overdue, the incident is closed by timeout.


### Appendices

#### Appendix A. Incident Severity Levels


|Level: Descriptor|Criteria/Definition|
|------|:------|
|Level 1: Business Standstill|Production and/or mission critical services are down and there is no immediate workaround.<ul><li>All or a majority of your mission critical environment is unavailable or not functioning</li><li>Your business operations are completely disrupted</li><li>Majority / All Critical users affected</li><li>Request from important client/partner (subject to management approval)</li></ul>|
|Level 2: Major Impact|Major feature or function failure; operations are severely restricted, but a workaround is available.<ul><li>Critical business operations seriously affected</li><li>Direct fiscal impact</li><li>Substantial number of users are affected, or critical group of users are affected that would not allow the business to run normally</li></ul>|
|Level 3: Minor Impact|Minor feature or function failure; standard business operations can continue, though possibly in a minor restricted manner.<ul><li>No immediate direct fiscal impact</li><li>A temporary workaround may have been provided</li></ul>|
|Level 4: General Inquiry/Issue|General usage questions or other non-critical inquiries.<ul><li>Small number of users/systems affected</li><li>Documentation issue</li><li>General information request</li><li>Enhancement request</li></ul>|


#### Appendix B: Quality management 


**Incident escalation**

Customer may escalate unresolved incidents or reports of dissatisfaction according to the following scheme:

|Escalation Level|1|2|3|
|------|------|---|---|
|Escalation Path|Technical Senior Support Engineer|AlmaCare Team Lead or Manager|Chief Experience Officer (CXO)|

**Provision of reports on open incidents**

During the process of incident resolution, AlmaCare will use reasonable effort to promptly provide the Customer with information regarding open incidents’ status, according to the following table.

|Severity Level|Report Schedule (through the web ticketing system)|
|------|------|
|1|By agreement, but not more often than once a day|
|2|At least once every 3 business days|
|3|At least once every 2 weeks|
|4|Upon customer request|

**Limitations of the Support Services**

Technical support covered by any of the AlmaCare Support Programs shall not be provided in the following cases:

* Incidents already resolved for the Customer (e.g., an incident that occurred on one installed copy of the Product after the same incident had been resolved for another copy of the Product)
* Troubleshooting of all issues similar or identical to already resolved issues (i.e., the incidents to which a previously produced solution can be applied without additional guidance from AlmaCare)
* Incidents caused by Customer’s hardware malfunction
* Incidents caused by software platform incompatibility (including, but not limited to beta software, new versions of service packs or additions, whose compatibility with the Product has not been confirmed by AlmaLinux)
* Incidents caused by installing and running third-party applications (including, but not limited to the list of unsupported or incompatible applications published in the documentation)
* Incidents for which the Customer cannot provide accurate information, as reasonably requested by AlmaCare, in order to reproduce, investigate, and resolve the incident
* Incidents which arise as a result of neglect or incorrect use of AlmaCare instructions, which, if properly used, would have prevented the Incident
