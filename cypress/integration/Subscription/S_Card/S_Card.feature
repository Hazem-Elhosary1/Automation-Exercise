Feature: Subscription in Cart Page

    Scenario: Verify Subscription section and email subscription on cart page

        Given the user is on the homepage
        When the user clicks the Cart button
        Then the user should be on the cart page

        When the user scrolls down to the footer
        Then the subscription section should be visible

        When the user enters their email and clicks the arrow button
        Then the success message should be visible
