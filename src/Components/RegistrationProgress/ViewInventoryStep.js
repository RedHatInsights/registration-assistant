import React from 'react';
import { TextContent, TextList, TextListItem } from '@patternfly/react-core';
import InsightsLink from '@redhat-cloud-services/frontend-components/InsightsLink';

const ViewInventoryStep = () => {
  return (
    <React.Fragment>
      <TextContent>
        <TextList isPlain>
          <TextListItem>
            <span>
              Navigate to{' '}
              <InsightsLink to="/" app="inventory">
                Inventory page
              </InsightsLink>
            </span>
            <br />
            <span>Your system could take a couple of minutes to appear.</span>
          </TextListItem>
        </TextList>
      </TextContent>
    </React.Fragment>
  );
};

export default ViewInventoryStep;
