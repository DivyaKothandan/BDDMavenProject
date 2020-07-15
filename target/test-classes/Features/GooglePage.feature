Feature: Validate Google page

@Google
Scenario: Validate the Google home page
Given Launch Browser
When Launch Google Application
Then Validate Google Home page
And Quit Browser

@GoogleSearch
Scenario Outline: Validate Google Search Functionality
Given Launch Browser
When Launch Google Application
Then Enter <SearchTerm>
And Validate Google search results page
And Quit Browser

Examples:
|SearchTerm|
|Selenium|
|Java|
|Testng|
|Cucumber|


@Google
Scenario: Validate the Gmail Page
Given Launch Browser
When Launch Google Application
Then Validate gmail page
And Quit Browser