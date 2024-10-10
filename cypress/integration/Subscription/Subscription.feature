Feature: Subscription in Home Page
 # Test Case 10 ----> Subscription 
    Scenario: Verify Subscription section and email subscription

        Given the user is on the homepage
        When the user scrolls down to the footer
        Then the subscription section should be visible

        When the user enters their email and clicks the arrow button
        Then the success message should be visible
