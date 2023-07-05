const express = require("express");
const router = express.Router();

const seaportController = require("../controllers/seaportController");

router.get("/", seaportController.getSeaportData);

router.get("/:locode/:name", seaportController.getSeaportDetail);

module.exports = router;