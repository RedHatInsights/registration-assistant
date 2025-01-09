import React from 'react';
import PropTypes from 'prop-types';
import {
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
} from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import { rhcConnect } from '../../constants';
import ViewInventoryStep from './ViewInventoryStep';

const RHEL9RegContent = ({ orgId, selectedKey, setStep }) => {
  return (
    <TextContent>
      <TextList isPlain>
        <TextListItem>
          <span>Prerequisites:</span>
          <br />
          <span>You must have root privileges.</span>
        </TextListItem>
      </TextList>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
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
        </TextListItem>
        <TextListItem>
          <ViewInventoryStep />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

RHEL9RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
  setStep: PropTypes.func,
};

export default RHEL9RegContent;
