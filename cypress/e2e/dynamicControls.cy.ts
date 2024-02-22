/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import DynamicControlsPage from '../pageObject/dynamicControls';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const dynamicControlsPage = new DynamicControlsPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Dynamic Controls');

    cy.url().should('include', 'dynamic_controls');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Dynamic Controls');
    commonEl
      .getDescription()
      .should(
        'contain',
        'This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.'
      );
  });

  it.only('Check Dynamically Loaded Page Elements', () => {
    dynamicControlsPage.clickCheckbox();
    dynamicControlsPage.clickRemoveBtn();
    dynamicControlsPage.getProgressBar().should('be.visible');
    dynamicControlsPage.getProgressBar().should('not.be.visible');
    dynamicControlsPage.getFinalMsg().should('contain', "It's gone!");

    dynamicControlsPage.getInputText().should('have.attr', 'disabled');
    dynamicControlsPage.clickEnableBtn();
    dynamicControlsPage.getInputText().should('be.visible');
    dynamicControlsPage.getFinalMsg().should('contain', "It's enabled!");
    dynamicControlsPage.getInputText().should('not.have.attr', 'disabled');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
