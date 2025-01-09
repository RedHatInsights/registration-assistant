import { createContext } from 'react';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import promiseMiddleware from 'redux-promise-middleware';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';

let registry;

export const RegistryContext = createContext({
  getRegistry: () => {},
});

export function init(...middleware) {
  registry = getRegistry({}, [
    promiseMiddleware,
    ...middleware.filter((item) => typeof item !== 'undefined'),
  ]);

  registry.register({
    notifications: notificationsReducer,
  });

  return registry;
}

export function getStore() {
  return registry.getStore();
}
