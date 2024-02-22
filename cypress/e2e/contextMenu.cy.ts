/// <reference types="cypress" />
import CommonElements from '../pageObject/common';
import ContextMenuPage from '../pageObject/contextMenu';
import { stubWinAlert } from '../pageObject/contextMenu';

describe('Check page', () => {
  const commonEl = new CommonElements();
  const contextMenuPage = new ContextMenuPage();

  beforeEach(() => {
    cy.visitTheInternet();
    cy.clickOnLink('Context Menu');

    cy.url().should('include', 'context_menu');
  });

  it('Check text h3 and description exist', () => {
    commonEl.getH3Element().should('contain', 'Context Menu');
    commonEl
      .getDescription()
      .should('contain', 'Context menu items are custom additions that appear in the right-click menu.');
  });

  it('Check checkboxes by default ', () => {
    stubWinAlert();
    contextMenuPage.rightClickContextMenuBox();
    cy.get('@alert').should('have.been.calledOnce', 'You selected a context menu');
  });

  it('Check link  Elemental Selenium', () => {
    commonEl.checkElementalSeleniumBtn();
  });
});
