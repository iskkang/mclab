const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const request = require('request');

const debug = (...args) => {
  if (true) {
    console.log.apply(console, args);
  }
}

function parsePosition(position) {
  debug('Position: ', position);

  return {
    "error": position.error,
    "data":
      {
        timestamp: position.data.timestamp,
        unixtime: position.data.unixtime,
        latitude: parseFloat(position.data.latitude),
        longitude: parseFloat(position.data.longitude),
        course: parseFloat(position.data.course),
        speed: parseFloat(position.data.speed)
      }
  }
}

const headersMT = {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'cache-control': 'max-age=0',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'upgrade-insecure-requests':1,
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
};

class Ship {
    constructor(mmsi) {
        this.mmsi = mmsi;
    }

    static fetchAll() {
        const filePath = path.join(__dirname, '../data/pf/202306.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data;
    }

    async makeRequest(url, headers) {
        const response = await axios.get(url, {headers});
        return response;
    }

        getLocationFromMT() {
        return new Promise((resolve, reject) => {
            const url = `https://www.marinetraffic.com/en/data/?asset_type=vessels&columns=flag,shipname,photo,recognized_next_port,reported_eta,reported_destination,current_port,imo,mmsi,ship_type,show_on_live_map,time_of_latest_position,lat_of_latest_position,lon_of_latest_position&mmsi|eq|mmsi=${this.mmsi}`;
            debug('getLocationFromMT', url);

            headers = headersMT;

            const options = {
                url,
                headers,
            };

            request(options, function (error, response, html) {
                if (!error && response.statusCode == 200 || response.statusCode == 403)  {
                    console.log('first request successsfull, set cookie');
                    let secondRequestHeaders = headers;
                    secondRequestHeaders.cookie = response.headers['set-cookie'];
                    secondRequestHeaders.referer = `https://www.marinetraffic.com/en/data/?asset_type=vessels&columns=flag,shipname,photo,recognized_next_port,reported_eta,reported_destination,current_port,imo,mmsi,ship_type,show_on_live_map,time_of_latest_position,lat_of_latest_position,lon_of_latest_position&mmsi|eq|mmsi=${this.mmsi}`;
                    secondRequestHeaders['Vessel-Image'] = '007fb60815c6558c472a846479502b668e08';
                    // Rest of the code...
                }
            });
        });
    }
}

module.exports = Ship;
