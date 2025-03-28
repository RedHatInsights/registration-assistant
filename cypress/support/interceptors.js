/* eslint-disable camelcase */
import activationKeysFixtures from '../fixtures/activationKeysFixtures.json';
import singleActivationKeyFixtures from '../fixtures/singleActivationKeyFixtures.json';

export const activationKeysInterceptors = {
    keys: (fixtures = activationKeysFixtures) => {
        cy.intercept('GET', '', {
            statusCode: 200,
            body: fixtures
        }).as('getActivationKeys');
    }
}

export const singleActivationKeyInterceptor = {
    keys: (fixtures = singleActivationKeyFixtures) => {
        cy.intercept('GET', '', {
            statusCode: 200,
            body: fixtures
        }).as('getSingleActivationKey');
    } 
}