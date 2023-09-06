import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../login/loginPage'
import FilterPage from './filterPage'

Given('I login to the website', () => {
    cy.visit("/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.submit()
})

When('I click on the filter Name A to Z', () => {
    FilterPage.ascendingNameSort()
})

Then('I should see items sorted in ascending order by name', () => {
    FilterPage.verifyAscendingFilterByName()
})

When('I click on the filter Name Z to A', () => {
    FilterPage.descendingNameSort()
})

Then('I should see items sorted in descending order by name', () => {
    FilterPage.verifyDescendingFilterByName()
})

When('I click on the filter Price low to high', () => {
    FilterPage.ascendingPriceSort()
})

Then('I should see items sorted in ascending order by price', () => {
    FilterPage.verifyAscendingFilterByPrice()
})

When('I click on the filter Price high to low', () => {
    FilterPage.ascendingPriceSort()
})

Then('I should see items sorted in descending order by price', () => {
    FilterPage.verifyDescendingFilterByPrice()
})