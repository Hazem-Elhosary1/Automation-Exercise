import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const signUpUrl = '/login';
const errorMessageSelector = '.signup-form > form > p';

Given('the user navigates to the sign-up page', () => {
    cy.visit(signUpUrl);
});

When('the user enters registration details with an existing email', () => {
    cy.fixture('Data').then((user) => {
        cy.get('[data-qa="signup-name"]').type(user.Name.FName);
        cy.get("input[type='email']:nth-child(3)").type(user.Email);
        cy.get("button.btn.btn-default:nth-child(5)").click();


    });
});

Then('the user should see an error message indicating the email is already in use', () => {
    cy.get(errorMessageSelector)
        .should('be.visible')
        .and('contain.text', 'Email Address already exist!');
});