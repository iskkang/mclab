const terminalModel = require("../models/terminalModel");
const moment = require('moment');

exports.getTerminalData = async (req, res) => {
      try {
    const response = await terminalModel.fetchTerminalData();
    const data = response.data;  // Access the "data" property of the response object
          
        for (let item of data) {
            item.berthnDtm = moment(item.berthnDtm, "YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm");
            item.depDtm = moment(item.depDtm, "YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm");
            item.closingDtm = moment(item.closingDtm, "YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm");
        }
          
        res.render("terminal/index", { data });  // Pass the array to the view
              } catch (err) {
                console.error(err);
                res.status(500).send(err.message);
              }
            };
