import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextVariants,
} from '@patternfly/react-core';
import {
  centosInstallRHC,
  convertUsingInsights,
  remoteHostConfigLink,
  rhcConnect,
} from '../../constants';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import ViewInventoryStep from './ViewInventoryStep';

const CentosLinuxRegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <TextContent>
      <Text component={TextVariants.p}>
        Registering CentOS Linux to Insights is only supported for the
        conversion of CentOS Linux to Red Hat Enterprise Linux using Red Hat
        Insights.{' '}
        <Text
          component={TextVariants.a}
          href={convertUsingInsights}
          rel="noopener noreferrer"
          target="_blank"
        >
          Converting using Insights
          <Icon className="pf-v5-u-ml-xs">
            <ExternalLinkAltIcon />
          </Icon>
        </Text>
      </Text>
      <TextList isPlain>
        <TextListItem>
          <span>Prerequisites:</span>
          <br />
          <span>You must have root privileges.</span>
        </TextListItem>
      </TextList>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
          Install{' '}
          <Text
            component={TextVariants.a}
            href={remoteHostConfigLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Remote host configuration
            <Icon className="pf-v5-u-ml-xs">
              <ExternalLinkAltIcon />
            </Icon>
          </Text>
          <RegAssistCodeBlock code={centosInstallRHC} setStep={setStep} />
        </TextListItem>
        <TextListItem>
          Connect to Insights.
          <RegAssistCodeBlock
            code={rhcConnect(selectedKey, orgId)}
            setStep={setStep}
          />
        </TextListItem>
        <TextListItem>
          <ViewInventoryStep />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

CentosLinuxRegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default CentosLinuxRegContent;
