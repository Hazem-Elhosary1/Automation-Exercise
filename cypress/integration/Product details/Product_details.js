import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homepageUrl = 'https://www.automationexercise.com';
const productsButtonSelector = 'a[href="/products"]';
const allProductsPageUrl = `${homepageUrl}/products`;
const productDetailButtonSelector = '.view-product > img';
const productNameSelector = '.product-information > h2';
const productCategorySelector = '.product-information > :nth-child(3)';
const productPriceSelector = ':nth-child(5) > span';
const productAvailabilitySelector = '.product-information > :nth-child(6)';
const productConditionSelector = '.product-information > :nth-child(7)';
const productBrandSelector = '.product-information > :nth-child(8)';

Given('the user is on the homepage', () => {
    cy.visit(homepageUrl);
});

When('the user clicks on the "Products" button', () => {
    cy.get(productsButtonSelector).click();
});

Then('the user should be navigated to the ALL PRODUCTS page successfully', () => {
    cy.url().should('eq', allProductsPageUrl);
    cy.get('.title').should('contain', 'All Products');
});

Then('the products list is visible', () => {
    cy.get('.col-sm-9').should('be.visible');
});

When('the user clicks on "View Product" of the first product', () => {
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
});

Then('the user is landed on the product detail page', () => {
    cy.url().should('include', '/product_details');
});

Then('the product details are visible', () => {
    cy.get(productNameSelector).should('be.visible');
    cy.get(productCategorySelector).should('be.visible');
    cy.get(productPriceSelector).should('be.visible');
    cy.get(productDetailButtonSelector).should('be.visible');
    cy.get(productAvailabilitySelector).should('be.visible');
    cy.get(productConditionSelector).should('be.visible');
    cy.get(productBrandSelector).should('be.visible');
});