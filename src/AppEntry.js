/* eslint-disable no-console */
import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import messages from '../locales/data.json';

const AppEntry = () => <IntlProvider locale={navigator.language.slice(0, 2)} messages={messages} onError={console.log}>
    <Router basename={getBaseName(window.location.pathname)}>
        <App />
    </Router>
</IntlProvider>;

export default AppEntry;
