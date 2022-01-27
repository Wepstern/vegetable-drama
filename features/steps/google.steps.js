const { Given, When, Then } = require('@cucumber/cucumber');

Given('User opens {word}', async function(word) {
    const { page } = this;
    await page.goto(word); // http://www.google.com --> will redirect to: https://www.google.com/?gws_rd=ssl
    await page.click('button:has-text("I agree")');
});

When('User enters {string} into the search bar', async function(string) {
    const page = this.page;
    await page.fill('[aria-label="Search"]', string);
});

When('User clicks the search button', async function() {
    const page = this.page;
    await page.click(':nth-match(:text("Google Search"), 2)');
});

Then('User can see {string} on the first page of the search results', async function(string) {
    const page = this.page;
    await page.waitForSelector(`text=${string}`);
    await page.waitForSelector('td:has-text("1")');
});

When ('User clicks the Sign in button', async function() {
    const page = this.page;
    await page.click('text=Sign in');
});

When ('User enters {string} into the email field', async function(string) {
    const page = this.page;
    await page.fill('[aria-label="Email\\ or\\ phone"]', `${string}`);
});

When ('User clicks the Next button', async function() {
    const page = this.page;
    await page.click('button:has-text("Next")');
});

When ('User enters {string} into the password field', async function(string) {
    const page = this.page;
    await page.fill('[aria-label="Enter\\ your\\ password"]', `${string}`);
});

Then ('User can see {word} page as logged in', async function(word) {
    const page = this.page;
    await page.waitForSelector('[aria-label="Google\\ Account\\:\\ Vegetable\\ Drama\\ \\ \\a \\(vegetable\\.drama\\@gmail\\.com\\)"]');
});





// When ('User enters {string} into the {string} field', async function(string, string) {
//     const page = this.page
//     await page.click(`${word}:has-text("${string}")`);
// });
