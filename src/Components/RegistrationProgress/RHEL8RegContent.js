import React from 'react';
import PropTypes from 'prop-types';
import {
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
} from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import {
  contentRunCommands,
  insightsClientRegister,
  subManagerRegister,
} from '../../constants';
import ViewInventoryStep from './ViewInventoryStep';

const RHEL8RegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <TextContent>
      <TextList isPlain>
        <TextListItem>
          <span>{contentRunCommands}</span>
        </TextListItem>
      </TextList>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
          <span>Connect your system to the subscription manager</span>
          <br />
          <span>This provides a basic level of connectivity in Insights.</span>
          <RegAssistCodeBlock
            code={subManagerRegister(selectedKey, orgId)}
            setStep={setStep}
          />
        </TextListItem>
        <TextListItem>
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide analytics.</span>
          <RegAssistCodeBlock code={insightsClientRegister} setStep={setStep} />
        </TextListItem>
        <TextListItem>
          <ViewInventoryStep />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

RHEL8RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default RHEL8RegContent;
