import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  MenuFooter,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import {
  ExternalLinkAltIcon,
  PlusCircleIcon,
  SyncAltIcon,
} from '@patternfly/react-icons';
import { InsightsLink } from '@redhat-cloud-services/frontend-components/InsightsLink';
import moment from 'moment';
import { loadingActivationKeys } from '../../../constants';
import { ShowSelectedActivationKey } from './ShowSelectedActivationKey';
import { dispatchNotification } from '../../../Utilities/Dispatcher';
import { useAxiosWithPlatformInterceptors } from '@redhat-cloud-services/frontend-components-utilities/interceptors';
import { createActivationKey } from '../../../../api';

const ActivationKeysList = ({ keys }) => {
  return keys.map((key, idx) => (
    <SelectOption
      key={`activation-key-${idx}`}
      width="100%"
      value={key}
      isDisabled={key.isDisabled}
    >
      {key.name}
    </SelectOption>
  ));
};

const FirstStep = ({
  createdKeyName,
  handleFetchKeys,
  keys,
  selectedKey,
  setIsModalOpen,
  setSelectedKey,
  setStep,
  step,
}) => {
  const [isOpen, setOpen] = useState(false);
  const axios = useAxiosWithPlatformInterceptors();

  const handleActivationKeySelect = (selectedKeyDetails) => {
    setSelectedKey(selectedKeyDetails);
    step === 0 && setStep(1);
    setOpen(false);
  };

  useEffect(() => {
    if (createdKeyName) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].name === createdKeyName) {
          handleActivationKeySelect(keys[i]);
        }
      }
    }
  }, [createdKeyName]);

  const handleOpenDropdown = async () => {
    setOpen(!isOpen);
    if (!isOpen) {
      const error = await handleFetchKeys();

      if (error) {
        setOpen(false);
      }
    }
  };

  const handleCreateActivationKey = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const toggle = (toggleRef) => (
    <MenuToggle
      ref={toggleRef}
      onClick={() => handleOpenDropdown()}
      isExpanded={isOpen}
      style={{
        minWidth: '300px',
        marginTop: '8px',
        marginBottom: '8px',
      }}
    >
      {selectedKey.name || selectedKey}
    </MenuToggle>
  );

  const autoGenerateKey = async () => {
    const currentDate = moment.utc(Date.now()).format('YYYY-DD-MM-hh-mm-ss');

    const postResponse = await createActivationKey(axios, {
      name: `activation-key-${currentDate}`,
      role: '',
      serviceLevel: '',
      usage: '',
    });

    if (postResponse.body?.id) {
      dispatchNotification({
        variant: 'success',
        title: 'Activation key created successfully',
        description: `${postResponse.body.name} is now available for use.`,
      });

      handleActivationKeySelect(postResponse.body);
    } else if (postResponse.error) {
      dispatchNotification({
        variant: 'danger',
        title: 'Error',
        description: postResponse.error.message,
        dismissable: true,
        autoDismiss: false,
      });

      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <TextContent>
        <Text component={TextVariants.p}>
          You need an{' '}
          <Text
            component={TextVariants.a}
            href="https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_activation_keys_on_the_hybrid_cloud_console/index"
            rel="noopener noreferrer"
            target="_blank"
          >
            activation key
            <Icon className="pf-v5-u-ml-xs">
              <ExternalLinkAltIcon />
            </Icon>
          </Text>{' '}
          to register. An activation key is a pre-shared token that enables
          authorized users to register and auto-configure systems.
        </Text>
      </TextContent>
      <div
        style={{
          fontWeight: 'var(--pf-v5-global--FontWeight--bold)',
          color: '#151515',
          marginTop: '16px',
        }}
        data-testid="select-activation-key"
      >
        Activation key <span style={{ color: '#C9190B' }}>*</span>
      </div>
      <Select
        isOpen={isOpen}
        onSelect={(_, optionName) => handleActivationKeySelect(optionName)}
        selected={selectedKey}
        toggle={toggle}
        style={{ width: '300px' }}
      >
        <SelectList style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          {keys === undefined ? (
            <ActivationKeysList keys={loadingActivationKeys} />
          ) : (
            <ActivationKeysList keys={keys} />
          )}
        </SelectList>
        <MenuFooter>
          <Button
            variant="link"
            icon={<PlusCircleIcon />}
            isInline
            onClick={() => handleCreateActivationKey()}
          >
            Create activation key
          </Button>
          <br />
          <Button
            className="pf-v5-u-pt-sm"
            variant="link"
            icon={<SyncAltIcon />}
            isInline
            onClick={() => autoGenerateKey()}
          >
            Auto-generate activation key
          </Button>
        </MenuFooter>
      </Select>
      <TextContent>
        <Text component={TextVariants.p}>
          Manage activation keys on the{' '}
          <InsightsLink to="/activation-keys" app="connector">
            Activation keys page
          </InsightsLink>
        </Text>
      </TextContent>
      {selectedKey.id && (
        <ShowSelectedActivationKey selectedKey={selectedKey} />
      )}
    </React.Fragment>
  );
};

FirstStep.propTypes = {
  createdKeyName: PropTypes.string,
  handleFetchKeys: PropTypes.func,
  keys: PropTypes.array,
  selectedKey: PropTypes.object,
  setIsModalOpen: PropTypes.func,
  setSelectedKey: PropTypes.func,
  setStep: PropTypes.func,
  step: PropTypes.number,
};

export default FirstStep;
