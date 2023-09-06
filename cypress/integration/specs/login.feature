Feature: Standard user can login to the website

    As a standard user
    I want to login to the website
    As a locked out user
    I should not be able to login to the website

    Scenario: Standard user login
        Given I open the website
        When I enter the correct credentials and click on submit button
        Then I should see the inventory page

    Scenario: Locked out user cannot login
        Given I open the website
        When I enter the locked out user credentials and click on submit button
        Then I should see an error message