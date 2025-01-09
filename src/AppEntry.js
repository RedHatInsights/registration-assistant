/* eslint-disable no-console */
import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations/index';
import React from 'react';
import messages from '../locales/data.json';
import { init, RegistryContext } from './store';
import { Provider } from 'react-redux';

const AppEntry = () => {
  const registry = init();

  return (
    <RegistryContext.Provider value={{ getRegistry: () => registry }}>
      <Provider store={registry.getStore()}>
        <IntlProvider
          locale={navigator.language.slice(0, 2)}
          messages={messages}
          onError={console.log}
        >
          <App />
        </IntlProvider>
      </Provider>
    </RegistryContext.Provider>
  );
};

export default AppEntry;
