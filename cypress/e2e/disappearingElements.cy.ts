/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import { checkGalleryBtn } from '../pageObject/disappearingElements';

describe('Check page', () => {
  const commonEl = new CommonElements();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Disappearing Elements');

    cy.url().should('include', 'disappearing_elements');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Disappearing Elements');
    commonEl
      .getDescription()
      .should(
        'contain',
        'This example demonstrates when elements on a page change by disappearing/reappearing on each page load.'
      );
  });

  it.only('Check reload Gallery btn', () => {
    checkGalleryBtn();
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
