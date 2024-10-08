Feature: Contact Us Form

    Scenario: User submits the contact us form
        Given the user is on the homepage
        When the user navigates to the Contact Us page
        Then the "GET IN TOUCH" header should be visible
        When the user enters their name, email, subject, and message
        And the user uploads a file
        And the user submits the form
        And the user confirms the submission
        Then a success message should be visible
        When the user clicks the Home button
        Then the user should land back on the homepage
