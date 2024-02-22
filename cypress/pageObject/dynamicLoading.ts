import CypressJQueryChainable from '../../global';

export default class CheckboxesPage {
  protected SELECTORS = {
    FIRST_LINK: 'a[href="/dynamic_loading/1"]',
    SECOND_LINK: 'a[href="/dynamic_loading/2"]',
    START_BTN: 'button:contains(Start)',
    LOADING_PROGRESS_BAR: '#loading',
    FINISH_EL: '#finish',
  };

  public getFirstLink(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.FIRST_LINK);
  }

  public clickFirstLink(): CypressJQueryChainable {
    return this.getFirstLink().click();
  }

  public getSecondLink(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.SECOND_LINK);
  }

  public clickSecondLink(): CypressJQueryChainable {
    return this.getSecondLink().click();
  }

  public getStartBtn(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.START_BTN);
  }

  public clickStartBtn(): CypressJQueryChainable {
    return this.getStartBtn().click();
  }

  public getProgressBar(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.LOADING_PROGRESS_BAR);
  }

  public getFinishText(): CypressJQueryChainable {
    return cy.get(this.SELECTORS.FINISH_EL, {timeout: 15_000});
  }
}
