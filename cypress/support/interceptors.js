/* eslint-disable camelcase */
import activationKeysFixtures from '../fixtures/activationKeysFixtures.json';
import singleActivationKeyFixtures from '../fixtures/singleActivationKeyFixtures.json';

export const activationKeysInterceptors = {
    keys: (fixtures = activationKeysFixtures) => {
        cy.intercept('GET', '/api/rhsm/v2/activation_keys', {
            statusCode: 200,
            body: fixtures
        }).as('getActivationKeys');
    },
    'successful with one key': (fixtures = singleActivationKeyFixtures) => {
        cy.intercept('GET', '/api/rhsm/v2/activation_keys', {
            statusCode: 200,
            body: fixtures
        }).as('getSingleActivationKey')
    }
}
