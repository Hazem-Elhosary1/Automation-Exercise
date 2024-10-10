import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homepageUrl = '/';
const cartButtonSelector = '.shop-menu a[href="/view_cart"]';
const subscriptionTextSelector = 'h2:contains("Subscription")';
const emailInputSelector = '#susbscribe_email';
const arrowButtonSelector = '#subscribe';
const successMessageSelector = '.alert-success';

Given('the user is on the homepage', () => {
    cy.visit(homepageUrl);
    // cy.url().should('eq', homepageUrl);
});

When('the user clicks the Cart button', () => {
    cy.get(cartButtonSelector).click();
});

Then('the user should be on the cart page', () => {
    cy.url().should('include', '/view_cart');
});

When('the user scrolls down to the footer', () => {
    cy.scrollTo('bottom');
});

Then('the subscription section should be visible', () => {
    cy.get(subscriptionTextSelector).should('be.visible');
});

When('the user enters their email and clicks the arrow button', () => {
    cy.fixture('Data').then((user) => {
        cy.get(emailInputSelector).type(user.Email);
    });
    cy.get(arrowButtonSelector).click();
});

Then('the success message should be visible', () => {
    cy.get(successMessageSelector)
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!');
});