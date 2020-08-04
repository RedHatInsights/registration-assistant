[![Build Status](https://travis-ci.org/RedHatInsights/registration-assistant.svg?branch=master)](https://travis-ci.org/RedHatInsights/registration-assistant)

# registration-assistant

React.js registration-assistant app for Red Hat Insights provides an in-application interactive experience which helps guide the user through the registration process to get the Red Hat Insights client installed and registered on their systems. We believe by nurturing the customer through the process and providing a clear call to action around installation within the applications, we can help drive additional adoption increasing the breadth of Insights registrations for an account.

## Getting Started

There is a [comprehensive quick start guide in the Storybook Documentation](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/welcome/quickStart/DOC.md) to setting up an Insights environment complete with:

- Insights Registration Assistant App

- [Insights Chroming](https://github.com/RedHatInsights/insights-chrome)
- [Insights Proxy](https://github.com/RedHatInsights/insights-proxy)

Note: You will need to set up the Insights environment if you want to develop with the registration assistant app due to the consumption of the chroming service as well as setting up your global/app navigation through the API.

## Build app

1. ```npm install```

2. ```npm run start```
    - starts webpack bundler and serves the files with webpack dev server

3. ```https://prod.foo.redhat.com:1337/insights/registration/```
    - visit this url (or any listed in the spandx config terminal) to checkout the results!

### Testing

- `npm run verify` will run linters and tests
- Travis is used to test the build for this code.
  - You are always notified on failed builds
  - You are only notified on successful builds if the build before it failed
  - By default, both `push` events as well as `pull_request` events send notifications
  - Travis is defaulted to notify #insights-bots

## Deploying

- The Platform team is using Travis to deploy the application
  - The Platform team will help you set up the Travis instance if this is the route you are wanting to take

## Running locally
Have [insights-proxy](https://github.com/RedHatInsights/insights-proxy) installed under PROXY_PATH

```shell
SPANDX_CONFIG="./profiles/local-frontend.js" bash $PROXY_PATH/scripts/run.sh
```

### Testing - jest

When you want to test your code with unit tests please use `jest` which is preconfigured in a way to colect codecoverage as well. If you want to see your coverage on server the travis config has been set in a way that it will send data to [codecov.io](https://codecov.io) the only thing you have to do is visit their website (register), enable your repository and add CODECOV_TOKEN to your travis web config (do not add it to .travis file, but trough [travis-ci.org](https://travis-ci.org/))
