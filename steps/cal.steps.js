import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";

Given('Goto Super calc webpage',
    async () => {
        await browser.get('https://juliemr.github.io/protractor-demo/')
    })

When('Users enter in the first field as {string}',
    async function (num1) {
        await element(by.model('first'))
            .sendKeys(num1)
    });


When('Users enter in the second fiels as {string}', async function (num2) {
    await element(by.model('second'))
        .sendKeys(num2)
});

When('Users clicks on the go button', async function () {
    await element(by.buttonText('Go!')).click()
});

Then('User must get the result as {string}', async function (string) {
    console.log(await element(by.tagName('h2')).getText())
});