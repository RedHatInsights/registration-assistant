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
              Navigate to the{' '}
              <InsightsLink to="/" app="inventory">
                Inventory page
              </InsightsLink>
            </span>
            <br />
            <span>
              It can take a couple of minutes for your system to appear.
            </span>
          </TextListItem>
        </TextList>
      </TextContent>
    </React.Fragment>
  );
};

export default ViewInventoryStep;
