/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import {
  ClipboardCopy,
  ClipboardCopyVariant,
} from '@patternfly/react-core/dist/esm/components/ClipboardCopy/index';
import {
  CloudIcon,
  CogsIcon,
  DownloadIcon,
  ShieldAltIcon,
} from '@patternfly/react-icons/dist/esm/icons/';
import {
  ConfigureClientTab,
  InstallAnsibleTab,
} from '../../Components/AnsibleTabs/AnsibleTabs';
import {
  Flex,
  FlexItem,
} from '@patternfly/react-core/dist/esm/layouts/Flex/index';
import {
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextVariants,
} from '@patternfly/react-core/dist/esm/components/Text/index';
import {
  Title,
  TitleSizes,
} from '@patternfly/react-core/dist/esm/components/Title/Title';

import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';
import { ExpandableSection } from '@patternfly/react-core/dist/esm/components/ExpandableSection/ExpandableSection';
import { FormHelperText } from '@patternfly/react-core/dist/esm/components/Form/FormHelperText';
import Group from '../../Components/Group/Group';
import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import messages from '../../Messages';

const learnMore = (intl, url = '#') => (
  <a className="learnMore ins-c-learn-more" href={url}>
    {intl.formatMessage(messages.learnMore)}
  </a>
);
const insightsDashboard = (intl, chrome) => (
  <Button
    className="ins-c-dashboard-link"
    component="a"
    variant="primary"
    href={`${chrome.isBeta() ? '/preview' : ''}/insights`}
  >
    {intl.formatMessage(messages.viewInsightsDashboard)}
  </Button>
);
const stepTitle = (intl, title, stepNum) => (
  <Title headingLevel="h2" size="md" className="ins-c-step-title">
    {intl.formatMessage(messages.stepNumberTitle, {
      number: stepNum,
      variable: title,
    })}
  </Title>
);

const registerInsightsCodeSnippet = (
  <ClipboardCopy isCode isReadOnly variant={ClipboardCopyVariant.expansion}>
    {`insights-client --register`}
  </ClipboardCopy>
);

const installInsightsCodeSnippet = (
  <ClipboardCopy isCode isReadOnly variant={ClipboardCopyVariant.expansion}>
    {`yum install insights-client`}
  </ClipboardCopy>
);

const registerRHSMInsightsCodeSnippet = (
  <ClipboardCopy isCode isReadOnly variant={ClipboardCopyVariant.expansion}>
    {`insights-client --register`}
  </ClipboardCopy>
);

const rhelNoAutomationSnippet = (intl, chrome) => (
  <React.Fragment>
    {registerInsightsCodeSnippet}
    {insightsDashboard(intl, chrome)}
  </React.Fragment>
);

const manualInstall = (intl, chrome) => (
  <React.Fragment>
    {installInsightsCodeSnippet}
    {rhelNoAutomationSnippet(intl, chrome)}
  </React.Fragment>
);

const schema = (intl, chrome) => ({
  fields: [
    {
      component: componentTypes.RADIO,
      name: 'rhel-os',
      initializeOnMount: true,
      clearOnUnmount: true,
      label: intl.formatMessage(messages.operatingSystem),
      options: [
        { label: intl.formatMessage(messages.rhel84), value: 'rhel84+' },
        { label: intl.formatMessage(messages.rhel83), value: 'rhel83-' },
        { label: intl.formatMessage(messages.rhel76), value: 'rhel76' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhel-os-helper',
      label: (
        <FormHelperText
          isHidden={false}
          aria-live="polite"
          className="ins-m-light ins-m-conditional-helper"
        >
          <span>
            {intl.formatMessage(messages.operatingSystemNote, {
              rhSupported: (
                <a href="https://access.redhat.com/support/policy/updates/errata">
                  {intl.formatMessage(messages.rhSupported)}
                </a>
              ),
            })}
          </span>
        </FormHelperText>
      ),
      condition: { when: 'rhel-os', is: 'rhel76' },
    },
    {
      component: componentTypes.RADIO,
      name: 'how-are-systems-managed',
      initializeOnMount: true,
      label: intl.formatMessage(messages.systemsManaged),
      condition: [{ when: 'rhel-os', pattern: /rhel84+|rhel83-|rhel76/ }],
      options: [
        { label: intl.formatMessage(messages.rhsm), value: 'rhsm' },
        { label: intl.formatMessage(messages.rhs), value: 'rhs' },
        { label: intl.formatMessage(messages.publicCloud), value: 'rhui' },
      ],
    },
    {
      component: componentTypes.RADIO,
      name: 'automation',
      initializeOnMount: true,
      clearOnUnmount: true,
      label: intl.formatMessage(messages.useAutomation),
      helperText: (
        <FormHelperText
          className="ins-m-light"
          isHidden={false}
          inValidHelperText
        >
          <span>{intl.formatMessage(messages.automationNote)}</span>
        </FormHelperText>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhsm' },
        { when: 'rhel-os', pattern: /rhel83-|rhel76/ },
      ],
      options: [
        { label: intl.formatMessage(messages.ansible), value: 'ansible' },
        { label: intl.formatMessage(messages.puppet), value: 'puppet' },
        { label: intl.formatMessage(messages.no), value: 'no' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhsm-rhel76-no',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(intl, intl.formatMessage(messages.installTheClient), 2)}
            {manualInstall(intl, chrome)}
          </TextContent>
        </Group>
      ),
      condition: [
        { when: 'automation', is: 'no' },
        { when: 'how-are-systems-managed', is: 'rhsm' },
        { when: 'rhel-os', is: 'rhel76' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhsm-rhel8-no',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(
              intl,
              intl.formatMessage(messages.registerYourSystems),
              2
            )}
            {rhelNoAutomationSnippet(intl, chrome)}
          </TextContent>
        </Group>
      ),
      condition: [
        { when: 'automation', is: 'no' },
        { when: 'how-are-systems-managed', is: 'rhsm' },
        { when: 'rhel-os', is: 'rhel83-' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhsm-ansible-1',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(
              intl,
              intl.formatMessage(messages.downloadClientPlaybook),
              2
            )}
            <Button
              variant="primary"
              className="pf-m-display-lg ins-c-action"
              icon={<DownloadIcon />}
              component="a"
              href="https://github.com/RedHatInsights/insights-client-role"
            >
              {intl.formatMessage(messages.downloadPlaybook)}
            </Button>
          </TextContent>
        </Group>
      ),
      condition: [
        { when: 'automation', is: 'ansible' },
        { when: 'how-are-systems-managed', is: 'rhsm' },
      ],
    },
    {
      component: 'sub-form',
      name: 'rhsm-ansible',
      className: 'ins-c-form-step-group',
      fields: [
        {
          component: 'custom-section',
          name: 'rhsm-ansible-label',
          label: stepTitle(
            intl,
            intl.formatMessage(messages.configurePlaybook),
            3
          ),
        },
        {
          component: componentTypes.TABS,
          name: 'rhsm-ansible-tabs',
          fields: [
            {
              name: '0',
              title: intl.formatMessage(messages.installAnsible),
              fields: [
                {
                  component: 'custom-section',
                  name: 'install-ansible',
                  label: <InstallAnsibleTab intl={intl} />,
                },
              ],
            },
            {
              name: '1',
              title: intl.formatMessage(messages.configureClient),
              fields: [
                {
                  component: 'custom-section',
                  name: 'configure-client',
                  label: <ConfigureClientTab intl={intl} />,
                },
              ],
            },
          ],
        },
        {
          component: 'plain-text',
          name: 'insights-link',
          label: insightsDashboard(intl, chrome),
        },
      ],
      condition: [
        { when: 'automation', is: 'ansible' },
        { when: 'how-are-systems-managed', is: 'rhsm' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhsm-puppet',
      label: (
        <React.Fragment>
          <Group type="form-step">
            <TextContent>
              {stepTitle(intl, intl.formatMessage(messages.downloadPuppet), 2)}
              <Button
                variant="primary"
                className="pf-m-display-lg"
                icon={<DownloadIcon />}
                component="a"
                href="https://forge.puppet.com/lphiri/access_insights_client"
              >
                {intl.formatMessage(messages.downloadModule)}
              </Button>
            </TextContent>
          </Group>

          <Group type="form-step">
            <TextContent>
              {stepTitle(
                intl,
                intl.formatMessage(messages.installAndConfigure),
                3
              )}
              <Title headingLevel="h3" size="md">
                {intl.formatMessage(messages.automatedInstallation)}
              </Title>
              <Text component={TextVariants.p}>
                {intl.formatMessage(messages.puppetAutomatedInstall, {
                  class: <strong>access_insights_clients</strong>,
                })}
              </Text>
              <Text component={TextVariants.p}>
                {intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}
              </Text>
              <Title headingLevel="h3" size="md">
                {intl.formatMessage(messages.manualInstall)}
              </Title>
              {manualInstall(intl, chrome)}
            </TextContent>
          </Group>
        </React.Fragment>
      ),
      condition: [
        { when: 'automation', is: 'puppet' },
        { when: 'how-are-systems-managed', is: 'rhsm' },
      ],
    },
    {
      component: componentTypes.RADIO,
      name: 'rhs-automation',
      initializeOnMount: true,
      clearOnUnmount: true,
      label: intl.formatMessage(messages.rhsChooseConfigMan),
      helperText: (
        <FormHelperText
          className="ins-m-light"
          isHidden={false}
          inValidHelperText
        >
          <span>{intl.formatMessage(messages.automationNote)}</span>
        </FormHelperText>
      ),
      condition: { when: 'how-are-systems-managed', is: 'rhs' },
      options: [
        { label: intl.formatMessage(messages.ansible), value: 'ansible' },
        { label: intl.formatMessage(messages.puppet), value: 'puppet' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhs-puppet',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(intl, intl.formatMessage(messages.deployRHI), 2)}
            <Button
              variant="primary"
              className="pf-m-display-lg ins-c-action"
              icon={<DownloadIcon />}
              component="a"
              href="https://forge.puppet.com/lphiri/access_insights_client"
            >
              {intl.formatMessage(messages.downloadModule)}
            </Button>
            <Text component={TextVariants.p}>
              {intl.formatMessage(messages.puppetAutomatedInstall, {
                class: <strong>access_insights_clients</strong>,
              })}
            </Text>
            <Text component={TextVariants.p}>
              {intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}
            </Text>
            {insightsDashboard(intl, chrome)}
          </TextContent>
        </Group>
      ),
      condition: [
        { when: 'rhs-automation', is: 'puppet' },
        { when: 'how-are-systems-managed', is: 'rhs' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhs-ansible',
      label: (
        <React.Fragment>
          <Group type="form-step">
            <TextContent>
              {stepTitle(
                intl,
                intl.formatMessage(messages.deployingRHInsights),
                2
              )}
              <Text component={TextVariants.p}>
                {intl.formatMessage(messages.youCanAutomate, {
                  role: <strong>RedHatInsights.insights-client</strong>,
                  link: (
                    <Button
                      isInline
                      component="a"
                      variant="link"
                      href="https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/administering_red_hat_satellite/chap-Red_Hat_Satellite-Administering_Red_Hat_Satellite-Managing_Ansible_Roles"
                    >
                      {intl.formatMessage(messages.managingAnsibleRoles)}
                    </Button>
                  ),
                })}
              </Text>
              <TextList component={TextListVariants.ol}>
                <TextListItem>
                  <Text component={TextVariants.p}>
                    {intl.formatMessage(messages.rhsChooseConfigStepOne, {
                      role: <strong>RedHatInsights.insights-client</strong>,
                      newLine: <br />,
                      linkOne: (
                        <Button
                          isInline
                          component="a"
                          variant="link"
                          href="https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/managing_hosts/Administering_Hosts#creating-a-host-in-satellite"
                        >
                          {intl.formatMessage(messages.sectionTwo)}
                        </Button>
                      ),
                      linkTwo: (
                        <Button
                          isInline
                          component="a"
                          variant="link"
                          href="https://access.redhat.com/documentation/en-us/red_hat_satellite/6.6/html/managing_hosts/Using_Ansible_Roles"
                        >
                          {intl.formatMessage(messages.chapterEight)}
                        </Button>
                      ),
                    })}
                  </Text>
                </TextListItem>
                <TextListItem>
                  {intl.formatMessage(messages.rhsChooseConfigStepTwo)}
                </TextListItem>
                <TextListItem>
                  {intl.formatMessage(messages.rhsChooseConfigStepThree)}
                </TextListItem>
                <TextListItem>
                  {intl.formatMessage(messages.rhsChooseConfigStepFour)}
                </TextListItem>
              </TextList>
              <ExpandableSection
                toggleText={intl.formatMessage(messages.additionalInfo)}
              >
                <TextList>
                  <TextListItem>
                    {intl.formatMessage(messages.toApply)}
                  </TextListItem>
                  <TextListItem>
                    {intl.formatMessage(messages.toView)}
                  </TextListItem>
                  <TextListItem>
                    {intl.formatMessage(messages.ifYouHaveProblems)}
                  </TextListItem>
                  <TextListItem>
                    {intl.formatMessage(messages.youCanChange, {
                      link: (
                        <Button
                          isInline
                          component="a"
                          variant="link"
                          href="https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/client_configuration_guide_for_red_hat_insights/con-insights-changing-the-client-schedule_insights-cg-changing-schedule"
                        >
                          {intl.formatMessage(messages.changingTheInsights)}
                        </Button>
                      ),
                    })}
                  </TextListItem>
                </TextList>
              </ExpandableSection>
              {insightsDashboard(intl, chrome)}
            </TextContent>
          </Group>
        </React.Fragment>
      ),
      condition: [
        { when: 'rhs-automation', is: 'ansible' },
        { when: 'how-are-systems-managed', is: 'rhs' },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhui-first-part',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(
              intl,
              intl.formatMessage(messages.deployInsightsOnCloudTitle),
              2
            )}
            <Text component={TextVariants.p}>
              {intl.formatMessage(messages.deployInsightsOnCloudText)}
            </Text>
          </TextContent>
        </Group>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhui' },
        { when: 'rhel-os', pattern: /rhel84+|rhel83-|rhel76/ },
      ],
    },
    {
      component: 'plain-text',
      name: 'rhui-rhel76-optional-part',
      label: (
        <React.Fragment>
          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.installInsightsClient)}
          </Title>
          {installInsightsCodeSnippet}
        </React.Fragment>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhui' },
        { when: 'rhel-os', is: 'rhel76' },
      ],
    },
    {
      component: 'plain-text',
      name: 'rhui-last-part',
      label: (
        <React.Fragment>
          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.configureBasicAuthTitle)}
          </Title>
          <TextList component={TextListVariants.ol}>
            <TextListItem>
              {intl.formatMessage(messages.configureBasicAuthStep1)}
            </TextListItem>
            <TextListItem>
              {intl.formatMessage(messages.configureBasicAuthStep2)}
            </TextListItem>
            <TextListItem>
              {intl.formatMessage(messages.configureBasicAuthStep3)}
            </TextListItem>
            <TextListItem>
              {intl.formatMessage(messages.configureBasicAuthStep4)}
            </TextListItem>
          </TextList>
          <Text component={TextVariants.small}>
            {intl.formatMessage(messages.insightsWithBasicAuthNote, {
              visitOurDocumentation: (
                <a href="https://access.redhat.com/articles/4038251">
                  {intl.formatMessage(messages.visitOurDocumentation)}
                </a>
              ),
            })}
          </Text>
          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.registerInsightsClient)}
          </Title>
          {rhelNoAutomationSnippet(intl, chrome)}
        </React.Fragment>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhui' },
        { when: 'rhel-os', pattern: /rhel84+|rhel83-|rhel76/ },
      ],
    },
    {
      component: 'custom-section',
      name: 'rhsm-first-part',
      label: (
        <Group type="form-step">
          <TextContent>
            {stepTitle(
              intl,
              intl.formatMessage(messages.registerYourSystemTo),
              2
            )}
          </TextContent>
          {registerRHSMInsightsCodeSnippet}
        </Group>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhsm' },
        { when: 'rhel-os', pattern: /rhel84+/ },
      ],
    },
    {
      component: 'plain-text',
      name: 'rhsm-last-part',
      label: (
        <React.Fragment>
          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.connectSystemsWithNew)}
          </Title>
          <Text component={TextVariants.p}>
            {intl.formatMessage(messages.connectSystemsWithNewBody)}
          </Text>
          <Text component={TextVariants.p}>
            {intl.formatMessage(messages.connectSystemsWithNewBody2)}
          </Text>

          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.registerWithActivation)}
          </Title>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {`rhc connect -a <activation-key> -o <organization-id>`}
          </ClipboardCopy>

          <Title headingLevel="h3" size="md">
            {intl.formatMessage(messages.registerWithAUsername)}
          </Title>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {`rhc connect -u <username> -p <password>`}
          </ClipboardCopy>
        </React.Fragment>
      ),
      condition: [
        { when: 'how-are-systems-managed', is: 'rhsm' },
        { when: 'rhel-os', pattern: /rhel84+/ },
      ],
    },
  ],
});

const DataCollection = ({ intl }) => (
  <Group type="title-group">
    <ShieldAltIcon size="md" className="ins-c-icon" />
    <Flex spaceItems={{ default: 'spaceItemsSm' }}>
      <FlexItem>
        <Title headingLevel="h4">
          {intl.formatMessage(messages.dataCollection)}
        </Title>
      </FlexItem>
      <FlexItem>
        {learnMore(
          intl,
          'https://console.redhat.com/security/insights#section-data-collection'
        )}
      </FlexItem>
    </Flex>
  </Group>
);

const SetupConfigure = ({ intl }) => (
  <Group type="drawer-group">
    <Group type="title-group">
      <CogsIcon size="md" className="ins-c-icon" />
      <Title headingLevel="h4">
        {intl.formatMessage(messages.setupConfigure)}
      </Title>
    </Group>
    <TextContent>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.assessAndMonitor)}
        {learnMore(
          intl,
          'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/index'
        )}
      </Text>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.detectAndNotify)}
        {learnMore(
          intl,
          'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/monitoring_and_reacting_to_configuration_changes_using_policies/index'
        )}
      </Text>
    </TextContent>
  </Group>
);

const Satellite = ({ intl }) => (
  <Group type="drawer-group">
    <Group type="title-group">
      <CloudIcon size="md" className="ins-c-icon" />
      <Title headingLevel="h4">{intl.formatMessage(messages.rhS)}</Title>
    </Group>
    <TextContent>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.combineTheFlexible)}
        {learnMore(
          intl,
          'https://www.redhat.com/en/technologies/management/satellite'
        )}
      </Text>
    </TextContent>
  </Group>
);

const RegisterWithRhsm = ({ intl }) => (
  <TextContent>
    <Title
      headingLevel="h4"
      size={TitleSizes.lg}
      className="ins-c-content-title ins-m-font-light"
    >
      {intl.formatMessage(messages.registerRhsm)}
    </Title>
    <Text component={TextVariants.p}>
      {intl.formatMessage(messages.registerRhsmText)}
    </Text>
    <ClipboardCopy isCode isReadOnly variant={ClipboardCopyVariant.expansion}>
      {`subscription-manager register --auto-attach`}
    </ClipboardCopy>
    <Text component={TextVariants.small}>
      {intl.formatMessage(messages.registerRhsmTextNote, {
        basicAuth: (
          <a href="https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/configuring_basic_authentication_for_red_hat_insights/index">
            {intl.formatMessage(messages.basicAuth)}
          </a>
        ),
      })}
    </Text>
    <Text component={TextVariants.small}>
      {intl.formatMessage(messages.registerRhsmTextNoteAfter, {
        howToAccess: (
          <a href="https://access.redhat.com/solutions/1583183">
            {intl.formatMessage(messages.howToAccess)}
          </a>
        ),
      })}
    </Text>
  </TextContent>
);

const SubscribetoSatellite = ({ intl }) => (
  <Group type="drawer-group">
    <TextContent>
      <Title
        headingLevel="h4"
        size={TitleSizes.lg}
        className="ins-c-content-title ins-m-font-light"
      >
        {intl.formatMessage(messages.subscribeSatellite)}
      </Title>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.subscribeSatelliteBody)}
      </Text>
      <Title
        headingLevel="h4"
        size={TitleSizes.lg}
        className="ins-c-content-title"
      >
        {intl.formatMessage(messages.verifySatellite)}
      </Title>
      <TextList>
        <TextListItem>
          {intl.formatMessage(messages.verifySatelliteStepOne)}
        </TextListItem>
        <TextListItem>
          {intl.formatMessage(messages.verifySatelliteStepTwo)}
        </TextListItem>
      </TextList>
      <Text component={TextVariants.small}>
        {intl.formatMessage(messages.verifySatelliteNote, {
          link: (
            <a href="https://cert-api.accesss.redhat.com">
              https://cert-api.accesss.redhat.com
            </a>
          ),
        })}
      </Text>
    </TextContent>
  </Group>
);

const EnablingInsightsOnRhui = ({ intl }) => (
  <Group type="drawer-group">
    <Title
      headingLevel="h4"
      size={TitleSizes.lg}
      className="ins-c-content-title ins-m-font-light"
    >
      {intl.formatMessage(messages.enablingInsightsOnRhuiTitle)}
    </Title>
    <TextContent>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.enablingInsightsOnRhuiParagraph1, {
          createRedHatAccountInstructions: (
            <Button
              isInline
              component="a"
              variant="link"
              target="_blank"
              href="https://access.redhat.com/products/red-hat-insights#new-red-hat-account"
            >
              {intl.formatMessage(messages.createRedHatAccountInstructions)}
            </Button>
          ),
        })}
      </Text>
      <Text component={TextVariants.p}>
        {intl.formatMessage(messages.enablingInsightsOnRhuiParagraph2, {
          cloudAccessDocumentation: (
            <Button
              isInline
              component="a"
              variant="link"
              target="_blank"
              href="https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/red_hat_cloud_access_reference_guide/index"
            >
              {intl.formatMessage(messages.cloudAccessDocumentation)}
            </Button>
          ),
        })}
      </Text>
    </TextContent>
  </Group>
);

export {
  learnMore,
  schema,
  DataCollection,
  SetupConfigure,
  Satellite,
  RegisterWithRhsm,
  SubscribetoSatellite,
  EnablingInsightsOnRhui,
};
