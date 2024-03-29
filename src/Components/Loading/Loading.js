import {
  EmptyState,
  EmptyStateHeader,
  EmptyStateIcon,
  Spinner,
} from '@patternfly/react-core/dist/esm/components';

import React from 'react';

const Loading = () => (
  <EmptyState>
    <EmptyStateHeader
      titleText="Loading"
      headingLevel="h4"
      icon={<EmptyStateIcon icon={Spinner} />}
    />
  </EmptyState>
);

export default Loading;
