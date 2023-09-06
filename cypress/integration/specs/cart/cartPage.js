const ADD_TO_CART_BUTTON = '[data-test="add-to-cart-sauce-labs-backpack"]' 
const SHOPPING_CART_BADGE = '.shopping_cart_badge' 
const REMOVE_BUTTON = '[data-test="remove-sauce-labs-backpack"]' 

class CartPage{
    static addToCart() {
        cy.get(ADD_TO_CART_BUTTON).click()
    }

    static shoppingCartBadge() {
        cy.get(SHOPPING_CART_BADGE)
    }

    static removeButton() {
        cy.get(REMOVE_BUTTON)
    }
}

export default CartPage