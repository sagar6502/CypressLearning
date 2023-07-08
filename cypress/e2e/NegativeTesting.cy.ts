import { expect } from "chai"
import cypress from "cypress"

describe('My First Test', () => {
    it('test-negative', () => {
        cy.visit("https://www.forhims.com/")

        cy.title().should('eq', 'forhims')
    })
  })