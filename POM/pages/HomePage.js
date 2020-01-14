// import { browser, $, element, by } from "protractor"
// eng = {}
const base = require('../../framework/ProtractorBase')
class HomePage extends base.ProtractorBase {
    verifyTitle(title) {

        expect(this.getTitle()).toBe(title)
        return this;
    }
    async displayWelcomeMSg() {
        console.log(await this.getText(element(by.tagName('h2'))))
        return this;
    }

}

exports.HomePage = HomePage;