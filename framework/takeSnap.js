let file = require('fs')
describe('ScreenShot', () => {
    it('TakeSnap', () => {
        browser.waitForAngularEnabled(false)
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
        browser.get('http://leaftaps.com/opentaps/control/main')
        browser.takeScreenshot().then(img => {
            let stream = file.createWriteStream('./a.jpeg');
            stream.write(new Buffer(img, 'base64'));
            stream.end();
        })
    })
})