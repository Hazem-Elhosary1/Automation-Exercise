import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress-file-upload';

const homepageUrl = 'https://www.automationexercise.com/';
const contactUsUrl = '/contact_us';
const contactUsButtonSelector = 'a[href="/contact_us"]';
const getInTouchSelector = 'h2:contains("Get In Touch")';
const nameInputSelector = 'input[data-qa="name"]';
const emailInputSelector = 'input[data-qa="email"]';
const subjectInputSelector = 'input[data-qa="subject"]';
const messageTextareaSelector = 'textarea[data-qa="message"]';
const fileUploadInputSelector = ':nth-child(6) > .form-control';
const submitButtonSelector = 'input[data-qa="submit-button"]';
const successMessageSelector = '.status';
const homeButtonSelector = '#form-section > .btn';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Google Maps API is required')) {
        return false;
    }
});

Given('the user is on the homepage', () => {
    cy.visit('/');
    // cy.url().should('eq', homepageUrl);
});

When('the user navigates to the Contact Us page', () => {
    cy.get(contactUsButtonSelector).click();
    cy.url().should('include', contactUsUrl);
});

Then('the "GET IN TOUCH" header should be visible', () => {
    cy.get(getInTouchSelector).should('be.visible');
});

When('the user enters their name, email, subject, and message', () => {
    cy.fixture('Data').then((data) => {
        cy.get(nameInputSelector).type(data.Name.FName);
        cy.get(emailInputSelector).type(data.Email);
        cy.get(subjectInputSelector).type('Test Subject');
        cy.get(messageTextareaSelector).type('This is a test message.');
    });
});

When('the user uploads a file', () => {
    const filePath = 'TestFile.txt';
    cy.get(fileUploadInputSelector).attachFile(filePath);
});

When('the user submits the form', () => {
    cy.get(submitButtonSelector).click();
});

When('the user confirms the submission', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Success! Your details have been submitted successfully.');
    });
});

Then('a success message should be visible', () => {
    cy.get(successMessageSelector)
        .should('be.visible')
        .and('contain.text', 'Success! Your details have been submitted successfully.');
});

When('the user clicks the Home button', () => {
    cy.get(homeButtonSelector).click();
});

Then('the user should land back on the homepage', () => {
    cy.url().should('eq', homepageUrl);
});