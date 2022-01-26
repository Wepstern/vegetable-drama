const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(function() {
    console.log('It is a BeforeAll hook!');
});

Before(function() {
    console.log('It is a Before hook!');
});

After(function() {
    console.log('It is an After hook!');
});

AfterAll(function() {
    console.log('It is a AfterAll hook!');
})