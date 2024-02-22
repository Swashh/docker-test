/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import AbTestPage from '../pageObject/abTestPage';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const abTestPage = new AbTestPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('A/B Testing');

    cy.url().should('include', 'abtest');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should(($h3) => {
      const text = $h3.text();
      expect(text).to.match(/A\/B Test Variation 1|A\/B Test Control/);
    });

    commonEl.getDescription().should('contain', 'Also known as split testing');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
