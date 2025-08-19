import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon, PageSection, Content } from '@patternfly/react-core';
import {
  dataCollection,
  dataCollectionLink,
  insightsUsingProxy,
  insightsUsingProxyLink,
  insightsUsingSatellite,
  insightsUsingSatelliteLink,
  regAssistantDescription,
} from '../../constants';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import RegProgessStepper from '../../Components/RegistrationProgress/RegProgressStepper';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

const Register = () => {
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
          <Content component="p">{regAssistantDescription}</Content>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={insightsUsingProxyLink}
          >
            {insightsUsingProxy}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={insightsUsingSatelliteLink}
          >
            {insightsUsingSatellite}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={dataCollectionLink}
          >
            {dataCollection}
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
