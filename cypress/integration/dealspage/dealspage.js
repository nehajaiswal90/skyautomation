import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
//<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import dealsPageLocator from "../../support/dealsPageLocator"

const dealsPageLocatorObj = new dealsPageLocator();


When('I navigate to {string}', (button) => {
   dealsPageLocatorObj.clickDealsLink(button);
   
})

Then('the user should be on the {string} page', (link) => {
    cy.url().should('eq', link);

}
)
When('I try to sign in with invalid credentials', () => {
    
    dealsPageLocatorObj.clickSignIn();
    dealsPageLocatorObj.agreeConsent();
        cy.wait(2000);
    dealsPageLocatorObj.enterUsername();
    dealsPageLocatorObj.clickContinuebtn();
       cy.wait(1000);
})
Then('I should see a box with the text {string}', (title) => {
    dealsPageLocatorObj.getHeaderofSignInFrame().invoke('text').then((text) => {
        expect(text).equal(title)
    })
})
Given('I am on the {string} page', (page) => {
    cy.visit(Cypress.env("url") + page);
    dealsPageLocatorObj.agreeConsent();
    
})
Then('I see a list of deals with a price to it', () => {
        dealsPageLocatorObj.verifydealslistandprice();
})

