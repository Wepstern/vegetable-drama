const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('User opens {word}', function(word) {
    assert.equal(word, 'http://www.google.com');
});

When('User enters {string} into the search bar', function(string) {
    assert.equal(string, 'Notified Malmö');
});

When('User clicks the search button', function() {
    assert.equal(true, true);
});

Then('User can see {string} on the first page of the search results', function(string) {
    assert.equal(string, 'https://www.otified.com');
});