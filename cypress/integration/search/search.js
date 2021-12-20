import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"
//<reference types="cypress"/>
import searchpageLocator from "../../support/searchpageLocator"
const searchpageLocatorObj = new searchpageLocator();

When('I search {string} in the search bar',(searchText)=>
{
    searchpageLocatorObj.clickonSearchButton();
    searchpageLocatorObj.EnterSearchtext(searchText);
    
})
Then('I should see an editorial section',()=>
{
    searchpageLocatorObj.verifySearchResultDisplayed();
})