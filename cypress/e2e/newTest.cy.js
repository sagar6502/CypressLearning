describe('My ganesh Test', () => {
    it('test-negative', () => {
        cy.visit("https://www.forhims.com/")
        //sagar vai
        cy.visit("Sagar Sunar")
        cy.title().should('eq', 'forhims')
    })
  })