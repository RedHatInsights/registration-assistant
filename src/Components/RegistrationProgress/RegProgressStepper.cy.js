import RegProgessStepper from './RegProgressStepper';
import { activationKeysInterceptors } from '../../../cypress/support/interceptors';

const KEY = 'new_sat_test_key';

function selectActivationKey(key) {
  cy.contains('button', 'Select activation key').click();
  cy.contains('button', key).click();
}
function selectRadio(option) {
  cy.contains('label', option).closest('div').find('input').click();
}

describe('Rendering tests.', () => {
  beforeEach(() => {
    activationKeysInterceptors.keys();
  });

  it('First step renders correctly.', () => {
    cy.mountWithContext(RegProgessStepper);
    cy.get('body');
  });

  it('Second step renders correctly.', () => {
    cy.mountWithContext(RegProgessStepper);
    cy.get('body');
    selectActivationKey(KEY);
    cy.get('body');
  });

  it('Third step renders correctly.', () => {
    cy.mountWithContext(RegProgessStepper);
    cy.get('body');
    selectActivationKey(KEY);
    cy.get('body');
    selectRadio('RHEL 7');
    cy.get('body');
  });
});
