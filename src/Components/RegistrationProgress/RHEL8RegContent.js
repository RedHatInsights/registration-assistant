import React from 'react';
import PropTypes from 'prop-types';
import {
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
} from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import { insightsClientRegister, subManagerRegister } from '../../constants';

const RHEL8RegContent = ({ orgId, selectedKey }) => {
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
          <span>Connect your system to the subscription manager</span>
          <br />
          <span>This provides a basic level of connectivity in Insights.</span>
          <RegAssistCodeBlock code={subManagerRegister(selectedKey, orgId)} />
        </TextListItem>
        <TextListItem>
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide recommendations.</span>
          <RegAssistCodeBlock code={insightsClientRegister} />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

RHEL8RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
};

export default RHEL8RegContent;