const xl = require('./readExcel')
let x = new xl.ExcelUtil()
let values = x.getDataFromExcel("C:\\Users\\dell\\Documents\\protractorWs\\POM\\tc.xlsx", 'tc')
values.forEach(data => {
    console.log(data);

})
// { username: 'DemoSalesManager', password: 'crmsfa' }
// { username: 'DemoCSR', password: 'crmsfa' }