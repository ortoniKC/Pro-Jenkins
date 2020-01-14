import { browser, $ } from "protractor"

// const driver = require('protractor')
describe('Learn Alert & Frames', () => {

    it('Exception', async () => {
        expect('').toBeFalse
        browser.waitForAngularEnabled(false)
        browser.get('http://leaftaps.com/opentaps/control/main')
        try {
            await $('#usernam').sendKeys('demo')
        } catch (error) {
            console.log(error);
        }
        // try {
        //     $('#usernam').getText()
        //         .then(r => {
        //             console.log(r);
        //         })
        // } catch (error) {
        //     console.log(error);
    })

    xit('Frames', async () => {
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.get('https://docs.angularjs.org/api/ng/service/$window')
        let frame = driver.element(driver.by.name('example-window-service'))
        driver.browser.switchTo().frame(frame.getWebElement())
        let name = "koushik"
        let inputbox = driver.element(driver.by.model('greeting'))
        inputbox.clear()
        inputbox.sendKeys(name)
        driver.element(driver.by.buttonText('ALERT')).click()
        browser.sleep(3000)
        let alert = driver.browser.switchTo().alert();
        console.log(await alert.getText())
        alert.accept()
    })

})