describe('My ganesh Test', () => {
    it('test-negative', () => {
        cy.visit("https://www.forhims.com/")
<<<<<<< HEAD
        //sagar vai
        cy.visit("Sagar Sunar")
=======
        //ganya vai
        cy.visit("Ganesh Sah")
>>>>>>> d9b85ba33fc980596c1f688ba7a5a7b9b123cf2d
        cy.title().should('eq', 'forhims')
    })
  })