/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import { checkDynamicalChangesImgAndText } from '../pageObject/dynamicContent';

describe('Check page', () => {
  const commonEl = new CommonElements();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Dynamic Content');

    cy.url().should('include', 'dynamic_content');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Dynamic Content');
    commonEl
      .getDescription()
      .should(
        'contain',
        'This example demonstrates the ever-evolving nature of content by loading new text and images on each page refresh.'
      );
  });

  it.only('Check dropdown ', () => {
    checkDynamicalChangesImgAndText()
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
