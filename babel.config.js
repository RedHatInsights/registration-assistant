require.extensions['.css'] = () => undefined;

/**
 * We require a mapper for some PF modules because the modle export names do not match their location
 */

module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
  env: {
    componentTest: {
      plugins: ['istanbul'],
    },
  },
};
