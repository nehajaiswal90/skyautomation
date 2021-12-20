class dealsPageLocator {

    iframeID = "iframe[id='sp_message_iframe_474555']";
    agreeConsentBtn = "button[title='Agree']"
    dealsLink = ":nth-child(6) > .nav-item-group > .nav-item-group-ctas > .nav-item-link:visible";
    signInlink = ".user-menu-wrapper > .tab-focus";
    signInframeId = "[title='iFrame containing Sky Sign-In application']";
    usernameId = "#username"
    continuebtn = '[data-testid="AUTHN__SUBMIT_BTN"]';
    SigninHeader = '[id="app-component"] h1'
    dealsList = "[class='row__Row-sc-1jxft5v-0 OZmkL'] div[id]"
    dealsName = "p:nth-child(1)"
    dealsPrice = "span[id]:nth-child(1)"

    //////////////
    launchURL() {
        cy.visit(Cypress.env("url"));
    }

    agreeConsent() {
        cy.iframe(this.iframeID).find(this.agreeConsentBtn).eq(0).click();
    }
    clickDealsLink(button) {
        cy.get(this.dealsLink).click();
    }
    clickSignIn() {
        cy.get(this.signInlink).click()
    }
    enterUsername() {
        cy.iframe(this.signInframeId).find(this.usernameId).eq(0).type("abc@b.com")
    }
    clickContinuebtn() {
        return cy.iframe(this.signInframeId).find(this.continuebtn).click();
    }
    getHeaderofSignInFrame() {
        return cy.iframe(this.signInframeId).find(this.SigninHeader)
    }
    verifydealslistandprice() {
        cy.get(this.dealsList).each(($el, index) => {
            const deals = $el.find(this.dealsName).text()
            const price = $el.find(this.dealsPrice).text().split(', ')[1];

            cy.log(deals);
            cy.log(price);
            switch (deals) {
                case 'Ultimate TV':
                    expect(price).equals('£26');
                    break;
                case 'Sky TV & Sky Sports':
                    expect(price).equals('£41');
                    break;
                case 'Sky TV, Netflix & Cinema':
                    expect(price).equals('£37');
                    break;
                case 'Sky Sports & BT Sport':
                    expect(price).equals('£65');
                    break;
                case 'Sky TV & Kids':
                    expect(price).equals('£31');
                    break;
                case 'Build your own package':
                    expect(price).equals('£26');
                    break;

            }

        })

    }

}
export default dealsPageLocator;