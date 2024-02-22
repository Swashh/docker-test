/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import CheckboxesPage from '../pageObject/checkboxes';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const checkboxesPage = new CheckboxesPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Checkboxes');

    cy.url().should('include', 'checkboxes');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Checkboxes');
  });

  it('Check checkboxes by default ', () => {
    checkboxesPage.getFirstCheckbox().should('not.be.checked');
    checkboxesPage.getSecondCheckbox().should('be.checked');
  });

  it('Check checkboxes can changes ', () => {
    checkboxesPage.checkFirstCheckbox();
    checkboxesPage.getFirstCheckbox().should('be.checked');
    checkboxesPage.checkSecondCheckbox();
    checkboxesPage.getSecondCheckbox().should('not.be.checked');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
