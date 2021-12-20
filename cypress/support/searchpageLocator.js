class searchpageLocator{

    searchbtn='#masthead-search-toggle';
    searchbox='[type="search"]';
    searchcontainer='#search-results-container';

    clickonSearchButton()
    {
        cy.get(this.searchbtn).click();
    }
    EnterSearchtext(_searchtext)
    {
        cy.get(this.searchbox).type(_searchtext).as('search-box')
        cy.wait(1000);
    }
    verifySearchResultDisplayed()
    {
        cy.get(this.searchcontainer).should('be.visible',true)
    }

}
export default searchpageLocator;