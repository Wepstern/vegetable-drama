const { config } = require('./playwright.config');
const { Before, After, BeforeAll, AfterAll, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const { ensureDir } = require('fs-extra');

const tracesDir = 'traces'

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function() {
    // Start browser + Configure Browser
    switch (process.env.BROWSER) {
        // TODO Google ncr always redirect to hungarian settings - geolocaton setting was uneffective
        case 'firefox':
            browser = await firefox.launch(config.firefoxLaunchOptions);
            break;
        case 'webkit':
            browser = await webkit.launch(config.webkitLaunchOptions);
            break;
        default:
            browser = await chromium.launch(config.chromeLaunchOptions);
    }
    // Create traces folder for Playwright
    await ensureDir(tracesDir);
});

Before(async function(scenario) {
    // Store feature & testName in the World object
    const time = new Date().toISOString().split('.')[0];
    this.feature = scenario.pickle;
    this.testName = this.feature.name.replace(/\W/g, '-') + '-' + time.replace(/:|T/g, '-');
    // New browserContext + Configuration
    this.context = await browser.newContext({
        acceptDownloads: true,
        recordVideo: process.env.PWVIDEO ? { dir: 'screenshots' } : undefined,
    });
    // Tracing start
    await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.page = await this.context.newPage();
    // Collect console log & attach
    this.page.on('console', async (msg) => {
        const values = [];
        if (msg.type == 'log') {
            await this.attach(msg.text());
        }
    });
});

Before({tags: '@loggedin'}, async function () {
    // TODO - scenario + tag: logged in --> before + tag --> storage setup
});

Before({tags: '@debug'}, async function () {
    // TODO - debug
});

After(async function(scenario) {
    this.result = scenario.result;
    if (scenario.result) {
        // BUG duration is always zero
        await this.attach(`Status: ${this.result.status}. Duration:${this.result.duration.seconds}s`);
        // If failed the scenario, then attach screenshot and tracing
        if (this.result.status !== Status.PASSED) {
            
            const image = await this.page.screenshot();
            image && (await this.attach(image, 'image/png'));
            await this.context.tracing.stop({ path: `${tracesDir}/${this.testName}-trace.zip` });
        }
    };
    // Close Page and BrowserContext
    await this.page.close();
    await this.context.close();
});

AfterAll(async function() {
    // Close Browser
    await browser.close();
})