/* eslint-disable camelcase */
import activationKeysFixtures from '../fixtures/activationKeysFixtures.json';

export const activationKeysInterceptors = {
    keys: (fixtures = activationKeysFixtures) => {
        cy.intercept('GET', '', {
            statusCode: 200,
            body: fixtures
        }).as('getActivationKeys');
    }
}