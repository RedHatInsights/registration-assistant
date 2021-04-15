import './AnsibleTabs.scss';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionToggle,
} from '@patternfly/react-core/dist/esm/components/Accordion/index';
import {
  ArrowDownIcon,
  OutlinedFileIcon,
  SearchIcon,
} from '@patternfly/react-icons/dist/esm/icons/';
import {
  ClipboardCopy,
  ClipboardCopyVariant,
} from '@patternfly/react-core/dist/esm/components/ClipboardCopy/index';
import React, { useState } from 'react';
import {
  Tab,
  TabTitleText,
  Tabs,
} from '@patternfly/react-core/dist/esm/components/Tabs/index';
import {
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core/dist/esm/components/Text/index';
import {
  Title,
  TitleSizes,
} from '@patternfly/react-core/dist/esm/components/Title/index';

import { Divider } from '@patternfly/react-core/dist/esm/components/Divider/index';
import { Gallery } from '@patternfly/react-core/dist/esm/layouts/Gallery/index';
import { Grid } from '@patternfly/react-core/dist/esm/layouts/Grid/index';
import PropTypes from 'prop-types';
import messages from '../../Messages';

const examplePlaybookOne = `- hosts: all
  roles:
    - { role: RedHatInsights.insights-client, when: ansible_os_family == 'RedHat' }`;

const examplePlaybookTwo = `- hosts: all
  roles:
    - role: RedHatInsights.insights-client
        vars:
          insights_display_name: 'example_system'
          ansible_python_interpreter: '/usr/libexec/platform-python'
      when: ansible_os_family == 'RedHat'`;

const exampleConfigurationOne = `redhat_portal_username: example_user 
redhat_portal_password: example_password 
insights_display_name: example_system 
autoconfig: False 
authmethod: BASIC`;

const getSections = (intl) => {
  return [
    {
      name: `insights_display_name: (${intl.formatMessage(messages.optional)})`,
      description: (
        <React.Fragment>
          <Text>{intl.formatMessage(messages.displayNameOne)}</Text>
          <Text>{intl.formatMessage(messages.displayNameTwo)}</Text>
          <Text>{intl.formatMessage(messages.displayNameThree)}</Text>
          <Text>{intl.formatMessage(messages.displayNameFour)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `redhat_portal_username: (${intl.formatMessage(
        messages.optional
      )})`,
      description: (
        <React.Fragment>
          <Text>
            {intl.formatMessage(messages.userPassOne, {
              key: intl.formatMessage(messages.username),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassTwo, {
              key: intl.formatMessage(messages.username),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassThree, {
              key: intl.formatMessage(messages.username),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassFour, {
              key: intl.formatMessage(messages.username),
            })}
          </Text>
          <Text>{intl.formatMessage(messages.userPassOne)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `redhat_portal_password: (${intl.formatMessage(
        messages.optional
      )})`,
      description: (
        <React.Fragment>
          <Text>
            {intl.formatMessage(messages.userPassOne, {
              key: intl.formatMessage(messages.password),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassTwo, {
              key: intl.formatMessage(messages.password),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassThree, {
              key: intl.formatMessage(messages.password),
            })}
          </Text>
          <Text>
            {intl.formatMessage(messages.userPassFour, {
              key: intl.formatMessage(messages.password),
            })}
          </Text>
          <Text>{intl.formatMessage(messages.userPassOne)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `auto_config: (${intl.formatMessage(messages.optional)})`,
      description: (
        <React.Fragment>
          <Text>{intl.formatMessage(messages.autoConfig)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `authmethod: (${intl.formatMessage(messages.optional)})`,
      description: (
        <React.Fragment>
          <Text>{intl.formatMessage(messages.authMethod)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `insights-proxy: (${intl.formatMessage(messages.optional)})`,
      description: (
        <React.Fragment>
          <Text>{intl.formatMessage(messages.insightsProxy)}</Text>
        </React.Fragment>
      ),
    },
    {
      name: `ansible_python_interpreter:`,
      description: (
        <React.Fragment>
          <Text>{intl.formatMessage(messages.pythonInterpreterOne)}</Text>
          <Text>
            {intl.formatMessage(messages.pythonInterpreterTwo, {
              strong(str) {
                return <strong>{str}</strong>;
              },
            })}
          </Text>
        </React.Fragment>
      ),
    },
  ];
};

const InstallAnsibleTab = ({ intl }) => {
  return (
    <Grid hasGutter className="ins-c-install-ansible-tab">
      <Gallery hasGutter className="ins-c-install-ansible-tab__downloads">
        <a
          className="ins-c-install-ansible-tab__download"
          href="https://access.redhat.com/articles/3050101"
        >
          <div className="ins-c-install-ansible-tab__download-icon">
            <OutlinedFileIcon className="outer-icon" size="xl" />{' '}
            <ArrowDownIcon className="inner-icon" />
          </div>
          <div className="ins-c-install-ansible-tab__download_desc">
            {intl.formatMessage(messages.installSystemRoles)}
          </div>
        </a>
        <a
          className="ins-c-install-ansible-tab__download"
          href="https://docs.ansible.com/ansible/latest/user_guide/playbooks.html"
        >
          <div className="ins-c-install-ansible-tab__download-icon">
            <OutlinedFileIcon className="outer-icon" size="xl" />{' '}
            <SearchIcon className="inner-icon" />
          </div>
          <div className="ins-c-install-ansible-tab__download_desc">
            {intl.formatMessage(messages.workWithPlaybook)}
          </div>
        </a>
      </Gallery>
      <Title
        headingLevel="h3"
        size={TitleSizes.lg}
        className="ins-c-content-title ins-m-font-semi-bold"
      >
        {intl.formatMessage(messages.inventorySetup)}
      </Title>
      <Gallery hasGutter>
        <div className="ins-c-install-ansible-tab__detail">
          <TextContent>
            <Title
              headingLevel="h3"
              size={TitleSizes.lg}
              className="ins-c-content-title ins-m-font-light"
            >
              {intl.formatMessage(messages.inventorySetupSubtitle, {
                method: intl.formatMessage(messages.statically),
              })}
            </Title>
            <Text>{intl.formatMessage(messages.staticInventory)}</Text>
            <Text
              component={TextVariants.a}
              href="https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory"
            >
              {intl.formatMessage(messages.learnMore)}
            </Text>
          </TextContent>
        </div>
        <div className="ins-c-install-ansible-tab__detail">
          <TextContent>
            <Title
              headingLevel="h3"
              size={TitleSizes.lg}
              className="ins-c-content-title ins-m-font-light"
            >
              {intl.formatMessage(messages.inventorySetupSubtitle, {
                method: intl.formatMessage(messages.dynamically),
              })}
            </Title>
            <Text>{intl.formatMessage(messages.dynamicInventory)}</Text>
            <Text
              component={TextVariants.a}
              href="https://docs.ansible.com/ansible/latest/user_guide/intro_dynamic_inventory.html"
            >
              {intl.formatMessage(messages.learnMore)}
            </Text>
          </TextContent>
        </div>
      </Gallery>
    </Grid>
  );
};

InstallAnsibleTab.propTypes = {
  intl: PropTypes.any,
};

const ConfigureClientTab = ({ intl }) => {
  const [activeTabKey, setActiveTabKey] = useState(0);
  const [expanded, setExpanded] = useState();

  return (
    <Tabs
      activeKey={activeTabKey}
      className="ins-c-install-client-tab"
      isSecondary
    >
      <Tab
        eventKey={0}
        onClick={() => setActiveTabKey(0)}
        title={
          <TabTitleText>
            {intl.formatMessage(messages.roleVariables)}
          </TabTitleText>
        }
      >
        <Grid hasGutter>
          <TextContent>
            <Text component={TextVariants.h4}>
              {intl.formatMessage(messages.rolesAndConfig)}
            </Text>
            <Text>
              {' '}
              {intl.formatMessage(messages.rolesAndConfigDescription)}{' '}
            </Text>
          </TextContent>
          <Accordion asDefinitionList>
            {getSections(intl).map((section) => (
              <AccordionItem
                key={section.name}
                className="ins-c-install-client-tab__section"
              >
                <AccordionToggle
                  isExpanded={expanded === section.name}
                  onClick={() => {
                    expanded === section.name
                      ? setExpanded(undefined)
                      : setExpanded(section.name);
                  }}
                >
                  {section.name}
                </AccordionToggle>
                <AccordionContent
                  id={section.id}
                  isHidden={expanded !== section.name}
                >
                  <TextContent>{section.description}</TextContent>
                </AccordionContent>
                <Divider />
              </AccordionItem>
            ))}
          </Accordion>
        </Grid>
      </Tab>
      <Tab
        eventKey={1}
        onClick={() => setActiveTabKey(1)}
        v
        title={<TabTitleText>Containers</TabTitleText>}
      >
        <TextContent>
          <Text component={TextVariants.h4}>
            {intl.formatMessage(messages.factsInstalled)}
          </Text>
          <Text> {intl.formatMessage(messages.factsInstalledOne)} </Text>
          <Text> {intl.formatMessage(messages.factsInstalledTwo)} </Text>
          <Text> {intl.formatMessage(messages.exampleTaskOne)} </Text>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {`- debug: var=ansible_local.insights.system_id`}
          </ClipboardCopy>
          <Text> {intl.formatMessage(messages.exampleTaskTwo)} </Text>
        </TextContent>
      </Tab>
      <Tab
        eventKey={2}
        onClick={() => setActiveTabKey(2)}
        title={
          <TabTitleText>{intl.formatMessage(messages.examples)}</TabTitleText>
        }
      >
        <TextContent>
          <Text>
            {' '}
            <strong>{intl.formatMessage(messages.examplePlaybook)}</strong>{' '}
          </Text>
          <Text> {intl.formatMessage(messages.examplePlaybookOne)} </Text>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {examplePlaybookOne}
          </ClipboardCopy>
          <Text> {intl.formatMessage(messages.examplePlaybookTwo)} </Text>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {examplePlaybookTwo}
          </ClipboardCopy>
          <Text>
            {' '}
            <strong>
              {intl.formatMessage(messages.exampleConfigurationFile)}
            </strong>{' '}
          </Text>
          <Text> {intl.formatMessage(messages.exampleConfigurationOne)} </Text>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {exampleConfigurationOne}
          </ClipboardCopy>
          <Text>
            {' '}
            {intl.formatMessage(messages.exampleConfigurationTwo, {
              strong(str) {
                return <strong>{str}</strong>;
              },
            })}{' '}
          </Text>
          <Text>
            {' '}
            {intl.formatMessage(messages.exampleConfigurationThree)}{' '}
          </Text>
          <Text> {intl.formatMessage(messages.exampleConfigurationFour)} </Text>
          <Text> {intl.formatMessage(messages.exampleConfigurationFive)} </Text>
          <ClipboardCopy
            isCode
            isReadOnly
            variant={ClipboardCopyVariant.expansion}
          >
            {`ansible-playbook ... --extra-vars @insights-client-config.yml ...`}
          </ClipboardCopy>
          <Text> {intl.formatMessage(messages.exampleConfigurationSix)} </Text>
          <Text>
            {' '}
            <strong>{intl.formatMessage(messages.exampleUse)}</strong>{' '}
          </Text>
          <ol>
            <li>
              <Text> {intl.formatMessage(messages.exampleUseOne)} </Text>
              <ClipboardCopy
                isCode
                isReadOnly
                variant={ClipboardCopyVariant.expansion}
              >
                {`ansible-galaxy install RedHatInsights.insights-client`}
              </ClipboardCopy>
              <Text> {intl.formatMessage(messages.exampleUseTwo)} </Text>
            </li>
            <li>
              <Text> {intl.formatMessage(messages.exampleUseThree)} </Text>
            </li>
            <li>
              <Text> {intl.formatMessage(messages.exampleUseFour)} </Text>
              <ClipboardCopy
                isCode
                isReadOnly
                variant={ClipboardCopyVariant.expansion}
              >
                {`ansible-playbook --limit=myhost.example.com install-insights.yml --extra-vars @insights-client-config.yml`}
              </ClipboardCopy>
              <Text> {intl.formatMessage(messages.exampleUseFive)} </Text>
            </li>
          </ol>
        </TextContent>
      </Tab>
    </Tabs>
  );
};

ConfigureClientTab.propTypes = {
  intl: PropTypes.any,
};

export { InstallAnsibleTab, ConfigureClientTab };
