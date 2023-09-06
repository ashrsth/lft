import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open the website', () => {
    cy.visit("/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
})

When('I enter the correct credentials and click on submit button', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.submit()
})

Then('I should see the inventory page', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

When('I enter the locked out user credentials and click on submit button', () => {
    LoginPage.typeUsername('locked_out_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.submit()
})

Then('I should see an error message', () => {
    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text','Epic sadface: Sorry, this user has been locked out.')
})