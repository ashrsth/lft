Feature: Users can filter items

    As a standard user
    I want to filter items

    Scenario: User can filter items
        Given I login to the website
        When I click on the filter Name A to Z
        Then I should see items sorted in ascending order by name
        When I click on the filter Name Z to A
        Then I should see items sorted in descending order by name
        When I click on the filter Price low to high
        Then I should see items sorted in ascending order by price
        When I click on the filter Price high to low
        Then I should see items sorted in descending order by price