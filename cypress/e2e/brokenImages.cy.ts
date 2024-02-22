/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import AddRemoveElementsPage from '../pageObject/addRemoveElements';
import { checkImgsExist } from '../pageObject/brokenImages';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const addRemoveElementsPage = new AddRemoveElementsPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Broken Images');

    cy.url().should('include', 'broken_images');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Broken Images');
  });

  it('Check imgs exist', () => {
    checkImgsExist()
  });
  
  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
