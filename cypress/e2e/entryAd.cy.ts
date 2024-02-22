/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import EntryAdPage from '../pageObject/entryAd';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const entryAdPage = new EntryAdPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Entry Ad');

    cy.url().should('include', 'entry_ad');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Entry Ad');
    commonEl.getDescription().should('contain', 'Displays an ad on page load..');
  });

  it.only('Check Entry Ad', () => {
    entryAdPage.getModalWin().should('be.visible');

    entryAdPage.clickCloseBtn();
    entryAdPage.getCloseBtn().should('not.be.visible');
    
    entryAdPage.clickRestartBtn();
    entryAdPage.getModalWin().should('be.visible');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
