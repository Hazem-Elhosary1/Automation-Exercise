import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginPageUrl = '/login';
const emailInputSelector = "[data-qa='login-email']";
const passwordInputSelector = 'input[type="password"]';
const loginButtonSelector = '[data-qa="login-button"]';
const successMessageSelector = 'b';
const deleteAccountBtn = '/delete_account'


Given('the user is on the login page', () => {
    cy.visit(loginPageUrl);
});

When('the user enters their email and password', () => {
    cy.fixture('Data').then((user) => {
        cy.get(emailInputSelector).type(user.Email);
        cy.get(passwordInputSelector).type(user.Password);
        cy.get(loginButtonSelector).click();
    });
});

Then('the user should be successfully logged in', () => {
    cy.fixture('Data').then((user) => {
        const fullName = user.Name.FName;

        console.log(user);
        cy.get(successMessageSelector)
            .should('be.visible')
            .and('contain', fullName);
        cy.screenshot();
        cy.visit(deleteAccountBtn)
        const deleteMessageSelector = 'b';

        cy.get(deleteMessageSelector).then(($el) => {
            if ($el.length === 0) {
                cy.screenshot(`Failure - Success Message Not Found - ${new Date().toISOString()}`, { capture: 'fullPage' });
                throw new Error('Success message not found.');
            } else {
                cy.wrap($el).should('be.visible').and('contain', 'Account Deleted!');
            }
        });


    });

});