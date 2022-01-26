# vegetable-drama
Testing with Cucumber and Playwirght framework integration

## Steps of template creation
First of all, set up a new npm package then install the necessary packages
```bash
npm init
npm install --save-dev @cucumber/cucumber
npm install --save-dev @playwright/test
npm install --save-dev expect
npm install --save-dev fs-extra
```

Create default folder hierarcy for Cucumber feature, step and support files
- Features
    - 'features' folder will be the place for executable feature documentations.
    - '*.features' is the extensions for executable feature documentation files.
- Steps
    - 'features/steps' folder will be the place for step declarations files.
    - '*.js' is the extensions for hook declaration files.
- Hooks
    - 'features/support' folder will be the place for hook declarations files.
    - '*.js' is the extensions for hook declaration files.
```bash
vegetable-drama % mkdir features
vegetable-drama % cd features
features % mkdir steps
features % mkdir support
```
