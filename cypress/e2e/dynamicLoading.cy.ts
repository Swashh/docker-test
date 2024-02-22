/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import CheckboxesPage from '../pageObject/dynamicLoading';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const checkboxesPage = new CheckboxesPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Dynamic Loading');

    cy.url().should('include', 'dynamic_loading');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Dynamically Loaded Page Elements');
    commonEl
      .getDescription()
      .should('contain', "It's common to see an action get triggered that returns a result dynamically");
  });

  it.only('Check Dynamically Loaded Page Elements', () => {
    checkboxesPage.clickFirstLink();
    cy.url().should('include', 'dynamic_loading/1');

    checkboxesPage.clickStartBtn();
    checkboxesPage.getProgressBar().should('be.visible').should('not.have.css', 'display', 'none');
    checkboxesPage.getFinishText().should('exist').and('have.css', 'display', 'none');

    cy.go('back');

    checkboxesPage.clickSecondLink();
    cy.url().should('include', 'dynamic_loading/2');

    checkboxesPage.clickStartBtn();
    checkboxesPage.getProgressBar().should('not.have.css', 'display', 'none');
    checkboxesPage.getFinishText().should('be.visible');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
