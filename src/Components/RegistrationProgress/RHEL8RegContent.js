import React from 'react';
import PropTypes from 'prop-types';
import { Content, ContentVariants } from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import {
  contentRunCommands,
  insightsClientRegister,
  subManagerRegister,
} from '../../constants';
import ViewInventoryStep from './ViewInventoryStep';

const RHEL8RegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <Content>
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
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide analytics.</span>
          <RegAssistCodeBlock code={insightsClientRegister} setStep={setStep} />
        </Content>
        <Content component="li">
          <ViewInventoryStep />
        </Content>
      </Content>
    </Content>
  );
};

RHEL8RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default RHEL8RegContent;
