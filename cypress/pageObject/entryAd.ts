import CypressJQueryChainable from '../../global';

export default class EntryAdPage {
  protected SELECTORS = {
    MODAL_WIN: '.modal',
    CLOSE_BTN: '.modal-footer > p:contains(Close)',
    RESTART_BTN: '#restart-ad',
  };

  public getModalWin(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.MODAL_WIN);
  }

  public getCloseBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.CLOSE_BTN)
  }

  public clickCloseBtn(): CypressJQueryChainable {
    return this.getCloseBtn().click();
  }

  public getRestartBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.RESTART_BTN);
  }

  public clickRestartBtn(): CypressJQueryChainable {
    return this.getRestartBtn()
      .click()
      .then(() => {
        cy.reload();
      });
  }
}
