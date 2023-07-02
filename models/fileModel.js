const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

exports.processFile = (filePath, originalFileName) => {
    try {
        // read .xlsx file
        const workbook = xlsx.readFile(filePath);
        // get first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // convert to JSON
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        // write JSON to a file in the 'data/uploads' directory
        const jsonFilePath = path.join(__dirname, '../data/uploads', `${path.parse(originalFileName).name}.json`);
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
        return 'File has been uploaded and converted to JSON successfully';
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while processing the file');
    }
};
