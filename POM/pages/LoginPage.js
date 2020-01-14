// import { browser, $, element, by } from "protractor"
const home = require('./HomePage')
const base = require('../../framework/ProtractorBase')
class LoginPage extends base.ProtractorBase {

    enterUserName(username) {
        let user = element(by.id('username'));
        this.type(user, username)
        // this.type
        return this
    }
    enterPassword(pass) {
        this.type(element(by.id('password')), pass)
        return this
    }
    clickLoginBtn() {
        this.click($('.decorativeSubmit'))
        // $('.decorativeSubmit').click()
        return new home.HomePage();
    }

}
exports.LoginPage = LoginPage;