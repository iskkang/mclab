const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function loadData() {
    const data = await readFile('./data/pf/202306.json', 'utf8');
    return JSON.parse(data);
}

module.exports = {
    loadData,
}
