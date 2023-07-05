const express = require('express');
const router = express.Router();
const shipController = require('../controllers/shipController');

router.get("/", shipController.getShips);
router.get('/getLocationFromMT/:mmsi', shipController.getLastPositionFromMT);

module.exports = router;