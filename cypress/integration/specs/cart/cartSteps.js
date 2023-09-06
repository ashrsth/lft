import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../login/loginPage'
import CartPage from './cartPage' 

Given('I login to the webiste', () => {
    cy.visit("/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.submit()
})

When('I click Add to cart button', () => {
    CartPage.addToCart()
})

Then('I should my cart populated with items', () => {
    cy.get(".shopping_cart_badge")
    .should("contain", 1)
  cy.get('[data-test="remove-sauce-labs-backpack"]')
    .should('have.text','Remove')
})