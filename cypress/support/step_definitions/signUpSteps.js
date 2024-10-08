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
    const deleteAccountBtn = '/delete_account'

    cy.fixture('Data').then((user) => {
        const fullName = user.Name.FName;

        console.log(user);
        cy.get(successMessageSelector)
            .should('be.visible')
            .and('contain', fullName);
        cy.screenshot();
        cy.visit(deleteAccountBtn)
    cy.get('b').should('be.visible').and('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
        
    });
});
