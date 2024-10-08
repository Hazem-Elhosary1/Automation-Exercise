import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const logoutButtonSelector = '.shop-menu > .nav > :nth-child(4) > a';
const loginPageUrl = '/login';
const successMessageSelector = 'b';

Given('the user is logged in', () => {
    cy.visit('/login');

    cy.fixture('Data').then((user) => {
        cy.get('[data-qa="login-email"]').type(user.Email);
        cy.get('input[type="password"]').type(user.Password);
        cy.get('[data-qa="login-button"]').click();

        const fullName = user.Name.FName;
        cy.get(successMessageSelector)
            .should('be.visible')
            .and('contain', fullName);
    });
});

When('the user clicks the logout button', () => {
    cy.get(logoutButtonSelector).click();
});

Then('the user should be logged out successfully', () => {
    cy.url().should('include', loginPageUrl);
    cy.get('h2').should('contain', 'Login to your account');
});