import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, TextContent, TextVariants } from '@patternfly/react-core';
import { monitoringHostsLink, remoteHostConfigLink } from '../../constants';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

const RegAssistantFooter = ({ operatingSystem }) => {
  return (
    <TextContent style={{ marginTop: '24px' }}>
      {(operatingSystem.id === 'centos-radio' ||
        operatingSystem.id === 'rhel9-radio') && (
        <Text component={TextVariants.p}>
          Read more about Remote host configuration (RHC) options and levels of
          connectivity:{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={remoteHostConfigLink}
          >
            Remote Host Configuration and Management | Red Hat Product
            Documentation{' '}
            <Icon className="pf-v5-u-ml-xs">
              <ExternalLinkAltIcon />
            </Icon>
          </a>
        </Text>
      )}
      <Text component={TextVariants.p}>
        Looking for ways to automate with Satellite? Read this article:{' '}
        <a rel="noopener noreferrer" target="_blank" href={monitoringHostsLink}>
          Chapter9. Monitoring Hosts Using Red Hat Insights{' '}
          <Icon className="pf-v5-u-ml-xs">
            <ExternalLinkAltIcon />
          </Icon>
        </a>
      </Text>
    </TextContent>
  );
};

RegAssistantFooter.propTypes = {
  operatingSystem: PropTypes.object,
};

export default RegAssistantFooter;
