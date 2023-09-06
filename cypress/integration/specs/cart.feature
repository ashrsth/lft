Feature: Standard user can add items to the cart

    As a standard user
    I want to add items to the cart

    Scenario: Standard user can add items to the cart
        Given I login to the webiste
        When I click Add to cart button
        Then I should my cart populated with items