const multer = require('multer');
const path = require('path');
const xlsx = require('xlsx');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './data/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadFile = [upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const workbook = xlsx.readFile(path.resolve('./data/uploads', req.file.filename));
    const sheet_name_list = workbook.SheetNames;
    let sheetsData = {};

    sheet_name_list.forEach(sheetName => {
      sheetsData[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    });

    fs.writeFile('./data/sheetsData.json', JSON.stringify(sheetsData), (err) => {
      if (err) throw err;
      console.log('Data written to file');
      res.render('rate/list', { sheets: Object.keys(sheetsData) });
    });
  } catch (error) {
    res.status(500).send(`An error occurred while processing the file: ${error.message}`);
  }
}];

exports.getSheets = (req, res) => {
  fs.readFile('./data/sheetsData.json', (err, data) => {
    if (err) throw err;
    const sheetsData = JSON.parse(data);
    res.render('rate/list', { sheets: Object.keys(sheetsData) });
  });
};

exports.getSheet = (req, res) => {
  const sheetName = req.params.sheetName;
  fs.readFile('./data/sheetsData.json', (err, data) => {
    if (err) throw err;
    const sheetsData = JSON.parse(data);
    if (!sheetsData[sheetName]) {
      return res.status(400).send("No data available");
    }
    res.render('rate/data', { data: sheetsData[sheetName] });
  });
};
