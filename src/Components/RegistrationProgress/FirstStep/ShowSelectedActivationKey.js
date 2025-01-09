import React from 'react';
import PropTypes from 'prop-types';
import {
  ExpandableSection,
  TextContent,
  TextList,
  TextListItem,
  TextListItemVariants,
  TextListVariants,
} from '@patternfly/react-core';

export const ShowSelectedActivationKey = ({ selectedKey }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onToggle = (_event, isExpanded) => {
    setIsExpanded(isExpanded);
  };

  return (
    <ExpandableSection
      toggleText="Show selected activation key"
      onToggle={onToggle}
      isExpanded={isExpanded}
    >
      <TextContent className="pf-v5-u-ml-lg">
        <TextList component={TextListVariants.dl}>
          <TextListItem component={TextListItemVariants.dt}>Name</TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.name || 'Not defined'}
          </TextListItem>
          <TextListItem component={TextListItemVariants.dt}>
            Description
          </TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.description || 'Not defined'}
          </TextListItem>
          <TextListItem component={TextListItemVariants.dt}>
            Workload
          </TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.releaseVersion || 'Not defined'}
          </TextListItem>
          <TextListItem component={TextListItemVariants.dt}>Role</TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.role || 'Not defined'}
          </TextListItem>
          <TextListItem component={TextListItemVariants.dt}>
            Service level agreement(SLA)
          </TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.serviceLevel || 'Not defined'}
          </TextListItem>
          <TextListItem component={TextListItemVariants.dt}>Usage</TextListItem>
          <TextListItem component={TextListItemVariants.dd}>
            {selectedKey.usage || 'Not defined'}
          </TextListItem>
        </TextList>
      </TextContent>
    </ExpandableSection>
  );
};

ShowSelectedActivationKey.propTypes = {
  selectedKey: PropTypes.object,
};
