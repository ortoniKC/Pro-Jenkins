// import { browser, element, by } from "protractor"

const driver = require('protractor')


describe('Super Calculator', () => {

    it('add two numbers', async () => {
        driver.browser.get('http://juliemr.github.io/protractor-demo/')
        try {
            await driver.element(driver.by.model('mode')).sendKeys('hi')
        } catch (error) {
            console.log(error)
        }
        finally {

        }
        // driver.element(driver.by.model('mode'))
        //     .then(ele => {

        // }).catch(ele => {
        //     console.log(ele);

        // })
        driver.element(driver.by.model('second')).sendKeys("hey")
        browser.sleep(5000)
    })
})