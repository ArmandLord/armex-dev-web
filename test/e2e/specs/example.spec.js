describe('prueba', () => {
  const url = 'localhost:3000'
  it('prueba', () => {
    cy.visit(`${url}/`);
    cy.get('#button').should('exist');
  })
})