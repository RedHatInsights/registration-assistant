import RegProgessStepper from '../RegProgressStepper';

describe('Rendering tests.', () => {
  it('First step renders correctly.', () => {
    cy.mountWithContext(RegProgessStepper);
    cy.get('body');
  });
});
