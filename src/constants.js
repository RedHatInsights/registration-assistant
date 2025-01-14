import React from 'react';
import {
  Skeleton,
  SkeletonSize,
} from '@redhat-cloud-services/frontend-components/Skeleton';
import {
  EmptyState,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

export const regAssistantDescription =
  'The Insights for RHEL registration assistant will guide you through the setup process for the Red Hat Insights client.';

export const dataCollection =
  "Learn more about Red Hat Insights' data collection and controls";

export const AUTOMATE_WITH_SATELLITE =
  'Looking for ways to automate with Insights registration with Satellite? Read the following article:';

export const dataCollectionLink =
  'https://www.redhat.com/en/technologies/management/insights/data-application-security#section-data-collection';

export const remoteHostConfigLink =
  'https://docs.redhat.com/en/documentation/red_hat_insights/1-latest/html/remote_host_configuration_and_management/index';

export const monitoringHostsLink =
  'https://docs.redhat.com/en/documentation/red_hat_satellite/6.14/html/managing_hosts/Monitoring_Hosts_Using_Red_Hat_Insights_managing-hosts#deploying-red-hat-insights-using-the-ansible-role_managing-hosts';

export const convertUsingInsights =
  'https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/converting_from_a_linux_distribution_to_rhel_using_the_convert2rhel_utility/converting-using-insights_converting-from-a-linux-distribution-to-rhel#converting-using-insights_converting-from-a-linux-distribution-to-rhel';

export const rhel7LifecycleSupport =
  'https://access.redhat.com/support/policy/updates/rhel7-els-support-maintenance-policy';

export const insightsClientRegister = 'insights-client --register';

export const yumInstallInsightsClient = 'yum install insights-client';

export const centosInstallRHC = `curl -o /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release https://security.access.redhat.com/data/fd431d51.txt

curl -o /etc/yum.repos.d/client-tools-for-rhel-7-server.repo https://cdn-public.redhat.com/content/public/repofiles/client-tools-for-rhel-7-server.repo

sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*.repo
sed -i 's|#baseurl=http://mirror.centos.org/centos/$releasever|baseurl=http://vault.centos.org/7.9.2009|g' /etc/yum.repos.d/CentOS-*.repo
yum install -y subscription-manager subscription-manager-rhsm-certificates insights-client rhc rhc-worker-script`;

export const rhcConnect = (activationKey, orgId) => {
  return `rhc connect --activation-key ${activationKey.name} --organization ${orgId}`;
};

export const subManagerRegister = (activationKey, orgId) => {
  return `subscription-manager register --activationkey ${activationKey.name} --org ${orgId}`;
};

export const loadingActivationKeys = [
  {
    name: <Skeleton size={SkeletonSize.sm} />,
  },
  {
    name: <Skeleton size={SkeletonSize.sm} />,
  },
  {
    name: <Skeleton size={SkeletonSize.sm} />,
  },
  {
    name: <Skeleton size={SkeletonSize.sm} />,
  },
  {
    name: <Skeleton size={SkeletonSize.sm} />,
  },
];

export const emptyActivationKeys = [
  {
    name: (
      <EmptyState variant={EmptyStateVariant.xs}>
        <EmptyStateHeader
          titleText="No activation keys yet"
          headingLevel="h6"
          icon={<EmptyStateIcon icon={PlusCircleIcon} />}
        />
      </EmptyState>
    ),
    isDisabled: true,
  },
];

export const centosRadio = 'centos-radio';
export const rhel7Radio = 'rhel7-radio';
export const rhel8Radio = 'rhel8-radio';
export const rhel9Radio = 'rhel9-radio';
