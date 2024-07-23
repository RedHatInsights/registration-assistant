[![Build Status](https://api.travis-ci.com/RedHatInsights/registration-assistant.svg?branch=master)](https://www.travis-ci.com/github/RedHatInsights/registration-assistant)

# registration-assistant
React.js registration-assistant app for Red Hat Insights provides an in-application interactive experience which helps guide the user through the registration process to get the Red Hat Insights client installed and registered on their systems. We believe by nurturing the customer through the process and providing a clear call to action around installation within the applications, we can help drive additional adoption increasing the breadth of Insights registrations for an account.

## First time setup
1. Make sure you have [Node.js](https://nodejs.org/en/) version >16 installed
2. Run [script to patch your `/etc/hosts`](https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh)
3. Make sure you are using [Red Hat proxy](http://hdn.corp.redhat.com/proxy.pac)

## Running locally
1. Install dependencies with `npm install`
2. Run development server with `npm run start:proxy`
3. Local version of the app will be available at https://stage.foo.redhat.com:1337/insights/registration

If you encounter any problems try to consult the [Troubleshooting page](https://docs.engineering.redhat.com/pages/viewpage.action?spaceKey=RHIF&title=Troubleshooting).

## Testing
[Jest](https://jestjs.io/) is used as the testing framework, although there are currently no Jest tests present. `npm run verify` will run linters and tests. Travis is used to test the build for this code.

## Deploying
The app uses containerized builds which are configured in [`app-interface`](https://gitlab.cee.redhat.com/service/app-interface/-/blob/master/data/services/insights/frontend-base/deploy.yml).

| Environment | Available at                     | Deployed version
| :---------- | :--------------------------------| :----------
| stage       | https://console.stage.redhat.com | master branch
| production  | https://console.redhat.com       | up to the commit configured in `app-interface`

## Design System
This project uses [Patternfly React](https://github.com/patternfly/patternfly-react).

## Insights Components
This app imports components from [Insights Front-end Components library](https://github.com/RedHatInsights/frontend-components). ESI tags are used to import [Insights Chrome](https://github.com/RedHatInsights/insights-chrome) which takes care of the header, sidebar, and footer. These libraries are described in the [Platform experience documentation](http://front-end-docs-insights.apps.ocp4.prod.psi.redhat.com/).
