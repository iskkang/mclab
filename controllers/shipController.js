const Ship = require('../models/shipModel');

exports.getShips = async (req, res) => {
    const ships = await Ship.fetchAll();
    res.render('ship/index', { ships });
};

exports.getLastPositionFromMT = (req, res) => {
    const ship = new Ship(req.params.mmsi);
    ship.getLocationFromMT().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({ error: err.message });
    });
};