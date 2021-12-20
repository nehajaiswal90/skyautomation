import { Given } from "cypress-cucumber-preprocessor/steps";
//<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import dealsPageLocator from "../../support/dealsPageLocator"

const dealsPageLocatorObj = new dealsPageLocator();
Given('user launch browser with {string} viewport', (browserViewport) => {
    cy.viewport(browserViewport);
})
Given('I am on the home page', () => {

    dealsPageLocatorObj.launchURL();
    dealsPageLocatorObj.agreeConsent();
})