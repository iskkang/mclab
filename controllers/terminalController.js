// controllers/terminalController.js

const fetch = require("node-fetch");

exports.fetchData = async (req, res) => {
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
    Cookie:
      "_gcl_au=1.1.1679281944.1687485453; _fbp=fb.1.1687485453430.18690922; _clck=8ia1tc|2|fcp|0|1269; _ga_FEGZQJQLV4=GS1.1.1687485453.1.0.1687485453.60.0.0; _ga=GA1.2.65732494.1687485453; _gid=GA1.2.314520510.1687485454; _dc_gtm_UA-69830188-1=1; ch-veil-id=f20d8bce-731f-4886-bf0c-8f7ecd45490b; ch-session-125719=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxMjU3MTktNjQ5NGZjMTBlMTE5N2RkNjZmM2EiLCJpYXQiOjE2ODc0ODU0NTYsImV4cCI6MTY5MDA3NzQ1Nn0.btN6ynSTKaoUOv6deb6imk4GH3fBToM_akaKqs5p9JI; _clsk=jqkwpf|1687485467789|2|1|o.clarity.ms/collect",
    Referer: "https://www.tradlinx.com/",
    "Sec-Ch-Ua":
      '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Tx-Clientid": "tradlinx",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
  };
  fetch("https://api.tradlinx.com/berthplan?1687485467783", { headers })
    .then((response) => response.json())
    .then((data) => {
      // You might need to adjust this depending on the actual structure of the response
      const rows = data.map((item) => ({
        port: item.portNm,
        dimensions: item.terminalNm,
        선명: item.vesselNm,
        MMSI: item.mmsi,
        contents: item.vesselCall,
        status: item.status, // assuming that the properties you want are on the top level of each item
        cutOff: item.cutOff,
        picture: item.picture,
        출항: item.출항,
        language: item.language,
      }));
      res.render("pages/terminal", { rows });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error occurred while fetching data");
    });
};
