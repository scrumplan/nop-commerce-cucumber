$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Functionality",
  "description": "As user, I would like to shopping on Computer category",
  "id": "computer-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3360892000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 105901900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 517435300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should able to navigate to computer page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on computer page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to computer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the computer message \"Computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToComputerPage()"
});
formatter.result({
  "duration": 191000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheComputerMessage(String)"
});
formatter.result({
  "duration": 37446900,
  "status": "passed"
});
formatter.after({
  "duration": 678783700,
  "status": "passed"
});
formatter.before({
  "duration": 2598347800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 530064400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I should able to navigate to desktops page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am successfully navigate to desktop page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I can see the desktops message \"Desktops\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 423390600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToDesktopPage()"
});
formatter.result({
  "duration": 16200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheDesktopsMessage(String)"
});
formatter.result({
  "duration": 32635300,
  "status": "passed"
});
formatter.after({
  "duration": 661859000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 36,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 37,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 38,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 39,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2559756100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 496552300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 429489600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 837073400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 37245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 135953900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 60747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 54137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 50983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 51613300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 41614700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 888940500,
  "status": "passed"
});
formatter.after({
  "duration": 660272700,
  "status": "passed"
});
formatter.before({
  "duration": 1884735700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 500734600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 478448300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 807741800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 36342100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 45210300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 59205800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 66706500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 63670400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 58836400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 42214800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 10000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 649217400,
  "status": "passed"
});
formatter.after({
  "duration": 658740900,
  "status": "passed"
});
formatter.before({
  "duration": 2588867100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 531217000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 8800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 460444900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 835516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 24502700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 41385300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 54770900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 53423400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 55219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 75870200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 39117100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 10400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 330102700,
  "status": "passed"
});
formatter.after({
  "duration": 669500600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As user, I would like to login with valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2547510800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 431042300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the message \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyNavigateToLoginPage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 24039500,
  "status": "passed"
});
formatter.after({
  "duration": 661348100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"\u003cemailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "password",
        "error message"
      ],
      "line": 23,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 24,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 25,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 26,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1803213000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 429421500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 59156200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 52518500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 406831100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 23767500,
  "status": "passed"
});
formatter.after({
  "duration": 658405600,
  "status": "passed"
});
formatter.before({
  "duration": 1980134200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 466931500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 56701800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 57410500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 423087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 28478300,
  "status": "passed"
});
formatter.after({
  "duration": 655137100,
  "status": "passed"
});
formatter.before({
  "duration": 2577447000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 622050200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 57412200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 54441500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 486565500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 31855100,
  "status": "passed"
});
formatter.after({
  "duration": 671339100,
  "status": "passed"
});
formatter.before({
  "duration": 1811577300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 466785800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter email \"Lalita123\u003d@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Lalita123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see logout link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123\u003d@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 73531200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 56755600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 636115600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyLoginWithValidCredentials()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iCanSeeLogoutLink()"
});
formatter.result({
  "duration": 33121700,
  "status": "passed"
});
formatter.after({
  "duration": 663233800,
  "status": "passed"
});
formatter.before({
  "duration": 2616796700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 463736300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should logout successfully after login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-logout-successfully-after-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter email \"Lalita123\u003d@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter password \"Lalita123\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I am successfully logout",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I can see login link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123\u003d@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 104749400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 53222800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 635862400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 612996100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyLogout()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iCanSeeLoginLink()"
});
formatter.result({
  "duration": 24775200,
  "status": "passed"
});
formatter.after({
  "duration": 642593900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Functionality",
  "description": "As user , I would like to register with valid information",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2515747200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 470576400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;i-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on register page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to register page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the register message \"Register\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmSuccessfullyNavigateToRegisterPage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iCanSeeTheRegisterMessage(String)"
});
formatter.result({
  "duration": 25375000,
  "status": "passed"
});
formatter.after({
  "duration": 674452900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "I should display message of all mandatory fields",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get error message for firstname field\"\u003cfirstNameErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should get error message for lastname field \"\u003clastNameErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get error message for email field\"\u003cemailErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get error message for password field\"\u003cpasswordErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error message for confirm password field\"\u003cconfirmPasswordErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "firstNameErrorMessage",
        "lastNameErrorMessage",
        "emailErrorMessage",
        "passwordErrorMessage",
        "confirmPasswordErrorMessage"
      ],
      "line": 25,
      "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;1"
    },
    {
      "cells": [
        "First name is required.",
        "Last name is required.",
        "Email is required.",
        "Password is required.",
        "Password is required."
      ],
      "line": 26,
      "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1899125000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 477751500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should display message of all mandatory fields",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get error message for firstname field\"First name is required.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should get error message for lastname field \"Last name is required.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get error message for email field\"Email is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get error message for password field\"Password is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error message for confirm password field\"Password is required.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 58038300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 47
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForFirstnameField(String)"
});
formatter.result({
  "duration": 27400000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 47
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForLastnameField(String)"
});
formatter.result({
  "duration": 21341000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 43
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForEmailField(String)"
});
formatter.result({
  "duration": 20600800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 46
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForPasswordField(String)"
});
formatter.result({
  "duration": 21187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 54
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForConfirmPasswordField(String)"
});
formatter.result({
  "duration": 21130100,
  "status": "passed"
});
formatter.after({
  "duration": 656686900,
  "status": "passed"
});
formatter.before({
  "duration": 1848377500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 487800900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should create new account successfully with valid information",
  "description": "",
  "id": "registration-functionality;i-should-create-new-account-successfully-with-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter gender \"F\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter firstname \"Lalita\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter date of birthday \"26\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter date of birthmonth \"July\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter date of birthyear \"1997\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter emailaddress \"Lalita123\u003d@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter password for register \"Lalita123\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter confirm password \"Lalita123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I am successfully register with valid information",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I can see the register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "F",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.iEnterGender(String)"
});
formatter.result({
  "duration": 70224100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita",
      "offset": 19
    }
  ],
  "location": "RegisterPageTest.iEnterFirstname(String)"
});
formatter.result({
  "duration": 62210900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterLastname(String)"
});
formatter.result({
  "duration": 54002300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthday(String)"
});
formatter.result({
  "duration": 56407200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthmonth(String)"
});
formatter.result({
  "duration": 51967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthyear(String)"
});
formatter.result({
  "duration": 54174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123\u003d@gmail.com",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iEnterEmailaddress(String)"
});
formatter.result({
  "duration": 72002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123",
      "offset": 31
    }
  ],
  "location": "RegisterPageTest.iEnterPasswordForRegister(String)"
});
formatter.result({
  "duration": 60087700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita123",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 56439900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 900578400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmSuccessfullyRegisterWithValidInformation()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 37
    }
  ],
  "location": "RegisterPageTest.iCanSeeTheRegisterTextMessage(String)"
});
formatter.result({
  "duration": 25071000,
  "status": "passed"
});
formatter.after({
  "duration": 691937900,
  "status": "passed"
});
});