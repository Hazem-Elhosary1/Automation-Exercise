Feature: Logout functionality
#Test case 4 --> Logout Test Case
  Scenario: User logs out successfully
    Given the user is logged in
    When the user clicks the logout button
    Then the user should be logged out successfully
