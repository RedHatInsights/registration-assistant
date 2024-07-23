import './Register.scss';

import {
  ColumnsIcon,
  TasksIcon,
} from '@patternfly/react-icons/dist/esm/icons/';
import {
  DataCollection,
  EnablingInsightsOnRhui,
  RegisterWithRhsm,
  SetupConfigure,
  Satellite,
  SubscribetoSatellite,
  schema,
} from './Helpers';
import {
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
} from '@patternfly/react-core/dist/esm/components/Drawer/';
import {
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core/dist/esm/components/Page/';
import {
  FormTemplate as PfForm,
  componentMapper,
} from '@data-driven-forms/pf4-component-mapper';
import React, { useState } from 'react';
import {
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core/dist/esm/components/Text/index';

import { Button } from '@patternfly/react-core/dist/esm/components/Button/index';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider/index';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer/form-renderer';
import FormSpy from '@data-driven-forms/react-form-renderer/form-spy/form-spy';
import Group from '../../Components/Group/Group';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core/dist/esm/components/Title/index';
import messages from '../../Messages';
import { useIntl } from 'react-intl';
import { Icon } from '@patternfly/react-core';

const CustomSection = ({ label }) => <React.Fragment>{label}</React.Fragment>;

CustomSection.propTypes = {
  label: PropTypes.any,
};

const insRaMapper = {
  ...componentMapper,
  'custom-section': { component: CustomSection },
};

const Register = () => {
  const intl = useIntl();

  const [isExpanded, setIsExpanded] = useState(false);

  const onOpenClick = () => {
    setIsExpanded(true);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const panelContent = (
    <DrawerPanelContent className="ins-m-light-300" hasNoBorder noPadding>
      <ul aria-label="Red Hat Insights tips">
        <FormSpy>
          {({ values }) =>
            values['rhel-os'] === 'rhel84+' ? (
              ''
            ) : (
              <React.Fragment>
                <li>
                  <DrawerHead>
                    <Group type="title-group">
                      <Icon size="lg">
                        <TasksIcon />
                      </Icon>
                      <Title headingLevel="h3" size="md">
                        {intl.formatMessage(messages.preinstallationChecks)}
                      </Title>
                    </Group>
                    {isExpanded && (
                      <DrawerActions>
                        <DrawerCloseButton onClick={onCloseClick} />
                      </DrawerActions>
                    )}
                  </DrawerHead>
                  <DrawerPanelBody>
                    <FormSpy>
                      {({ values }) =>
                        values['how-are-systems-managed'] === 'rhsm' ? (
                          <RegisterWithRhsm intl={intl} />
                        ) : values['how-are-systems-managed'] === 'rhs' ? (
                          <SubscribetoSatellite intl={intl} />
                        ) : values['how-are-systems-managed'] === 'rhui' ? (
                          <EnablingInsightsOnRhui intl={intl} />
                        ) : (
                          intl.formatMessage(messages.pleaseIndicate)
                        )
                      }
                    </FormSpy>
                  </DrawerPanelBody>
                </li>
                <Divider component="li" />
              </React.Fragment>
            )
          }
        </FormSpy>
        <li>
          <DrawerPanelBody>
            <DataCollection intl={intl} />
          </DrawerPanelBody>
        </li>
        <Divider component="li" />
        <li>
          <DrawerPanelBody>
            <SetupConfigure intl={intl} />
          </DrawerPanelBody>
        </li>
        <Divider component="li" />
        <li>
          <FormSpy>
            {({ values }) =>
              values['how-are-systems-managed'] !== 'rhs' ? (
                <DrawerPanelBody>
                  <Satellite intl={intl} />
                </DrawerPanelBody>
              ) : null
            }
          </FormSpy>
        </li>
        <Divider component="li" />
        <li aria-hidden="true">
          <DrawerPanelBody></DrawerPanelBody>
        </li>
      </ul>
    </DrawerPanelContent>
  );

  const FormTemplate = (props) => (
    <PageSection
      className="ins-c-registration-assistant ins-c-overflow-content"
      variant={PageSectionVariants.light}
      padding={{ default: 'noPadding' }}
    >
      <Drawer
        className="ins-c-registration-assistant-drawer"
        isStatic
        isExpanded={isExpanded}
      >
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody hasPadding>
            <Group type="page-title">
              <TextContent>
                <div className="ins-c-page-title__main">
                  <Title headingLevel="h1" size="xl">
                    {intl.formatMessage(messages.registerYourSystems)}
                  </Title>
                  <Button aria-expanded={isExpanded} onClick={onOpenClick}>
                    <ColumnsIcon />
                  </Button>
                </div>
                <Text component={TextVariants.small}>
                  {intl.formatMessage(messages.insightsRegistrationAssistant)}
                </Text>
                <Title className="ins-c-step-title" headingLevel="h2" size="md">
                  {intl.formatMessage(messages.stepOneTitle)}
                </Title>
              </TextContent>
            </Group>
            <div className="ins-c-registration-assistant-form">
              <PfForm {...props} />
            </div>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </PageSection>
  );

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Systems | RHEL</title>
      </Helmet>
      <FormRenderer
        schema={schema(intl)}
        componentMapper={insRaMapper}
        FormTemplate={(props) => (
          <FormTemplate {...props} showFormControls={false} />
        )}
      />
    </React.Fragment>
  );
};

Register.propTypes = {
  formFields: PropTypes.object,
};

export default Register;
