import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../login/loginPage'
import CheckoutPage from './checkoutPage'
import CartPage from '../cart/cartPage'

Given('I login to the website', () => {
    cy.visit("/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.submit()
})

When('I click Add to cart button', () => {
    CartPage.addToCart()
})

When('I click on the cart icon', () => {
    CheckoutPage.cartIcon()
})

When('I click on the checkout button', () => {
    CheckoutPage.checkoutButton()
})

When('I fill up the checkout form and continue', () => {
    CheckoutPage.fillCheckoutForm('Ashok', 'Shrestha', '44600')
})

When('I click on finish button', () => {
    CheckoutPage.finishButton()
})

Then('order should be placed successfully', () => {
    cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
      .should('be.visible')
    cy.get('[data-test="back-to-products"]')
      .should('be.visible')
      .and('have.text','Back Home')
    cy.url()
      .should("eq", "https://www.saucedemo.com/checkout-complete.html")
})