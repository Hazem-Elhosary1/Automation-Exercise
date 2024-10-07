import { signUp, SuData } from '../../integration/sign_up/Sign_Up';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Code to take a screenshot if test case feild
// describe('Sign Up Test', () => {
//     beforeEach(() => {
//         cy.on('fail', (error) => {
//             const currentTest = Cypress.currentTest;
//             cy.screenshot(`${currentTest.title} - ${new Date().toISOString()}`, { capture: 'fullPage' });
//             throw error; 
//         });
//     });

Given("the user is on the sign-up page", () => {
    cy.visit("/signup");
});

When("the user enters valid registration details", () => {
    return SuData().then((user) => {
        signUp(
            user.Name,
            user.Email,
            user.Password,
            user.Title,
            user.Birthday,
            user.Company,
            user.Address,
            user.Country,
            user.State,
            user.City,
            user.Zipcode,
            user.Mobile_Number
        );
    });
});


Then("the user should be successfully registered", () => {
    const successMessageSelector = 'b';

    cy.get(successMessageSelector).then(($el) => {
        if ($el.length === 0) {
            cy.screenshot(`Failure - Success Message Not Found - ${new Date().toISOString()}`, { capture: 'fullPage' });
            throw new Error('Success message not found.');
        } else {
            cy.wrap($el).should('be.visible').and('contain', 'Account Created!');
        }
    });
});
//});