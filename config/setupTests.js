import React from 'react';

global.React = React;
jest.mock('@redhat-cloud-services/frontend-components/useChrome', () => ({
  __esModule: true,
  default: () => ({
    getApp: () => 'registration',
    getBundle: () => 'insights',
    auth: {
      getUser: () =>
        new Promise((res) =>
          res({
            identity: {
              org_id: '98765432',
            },
          })
        ),
    },
  }),
}));

jest.mock('../src/Utilities/Hooks', () => ({
  ...jest.requireActual('../src/Utilities/Hooks'),
  useLightspeedFeatureFlag: () => 'Insights',
}));
