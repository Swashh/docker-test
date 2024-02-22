export function checkImgsExist() {
  cy.get('img').each(($img) => {
    cy.wrap($img).should('be.visible');
  });
}
