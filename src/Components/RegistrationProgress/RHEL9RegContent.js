import React from 'react';
import PropTypes from 'prop-types';
import { Content, ContentVariants } from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import { rhcConnect, contentRunCommands } from '../../constants';
import ViewInventoryStep from './ViewInventoryStep';

const RHEL9RegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <Content>
      <Content component="ul" isPlainList>
        <Content component="li">
          <span>{contentRunCommands}</span>
        </Content>
      </Content>
      <Content component={ContentVariants.ol}>
        <Content component="li">
          <span>Connect to Insights.</span>
          <br />
          <span>
            This allows Red Hat Insights to provide analytics and run
            remediations.
          </span>
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

RHEL9RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default RHEL9RegContent;
