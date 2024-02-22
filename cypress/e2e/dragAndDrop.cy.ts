/// <reference types="cypress" />
import CommonElements from '../pageObject/common';

describe('Check page', () => {
  const commonEl = new CommonElements();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Drag and Drop');

    cy.url().should('include', 'drag_and_drop');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Drag and Drop');
  });

  it.only('Check checkboxes can changes ', () => {
    const dataTransfer = new DataTransfer();

    cy.contains('A').trigger('dragstart', { dataTransfer });
    cy.contains('B').trigger('drop', { dataTransfer });
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
