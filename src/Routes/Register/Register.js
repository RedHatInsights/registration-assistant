import './Register.scss';

import { DataCollection, EnablingInsightsOnRhui, RegisterWithRhsm, SetupConfigure, SmartManagement, SubscribetoSatellite, schema } from './Helpers';
import { FormTemplate as PfForm, componentMapper } from '@data-driven-forms/pf4-component-mapper';
import { Split, SplitItem } from '@patternfly/react-core/dist/esm/layouts/Split/index';
import { Stack, StackItem } from '@patternfly/react-core/dist/esm/layouts/Stack/index';

import { Divider } from '@patternfly/react-core/dist/esm/components/Divider/Divider';
import FormRenderer from '@data-driven-forms/react-form-renderer';
import FormSpy from '@data-driven-forms/react-form-renderer/dist/esm/form-spy';
import PropTypes from 'prop-types';
import React from 'react';
import { TasksIcon } from '@patternfly/react-icons';
import { Title } from '@patternfly/react-core/dist/esm/components/Title/Title';
import messages from '../../Messages';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

const Register = () => {
    const intl = useIntl();

    const FormTemplate = props => <Split hasGutter className='ins-c-main-split'>
        <SplitItem className='ins-c-left'>
            <Stack hasGutter >
                <StackItem>
                    <Title headingLevel='h1'>{intl.formatMessage(messages.registerYourSystems)}</Title>
                </StackItem>
                <StackItem>
                    <Title headingLevel='h3'>{intl.formatMessage(messages.stepOneTitle)}</Title>
                    <PfForm {...props}/>
                </StackItem>
            </Stack>
        </SplitItem>
        <SplitItem className='ins-c-right'>
            <Stack hasGutter>
                <StackItem>
                    <Title headingLevel='h3'>
                        <TasksIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.preinstallationChecks)}
                    </Title>
                </StackItem>
                <StackItem>
                    <ul>
                        <li>
                            <FormSpy>
                                {({ values }) => values['how-are-systems-managed'] === 'rhsm' ? (
                                    <RegisterWithRhsm intl={intl} />
                                ) : values['how-are-systems-managed'] === 'rhs' ?
                                    <SubscribetoSatellite intl={intl} />
                                    : <EnablingInsightsOnRhui intl={intl} />
                                }
                            </FormSpy>
                        </li>
                        <Divider component='li' />
                        <li><DataCollection intl={intl} /></li>
                        <Divider component='li' />
                        <li> <SetupConfigure intl={intl} /></li>
                        <Divider component='li' />
                        <FormSpy>
                            {({ values }) => values['how-are-systems-managed'] !== 'rhs' ? <React.Fragment>
                                <li><SmartManagement intl={intl} /></li><Divider component='li' />
                            </React.Fragment> : null
                            }
                        </FormSpy>
                    </ul>
                </StackItem>
            </Stack>
        </SplitItem>
    </Split>;

    return <FormRenderer
        schema={schema(intl)}
        componentMapper={componentMapper}
        FormTemplate={props => <FormTemplate {...props} showFormControls={false} />} />;
};

Register.propTypes = {
    formFields: PropTypes.object
};

export default withRouter(Register);
