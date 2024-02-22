Cypress.Commands.add('visitTheInternet', () => {
  const baseUrl = Cypress.config('baseUrl');
  const blockReq = 'http://298279967.log.optimizely.com/**';

  cy.intercept('GET', blockReq, { statusCode: 404, log: false }).as('blockedRequest');

  cy.visit(baseUrl);
  cy.url().should('include', 'http://the-internet.herokuapp.com/');

  cy.get('h1').should('contain', 'Welcome to the-internet');
  cy.get('h2').should('contain', 'Available Examples');
});

Cypress.Commands.add('clickOnLink', (nameLink) => {
  cy.get('ul>li>a').contains(nameLink).click();
});

