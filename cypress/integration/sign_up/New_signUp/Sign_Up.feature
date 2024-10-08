Feature: User Registration
#Test case 1 (Create New User)
  Scenario: Valid user registration
    Given the user is on the sign-up page
    When the user enters valid registration details
    Then the user should be successfully registered
