import CypressJQueryChainable from '../../global';

export default class CheckboxesPage {
  protected SELECTORS = {
    FIRST_CHECKBOX: 'input[type=checkbox]:eq(0)',
    SECOND_CHECKBOX: 'input[type=checkbox]:eq(1)',
  };

  public getFirstCheckbox(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.FIRST_CHECKBOX);
  }

  public checkFirstCheckbox(): CypressJQueryChainable {
    return this.getFirstCheckbox().check();
  }
  public getSecondCheckbox(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.SECOND_CHECKBOX);
  }

  public checkSecondCheckbox(): CypressJQueryChainable {
    return this.getSecondCheckbox().click();
  }
}
