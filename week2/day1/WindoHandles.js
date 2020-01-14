const driver = require('protractor')
describe('Learn Alert & Frames', () => {

    it('Handle non-angular webpage', async () => {
        // driver.browser.ignoreSynchronization = // deprecated
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open')
        let prm = driver.browser.getWindowHandle()
        console.log(await driver.browser.getTitle());
        let frame = driver.element(driver.by.name('iframeResult'))
        driver.browser.switchTo().frame(frame.getWebElement())
        driver.element(driver.by.buttonText('Try it')).click()
        // Get no.of windows or tabs opened in the current session
        let windows = await driver.browser.getAllWindowHandles()
        console.log(windows);
        // Switch to the newly opened tab or first tab
        driver.browser.switchTo().window(windows[1])
        console.log(await driver.browser.getTitle());
        // driver.browser.switchTo().window(prm)
    })
})