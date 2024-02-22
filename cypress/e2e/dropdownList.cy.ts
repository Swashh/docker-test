/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import { checkDropdown } from '../pageObject/dropdownList';

describe('Check page', () => {
  const commonEl = new CommonElements();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Dropdown');

    cy.url().should('include', 'dropdown');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Dropdown List');
  });

  it('Check dropdown ', () => {
    checkDropdown();
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});

