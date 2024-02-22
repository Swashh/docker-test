import CypressJQueryChainable from '../../global';

export default class ContextMenuPage {
  protected SELECTORS = {
    CONTEXT_MENU_BOX: '#hot-spot',
  };

  public getContextMenuBox(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.CONTEXT_MENU_BOX);
  }

  public rightClickContextMenuBox(): CypressJQueryChainable {
    return this.getContextMenuBox().rightclick();
  }
}

export function stubWinAlert() {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alert');
  });
}
