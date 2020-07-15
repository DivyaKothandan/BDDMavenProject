$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GooglePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Google page",
  "description": "",
  "id": "validate-google-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate the Google home page",
  "description": "",
  "id": "validate-google-page;validate-the-google-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Google"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate Google Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 8291221800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 1064452200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.validateGooglePage()"
});
formatter.result({
  "duration": 6738800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 680218500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validate Google Search Functionality",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter \u003cSearchTerm\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Google search results page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality;",
  "rows": [
    {
      "cells": [
        "SearchTerm"
      ],
      "line": 19,
      "id": "validate-google-page;validate-google-search-functionality;;1"
    },
    {
      "cells": [
        "Selenium"
      ],
      "line": 20,
      "id": "validate-google-page;validate-google-search-functionality;;2"
    },
    {
      "cells": [
        "Java"
      ],
      "line": 21,
      "id": "validate-google-page;validate-google-search-functionality;;3"
    },
    {
      "cells": [
        "Testng"
      ],
      "line": 22,
      "id": "validate-google-page;validate-google-search-functionality;;4"
    },
    {
      "cells": [
        "Cucumber"
      ],
      "line": 23,
      "id": "validate-google-page;validate-google-search-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Validate Google Search Functionality",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Selenium",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Google search results page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 5443736700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 826207301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 6
    }
  ],
  "location": "GoogleSteps.enterSearchTerm(String)"
});
formatter.result({
  "duration": 2842403200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.searchResultsPage()"
});
formatter.result({
  "duration": 10209501,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 774568600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate Google Search Functionality",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Java",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Google search results page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 5868372000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 778305801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 6
    }
  ],
  "location": "GoogleSteps.enterSearchTerm(String)"
});
formatter.result({
  "duration": 3647260000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.searchResultsPage()"
});
formatter.result({
  "duration": 8897100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 1420878001,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate Google Search Functionality",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Testng",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Google search results page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 5418783701,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 870950100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testng",
      "offset": 6
    }
  ],
  "location": "GoogleSteps.enterSearchTerm(String)"
});
formatter.result({
  "duration": 1521206300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.searchResultsPage()"
});
formatter.result({
  "duration": 7857400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 627564799,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate Google Search Functionality",
  "description": "",
  "id": "validate-google-page;validate-google-search-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Cucumber",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Google search results page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 7403819800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 974531500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 6
    }
  ],
  "location": "GoogleSteps.enterSearchTerm(String)"
});
formatter.result({
  "duration": 1847514700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.searchResultsPage()"
});
formatter.result({
  "duration": 6134500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 1768452400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate the Gmail Page",
  "description": "",
  "id": "validate-google-page;validate-the-gmail-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Google"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Launch Google Application",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Validate gmail page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Quit Browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.launchBrowser()"
});
formatter.result({
  "duration": 6857645201,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.launchURL()"
});
formatter.result({
  "duration": 989150600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.validate_gmail_page()"
});
formatter.result({
  "duration": 2904131499,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.quitBrowser()"
});
formatter.result({
  "duration": 911641900,
  "status": "passed"
});
});