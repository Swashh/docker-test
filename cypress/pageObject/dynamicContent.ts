export function checkDynamicalChangesImgAndText() {
  let firstImgArray = [];
  let secondImgArray = [];
  let firstTextArray = [];
  let secondTextArray = [];
  const imgSelector = '#content img';
  const textSelector = '.large-10 .large-10';

  cy.get(imgSelector)
    .then(($firstImg) => {
      firstImgArray = Array.from($firstImg, (img) => (img as HTMLImageElement).src);
    })
    .then(() => {
      cy.get(textSelector).then(($firstText) => {
        firstTextArray = Array.from($firstText, (text) => text.innerText.trim);
      });
    });

  cy.reload();

  cy.get(imgSelector)
    .then(($secondImg) => {
      secondImgArray = Array.from($secondImg, (img) => (img as HTMLImageElement).src);
    })
    .then(() => {
      cy.get(textSelector).then(($secondText) => {
        secondTextArray = Array.from($secondText, (text) => text.innerText.trim);
      });
      expect(firstImgArray).to.not.deep.equal(secondImgArray);
      expect(firstTextArray).to.not.deep.equal(secondTextArray);
    });
}
