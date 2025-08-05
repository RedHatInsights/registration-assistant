import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Content,
  Icon,
  PageSection,
} from '@patternfly/react-core';
import * as constants from '../../constants';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import RegProgessStepper from '../../Components/RegistrationProgress/RegProgressStepper';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { useLightspeedFeatureFlag } from '../../Utilities/Hooks';

const Register = () => {
  const platformName = useLightspeedFeatureFlag();

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Systems | RHEL</title>
      </Helmet>
      <PageHeader>
        <PageHeaderTitle
          style={{ paddingBottom: '16px' }}
          title="Registration Assistant"
        />
        <Content>
          <Content component="p">{constants[`regAssistantDescription${platformName}`]}</Content>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={constants[`usingProxy${platformName}`]}
          >
            {constants[`usingProxy${platformName}`]}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={constants.usingSatelliteLink}
          >
            {constants[`usingSatellite${platformName}`]}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={constants.dataCollectionLink}
          >
            {constants[`dataCollection${platformName}`]}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
        </Content>
      </PageHeader>
      <PageSection hasBodyWrapper={false}>
        <RegProgessStepper />
      </PageSection>
    </React.Fragment>
  );
};

export default Register;
