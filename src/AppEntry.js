/* eslint-disable no-console */
import App from './App';
import React from 'react';
import { init, RegistryContext } from './store';
import { Provider } from 'react-redux';

const AppEntry = () => {
  const registry = init();

  return (
    <RegistryContext.Provider value={{ getRegistry: () => registry }}>
      <Provider store={registry.getStore()}>
        <App />
      </Provider>
    </RegistryContext.Provider>
  );
};

export default AppEntry;
