import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Icon,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
} from '@patternfly/react-core';
import {
  dataCollection,
  dataCollectionLink,
  regAssistantDescription,
} from '../../constants';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import RegProgessStepper from '../../Components/RegistrationProgress/RegProgressStepper';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

const NewRegister = () => {
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
        <TextContent>
          <Text>{regAssistantDescription}</Text>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={dataCollectionLink}
          >
            {dataCollection}
            <Icon className="pf-v5-u-ml-xs">
              <ExternalLinkAltIcon />
            </Icon>
          </a>
        </TextContent>
      </PageHeader>
      <PageSection variant={PageSectionVariants.light}>
        <RegProgessStepper />
      </PageSection>
    </React.Fragment>
  );
};

export default NewRegister;
