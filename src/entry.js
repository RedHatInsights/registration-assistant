/* eslint-disable no-console */
import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/files/helpers';
import messages from '../locales/data.json';

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={messages} onError={console.log}>
        <Router basename={getBaseName(window.location.pathname)}>
            <App />
        </Router>
    </IntlProvider>,

    document.getElementById('root')
);
