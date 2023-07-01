// routes/terminalRoutes.js

const express = require("express");
const router = express.Router();
const terminalController = require("../controllers/terminalController");

router.get("/", terminalController.getTerminalData);

module.exports = router;
