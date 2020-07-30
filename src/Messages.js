/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
    registerYourSystems: {
        id: 'registerYourSystems',
        description: 'Title',
        defaultMessage: 'Register your systems with Red Hat Insights'
    },
    preinstallationChecks: {
        id: 'preinstallationChecks',
        description: 'Title',
        defaultMessage: 'Preinstallation checks'
    },
    systemsManaged: {
        id: 'systemsManaged',
        description: 'Step one, first question',
        defaultMessage: 'How are the systems managed?'
    },
    viewInsightsDashboard: {
        id: 'viewInsightsDashboard',
        description: 'View Insights dashboard',
        defaultMessage: 'View Insights dashboard'
    },
    installTheClient: {
        id: 'installTheClient',
        description: 'Install the client and register your systems to Red Hat Insights',
        defaultMessage: 'Install the client and register your systems to Red Hat Insights'
    },
    rhel8: {
        id: 'rhel8',
        description: 'RHEL 8',
        defaultMessage: 'RHEL 8'
    },
    rhel76: {
        id: 'rhel76',
        description: 'RHEL 7 & 6',
        defaultMessage: 'RHEL 7 & 6'
    },
    downloadPuppet: {
        id: 'downloadPuppet',
        description: 'Download the Insights-client puppet module',
        defaultMessage: 'Download the Insights-client puppet module'
    },
    downloadModule: {
        id: 'downloadModule',
        description: 'Download module',
        defaultMessage: 'Download module'
    },
    installAndConfigure: {
        id: 'installAndConfigure',
        description: 'Install and configure your puppet module',
        defaultMessage: 'Install and configure your puppet module'
    },
    automatedInstallation: {
        id: 'automatedInstallation',
        description: 'Automated Installation',
        defaultMessage: 'Automated Installation'
    },
    manualInstall: {
        id: 'manualInstall',
        description: 'Manual Installation',
        defaultMessage: 'Manual Installation'
    },
    puppetAutomatedInstall: {
        id: 'puppetAutomatedInstall',
        description: 'Text for rhsm puppet automated installation',
        defaultMessage: `If you are using Red Hat Satellite's configuration management provided by puppet this process can be automated by applying the preinstalled Puppet class {class}. This class can be imported from the Puppet Master into t he appropriate Puppet enviroment and papplied to hots that you wish to subrscribe to Red Hat Insights.`
    },
    puppetAutomatedInstallMoInfo: {
        id: 'puppetAutomatedInstallMoInfo',
        description: 'Text for rhsm puppet automated installation mo info',
        defaultMessage: 'For more information on this topic, refer to the Creating a Host Group chapter in the official Satellite 6 User Guide.'
    },
    deployingRHInsights: {
        id: 'deployingRHInsights',
        description: 'Deploying Red Hat Insights using the Ansible Role included with your Smart Management entitlement',
        defaultMessage: 'Deploying Red Hat Insights using the Ansible Role included with your Smart Management entitlement'
    },
    youCanAutomate: {
        id: 'youCanAutomate',
        description: 'You can automate the installation and registration of hosts with Red Hat Insights using the {role} Ansible role. For more information about adding this role to your Satellite, see {link}.',
        defaultMessage: 'You can automate the installation and registration of hosts with Red Hat Insights using the {role} Ansible role. For more information about adding this role to your Satellite, see {link}.'
    },
    managingAnsibleRoles: {
        id: 'managingAnsibleRoles',
        description: 'Managing Ansible Roles',
        defaultMessage: 'Managing Ansible Roles'
    },
    hostGroup: {
        id: 'hostGroup',
        description: 'Host Group chapter',
        defaultMessage: 'Host Group chapter'
    },
    rhSupported: {
        id: 'rhSupported',
        description: 'Red Hat-supported versions',
        defaultMessage: 'Red Hat-supported versions'
    },
    operatingSystem: {
        id: 'operatingSystem',
        description: 'OS',
        defaultMessage: 'Operating System'
    },
    operatingSystemNote: {
        id: 'operatingSystemNote',
        description: 'OS note',
        defaultMessage: 'Note: Red Hat Insights can be used on all {rhSupported} of Red Hat Enterprise Linux, version 6.4 and later.'
    },
    stepOneTitle: {
        id: 'stepOneTitle',
        description: 'Step one',
        defaultMessage: 'Step 1: Tell us about your systems'
    },
    deployRHI: {
        id: 'deployRHI',
        description: 'Deploy Red Hat Insights using Puppet in Satellite',
        defaultMessage: 'Deploy Red Hat Insights using Puppet in Satellite'
    },
    stepNumberTitle: {
        id: 'stepNumberTitle',
        description: 'Step number and title is variable',
        defaultMessage: 'Step {number}: {variable}'
    },
    rhsChooseConfigMan: {
        id: 'rhsChooseConfigMan',
        description: 'Choose a configuration management tool',
        defaultMessage: 'Choose a configuration management tool'
    },
    rhsChooseConfig: {
        id: 'rhsChooseConfig',
        description: 'Note: you can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.',
        defaultMessage: 'Note: you can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.'
    },
    rhsChooseConfigStepOne: {
        id: 'rhsChooseConfigStepOne',
        description: 'Add the RedHatInsights.insights-client role to the hosts',
        defaultMessage: `Add the RedHatInsights.insights-client role to the hosts. {newLine}
        For new hosts, see {linkOne}. {newLine}
        For existing hosts, see {linkTwo}.`
    },
    rhsChooseConfigStepTwo: {
        id: 'rhsChooseConfigStepTwo',
        description: 'Step two',
        defaultMessage: 'To run the RedHatInsights.insights-client role on your host, navigate to Hosts > All Hosts and click the name of the host that you want to use.'
    },
    rhsChooseConfigStepThree: {
        id: 'rhsChooseConfigStepThree',
        description: 'Step 3',
        defaultMessage: 'Click the Run Ansible roles button.'
    },
    rhsChooseConfigStepFour: {
        id: 'rhsChooseConfigStepFour',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'See host on the Insights > Overview page of the Satellite web UI'
    },
    sectionTwo: {
        id: 'sectionTwo',
        description: 'Section 2.1',
        defaultMessage: 'Section 2.1, "Creating a Host in Red Hat Satellite"'
    },
    chapterEight: {
        id: 'chapterEight',
        description: 'Chapter 8, Using Ansible Roles',
        defaultMessage: 'Chapter 8, Using Ansible Roles'
    },
    toApply: {
        id: 'toApply',
        description: 'To apply any system updates to the Red Hat Insights plug-in, enter httpd restart after updating.',
        defaultMessage: 'To apply any system updates to the Red Hat Insights plug-in, enter httpd restart after updating.'
    },
    toView: {
        id: 'toView',
        description: 'To view the logs for Red Hat Insights and all plug-ins, go to /var/log/foreman/production.log.',
        defaultMessage: 'To view the logs for Red Hat Insights and all plug-ins, go to /var/log/foreman/production.log.'
    },
    ifYouHaveProblems: {
        id: 'ifYouHaveProblems',
        description: 'If you have problems connecting to Red Hat Insights, ensure that your certificates are up-to-date. Refresh your subscription manifest to update your certificates.',
        defaultMessage: 'If you have problems connecting to Red Hat Insights, ensure that your certificates are up-to-date. Refresh your subscription manifest to update your certificates.'
    },
    youCanChange: {
        id: 'youCanChange',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'You can change the default schedule for running insights-client by configuring insights-client.timer on a host. For more information, see {link} in the Client Configuration Guide for Red Hat Insights.'
    },
    changingTheInsights: {
        id: 'changingTheInsights',
        description: 'Changing the insights-client schedule',
        defaultMessage: 'Changing the insights-client schedule'
    },
    rhsm: {
        id: 'rhsm',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'Red Hat Subscription Manager'
    },
    registerRhsm: {
        id: 'registerRhsm',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'Register with RHSM'
    },
    registerRhsmText: {
        id: 'registerRhsmText',
        description: 'Red Hat Subscription Manager text body',
        defaultMessage: 'You must register all Red Hat Enterprise Linux (RHEL) systems with Red Hat Subscription Manager to recieve necessary updates and to resolve software dependencies.'
    },
    registerRhsmTextNote: {
        id: 'registerRhsmTextNote',
        description: 'Red Hat Subscription Manager text note',
        defaultMessage: 'Note: If the system cannot be subscribed to RHSM, {basicAuth} can be configured on the client.'
    },
    registerRhsmTextNoteAfter: {
        id: 'registerRhsmTextNoteAfter',
        description: 'Red Hat Subscription Manager text note after',
        defaultMessage: 'If you have a web-based proxy between your system and the Internet, you can configure the insights-client to connect through it. For more information, refer to {howToAccess}.'
    },
    basicAuth: {
        id: 'basicAuth',
        description: 'basic authentication',
        defaultMessage: 'basic authentication'
    },
    howToAccess: {
        id: 'howToAccess',
        description: 'How to access Red Hat Insights through a firewall/Proxy',
        defaultMessage: 'How to access Red Hat Insights through a firewall/Proxy'
    },
    rhs: {
        id: 'rhs',
        description: 'Red Hat Satellite',
        defaultMessage: 'Red Hat Satellite'
    },
    publicCloud: {
        id: 'publicCloud',
        description: 'Public cloud',
        defaultMessage: 'Public cloud/RHUI'
    },
    enablingInsightsOnRhuiTitle: {
        id: 'enablingInsightsOnRhuiTitle',
        description: 'Enabling Insights on RHUI/Cloud marketplace',
        defaultMessage: 'Enabling Insights on RHUI/Cloud marketplace'
    },
    enablingInsightsOnRhuiParagraph1: {
        id: 'enablingInsightsOnRhuiParagraph1',
        description: 'Enabling Insights on RHUI/Cloud marketplace text first paragraph',
        defaultMessage: 'You must have a Red Hat account.  If you\'ve used RHEL on-demand through a public cloud marketplace but have never interacted with Red Hat directly, you can create an account by {createRedHatAccountInstructions}.'
    },
    enablingInsightsOnRhuiParagraph2: {
        id: 'enablingInsightsOnRhuiParagraph2',
        description: 'Enabling Insights on RHUI/Cloud marketplace text second paragraph',
        defaultMessage: 'If you\'re using a Red Hat subscription to entitle your RHEL system, you must enable the subscription for Red Hat Cloud Access.  Learn how to in the {cloudAccessDocumentation}.'
    },
    createRedHatAccountInstructions: {
        id: 'createRedHatAccountInstructions',
        description: 'Create Red Hat Account instructions',
        defaultMessage: 'following these instructions'
    },
    cloudAccessDocumentation: {
        id: 'cloudAccessDocumentation',
        description: 'Cloud Access documentation',
        defaultMessage: 'Cloud Access documentation'
    },
    deployInsightsOnCloudTitle: {
        id: 'deployInsightsOnCloudInfra',
        description: 'Deploy Red Hat Insights on your cloud infrastructure title',
        defaultMessage: 'Deploy Red Hat Insights on your cloud infrastructure'
    },
    deployInsightsOnCloudText: {
        id: 'deployInsightsOnCloudText',
        description: 'Deploy Red Hat Insights on your cloud infrastructure text',
        defaultMessage: 'The following guidance is user who wish to deploy Red Hat Insights on an existing, cloud marketplace-purchased Red Hat Enterprise Linux (RHEL) system managed by Red Hat Update Infrastructure (RHUI).  This include on-demand, hourly systems purchased from CCSP marketplace, as well as systems deployed from Red Hat Gold Images in AWS.  This procedure involves the following tasks:'
    },
    installInsightsClient: {
        id: 'installInsightsClient',
        description: 'Install the Insights client on each system',
        defaultMessage: 'Install the Insights client on each system'
    },
    registerInsightsClient: {
        id: 'registerInsightsClient',
        description: 'Register the system to Insights',
        defaultMessage: 'Register the system to Insights'
    },
    configureBasicAuthTitle: {
        id: 'configureBasicAuthTitle',
        description: 'Configure basic authentication in insights-client.conf',
        defaultMessage: 'Configure basic authentication in /etc/insights-client/insights-client.conf'
    },
    configureBasicAuthStep1: {
        id: 'configureBasicAuthStep1',
        description: 'Modify the auto_config= value to FALSE',
        defaultMessage: 'Modify the auto_config= value to FALSE'
    },
    configureBasicAuthStep2: {
        id: 'configureBasicAuthStep2',
        description: 'Add your Red Hat SSO username to username',
        defaultMessage: 'Add your Red Hat SSO username to username'
    },
    configureBasicAuthStep3: {
        id: 'configureBasicAuthStep3',
        description: 'Add your Red Hat SSO password to password',
        defaultMessage: 'Add your Red Hat SSO password to password'
    },
    configureBasicAuthStep4: {
        id: 'configureBasicAuthStep4',
        description: 'Save the configuration',
        defaultMessage: 'Save the configuration'
    },
    insightsWithBasicAuthNote: {
        id: 'insightsWithBasicAuthNote',
        description: 'Note about Insights with basic authentication',
        defaultMessage: 'Note: To read more about using Red Hat Insights with basic authentication and recommended best practices, {visitOurDocumentation}.'
    },
    visitOurDocumentation: {
        id: 'visitOurDocumentation',
        description: 'visit our documentation',
        defaultMessage: 'visit our documentation'
    },
    dataCollection: {
        id: 'dataCollection',
        description: 'Data collection & controls',
        defaultMessage: 'Data collection & controls'
    },
    learnMore: {
        id: 'learnMore',
        description: 'Learn more',
        defaultMessage: 'Learn more'
    },
    setupConfigure: {
        id: 'setupConfigure',
        description: 'Setup and Configure',
        defaultMessage: 'Setup and Configure'
    },
    assessAndMonitor: {
        id: 'assessAndMonitor',
        description: 'Assess and monitor the compliance of your RHEL systems using Policies',
        defaultMessage: 'Assess and monitor the compliance of your RHEL systems using Policies'
    },
    detectAndNotify: {
        id: 'detectAndNotify',
        description: 'Detect and be notified of system configuration changes using Custom Policies',
        defaultMessage: 'Detect and be notified of system configuration changes using Custom Policies'
    },
    rhSM: {
        id: 'rhSM',
        description: 'Red Hat® Smart Management',
        defaultMessage: 'Red Hat® Smart Management'
    },
    combineTheFlexible: {
        id: 'combineTheFlexible',
        description: 'Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights',
        defaultMessage: 'Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights'
    },
    subscribeSatellite: {
        id: 'subscribeSatellite',
        description: 'Subscribe hosts to the Satellite server',
        defaultMessage: 'Subscribe hosts to the Satellite server'
    },
    subscribeSatelliteBody: {
        id: 'subscribeSatelliteBody',
        description: 'Subscribe hosts to the Satellite server -body',
        defaultMessage: 'This step is typically already performed as par of Satellite host configuration.  Only RHEL hosts registered to the particular Satellite server will have reports available in the Satellite UI.'
    },
    verifySatellite: {
        id: 'verifySatellite',
        description: 'Verify Satellite server connection to Red Hat Insights',
        defaultMessage: 'Verify Satellite server connection to Red Hat Insights'
    },
    verifySatelliteStepOne: {
        id: 'verifySatelliteStepOne',
        description: 'In the Satellite UI, navigate to Insighst > Manage.',
        defaultMessage: 'In the Satellite UI, navigate to Insighst > Manage.'
    },
    verifySatelliteStepTwo: {
        id: 'verifySatelliteStepTwo',
        description: 'Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.',
        defaultMessage: 'Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.'
    },
    verifySatelliteNote: {
        id: 'verifySatelliteNote',
        description: 'Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.',
        defaultMessage: 'Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.'
    },
    useAutomation: {
        id: 'useAutomation',
        description: 'Use automation',
        defaultMessage: 'Do you wish to use automation for installation?'
    },
    automationNote: {
        id: 'automationNote',
        description: 'Automation note',
        defaultMessage: 'Note: You can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.'
    },
    ansible: {
        id: 'ansible',
        description: 'Ansible',
        defaultMessage: 'Ansible'
    },
    puppet: {
        id: 'puppet',
        description: 'Puppet',
        defaultMessage: 'Puppet'
    },
    no: {
        id: 'no',
        description: 'No',
        defaultMessage: 'No'
    },
    additionalInfo: {
        id: 'additionalInfo',
        description: 'Additional Information',
        defaultMessage: 'Additional Information'
    },
    downloadClientPlaybook: {
        id: 'downloadClientPlaybook',
        description: 'Download Playbook for Ansible registration',
        defaultMessage: 'Download the insights-client playbook'
    },
    downloadPlaybook: {
        id: 'downloadPlaybook',
        description: 'Download playbook',
        defaultMessage: 'Download playbook'
    },
    configurePlaybook: {
        id: 'configurePlaybook',
        description: 'Configure ansible playbook',
        defaultMessage: 'Install and configure your playbook'
    },
    workWithPlaybook: {
        id: 'workWithPlaybook',
        description: 'Work with Playbook',
        defaultMessage: 'Working With Playbooks'
    },
    installAnsible: {
        id: 'installAnsible',
        description: 'Install ansible tab message',
        defaultMessage: 'Install Ansible and get started'
    },
    configureClient: {
        id: 'configureClient',
        description: 'Configure insights-client tab',
        defaultMessage: 'Configure insights-client playbook'
    },
    installSystemRoles: {
        id: 'installSystemRoles',
        description: 'Install RHEL system roles',
        defaultMessage: 'Installing RHEL System Roles and Ansible'
    },
    inventorySetup: {
        id: 'inventorySetup',
        description: 'Inventory Setup Title',
        defaultMessage: 'Setup your Ansible inventory'
    },
    inventorySetupSubtitle: {
        id: 'inventorySetupSubtitle',
        description: 'Inventory Setup Subtitle',
        defaultMessage: '{method} generated inventory'
    },
    statically: {
        id: 'statically',
        description: 'statically',
        defaultMessage: 'Statically'
    },
    dynamically: {
        id: 'dynamically',
        description: 'dynamically',
        defaultMessage: 'Dynamically'
    },
    staticInventory: {
        id: 'staticInventory',
        description: 'Static Inventory setup details',
        defaultMessage: 'Ansible works against multiple managed hosts in your infrastructure at the same time, using host lists known as inventory.'
    },
    dynamicInventory: {
        id: 'dynamicInventory',
        description: 'Dynamic Inventory setup details',
        defaultMessage: 'Generate an Ansible inventory on system inventory which fluctuates over time. Also track hosts from multiple sources.'
    },
    roleVariables: {
        id: 'roleVariables',
        description: 'Role Variables',
        defaultMessage: 'Role Variables'
    },
    factsInstalled: {
        id: 'factsInstalled',
        description: 'Facts Installed',
        defaultMessage: 'Facts Installed'
    },
    examples: {
        id: 'examples',
        description: 'Examples',
        defaultMessage: 'Examples'
    },
    rolesAndConfig: {
        id: 'rolesAndConfig',
        description: 'Roles and Configuration title for tabs',
        defaultMessage: 'Role Variables / Configuration'
    },
    rolesAndConfigDescription: {
        id: 'rolesAndConfigDescription',
        description: 'Roles and Configuration Description for tabs',
        defaultMessage: 'The following variables can be used to perform some initial configuration for the insights-client install. These variables can be passed directly with the playbook invocation or placed in a configuration yaml file. See the section \'Example Playbook\' for information on various ways to use these variables.'
    },
    optional: {
        id: 'optional',
        description: 'optional',
        defaultMessage: 'optional'
    },
    username: {
        id: 'username',
        description: 'username',
        defaultMessage: 'username'
    },
    password: {
        id: 'password',
        description: 'password',
        defaultMessage: 'password'
    },
    displayNameOne: {
        id: 'displayNameOne',
        description: 'Part one of insights_display_name details',
        defaultMessage: 'Sets or resets the Display Name/System Name within Insights. Insights needs an easily identifiable name for each system. If no explicit display name is given to a system, Insights uses it\'s hostname. If a system\'s hostname is not easily identifiable, like "localhost" or "d4098731408", you can give it a better name by setting \'insights_display_name.\''
    },
    displayNameTwo: {
        id: 'displayNameTwo',
        description: 'Part two of insights_display_name details',
        defaultMessage: 'If undefined (not set at all), this role will not make changes to a system\'s display name.'
    },
    displayNameThree: {
        id: 'displayNameThree',
        description: 'Part three of insights_display_name details',
        defaultMessage: 'If defined (set) to be the empty string, this role will remove any previously set display name for the system, and cause it to use the systems hostname as it\'s Display name/System name.'
    },
    displayNameFour: {
        id: 'displayNameFour',
        description: 'Part four of insights_display_name details',
        defaultMessage: 'If defined to be a non-empty string, this role will replace any previously set display name for the system with the given string.'
    },
    userPassOne: {
        id: 'userPassOne',
        description: 'Part one of redhat_portal username and password',
        defaultMessage: 'If defined, this sets, changes, or removes the {key} in the Insights configuration. If undefined, this role will make no changes to the Insights configuration.'
    },
    userPassTwo: {
        id: 'userPassTwo',
        description: 'Part two of redhat_portal username and password',
        defaultMessage: 'If defined to a non-empty string this role will set or change the {key}. If defined to an empty string this role will remove the {key}.'
    },
    userPassThree: {
        id: 'userPassThree',
        description: 'Part three of redhat_portal username and password',
        defaultMessage: 'These should be valid {key} for Insights/Red Hat Portal/Red Hat Subscription Manager.'
    },
    userPassFour: {
        id: 'userPassFour',
        description: 'Part four of redhat_portal username and password',
        defaultMessage: 'If the {key} is set in the Insights configuration, it will be used as credentials for all future interactions with the Insights server.'
    },
    userPassFive: {
        id: 'userPassFive',
        description: 'Part five of redhat_portal username and password',
        defaultMessage: 'These credentials are only necessary if the client system is not registered with Red Hat Subscription Manager. If the username and password are not set in the Insights configuration, which is the default initial state, all interactions with the Insights server will use the CERT provided by RHSM.'
    },
    autoConfig: {
        id: 'autoConfig',
        description: 'auto_config secret',
        defaultMessage: 'True/False - attempt to auto-configure the network connection with Satellite or RHSM. Default behavior is True.'
    },
    authMethod: {
        id: 'authMethod',
        description: 'auth_method secret',
        defaultMessage: 'BASIC/CERT - This parameter is used to set the authentication method for the Portal. Default bahavior is BASIC.Note: when \'auto_config\' is enabled (set to True), CERT will be used if RHSM or Satellite is detected.'
    },
    insightsProxy: {
        id: 'insightsProxy',
        description: 'insights_proxy secret',
        defaultMessage: 'If the insights client is behind a proxy or firewall, a proxy can be specified. Default is unspecified. Ex: http://user:pass@192.168.100.50:8080'
    },
    pythonInterpreterOne: {
        id: 'pythonInterpreterOne',
        description: 'Part one of python_interpreter',
        defaultMessage: 'This variable allows you to provide the python interpreter path for ansible to use. This is needed when managing RHEL 8 with older versions of Ansible (2.7 and lower).'
    },
    pythonInterpreterTwo: {
        id: 'pythonInterpreterTwo',
        description: 'Part two of python_interpreter',
        defaultMessage: 'RHEL 8 platform-python path: <strong>/usr/libexec/platform-python</strong>'
    },
    factsInstalledOne: {
        id: 'factsInstalledOne',
        description: 'Part one of facts installed description',
        defaultMessage: 'This role installs a new fact \'insights\' that provides the system\'s Insights\' System Id. This System Id can be used to query about the system with the Insights Service API.'
    },
    factsInstalledTwo: {
        id: 'factsInstalledTwo',
        description: 'Part two of facts installed description',
        defaultMessage: 'Once this role is run against a system, any future playbook run against that same system will have the system\'s Insights System Id in the fact \'ansible_local.insights.system_id\'.'
    },
    exampleTaskOne: {
        id: 'exampleTaskOne',
        description: 'Part one of the example task message',
        defaultMessage: 'For example the task:'
    },
    exampleTaskTwo: {
        id: 'exampleTaskTwo',
        description: 'Part two of the example task message',
        defaultMessage: 'will display the System ID.'
    },
    examplePlaybook: {
        id: 'examplePlaybook',
        description: 'Example Playbook',
        defaultMessage: 'Example Playbook'
    },
    examplePlaybookOne: {
        id: 'examplePlaybookOne',
        description: 'Part one of the Example Playbook section',
        defaultMessage: 'In the examples directory is a very basic playbook utilizing this role:'
    },
    examplePlaybookTwo: {
        id: 'examplePlaybookTwo',
        description: 'Part two of the Example Playbook section',
        defaultMessage: 'Here is an example with additional configuration (though using a separate file is preferred if including usernames or passwords):'
    },
    exampleConfigurationFile: {
        id: 'exampleConfigurationFile',
        description: 'Example Configuration File',
        defaultMessage: 'Example Configuration File'
    },
    exampleConfigurationOne: {
        id: 'exampleConfigurationOne',
        description: 'Part one of the Example Configuration section',
        defaultMessage: 'The insights-client install can be configured by using a configuration yaml file to modify various parameters. Here\'s an example, insights-client-config.yml, that configures the insights-client to register via basic auth using the provided username/password and display_name:'
    },
    exampleConfigurationTwo: {
        id: 'exampleConfigurationTwo',
        description: 'Part two of the Example Configuration section',
        defaultMessage: '<strong>Reminder:</strong> Check Requirements above to determine if ansible_python_interpreter should be configured prior to running.'
    },
    exampleConfigurationThree: {
        id: 'exampleConfigurationThree',
        description: 'Part three of the Example Configuration section',
        defaultMessage: 'If you need to run the Insights Client on a system that is not registered to Red Hat Subscription Manager, as often happens in testing and demoing, set the redhat_portal_username/redhat_portal_password'
    },
    exampleConfigurationFour: {
        id: 'exampleConfigurationFour',
        description: 'Part four of the Example Configuration section',
        defaultMessage: 'Note: Any of the role variables mentioned earlier can be placed in this configuration file'
    },
    exampleConfigurationFive: {
        id: 'exampleConfigurationFive',
        description: 'Part five of the Example Configuration section',
        defaultMessage: 'Change the permissions on the file so that only you can read them (in case usernames/passwords are listed), and then any time you invoke this role, add the ansible-playbook --extra-vars option:'
    },
    exampleConfigurationSix: {
        id: 'exampleConfigurationSix',
        description: 'Part six of the Example Configuration section',
        defaultMessage: 'Note: One of the really useful features of Ansible Tower is role based management of credentials.'
    },
    exampleUse: {
        id: 'exampleUse',
        description: 'Example Use',
        defaultMessage: 'Example Use'
    },
    exampleUseOne: {
        id: 'exampleUseOne',
        description: 'Part one of the Example Use section',
        defaultMessage: 'On a system where Ansible is installed, run the following command:'
    },
    exampleUseTwo: {
        id: 'exampleUseTwo',
        description: 'Part two of the Example Use section',
        defaultMessage: 'This will install the latest version of the role to ansible\'s default role directory (if using a non default role directory update the playbook accordingly)'
    },
    exampleUseThree: {
        id: 'exampleUseThree',
        description: 'Part three of the Example Use section',
        defaultMessage: 'Copy the Example Playbook to a file named \'install-insights.yml\'.'
    },
    exampleUseFour: {
        id: 'exampleUseFour',
        description: 'Part four of the Example Use section',
        defaultMessage: 'Run the following command, replacing \'myhost.example.com\' with the name of the system where you want to install, configure, and register the insights client.'
    },
    exampleUseFive: {
        id: 'exampleUseFive',
        description: 'Part five of the Example Use section',
        defaultMessage: 'Note: The ansible-playbook invocation will depend on ansible configuration'
    }
});
