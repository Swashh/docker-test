import CypressJQueryChainable from '../../global';

export default class AddRemoveElementsPage {
  protected SELECTORS = {
    ADD_ELEMENT_BTN: 'button:contains(Add Element)',
    DELETE_BTN: 'button.added-manually:contains(Delete)'
  };

  public getAddElementBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.ADD_ELEMENT_BTN);
  }

  public clickAddElementBtn(): CypressJQueryChainable {
    return this.getAddElementBtn().click();
  }

  public getDeleteBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.DELETE_BTN);
  }

  public clickDeleteBtn(): CypressJQueryChainable {
    return this.getDeleteBtn().click();
  }
}
