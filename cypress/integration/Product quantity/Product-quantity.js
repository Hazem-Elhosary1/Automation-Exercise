import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


const homepageUrl = 'https://www.automationexercise.com';
const productQuantity = 4;

Given('the user is on the homepage', () => {
    cy.visit(homepageUrl);
    cy.url().should('include', homepageUrl);
});

When("the user clicks on 'View Product' for any product on the homepage", () => {
    cy.get('.product-image-wrapper').first().find('a').contains('View Product').click();
});

Then('the product detail page should be visible', () => {
    cy.get('.product-information').should('be.visible');
});

When('the user increases the quantity to 4', () => {
    cy.get('input[name="quantity"]').clear().type(productQuantity);
});

When("the user clicks 'Add to cart'", () => {
    cy.get(':nth-child(5) > .btn').click({ force: true });
});

When("the user clicks 'View Cart'", () => {
    cy.get('u').contains('View Cart').click();
});

Then('the product should be displayed in the cart with quantity 4', () => {
    cy.get('button.disabled').should('have.text', '4');
});