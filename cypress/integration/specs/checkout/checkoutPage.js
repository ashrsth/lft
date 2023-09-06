const CART_ICON = '.shopping_cart_badge'
const CHECKOUT_BUTTON = '[data-test="checkout"]'
const FINISH_BUTTON = '[data-test="finish"]'

class CheckoutPage{
    static cartIcon() {
        cy.get(CART_ICON).click()
    }
    
    static checkoutButton() {
        cy.get(CHECKOUT_BUTTON).click()
    }

    static fillCheckoutForm(firstname, lastname, zipcode) {
        cy.get('[data-test="firstName"]').type(firstname);
        cy.get('[data-test="lastName"]').type(lastname);
        cy.get('[data-test="postalCode"]').type(zipcode);
        cy.get('[data-test="continue"]').click();
    }

    static finishButton() {
        cy.get(FINISH_BUTTON).click()
    }}

export default CheckoutPage