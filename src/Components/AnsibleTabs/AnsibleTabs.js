import './AnsibleTabs.scss';

import { ArrowDownIcon, OutlinedFileIcon, SearchIcon } from '@patternfly/react-icons/dist/esm/icons/';
import React, { useState } from 'react';
import { Text, TextVariants } from '@patternfly/react-core/dist/esm/components/Text/index';

import { ExpandableSection } from '@patternfly/react-core/dist/esm/components/ExpandableSection/ExpandableSection';
import PropTypes from 'prop-types';
import messages from '../../Messages';

const getSections = intl => {
    return [
        {
            name: `insights_display_name: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.displayNameOne)}</Text>
                <Text>{intl.formatMessage(messages.displayNameTwo)}</Text>
                <Text>{intl.formatMessage(messages.displayNameThree)}</Text>
                <Text>{intl.formatMessage(messages.displayNameFour)}</Text>
            </React.Fragment>
        }, {
            name: `redhat_portal_username: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.userPassOne, { key: intl.formatMessage(messages.username) })}</Text>
                <Text>{intl.formatMessage(messages.userPassTwo, { key: intl.formatMessage(messages.username) })}</Text>
                <Text>{intl.formatMessage(messages.userPassThree, { key: intl.formatMessage(messages.username) })}</Text>
                <Text>{intl.formatMessage(messages.userPassFour, { key: intl.formatMessage(messages.username) })}</Text>
                <Text>{intl.formatMessage(messages.userPassOne)}</Text>
            </React.Fragment>
        }, {
            name: `redhat_portal_password: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.userPassOne, { key: intl.formatMessage(messages.password) })}</Text>
                <Text>{intl.formatMessage(messages.userPassTwo, { key: intl.formatMessage(messages.password) })}</Text>
                <Text>{intl.formatMessage(messages.userPassThree, { key: intl.formatMessage(messages.password) })}</Text>
                <Text>{intl.formatMessage(messages.userPassFour, { key: intl.formatMessage(messages.password) })}</Text>
                <Text>{intl.formatMessage(messages.userPassOne)}</Text>
            </React.Fragment>
        }, {
            name: `auto_config: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.autoConfig)}</Text>
            </React.Fragment>
        }, {
            name: `authmethod: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.authMethod)}</Text>
            </React.Fragment>
        }, {
            name: `insights-proxy: (${intl.formatMessage(messages.optional)})`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.insightsProxy)}</Text>
            </React.Fragment>
        }, {
            name: `ansible_python_interpreter:`,
            description: <React.Fragment>
                <Text>{intl.formatMessage(messages.pythonInterpreterOne)}</Text>
                <Text>{intl.formatMessage(messages.pythonInterpreterTwo, { strong(str) { return <strong>{str}</strong>; } })}</Text>
            </React.Fragment>
        }
    ];
};

const InstallAnsibleTab = ({ intl }) => {
    return <span className='ins-c-install-ansible-tab'>
        <div className='ins-c-install-ansible-tab__downloads'>
            <a className='ins-c-install-ansible-tab__download' href='https://access.redhat.com/articles/3050101'>
                <div className='ins-c-install-ansible-tab__download_icon'>
                    <OutlinedFileIcon className='outer-icon' size='xl'/> <ArrowDownIcon className='inner-icon'/>
                </div>
                <div className='ins-c-install-ansible-tab__download_desc'>
                    {intl.formatMessage(messages.installSystemRoles)}
                </div>
            </a>
            <a className='ins-c-install-ansible-tab__download' href='https://docs.ansible.com/ansible/latest/user_guide/playbooks.html'>
                <div className='ins-c-install-ansible-tab__download_icon'>
                    <OutlinedFileIcon className='outer-icon' size='xl'/> <SearchIcon className='inner-icon'/>
                </div>
                <div className='ins-c-install-ansible-tab__download_desc'>
                    {intl.formatMessage(messages.workWithPlaybook)}
                </div>
            </a>
        </div>
        <Text className='ins-c-install-ansible-tab__title' component={TextVariants.h2}>
            {intl.formatMessage(messages.inventorySetup)}
        </Text>
        <div className='ins-c-install-ansible-tab__details'>
            <div className='ins-c-install-ansible-tab__detail'>
                <Text component={TextVariants.h4}>
                    {intl.formatMessage(messages.inventorySetupSubtitle, {
                        method: intl.formatMessage(messages.statically)
                    })}
                </Text>
                <Text>
                    {intl.formatMessage(messages.staticInventory)}
                </Text>
                <Text component={TextVariants.a} href='https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory'>
                    {intl.formatMessage(messages.learnMore)}
                </Text>
            </div>
            <div className='ins-c-install-ansible-tab__detail'>
                <Text component={TextVariants.h4}>
                    {intl.formatMessage(messages.inventorySetupSubtitle, {
                        method: intl.formatMessage(messages.dynamically)
                    })}
                </Text>
                <Text>
                    {intl.formatMessage(messages.dynamicInventory)}
                </Text>
                <Text component={TextVariants.a} href='https://docs.ansible.com/ansible/latest/user_guide/intro_dynamic_inventory.html'>
                    {intl.formatMessage(messages.learnMore)}
                </Text>
            </div>
        </div>
    </span>;
};

InstallAnsibleTab.propTypes = {
    intl: PropTypes.any
};

const ConfigureClientTab = ({ intl }) => {

    const [activeTab, setActiveTab] = useState(0);

    return <div className='ins-c-install-client-tab'>
        <div className='ins-c-install-client-tab__links'>
            <Text component={TextVariants.a} onClick={() => setActiveTab(0)}>
                {intl.formatMessage(messages.roleVariables)}
            </Text>
            <Text component={TextVariants.a} onClick={() => setActiveTab(1)}>
                {intl.formatMessage(messages.factsInstalled)}
            </Text>
            <Text component={TextVariants.a} onClick={() => setActiveTab(2)}>
                {intl.formatMessage(messages.examples)}
            </Text>
        </div>
        {activeTab === 0 && <React.Fragment>
            <Text component={TextVariants.h4}>
                {intl.formatMessage(messages.rolesAndConfig)}
            </Text>
            <Text> {intl.formatMessage(messages.rolesAndConfigDescription)} </Text>
            {getSections(intl).map(section => <div className='ins-c-install-client-tab__section' key={section.name}>
                <ExpandableSection toggleText={section.name}>
                    {section.description}
                </ExpandableSection>
                <hr/>
            </div>)}
        </React.Fragment>}
        {activeTab === 1 && <React.Fragment>
            <Text component={TextVariants.h4}>
                {intl.formatMessage(messages.factsInstalled)}
            </Text>
            <Text> {intl.formatMessage(messages.factsInstalledOne)} </Text>
            <Text> {intl.formatMessage(messages.factsInstalledTwo)} </Text>
            <Text> {intl.formatMessage(messages.exampleTaskOne)} </Text>
            <pre>
                <code>
                    - debug: var=ansible_local.insights.system_id
                </code>
            </pre>
            <Text> {intl.formatMessage(messages.exampleTaskTwo)} </Text>
        </React.Fragment>}
        {activeTab === 2 && <React.Fragment>
            <Text component={TextVariants.h4}>
                {intl.formatMessage(messages.examples)}
            </Text>
            <Text> <strong>{intl.formatMessage(messages.examplePlaybook)}</strong> </Text>
            <Text> {intl.formatMessage(messages.examplePlaybookOne)} </Text>
            <pre>
                <code>
                    - hosts: all <br />
                        roles: <br />
                        - role: RedHatInsights.insights-client <br />
                          when: ansible_os_family == &apos;RedHat&apos;
                </code>
            </pre>
            <Text> {intl.formatMessage(messages.examplePlaybookTwo)} </Text>
            <pre>
                <code>
                - hosts: all <br />
                    roles: <br />
                    - role: RedHatInsights.insights-client <br />
                        vars: <br />
                            insights_display_name: &apos;example_system&apos; <br />
                            ansible_python_interpreter: &apos;/usr/libexec/platform-python&apos; <br />
                      when: ansible_os_family == &apos;RedHat&apos;
                </code>
            </pre>
            <Text> <strong>{intl.formatMessage(messages.exampleConfigurationFile)}</strong> </Text>
            <Text> {intl.formatMessage(messages.exampleConfigurationOne)} </Text>
            <pre>
                <code>
                    redhat_portal_username: example_user <br />
                    redhat_portal_password: example_password <br />
                    insights_display_name: example_system <br />
                    autoconfig: False <br />
                    authmethod: BASIC
                </code>
            </pre>
            <Text> {intl.formatMessage(messages.exampleConfigurationTwo, {
                strong(str) { return <strong>{ str }</strong>; }
            })} </Text>
            <Text> {intl.formatMessage(messages.exampleConfigurationThree)} </Text>
            <Text> {intl.formatMessage(messages.exampleConfigurationFour)} </Text>
            <Text> {intl.formatMessage(messages.exampleConfigurationFive)} </Text>
            <pre>
                <code>
                    $ ansible-playbook ... --extra-vars @insights-client-config.yml ...
                </code>
            </pre>
            <Text> {intl.formatMessage(messages.exampleConfigurationSix)} </Text>
            <Text> <strong>{intl.formatMessage(messages.exampleUse)}</strong> </Text>
            <ol>
                <li>
                    <Text> {intl.formatMessage(messages.exampleUseOne)} </Text>
                    <pre>
                        <code>
                            $ ansible-galaxy install RedHatInsights.insights-client
                        </code>
                    </pre>
                    <Text> {intl.formatMessage(messages.exampleUseTwo)} </Text>
                </li>
                <li>
                    <Text> {intl.formatMessage(messages.exampleUseThree)} </Text>
                </li>
                <li>
                    <Text> {intl.formatMessage(messages.exampleUseFour)} </Text>
                    <pre>
                        <code>
                            $ ansible-playbook <br />
                            --limit=myhost.example.com install-insights.yml <br />
                            --extra-vars @insights-client-config.yml
                        </code>
                    </pre>
                    <Text> {intl.formatMessage(messages.exampleUseFive)} </Text>
                </li>
            </ol>
        </React.Fragment>}
    </div>;
};

ConfigureClientTab.propTypes = {
    intl: PropTypes.any
};

export { InstallAnsibleTab, ConfigureClientTab };
