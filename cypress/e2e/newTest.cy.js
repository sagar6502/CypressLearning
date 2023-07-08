describe('My ganesh Test', () => {
    it('test-negative', () => {
        cy.visit("https://www.forhims.com/")
        //ganya vai
        cy.visit("Ganesh Sah")
        cy.title().should('eq', 'forhims')
    })
  })