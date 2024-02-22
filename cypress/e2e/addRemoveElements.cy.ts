/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import AddRemoveElementsPage from '../pageObject/addRemoveElements';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const addRemoveElementsPage = new AddRemoveElementsPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Basic Auth');

    cy.url().should('include', 'add_remove_elements');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Add/Remove Elements');
  });

  it('Check click on Add/Remove Elements btn', () => {
    addRemoveElementsPage.clickAddElementBtn();
    addRemoveElementsPage.getDeleteBtn().should('be.visible');

    addRemoveElementsPage.clickDeleteBtn();
    addRemoveElementsPage.getDeleteBtn().should('not.exist');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
