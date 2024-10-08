Feature: User Registration
#Test Case 5 --> Register with an existing email

    Scenario: Register with an existing email
        Given the user navigates to the sign-up page
        When the user enters registration details with an existing email
        Then the user should see an error message indicating the email is already in use
