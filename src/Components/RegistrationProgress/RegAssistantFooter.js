import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, TextContent, TextVariants } from '@patternfly/react-core';
import { monitoringHostsLink, remoteHostConfigLink } from '../../constants';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { AUTOMATE_WITH_SATELLITE, rhel9Radio } from '../../constants';

const RegAssistantFooter = ({ operatingSystem }) => {
  return (
    <TextContent style={{ marginTop: '24px' }}>
      {operatingSystem.id === rhel9Radio && (
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
        {AUTOMATE_WITH_SATELLITE}{' '}
        <a rel="noopener noreferrer" target="_blank" href={monitoringHostsLink}>
          Monitoring Hosts Using Red Hat Insights{' '}
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
