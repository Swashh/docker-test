/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import { checkImgsExist } from '../pageObject/brokenImages';
import { downloadPng } from '../pageObject/challengingDOM';

describe('Check page', () => {
  const commonEl = new CommonElements();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Challenging DOM');

    cy.url().should('include', 'challenging_dom');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Challenging DOM');
    commonEl.getDescription().should('contain', 'The hardest part in automated web testing');
  });

  it('Check img after clicking', () => {
    const absoluteFilePath = 'smile.png';

    downloadPng(absoluteFilePath).then((filename) => {
      cy.log(`saved ${filename}`);
      cy.task('compare', { filename }).should('deep.equal', {
        match: true,
      });
    });
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
