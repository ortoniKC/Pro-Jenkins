import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";

describe('Debugger Address', () => {

    it('Run', async () => {
        let cap = await browser.getCapabilities()
        console.log(cap);
        browser.waitForAngularEnabled(false)
        browser.get('https://www.google.com')

    })
    it('Enter name and print title', async () => {
        browser.waitForAngularEnabled(false)
        element(by.name('q')).sendKeys('koushik', protractor.Key.ENTER)
        console.log(await browser.getTitle());
        browser.close();
    })
})