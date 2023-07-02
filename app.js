const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
var cors = require("cors");
const itemsRouter = require("./routes/items");
const portRouter = require("./routes/port");
const portController = require("./controllers/portController");
const dataRouter = require('./routes/data');
const fileRouter = require('./routes/file');
var router = express.Router()

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the path for your views

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "data")));
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded bodies
app.use("/items", itemsRouter);
app.use("/quote", itemsRouter);
app.use("/port", portRouter);
app.use("/dashboard", dataRouter);
app.use("/rate", fileRouter);


const seaportRouter = require("./routes/seaport");
app.use("/seaports", seaportRouter);

app.get("/portview", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/portview.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/terminal", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/terminal.html"));
});
app.get("/terminalop", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/terminal-operation.html"));
});
app.get("/weather", function (req, res) {
  res.render("dashboard/weather");
});
app.get("/congestion", function (req, res) {
  res.render("dashboard/congestion");
});
app.get("/lcl", function (req, res) {
  res.render("dashboard/lcl");
});


app.get("/api/data", portController.index);
app.get("/api/stations/:id/realtime", portController.getRealtimeData);
app.get(
  "/api/stations/:id/weekly-statistics",
  portController.getWeeklyStatistics
);
app.get(
  "/api/stations/:id/monthly-statistics",
  portController.getMonthlyStatistics
);
app.get(
  "/api/stations/:id/yearly-statistics",
  portController.getYearlyStatistics
);
//세계항만
app.get("/vsl", function (req, res) {
  res.render("pages/port"); // path to your EJS file without the .ejs extension
});
app.get("/api/vessel", function (req, res) {
  const csv = require("csvtojson");
  const csvFilePath = path.join(__dirname, "public", "db/vessel.csv");

  res.set("Cache-Control", "no-store"); // disable caching

  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      res.json(jsonObj);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while converting CSV data to JSON" });
    });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
