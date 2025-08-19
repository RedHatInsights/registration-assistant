import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Content, ContentVariants } from '@patternfly/react-core';
import { monitoringHostsLink, remoteHostConfigLink } from '../../constants';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { AUTOMATE_WITH_SATELLITE, rhel9Radio } from '../../constants';

const RegAssistantFooter = ({ operatingSystem }) => {
  return (
    <Content style={{ marginTop: '24px' }}>
      {operatingSystem.id === rhel9Radio && (
        <Content component={ContentVariants.p}>
          Read more about Remote host configuration (RHC) options and levels of
          connectivity:{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={remoteHostConfigLink}
          >
            Remote Host Configuration and Management | Red Hat Product
            Documentation{' '}
            <Icon className="pf-v6-u-ml-xs">
              <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
            </Icon>
          </a>
        </Content>
      )}
      <Content component={ContentVariants.p}>
        {AUTOMATE_WITH_SATELLITE}{' '}
        <a rel="noopener noreferrer" target="_blank" href={monitoringHostsLink}>
          Monitoring Hosts Using Red Hat Insights{' '}
          <Icon className="pf-v6-u-ml-xs">
            <ExternalLinkAltIcon color="var(--pf-t--global--text--color--link--default)" />
          </Icon>
        </a>
      </Content>
    </Content>
  );
};

RegAssistantFooter.propTypes = {
  operatingSystem: PropTypes.object,
};

export default RegAssistantFooter;
