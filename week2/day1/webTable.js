const driver = require('protractor')
describe('Learn WebTable', () => {
    it('Table', async () => {
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT')
        // driver.element(driver.by.id('chkSelectDateOnly')).click()
        // To find single web element $ is used => similar to element(driver.by.id(''))
        driver.$('#chkSelectDateOnly').click()
        let table = driver.element(driver.by.css('#divTrainsList > table.DataTable.TrainList.TrainListHeader'))
        // FindElements element().all()
        let rows = table.all(driver.by.tagName('tr'))
        // console.log(await rows.count());
        let rowsCount = await rows.count();
        // loop through each rows
        for (let i = 0; i < rowsCount; i++) {
            // get the row 1
            let cols = rows.get(i);
            // get all the cols from the row
            let td = cols.all(driver.by.tagName('td'))
            // print the first col text
            console.log(await td.get(0).getText());
        }
    })
})