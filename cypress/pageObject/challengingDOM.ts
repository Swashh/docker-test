import CypressJQueryChainable from '../../global';

export default class AddRemoveElementsPage {
  protected SELECTORS = {
    ADD_ELEMENT_BTN: 'button:contains(Add Element)',
    DELETE_BTN: 'button.added-manually:contains(Delete)',
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
const absoluteFilePath = 'smile.png';

export const downloadPng = (filename: any) => {
  expect(filename).to.be.a('string');

  return cy.get('canvas').then(($canvas) => {
    const url = $canvas[0].toDataURL();
    const data = url.replace(/^data:image\/png;base64,/, '');
    cy.writeFile(absoluteFilePath, data, 'base64');
    cy.wrap(filename);
  });
};
