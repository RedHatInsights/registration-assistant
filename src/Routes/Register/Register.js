import React, { useState } from 'react';

import './Register.scss';
import { DataCollection, EnablingInsightsOnRhui, RegisterWithRhsm, SetupConfigure, SmartManagement, SubscribetoSatellite, schema } from './Helpers';
import { FormTemplate as PfForm, componentMapper } from '@data-driven-forms/pf4-component-mapper';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider/Divider';
import FormRenderer from '@data-driven-forms/react-form-renderer';
import FormSpy from '@data-driven-forms/react-form-renderer/dist/esm/form-spy';
import PropTypes from 'prop-types';
import { TasksIcon } from '@patternfly/react-icons';
import { Title } from '@patternfly/react-core/dist/esm/components/Title/Title';
import messages from '../../Messages';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import TitleGroup from '../../Components/LayoutComponents/TitleGroup';
import PageTitle from '../../Components/LayoutComponents/PageTitle';

import {
    Button,
    Drawer,
    DrawerActions,
    DrawerCloseButton,
    DrawerContent,
    DrawerContentBody,
    DrawerHead,
    DrawerPanelBody,
    DrawerPanelContent,
    PageSection,
    PageSectionVariants,
    TextContent
} from '@patternfly/react-core';

import {
    ColumnsIcon
} from '@patternfly/react-icons';

const CustomSection = ({ label }) => <React.Fragment>{label}</React.Fragment>;

CustomSection.propTypes = {
    label: PropTypes.any
};

const insRaMapper = {
    ...componentMapper,
    'custom-section': { component: CustomSection }
};

const Register = () => {
    const intl = useIntl();

    const [isExpanded, setIsExpanded] = useState(false);

    const onOpenClick = () => {
        setIsExpanded(true);
    };

    const onCloseClick = () => {
        setIsExpanded(false);
    };

    const panelContent = (
        <DrawerPanelContent className="ins-m-light-300" hasNoBorder noPadding>
            <ul aria-label="Red Hat Insights tips">
                <li>
                    <DrawerHead>
                        <TitleGroup>
                            <TasksIcon size='md' />
                            <Title headingLevel='h3' size="md">
                                {intl.formatMessage(messages.preinstallationChecks)}
                            </Title>
                        </TitleGroup>
                        <DrawerActions>
                            <DrawerCloseButton onClick={onCloseClick} />
                        </DrawerActions>
                    </DrawerHead>
                    <DrawerPanelBody>
                        <FormSpy>
                            {({ values }) => values['how-are-systems-managed'] === 'rhsm' ? (
                                <RegisterWithRhsm intl={intl} />
                            ) : values['how-are-systems-managed'] === 'rhs' ?
                                <SubscribetoSatellite intl={intl} />
                                : <EnablingInsightsOnRhui intl={intl} />
                            }
                        </FormSpy>
                    </DrawerPanelBody>
                </li>
                <Divider component='li' />
                <li>
                    <DrawerPanelBody>
                        <DataCollection intl={intl} />
                    </DrawerPanelBody>
                </li>
                <Divider component='li' />
                <li>
                    <DrawerPanelBody>
                        <SetupConfigure intl={intl} />
                    </DrawerPanelBody>
                </li>
                <Divider component='li' />
                <li>
                    <FormSpy>
                        {({ values }) => values['how-are-systems-managed'] !== 'rhs' ? <DrawerPanelBody>
                            <SmartManagement intl={intl} />
                        </DrawerPanelBody> : null
                        }
                    </FormSpy>
                </li>
                <Divider component='li' />
                <li aria-hidden="true">
                    <DrawerPanelBody>
                    </DrawerPanelBody>
                </li>
            </ul>
        </DrawerPanelContent>
    );

    const FormTemplate = props =>
        <PageSection className='ins-c-registration-assistant ins-c-overflow-content'
            variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
            <Drawer className='ins-c-registration-assistant-drawer' isStatic isExpanded={isExpanded}>
                <DrawerContent panelContent={panelContent}>
                    <DrawerContentBody hasPadding>
                        <PageTitle>
                            <TextContent>
                                <div className="ins-c-page-title__main">
                                    <Title headingLevel='h1' size="xl">
                                        {intl.formatMessage(messages.registerYourSystems)}
                                    </Title>
                                    <Button aria-expanded={isExpanded} onClick={onOpenClick}>
                                        <ColumnsIcon />
                                    </Button>
                                </div>
                                <Title className="ins-c-step-title" headingLevel='h2' size='md'>
                                    {intl.formatMessage(messages.stepOneTitle)}
                                </Title>
                            </TextContent>
                        </PageTitle>
                        <div className='ins-c-registration-assistant-form'>
                            <PfForm {...props}/>
                        </div>
                    </DrawerContentBody>
                </DrawerContent>
            </Drawer>
        </PageSection>;

    return <FormRenderer
        schema={schema(intl)}
        componentMapper={insRaMapper}
        FormTemplate={props => <FormTemplate {...props} showFormControls={false} />} />;
};

Register.propTypes = {
    formFields: PropTypes.object
};

export default withRouter(Register);
