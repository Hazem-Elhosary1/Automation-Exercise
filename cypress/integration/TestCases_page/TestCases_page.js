import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const testCasesButtonSelector = '.shop-menu > .nav > :nth-child(5) > a';
const homepageUrl = 'https://www.automationexercise.com';

Given('the user is on the homepage', () => {
    cy.visit(homepageUrl);
});

When('the user clicks on the "Test Cases" button', () => {
    cy.get(testCasesButtonSelector).click();
});

Then('the user should be navigated to the Test Cases page successfully', () => {
    cy.url().should('include', '/test_cases');
    cy.get('b').should('contain', 'Test Cases');
});