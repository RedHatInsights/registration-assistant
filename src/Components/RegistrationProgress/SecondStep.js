import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  FlexItem,
  Radio,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { operatingSystemList } from './operatingSystemConstants';

const SecondStep = ({ operatingSystem, setOperatingSystem, setStep }) => {
  const handleOperatingSystemSelect = (os) => {
    setOperatingSystem(os);
    setStep(2);
  };

  return (
    <React.Fragment>
      <TextContent>
        <Text component={TextVariants.p}>
          Select the OS your system is running.
        </Text>
        <Flex>
          {operatingSystemList.map((os) => (
            <FlexItem spacer={{ default: 'spacerMd' }} key={`${os.name}-radio`}>
              <Radio
                isChecked={operatingSystem?.name === os.name}
                name={os.name}
                onChange={() => handleOperatingSystemSelect(os)}
                label={os.name}
                id={os.id}
              />
            </FlexItem>
          ))}
        </Flex>
      </TextContent>
    </React.Fragment>
  );
};

SecondStep.propTypes = {
  operatingSystem: PropTypes.object,
  setOperatingSystem: PropTypes.func,
  setStep: PropTypes.func,
  step: PropTypes.number,
};

export default SecondStep;
