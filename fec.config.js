const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');

module.exports = {
  appUrl: '/insights/registration',
  debug: true,
  useProxy: process.env.PROXY === 'true',
  proxyVerbose: true,
  interceptChromeConfig: false,
  plugins: [
    // Put the Sentry Webpack plugin after all other plugins
    ...(process.env.ENABLE_SENTRY
      ? [
          sentryWebpackPlugin({
            ...(process.env.SENTRY_AUTH_TOKEN && {
              authToken: process.env.SENTRY_AUTH_TOKEN,
            }),
            org: 'red-hat-it',
            project: 'registration-assistant-rhel',
            moduleMetadata: ({ release }) => ({
              dsn: `https://95df6c65ea4016243ee2bcc2d45fcba8@o490301.ingest.us.sentry.io/4508683266686976`,
              org: 'red-hat-it',
              project: 'registration-assistant-rhel',
              release,
            }),
          }),
        ]
      : []),
  ],
  hotReload: process.env.HOT === 'true',
  moduleFederation: {
    exclude: ['react-router-dom'],
    shared: [
      {
        'react-router-dom': {
          singleton: true,
          import: false,
          version: '^6.3.0',
          requiredVersion: '^6.3.0',
        },
      },
    ],
  },
};
