const fetch = require("node-fetch");
const fs = require("fs");

async function fetchAndSaveData(url, fileName, headers) {
  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    fs.writeFileSync(fileName, JSON.stringify(data));
    console.log(`Data fetched and saved successfully: ${fileName}`);
  } catch (error) {
    console.log(`Error: Unable to fetch data from ${url}`);
    console.log(error);
  }
}

module.exports = { fetchAndSaveData };
