/// <reference types="cypress" />

export function SuData() {
    return cy.fixture('Data').then((user) => {
        return user;
    });
}

export function signUp(Name, Email, Password, Title, Birthday, Company, Address, Country, State, City, Zipcode, Mobile_Number) {
    const Url = "/signup";
    const NameInput = "input[type='text']";
    const EmailInput = "input[type='email']:nth-child(3)";
    const SubmitBtn = "button.btn.btn-default:nth-child(5)";
    const PasswordInput = "input[type='password']";
    const TitleMale = "input#id_gender1";
    const TitleFemale = "input#id_gender2";
    const bDays = "select#days.form-control";
    const bMonth = "select#months.form-control";
    const bYears = "select#years.form-control";
    const fName = "input#first_name.form-control";
    const lName = "input#last_name.form-control";
    const cName = "input#company.form-control";
    const address = "input#address1.form-control";
    const country = "select#country.form-control";
    const state = "input#state.form-control";
    const city = "input#city.form-control";
    const zipCode = "input#zipcode.form-control";
    const mobile_number = "input#mobile_number.form-control";
    const SubmitCreateBtn = "[data-qa='create-account']";
    //const continueBtn = "data-qa='continue-button'"
    const deleteAccountBtn = '/delete_account'

    cy.visit(Url);
    cy.get(NameInput).type(Name.FName);
    cy.get(EmailInput).type(Email);
    cy.get(SubmitBtn).click();
    if (Title === "Mr.") {
        cy.get(TitleMale).click();
    } else if (Title === "Mrs.") {
        cy.get(TitleFemale).click();
    }
    cy.get(PasswordInput).type(Password);
    cy.get(bDays).select(Birthday.Day);
    cy.get(bMonth).select(Birthday.Month);
    cy.get(bYears).select(Birthday.Year);
    cy.get(fName).type(Name.First_Name);
    cy.get(lName).type(Name.Last_Name);
    cy.get(cName).type(Company);
    cy.get(address).type(Address);
    cy.get(country).select(Country);
    cy.get(state).type(State);
    cy.get(city).type(City);
    cy.get(zipCode).type(Zipcode);
    cy.get(mobile_number).type(Mobile_Number);
    cy.screenshot();
    cy.get(SubmitCreateBtn).click()
    cy.screenshot();
    // cy.get('b').should('be.visible').and('contain', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();

}