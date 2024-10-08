Feature: Verify Test Cases Page


    Scenario: Verify the user can navigate to the Test Cases page
        Given the user is on the homepage
        When the user clicks on the "Test Cases" button
        Then the user should be navigated to the Test Cases page successfully
