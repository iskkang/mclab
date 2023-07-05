const fetch = require("node-fetch");

exports.fetchData = async (pageNum) => {
  const url = `https://www.econdb.com/maritime/search/ports/?page_size=20&page=${pageNum}&s=&fl=name%2Clocode%2Clast_import_teu%2Clast_export_teu%2Cimport_dwell_time%2Cexport_dwell_time%2Cturnaround%2Cschedule%2Ctransshipments%2Cid%2Crank&color=1&code=undefined&name=undefined`;

  console.log(`Fetching page ${pageNum}`);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
        Referer: "https://www.econdb.com/maritime/ports/",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.response.docs;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

exports.fetchDetail = async (locode) => {
  // Replace this URL with the actual URL to fetch a specific seaport
  const url = `https://www.econdb.com/maritime/ports/async/${locode}/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Return the entire data object
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};
