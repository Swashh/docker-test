/// <reference types="cypress" />

describe('Check page', () => {
  beforeEach(() => {
    cy.visitTheInternet();
  });
  it('Check A/B Testing page', () => {
    cy.clickOnLink('A/B Testing');

    cy.url().should('include', 'abtest')
  });
});
