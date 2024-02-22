/// <reference types="cypress" />
import CypressJQueryChainable from '../../global';

export default class CommonElements {
  protected SELECTORS = {
    H3: 'h3',
    ELEMENTAL_SELENIUM_BTN: 'a[target="_blank"]',
    DESCRIPTIONS: '.example > p',
  };

  public getH3Element(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.H3);
  }

  public checkElementalSeleniumBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.ELEMENTAL_SELENIUM_BTN).then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200);
    });
  }

  public getDescription(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.DESCRIPTIONS);
  }
}
