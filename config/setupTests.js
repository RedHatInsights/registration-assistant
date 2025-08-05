import React from 'react';

global.React = React;

// Mock Unleash feature flags to prevent ES module parsing issues
jest.mock('@unleash/proxy-client-react', () => ({
  useFlag: jest.fn(() => false),
  useFlagsStatus: jest.fn(() => ({ flagsReady: true })),
  FlagProvider: ({ children }) => children,
}));
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
  useFeatureFlag: jest.fn(() => false),
  useLightspeedFeatureFlag: jest.fn(() => 'Insights'),
}));
