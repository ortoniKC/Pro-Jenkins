import { browser, element, by } from "protractor"

const driver = require('protractor')


describe('Super Calculator', () => {
    
    it('add two numbers', async () => {
        // by.options()
        by.
        driver.browser.get('http://juliemr.github.io/protractor-demo/')
        let title = await driver.browser.getTitle();
        console.log(title);
        driver.element(driver.by.model('first'))
            .sendKeys('5')
        driver.element(driver.by.cssContainingText('option', '*')).click()
        driver.element(driver.by.model('second'))
            .sendKeys('6')
        driver.element(driver.by.buttonText('Go!')).click()
        // let result = await driver.element(driver.by.tagName('h2')).getText()
        // console.log(result);
        console.log(await driver.element(
            driver.by.binding('latest')).getText())
        // toBe == exact match
        // toEqual == compare obj
        expect(driver.element(
            driver.by.binding('latest')).getText()).toBe('300')
    })
})
// Another way to handle promise
// driver.browser.getTitle()
//     .then(value => {
//         console.log(value);
//     })