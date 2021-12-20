Feature: This feature will make sure that the shop page is navigable and usable.
    Background:
        Given user launch browser with "macbook-13" viewport
    Scenario: User navigates to shop page

        And I am on the home page
        When I navigate to "Deals"
        Then the user should be on the "https://www.sky.com/deals" page


    Scenario: User sees tiles on the shop page
        And I am on the home page
        When I try to sign in with invalid credentials
        Then I should see a box with the text "Create your My Sky password"

    Scenario: User sees a list of deals on the deals page
        And I am on the "deals" page
        Then I see a list of deals with a price to it