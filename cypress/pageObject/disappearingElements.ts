export function stubWinAlert() {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alert');
  });
}

export function checkGalleryBtn() {
  const listBtns = 'ul > li > a';

  cy.get(listBtns).then((allBtns) => {
    if (allBtns.length === 4) {
      cy.reload();
      checkGalleryBtn();
    } else {
      cy.contains(listBtns, 'Gallery').should('be.visible');
    }
  });
}
