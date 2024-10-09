import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homepageUrl = 'https://www.automationexercise.com/';
const productsButtonSelector = 'a[href="/products"]';
const allProductsPageUrl = `${ homepageUrl }products`;
const searchInputSelector = '#search_product';
const searchButtonSelector = '#submit_search';
const searchedProductsTitleSelector = 'h2.title.text-center';
const productListSelector = '.features_items';
const productName = ' .product-image-wrapper > .single-products > .productinfo > p';

Given('the user is on the homepage', () => {
    cy.visit(homepageUrl);
});

Then('the homepage is visible successfully', () => {
    cy.url().should('eq', homepageUrl);
    cy.get('.shop-menu > .nav').should('be.visible');
});

When('the user clicks on the "Products" button', () => {
    cy.get(productsButtonSelector).click();
});

Then('the user is navigated to the ALL PRODUCTS page successfully', () => {
    cy.url().should('eq', allProductsPageUrl);
    cy.get('.title').should('contain', 'Products');
});

When('the user enters {string} in the search input and clicks search button', (productName) => {
    cy.get(searchInputSelector).type(productName);
    cy.get(searchButtonSelector).click();
});

Then('the "SEARCHED PRODUCTS" title is visible', () => {
    cy.get(searchedProductsTitleSelector).should('be.visible').and('contain', 'Searched Products');
});


Then('all the products related to search are visible', () => {
    cy.get('.product-image-wrapper > .single-products > .productinfo > p')
        .should('be.visible')
        .and('not.be.empty')
        .and('contain.text', 'Dress');
});