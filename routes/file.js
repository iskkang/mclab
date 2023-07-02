const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('rate/index');
});

router.post('/upload', fileController.uploadFile);
router.get('/sheets', fileController.getSheets);
router.get('/sheets/:sheetName', fileController.getSheet);

module.exports = router;
