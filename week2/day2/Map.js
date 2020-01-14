import { browser, $, element, by } from 'protractor'
describe('Learn WebTable', () => {
    it('Table', async () => {
        browser.manage().timeouts().implicitlyWait(20000)
        browser.waitForAngularEnabled(false)
        browser.get(browser.params.url)
        $('#chkSelectDateOnly').click()
        let table = element(by.css('#divTrainsList > table.DataTable.TrainList.TrainListHeader'))
        let rows = table.all(by.tagName('tr'));
        let myMap = rows.map(async (ele, i) => {
            let td = ele.$$('td')
            return {
                index: i,
                trainsNumber: await td.get(0).getText(),
                trainsNames: await td.get(1).getText()
            }
        });
        let a = (await myMap).filter((ele, index) => {
            return ele.trainsNumber.startsWith('2')
        })
        a.forEach(ele => {
            console.log(ele);
        })
    })
})