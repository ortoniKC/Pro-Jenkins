let xlsx = require('xlsx');
class ExcelUtil {
    /**
     * @author Koushik Chatterjee
     * @param {*} sheetName - Sheet name
     * @param {*} path - abs path of the sheet
     */

    getDataFromExcel(path, sheetName) {
        let wb = xlsx.readFile(path)
        let sheet = wb.Sheets[sheetName]
        return xlsx.utils.sheet_to_json(sheet);
    }
}
exports.ExcelUtil = ExcelUtil;