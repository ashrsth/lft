Feature: Users can filter items

    As a standard user
    I want to filter items

    Scenario: User can filter items by name in ascending order
        Given I login to the website
        When I click on the filter Name A to Z
        Then I should see items sorted in ascending order by name

    Scenario: User can filter items by name in descending order
        Given I login to the website
        When I click on the filter Name Z to A
        Then I should see items sorted in descending order by name

    Scenario: User can filter items by price in ascending order
        Given I login to the website
        When I click on the filter Price low to high
        Then I should see items sorted in ascending order by price

    Scenario: User can filter items by price in descending order
        Given I login to the website
        When I click on the filter Price high to low
        Then I should see items sorted in descending order by price