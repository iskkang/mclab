const express = require('express');
const router = express.Router();
const terminalController = require('../controllers/terminalController');

router.get('/', terminalController.getTerminalData);

router.get('/map/:mmsi', function(req, res) {
  const mmsi = req.params.mmsi;
  res.render('/terminal/map', { mmsi: mmsi });
});


module.exports = router;
