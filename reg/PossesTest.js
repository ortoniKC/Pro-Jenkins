import { DriverProvider } from "protractor/built/driverProviders";
import { browser, by, element } from "protractor";

async function possestesting() {
    browser.get("http://posse.com/")
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.element(by.linkText('LOG IN')).click()
    let ec = browser.ExpectedConditions;
    let element1 = element(by.model('email'))
    browser.wait(ec.presenceOf(element1), 5000)
    browser.element(by.model('email')).sendKeys('uppalamamatha@gmail.com')
    browser.element(by.model('password')).sendKeys('Mammu@4322')
    browser.element(by.buttonText('Sign in')).click()
    let title = await browser.getTitle()
    browser.wait(ec.titleIs(title), 5000)
    expect(title).toBe('Posse')


}

async function printnolike() {
    let firstele = element(by.xpath("(//span[@class='storeName ng-binding'])[1]"))
    browser.actions().mouseMove(firstele).perform()
    let text = await firstele.getText()
    console.log(text)
    let star = element(by.xpath('(//button[@class="btn btn-default userActionButton wishlist"]/span)[1]'))
    let color = await star.getCssValue('color')
    console.log(color)
    if (color == "rgba(51, 51, 51, 1)") {
        browser.element(by.xpath("(//span[@class='userActionButtonText'])[1]")).click()
    }
    let ec = browser.ExpectedConditions
    let prof = element(by.partialLinkText('MAMATHA UPPALA'))
    browser.wait(ec.presenceOf(prof), 7000)
    prof.click()

    let ele = element(by.linkText('Wishlist'))
    browser.wait(ec.presenceOf(ele), 5000)
    ele.click()



    let element1 = element(by.xpath("//span[@ng-bind='profileDisplayName()']"));
    // pass the element and the text to compare
    // browser.wait(ec.textToBePresentInElement('mamatha uppala'), 6000)
    browser.wait(ec.textToBePresentInElement(element1, 'mamatha uppala'), 6000)
    let restname = await browser.$$('.storeName').get(0).getText()
    console.log(restname)
    expect(restname).toBe(text)

    let hearele = element(by.xpath("//span[contains(@class,'icon heart')]"))
    let hearcount = await hearele.getText()
    console.log(hearcount)




}

describe('Testing posses', () => {

    it('test ', async () => {
        possestesting()
        printnolike()
    })
})