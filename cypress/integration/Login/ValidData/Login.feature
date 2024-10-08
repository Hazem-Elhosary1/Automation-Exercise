Feature: User Login

# Login Using User Are created
  Scenario: User logs in with valid credentials
    Given the user is on the login page
    When the user enters their email and password
    Then the user should be successfully logged in
