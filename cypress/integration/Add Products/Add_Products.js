import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const productButtonSelector = '[href="/products"]';
const productSelector = '.product-image-wrapper';
const addToCartButton = '.add-to-cart';
const continueShoppingButton = '.btn-success';
const viewCartButton = '[href="/view_cart"]';
const cartProductSelector = '.cart_info .cart_description';
const cartProductPriceSelector = '.cart_info .cart_price';
const cartProductQtySelector = '.cart_info .cart_quantity';
const cartProductTotalSelector = '.cart_info .cart_total';

Given('the user is on the homepage', () => {
    cy.visit('/');
});

Then('the homepage is visible successfully', () => {
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('be.visible');
});

When('the user clicks the Products button', () => {
    cy.get(productButtonSelector).click();
});

Then('the user should be navigated to the ALL PRODUCTS page', () => {
    cy.get('.title.text-center').should('contain.text', 'All Products');
});

When('the user adds the first product to the cart', () => {
    cy.get('.product-image-wrapper').first().trigger('mouseover'); // Hover over the first product
    cy.get('.add-to-cart').first().scrollIntoView().click(); // Scroll into view and click the Add to Cart button
    cy.get('.btn-success').click(); // Click the Continue Shopping button
});

When('the user adds the second product to the cart', () => {
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover'); // Hover over the second product
    cy.get('.add-to-cart').eq(1).scrollIntoView().click(); // Scroll into view and click the Add to Cart button
});

When('the user views the cart', () => {
    cy.get(viewCartButton).click();
});

Then('both products are added to the Cart', () => {
    cy.get(cartProductSelector).should('have.length', 2);
});

Then('the user verifies the products prices, quantity, and total price', () => {
    cy.get(cartProductPriceSelector).should('be.visible');
    cy.get(cartProductQtySelector).should('be.visible');
    cy.get(cartProductTotalSelector).should('be.visible');
});