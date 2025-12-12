# TypeScript Practice Project
This is an Ecommerce project
It was created to practice TypeScript automation testing

## Technologies
- TypeScript
- Node.js
- Cucumber
- Allure Reporting
- Github Action Setup


## Install dependencies
npm install

## Run tagged scenarios
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression "@CMP"

## Run all scenarios
npx wdio run wdio.conf.ts

## Generate Allure report
npx allure serve
