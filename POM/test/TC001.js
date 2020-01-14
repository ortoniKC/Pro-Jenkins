const loginPage = require('../pages/LoginPage')
const driver = require('protractor')
// require('../../data/tc001.xlsx')
const homePage = require('../pages/HomePage')
const home = new homePage.HomePage()
const xl = require('../../framework/readExcel')
let x = new xl.ExcelUtil()
describe('TC001', () => { // suite
    var values = x.getDataFromExcel("C:\\Users\\dell\\Documents\\protractorWs\\data\\tc001.xlsx", 'TC1')
    beforeEach(() => { // b4 suite
        browser.waitForAngularEnabled(false)
        browser.get("http://leaftaps.com/opentaps/control/logout")
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
    })
    values.forEach(data => {
        console.log(data);
        it('Enter user name', () => { // @test
            const login = new loginPage.LoginPage()
            login.enterUserName(data.username)
            login.enterPassword(data.password)
                .clickLoginBtn();
        })
        it('Enter password', async () => {
            home.displayWelcomeMSg();
            home.verifyTitle('Leaftaps - TestLeaf Automation Platform')
        })
    })
})