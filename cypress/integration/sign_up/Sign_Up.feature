Feature: User Registration

  Scenario: Valid user registration
    Given the user is on the sign-up page
    When the user enters valid registration details
    Then the user should be successfully registered
