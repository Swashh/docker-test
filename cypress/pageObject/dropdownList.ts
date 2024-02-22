export function checkDropdown() {
  const selections = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
  ];

  selections.forEach((selection) => {
    cy.get('select').select(selection.value).should('have.value', selection.value);

    cy.get('select#dropdown option:selected').should('have.value', selection.value).should('have.text', selection.text);
  });
}
