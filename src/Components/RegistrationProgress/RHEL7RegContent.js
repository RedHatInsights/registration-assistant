import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Content, ContentVariants } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import {
  contentRunCommands,
  insightsClientRegister,
  rhel7LifecycleSupport,
  subManagerRegister,
  yumInstallInsightsClient,
} from '../../constants';
import ViewInventoryStep from './ViewInventoryStep';

const RHEL7RegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <Content>
      <Content component={ContentVariants.p}>
        {`RHEL 7's maintenance support phase has ended.`}{' '}
        <Content
          component={ContentVariants.a}
          href={rhel7LifecycleSupport}
          rel="noopener noreferrer"
          target="_blank"
        >
          Red Hat Enterprise Linux 7 Extended Lifecycle Support Maintenance
          Policy
          <Icon className="pf-v6-u-ml-xs">
            <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
          </Icon>
        </Content>
      </Content>
      <Content component="ul" isPlainList>
        <Content component="li">
          <span>{contentRunCommands}</span>
        </Content>
      </Content>
      <Content component={ContentVariants.ol}>
        <Content component="li">
          <span>Connect your system to the subscription manager</span>
          <br />
          <span>This provides a basic level of connectivity in Insights.</span>
          <RegAssistCodeBlock
            code={subManagerRegister(selectedKey, orgId)}
            setStep={setStep}
          />
        </Content>
        <Content component="li">
          Confirm Insights client is installed.
          <RegAssistCodeBlock
            code={yumInstallInsightsClient}
            setStep={setStep}
          />
        </Content>
        <Content component="li">
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide recommendations.</span>
          <RegAssistCodeBlock code={insightsClientRegister} setStep={setStep} />
        </Content>
        <Content component="li">
          <ViewInventoryStep />
        </Content>
      </Content>
    </Content>
  );
};

RHEL7RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default RHEL7RegContent;
