import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Content, ContentVariants } from '@patternfly/react-core';
import {
  centosInstallRHC,
  contentRunCommands,
  convertUsingInsights,
  remoteHostConfigLink,
  rhcConnect,
} from '../../constants';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import ViewInventoryStep from './ViewInventoryStep';

const CentosLinuxRegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <Content>
      <Content component={ContentVariants.p}>
        Registering CentOS Linux 7 to Insights is only supported for the
        conversion of CentOS Linux 7 to Red Hat Enterprise Linux using Red Hat
        Insights.{' '}
        <Content
          component={ContentVariants.a}
          href={convertUsingInsights}
          rel="noopener noreferrer"
          target="_blank"
        >
          Converting using Insights
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
          Install{' '}
          <Content
            component={ContentVariants.a}
            href={remoteHostConfigLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Remote host configuration
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </Content>
          <RegAssistCodeBlock code={centosInstallRHC} setStep={setStep} />
        </Content>
        <Content component="li">
          Connect to Insights.
          <RegAssistCodeBlock
            code={rhcConnect(selectedKey, orgId)}
            setStep={setStep}
          />
        </Content>
        <Content component="li">
          <ViewInventoryStep />
        </Content>
      </Content>
    </Content>
  );
};

CentosLinuxRegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default CentosLinuxRegContent;
