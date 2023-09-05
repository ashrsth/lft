import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the website', () => {
    cy.visit("/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
})

When('I enter the correct credentials and submit', () => {
    cy.get('[data-test="username"]').type('standard-user')
    cy.get('[data-test="password"]').type('secret-sauce')
    cy.get('[data-test="login-button"]').click()
})

Then('I should see the inventory page', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})