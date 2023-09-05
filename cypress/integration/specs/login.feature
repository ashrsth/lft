Feature: Standard user can login to the website

    As a standard user
    I want to login to the website

    Scenario: Standard user valid login
        Given I open the website
        When I enter the correct credentials and submit
        Then I should see the inventory page