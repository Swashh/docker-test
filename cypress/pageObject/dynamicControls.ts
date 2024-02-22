import CypressJQueryChainable from '../../global';

export default class DynamicControlsPage {
  protected SELECTORS = {
    CHECKBOX: 'input[type="checkbox"]',
    REMOVE_BTN: 'button:contains(Remove)',
    PROGRESS_BAR: '#loading',
    FINAL_MSG: '#message',
    INPUT_TEXT: '#input-example > input',
    ENABLE_BTN: 'button:contains(Enable)',
    PROGRESS_BAR_2: '#input-example > #loading',
  };

  public getCheckbox(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.CHECKBOX);
  }

  public clickCheckbox(): CypressJQueryChainable {
    return this.getCheckbox().click();
  }

  public getRemoveBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.REMOVE_BTN);
  }

  public clickRemoveBtn(): CypressJQueryChainable {
    return this.getRemoveBtn().click();
  }

  public getProgressBar(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.PROGRESS_BAR, {timeout: 15_000});
  }

  public getFinalMsg(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.FINAL_MSG, {timeout: 15_000});
  }

  public getInputText(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.INPUT_TEXT);
  }

  public getEnableBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.ENABLE_BTN);
  }

  public clickEnableBtn(): CypressJQueryChainable {
    return this.getEnableBtn().click();
  }

  public getProgressBar2(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.PROGRESS_BAR_2);
  }
}
