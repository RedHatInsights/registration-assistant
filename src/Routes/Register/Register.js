import { Button, Stack, StackItem, Title } from '@patternfly/react-core';
import { Link, withRouter } from 'react-router-dom';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import React from 'react';
import { addNotification } from '@redhat-cloud-services/frontend-components-notifications/';
import messages from '../../Messages';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

const Register = () => {

    const intl = useIntl();
    const dispatch = useDispatch();

    const handleAlert = () => {
        dispatch(
            addNotification({
                variant: 'success',
                title: 'Notification title',
                description: 'notification description'
            })
        );
    };

    return (
        <React.Fragment>
            <PageHeader>
                <PageHeaderTitle title={ intl.formatMessage(messages.RegisterSystems) } />
            </PageHeader>
            <Main>
                <Stack hasGutter>
                    <StackItem>
                        <Title headingLevel="h2" size="3xl"> Alerts </Title>
                        <Button variant='primary' onClick={handleAlert}> Dispatch alert </Button>
                    </StackItem>
                    <StackItem>
                    </StackItem>
                    <StackItem>
                        <Stack hasGutter>
                            <StackItem>
                                <Title headingLevel="h2" size="3xl"> Links </Title>
                            </StackItem>
                            <StackItem><Link to='/oops'> How to handle 500s in app </Link></StackItem>
                            <StackItem><Link to='/no-permissions'> How to handle 403s in app </Link></StackItem>
                        </Stack>
                    </StackItem>
                </Stack>
            </Main>
        </React.Fragment>
    );
};

export default withRouter(Register);
