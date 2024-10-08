Feature: Login functionality
# Test Case 3 --> Login with indalid Data
  Scenario: Login user with incorrect email and password
    Given the user is on the login page
    When the user enters an incorrect email and password
    Then the user should see an error message indicating invalid login credentials
