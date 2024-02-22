import CypressJQueryChainable from '../../global';

export default class AbTestPage {
  protected SELECTORS = {
    DESCRIPTIONS: '.example > p',
  };

  public getDescriptionABtest(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.DESCRIPTIONS);
  }
}
