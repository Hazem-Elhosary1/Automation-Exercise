import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginPageUrl = '/login';
const emailInputSelector = "[data-qa='login-email']";
const passwordInputSelector = 'input[type="password"]';
const loginButtonSelector = '[data-qa="login-button"]';
const errorMessageSelector = '.login-form > form > p';

Given('the user is on the login page', () => {
    cy.visit(loginPageUrl);
});

When('the user enters an incorrect email and password', () => {
    cy.get(emailInputSelector).type('incorrect_Hazem@Gmail.com');
    cy.get(passwordInputSelector).type('HazEm-54561554');
    cy.get(loginButtonSelector).click();
});

Then('the user should see an error message indicating invalid login credentials', () => {
    cy.get(errorMessageSelector)
        .should('be.visible')
        .and('contain.text', 'Your email or password is incorrect!');
});