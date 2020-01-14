// import { browser } from "protractor";
/**
 * @author Koushik Chatterjee
 * @description Basic FrameWork
 */
class ProtractorBase {
    /**
     * @param {} index
     * @description switch to frame using 0 based index
     */
    switchToframeUsingIdex(index) {
        browser.switchTo().frame(index)
    }
    /**
     * @param  webElement 
     * @description switch to frame using WebElement
     */
    switchToFrameUsingWebElement(webElement) {
        browser.switchTo().frame(webElement)
    }
    /**
    * @param  windowNumber
    * @description switch to window
    */
    async switchToWindow(windowNumber) {
        let windows = await browser.getAllWindowHandles();
        browser.switchTo().window(windows[windowNumber]);
    }
    /**
     * @param  element
     * @description Click on WebElement
     */
    click(element) {
        element.click()
    }
    /**
     * @param ele 
     * @param text 
     * @description type on an input field, By default it appends the value
     */
    type(ele, text) {
        ele.sendKeys(text)
    }
    /**
     * @param  ele 
     * @param  text 
     *  @description clear the field type on an input box
     */
    clearAndtype(ele, text) {

        ele.clear()
        ele.sendKeys(text)
    }
    /**
     * @param {WebElement}
     * @description Get Text from WebElement
     */

    async getText(ele) {
        return await ele.getText()
    }
    /**
     * @description Accepts an alert
     */
    acceptAlert() {
        browser.switchTo().alert().accept()
    }
    /**
    * @description Dismiss an alert
    */
    dismissAlert() {
        browser.switchTo().alert().dismiss()
    }
    /**
    * @description Type and accepts in alert
    */
    typeInAlert(text) {
        let alert = browser.switchTo().alert();
        alert.sendKeys(text)
        alert.accept()
    }
    /**
    * @description Get alert text
    */
    async getAlertText() {
        return await browser.switchTo().alert().getText()
    }

    /**
     * return title of the page
     */
    async getTitle() {
        return await browser.getTitle();
    }
}
exports.ProtractorBase = ProtractorBase;