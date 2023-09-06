Feature: Standard user can perform a checkout

    As a standard user
    I want to checkout items

    Scenario: Standard user can checkout items
        Given I login to the website
        When I click Add to cart button
        When I click on the cart icon
        When I click on the checkout button
        When I fill up the checkout form and continue
        When I click on finish button
        Then order should be placed successfully
