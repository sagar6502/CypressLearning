describe('My ganesh Test', () => {
    it('test-negative', () => {
        cy.visit("https://www.forhims.com/")

        cy.title().should('eq', 'forhims')
    })
  })