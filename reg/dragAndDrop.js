
async function sortable() {

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)
    let item1 = element(by.xpath("//ul[@class='ui-sortable']/li[1]"))
    let item4 = element(by.xpath("//ul[@class='ui-sortable']/li[4]"))
    let location = await item4.getLocation()
    let xValue = await location.x
    let yValue = await location.y

    browser.actions().dragAndDrop(item1, { x: xValue, y: yValue }).perform()

}
async function sort() {
    browser.waitForAngularEnabled(false)
    // browser.driver.get()
    browser.get('https://jqueryui.com/sortable/')
    browser.switchTo().frame(0)
    let x, y;
    let ele = element(by.xpath("//li[text()='Item 5']"))
    await ele.getLocation().then(loc => {
        x = loc.x;
        y = loc.y
    })

    let itm1 = element(by.xpath("//li[text()='Item 1']"))
    await browser.actions()
        .dragAndDrop(itm1, { x: x, y: y }).perform()
    browser.sleep(3000)

}
function dragAndDrop() {
    browser.waitForAngularEnabled(false)
    // browser.driver.get()
    browser.get('https://jqueryui.com/droppable/')
    browser.switchTo().frame(0)
    let drag = element(by.id('draggable'))
    let drop = element(by.id('droppable'))

    browser.actions()
        .dragAndDrop(drag, drop).perform()
    browser.sleep(3000)
}

function flipKart() {
    browser.waitForAngularEnabled(false)
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.get('https://www.flipkart.com/')
    element(by.buttonText('✕')).click()
    let electronics = element(by.xpath("//span[text()='Electronics']"))
    browser.actions().mouseMove(electronics).perform()
    // browser.sleep(3000)
    let ec = browser.ExpectedConditions;
    let oppo = element(by.linkText('OPPO'));
    browser.wait(ec.elementToBeClickable(oppo), 5000)
    oppo.click()
    browser.wait(ec.titleContains('Oppo:'), 4000)

    expect(browser.getTitle()).toContain('Oppo:')
}
describe('Learn Actions', () => {
    it('Drag And Drop', () => {
        dragAndDrop()
    })
    // xit('Mouse hover', () => {
    //     flipKart()
    // })
    // xit('Sortable', async () => {
    //     sort()
    // })


})