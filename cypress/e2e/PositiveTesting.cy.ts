import { expect } from "chai"
import cypress from "cypress"

describe('My First Test', () => {
    it('test-positive', () => {
        cy.visit("https://www.forhims.com/")
        //ganesh working
        cy.title().should('eq', 'Telehealth for a healthy, handsome you | hims')
    })
  })