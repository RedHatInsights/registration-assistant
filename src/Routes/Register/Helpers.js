/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import './Helpers.scss';

import { CloudIcon, CogsIcon, DownloadIcon, ShieldAltIcon } from '@patternfly/react-icons/dist/esm/icons';
import { ConfigureClientTab, InstallAnsibleTab } from '../../Components/AnsibleTabs/AnsibleTabs';
import { Text, TextContent, TextList, TextListItem, TextListVariants, TextVariants } from '@patternfly/react-core/dist/esm/components/Text/index';
import { Title, TitleSizes } from '@patternfly/react-core/dist/esm/components/Title/Title';

import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';
import { ExpandableSection } from '@patternfly/react-core/dist/esm/components/ExpandableSection/ExpandableSection';
import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import messages from '../../Messages';

const learnMore = (intl, url = '#') => <Button className='learnMore' isInline component='a' variant='link' href={url} >{intl.formatMessage(messages.learnMore)}</Button>;
const insightsDashboard = intl => <Button component='a' variant='primary' href='https://cloud.redhat.com/insights/' >{intl.formatMessage(messages.viewInsightsDashboard)}</Button>;

const registerInsightsCodeSnippet =
    <pre className='ins-c-gray'>
        <code>
            [root@server ~]# insights-client --register
        </code>
    </pre>;

const installInsightsCodeSnippet =
    <pre className='ins-c-gray'>
        <code>
            [root@server ~]# yum install insights-client
        </code>
    </pre>;

const rhelNoAutomationSnippet = intl => <React.Fragment>
    {registerInsightsCodeSnippet}
    {insightsDashboard(intl)}
</React.Fragment>;

const manualInstall = intl => <React.Fragment>
    {installInsightsCodeSnippet}
    {rhelNoAutomationSnippet(intl)}
</React.Fragment>;

const stepTitle = (intl, title, stepNum) => <Title headingLevel='h3'>{intl.formatMessage(messages.stepNumberTitle, { number: stepNum, variable: title })}</Title>;

const schema = intl => ({
    fields: [{
        component: componentTypes.RADIO,
        name: 'how-are-systems-managed',
        initializeOnMount: true,
        initialValue: 'rhsm',
        label: intl.formatMessage(messages.systemsManaged),
        options: [
            { label: intl.formatMessage(messages.rhsm), value: 'rhsm' },
            { label: intl.formatMessage(messages.rhs), value: 'rhs' },
            { label: intl.formatMessage(messages.publicCloud), value: 'rhui' }]
    }, {
        component: componentTypes.RADIO,
        name: 'rhel-os',
        initializeOnMount: true,
        initialValue: 'rhel8',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.operatingSystem),
        condition: { when: 'how-are-systems-managed', pattern: /rhsm|rhui/ },
        options: [
            { label: intl.formatMessage(messages.rhel8), value: 'rhel8' },
            { label: intl.formatMessage(messages.rhel76), value: 'rhel76' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhel-os-helper',
        label: <TextContent> <Text component={TextVariants.small}>{intl.formatMessage(messages.operatingSystemNote, {
            rhSupported: <Button isInline component='a' variant='link' href='https://access.redhat.com/support/policy/updates/errata' >{intl.formatMessage(messages.rhSupported)}</Button>
        })}</Text></TextContent>,
        condition: { when: 'rhel-os', is: 'rhel76' }
    }, {
        component: componentTypes.RADIO,
        name: 'automation',
        initializeOnMount: true,
        initialValue: 'no',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.useAutomation),
        condition: { when: 'how-are-systems-managed', is: 'rhsm' },
        options: [
            { label: intl.formatMessage(messages.ansible), value: 'ansible' },
            { label: intl.formatMessage(messages.puppet), value: 'puppet' },
            { label: intl.formatMessage(messages.no), value: 'no' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhsm-rhel76-no',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.installTheClient), 2)}
            {manualInstall(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'no' }, { when: 'how-are-systems-managed', is: 'rhsm' }, { when: 'rhel-os', is: 'rhel76' }]
    }, {
        component: 'plain-text',
        name: 'rhsm-rhel8-no',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.registerYourSystems), 2)}
            {rhelNoAutomationSnippet(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'no' }, { when: 'how-are-systems-managed', is: 'rhsm' }, { when: 'rhel-os', is: 'rhel8' }]
    }, {
        component: 'sub-form',
        name: 'rhsm-ansible',
        fields: [{
            component: 'plain-text',
            name: 'rhsm-ansible-label',
            label: <React.Fragment>
                {stepTitle(intl, intl.formatMessage(messages.downloadClientPlaybook), 2)}
                <Button variant="primary" className='pf-m-display-lg' icon={<DownloadIcon />} component='a' href='https://github.com/RedHatInsights/insights-client-role'>
                    {intl.formatMessage(messages.downloadPlaybook)}
                </Button>
                <br/>
                {stepTitle(intl, intl.formatMessage(messages.configurePlaybook), 3)}
                <br/>
            </React.Fragment>
        }, {
            component: componentTypes.TABS,
            name: 'rhsm-ansible-tabs',
            fields: [{
                name: '0',
                title: intl.formatMessage(messages.installAnsible),
                fields: [{
                    component: 'plain-text',
                    name: 'install-ansible',
                    label: <InstallAnsibleTab intl={intl}/>
                }]
            }, {
                name: '1',
                title: intl.formatMessage(messages.configureClient),
                fields: [{
                    component: 'plain-text',
                    name: 'configure-client',
                    label: <ConfigureClientTab intl={intl}/>
                }]
            }]
        }],
        condition: [{ when: 'automation', is: 'ansible' }, { when: 'how-are-systems-managed', is: 'rhsm' }]
    }, {
        component: 'plain-text',
        name: 'rhsm-puppet',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.downloadPuppet), 2)}
            <Button variant="primary" className='pf-m-display-lg' icon={<DownloadIcon />} component='a' href='https://forge.puppet.com/lphiri/access_insights_client'>
                {intl.formatMessage(messages.downloadModule)}
            </Button>
            {stepTitle(intl, intl.formatMessage(messages.installAndConfigure), 3)}
            <Title headingLevel='h2'>{intl.formatMessage(messages.automatedInstallation)}</Title>
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstall, {
                    class: <strong>access_insights_clients</strong>
                })}</Text>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}</Text>
            </TextContent>

            <Title headingLevel='h2'>{intl.formatMessage(messages.manualInstall)}</Title>
            {manualInstall(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'puppet' }, { when: 'how-are-systems-managed', is: 'rhsm' }]
    }, {
        component: componentTypes.RADIO,
        name: 'rhs-automation',
        initializeOnMount: true,
        initialValue: 'puppet',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.rhsChooseConfigMan),
        helperText: intl.formatMessage(messages.rhsChooseConfig),
        condition: { when: 'how-are-systems-managed', is: 'rhs' },
        options: [
            { label: intl.formatMessage(messages.ansible), value: 'ansible' },
            { label: intl.formatMessage(messages.puppet), value: 'puppet' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhs-puppet',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.deployRHI), 2)}
            <Button variant="primary" className='pf-m-display-lg' icon={<DownloadIcon />} component='a' href='https://forge.puppet.com/lphiri/access_insights_client'>
                {intl.formatMessage(messages.downloadModule)}
            </Button>
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstall, {
                    class: <strong>access_insights_clients</strong>
                })}</Text>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}</Text>
            </TextContent>
            {insightsDashboard(intl)}
        </React.Fragment>,
        condition: [{ when: 'rhs-automation', is: 'puppet' }, { when: 'how-are-systems-managed', is: 'rhs' }]
    }, {
        component: 'plain-text',
        name: 'rhs-ansible',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.deployingRHInsights), 2)}
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.youCanAutomate, {
                    role: <strong>RedHatInsights.insights-client</strong>,
                    link: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/administering_red_hat_satellite/chap-Red_Hat_Satellite-Administering_Red_Hat_Satellite-Managing_Ansible_Roles'>{intl.formatMessage(messages.managingAnsibleRoles)}</Button>
                })}</Text>
                <TextList component={TextListVariants.ol}>
                    <TextListItem>
                        <Text component={TextVariants.p}>{intl.formatMessage(messages.rhsChooseConfigStepOne, {
                            role: <strong>RedHatInsights.insights-client</strong>,
                            newLine: <br />,
                            linkOne: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/managing_hosts/Administering_Hosts#creating-a-host-in-satellite'>{intl.formatMessage(messages.sectionTwo)}</Button>,
                            linkTwo: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/managing_hosts/Using_Ansible_Roles'>{intl.formatMessage(messages.chapterEight)}</Button>
                        })}</Text>
                    </TextListItem>
                    <TextListItem>{intl.formatMessage(messages.rhsChooseConfigStepTwo)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.rhsChooseConfigStepThree)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.rhsChooseConfigStepFour)}</TextListItem>
                </TextList>
            </TextContent>

            <ExpandableSection toggleText={intl.formatMessage(messages.additionalInfo)}>
                <TextList>
                    <TextListItem>{intl.formatMessage(messages.toApply)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.toView)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.ifYouHaveProblems)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.youCanChange, {
                        link: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_insights/1.0/html/client_configuration_guide_for_red_hat_insights/changing-the-client-schedule'>{intl.formatMessage(messages.changingTheInsights)}</Button>
                    })}</TextListItem>
                </TextList>
            </ExpandableSection>
            {insightsDashboard(intl)}
        </React.Fragment>,
        condition: [{ when: 'rhs-automation', is: 'ansible' }, { when: 'how-are-systems-managed', is: 'rhs' }]
    }, {
        component: 'plain-text',
        name: 'rhui-first-part',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.deployInsightsOnCloudTitle), 2)}
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.deployInsightsOnCloudText)}</Text>
            </TextContent>
        </React.Fragment>,
        condition: [{ when: 'how-are-systems-managed', is: 'rhui' }]
    }, {
        component: 'plain-text',
        name: 'rhui-rhel76-optional-part',
        label: <React.Fragment>
            <TextContent>
                <Text component={TextVariants.h3}>{intl.formatMessage(messages.installInsightsClient)}</Text>
                {installInsightsCodeSnippet}
            </TextContent>
        </React.Fragment>,
        condition: [{ when: 'how-are-systems-managed', is: 'rhui' }, { when: 'rhel-os', is: 'rhel76' }]
    }, {
        component: 'plain-text',
        name: 'rhui-last-part',
        label: <React.Fragment>
            <TextContent>
                <Text component={TextVariants.h3}>{intl.formatMessage(messages.configureBasicAuthTitle)}</Text>
                <TextList component={TextListVariants.ol}>
                    <TextListItem>{intl.formatMessage(messages.configureBasicAuthStep1)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.configureBasicAuthStep2)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.configureBasicAuthStep3)}</TextListItem>
                    <TextListItem>{intl.formatMessage(messages.configureBasicAuthStep4)}</TextListItem>
                </TextList>
                <Text component={TextVariants.small}>{intl.formatMessage(messages.insightsWithBasicAuthNote,
                    { visitOurDocumentation: <Button isInline component='a' variant='link' target="_blank" href='https://access.redhat.com/articles/4038251' >{intl.formatMessage(messages.visitOurDocumentation)}</Button> })}
                </Text>
                <Text component={TextVariants.h3}>{intl.formatMessage(messages.registerInsightsClient)}</Text>
                {rhelNoAutomationSnippet(intl)}
            </TextContent>
        </React.Fragment>,
        condition: [{ when: 'how-are-systems-managed', is: 'rhui' }]
    }
    ]
});

const DataCollection = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><ShieldAltIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.dataCollection)}
        {learnMore(intl, 'https://marvelapp.com/prototype/77d4f5b/screen/71352111')}
    </Title>
</React.Fragment>;

const SetupConfigure = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><CogsIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.setupConfigure)}</Title>
    <TextContent >
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.assessAndMonitor)}
            {learnMore(intl, 'https://access.redhat.com/documentation/en-us/red_hat_insights/2020-04/html/monitoring_and_reacting_to_configuration_changes_using_policies/')}
        </Text>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.detectAndNotify)}
            {learnMore(intl, 'https://www.redhat.com/en/technologies/management/smart-management')}
        </Text>
    </TextContent>
</React.Fragment>;

const SmartManagement = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><CloudIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.rhSM)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.combineTheFlexible)}
            {learnMore(intl, 'https://www.redhat.com/en/technologies/management/smart-management')}
        </Text>
    </TextContent>
</React.Fragment>;

const RegisterWithRhsm = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4' size={TitleSizes.xl}>{intl.formatMessage(messages.registerRhsm)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.registerRhsmText)}
        </Text>
        <pre>
            <code>
                [root@server ~]# subscription-manager register --auto-attach
            </code>
        </pre>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.registerRhsmTextNote,
            { basicAuth: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_insights/2020-04/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/' >{intl.formatMessage(messages.basicAuth)}</Button> })}
        </Text>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.registerRhsmTextNoteAfter,
            { howToAccess: <Button isInline component='a' variant='link' href='https://access.redhat.com/solutions/1583183' >{intl.formatMessage(messages.howToAccess)}</Button> })}</Text>
    </TextContent>
</React.Fragment>;

const SubscribetoSatellite = ({ intl }) => <React.Fragment>
    <Title headingLevel='h3'>{intl.formatMessage(messages.subscribeSatellite)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.subscribeSatelliteBody)}
        </Text>
        <Title headingLevel='h4'>{intl.formatMessage(messages.verifySatellite)}</Title>
        <TextList>
            <TextListItem>{intl.formatMessage(messages.verifySatelliteStepOne)}</TextListItem>
            <TextListItem>{intl.formatMessage(messages.verifySatelliteStepTwo)}</TextListItem>
        </TextList>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.verifySatelliteNote,
            { link: <Button isInline component='a' variant='link' href='https://cert-api.accesss.redhat.com' >https://cert-api.accesss.redhat.com</Button> })}</Text>
    </TextContent>
</React.Fragment>;

const EnablingInsightsOnRhui = ({ intl }) => <React.Fragment>
    <Title headingLevel='h3'>{intl.formatMessage(messages.enablingInsightsOnRhuiTitle)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>{intl.formatMessage(messages.enablingInsightsOnRhuiParagraph1,
            { createRedHatAccountInstructions: <Button isInline component='a' variant='link' target="_blank" href='https://access.redhat.com/products/red-hat-insights#new-red-hat-account' >{intl.formatMessage(messages.createRedHatAccountInstructions)}</Button> })}
        </Text>
        <Text component={TextVariants.p}>{intl.formatMessage(messages.enablingInsightsOnRhuiParagraph2,
            { cloudAccessDocumentation: <Button isInline component='a' variant='link' target="_blank" href='https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/red_hat_cloud_access_reference_guide/index' >{intl.formatMessage(messages.cloudAccessDocumentation)}</Button> })}
        </Text>
    </TextContent>
</React.Fragment>;

export { learnMore, schema, DataCollection, SetupConfigure, SmartManagement, RegisterWithRhsm, SubscribetoSatellite, EnablingInsightsOnRhui };
