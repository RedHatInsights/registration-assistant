const chromeMock = {
  updateDocumentTitle: () => undefined,
  isBeta: () => false,
  appAction: () => {},
  appObjectId: () => {},
  on: () => () => {},
  getApp: () => 'registration',
  getBundle: () => 'insights', // TODO: use real bundle name for registration assistant
  getUserPermissions: () => Promise.resolve([
    { permission: 'inventory:*:*' },
    { permission: 'config-manager:activation_keys:read' },
    { permission: 'config-manager:activation_keys:write' }
  ]),
  auth: {
    getUser: () =>
      Promise.resolve({
        identity: {
          account_number: '0',
          type: 'User',
          user: {
            is_org_admin: true,
          },
        },
        entitlements: {
          hybrid_cloud: { is_entitled: true },
          insights: { is_entitled: true },
          openshift: { is_entitled: true },
          smart_management: { is_entitled: false },
        },
      }),
  },
  hideGlobalFilter: () => {},
  quickStarts: {
    activateQuickstart: () => {},
  },
};

export default () => chromeMock;

export const useChrome = () => chromeMock;
