# vegetable-drama
Testing with Cucumber and Playwirght framework integration


## Steps of template creation
First of all, set up a new npm package then install the necessary packages
```bash
npm init
npm install --save-dev @cucumber/cucumber
npm install --save-dev @playwright/test --save-dev
npm install --save-dev assert 
npm install --save-dev fs-extra
```

Create default folder hierarcy for Cucumber feature, step and support files
- Features
    - './features' folder will be the place for executable feature documentations
    - '*.features' is the extensions for executable feature documentation files
- Steps
    - './features/steps' folder will be the place for step declarations files
    - '*.js' is the extensions for hook declaration files
- Hooks
    - './features/support' folder will be the place for hook declarations files
    - '*.js' is the extensions for hook declaration files
```bash
vegetable-drama % mkdir features
vegetable-drama % cd features
features % mkdir steps
features % mkdir support
```

Configure Cucumber running and npm test command
- Create ./cucumber.js file in the root directory
- Add the line below to ./cucumber.js to turn off default report notes
```js
 module.exports = { default: '--publish-quiet' };
```
- Set the npm test command to run the cucumber via cucumber-js alias
```js
  "scripts": {
    "test": "cucumber-js"
  },
```


## Implement first Cucumber feature documentations, steps and hooks (still without Playwright integration)
First of all, write the example feature documentation from google.com, then implement the required steps and hooks still without Playwright integration


## Configure Cucumber Reporting
We will use the Cucumber built-in reporter plugin to genarate reports
- './reports' folder will be the place for report files: report.json, report.ndjons and report.html
- Create an empyt './report/report.json' file before the first run. The generation of report.hml will be automatically after this
- Extend .gitignore file with the report's artifacts above
- Extend cucumber.js with the report options like below
```js
const common = `
    --format json:reports/report.json 
    --format message:reports/report.ndjson 
    --format html:reports/report.html 
    --publish-quiet 
`;

module.exports = { 
    default: `${common}`,
};
```
- Add open report command to package.json
```js
"report": "open reports/report.html"
```

We will use Cucumber's pretty formatter modul to make console log more "prettier" --> progress-bar
```js
const common = `
    --format json:reports/report.json 
    --format message:reports/report.ndjson 
    --format html:reports/report.html
    --format progress-bar 
    --publish-quiet 
`;

module.exports = { 
    default: `${common}`,
};
```

There are some other third-party reporting system for Cucumber like cucumber-html-reporter, let's try it!
- Install the npm module
```bash 
npm install cucumber-html-reporter --save-dev
````
- Create './utils' and './utils/cucumber-html-reporter' folders
- Create './utils/cucumber-html-reporter/index.js' file and insert the code below
```js
var reporter = require('cucumber-html-reporter');
//Available HTML themes: ['bootstrap', 'hierarchy', 'foundation', 'simple']

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/cucumber_html_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

reporter.generate(options);
```
- Add open report command to package.json
```js
"cucumber-html-report": "node utils/cucumber-html-reporter/index.js"
```
## Implement Cucumber and Playwright integration