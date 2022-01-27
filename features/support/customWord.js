// // TODO: Separate steps and hooks world

// const { setWorldConstructor, World } = require('@cucumber/cucumber');
// const { BrowserContext, Page } = require('@playwright/test');

// class CustomWorld extends World {
//     constructor(options) {
//         // needed so `attach`, `log` and `parameters` are properly set
//         super(options);
//         this.context = async () => {
//             await browser.newContext({
//                 acceptDownloads: true,
//                 recordVideo: process.env.PWVIDEO ? { dir: 'screenshots' } : undefined,
//             });
//         }
//         this.page = async () => {
//             await this.context.newPage();
//         }
//     }
// }

// setWorldConstructor(CustomWorld)