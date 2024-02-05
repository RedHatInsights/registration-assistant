/* eslint-disable no-console */
import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations/index';
import React from 'react';
import messages from '../locales/data.json';

const AppEntry = () => (
  <IntlProvider
    locale={navigator.language.slice(0, 2)}
    messages={messages}
    onError={console.log}
  >
    <App />
  </IntlProvider>
);

export default AppEntry;
