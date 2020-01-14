import { browser, $ } from "protractor"

// const driver = require('protractor')
describe('Learn Alert & Frames', () => {

    it('Frames', async () => {
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
        browser.get('https://docs.angularjs.org/api/ng/service/$window')
        let frame = element(by.name('example-window-service'))
        browser.switchTo().frame(frame.getWebElement())
        let name = "koushik"
        let inputbox = element(by.model('greeting'))
        inputbox.clear()
        inputbox.sendKeys(name)
        element(by.buttonText('ALERT')).click()
        browser.sleep(3000)
        let alert = browser.switchTo().alert();
        console.log(await alert.getText())
        alert.accept()
    })

})