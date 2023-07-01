const Seaport = require("../models/Seaport");

exports.getSeaportData = async (req, res, next) => {
  try {
    let fetchPromises = [];
    for (let page = 1; page <= 67; page++) {
      fetchPromises.push(Seaport.fetchData(page));
    }
    let allData = await Promise.all(fetchPromises);

    allData = allData
      .flat()
      .sort((a, b) => parseInt(a.rank) - parseInt(b.rank));
    let currentPage = req.query.page ? parseInt(req.query.page) : 1;
    let numPages = Math.ceil(allData.length / 20);

    let dataForCurrentPage = allData.slice(
      (currentPage - 1) * 25,
      currentPage * 25
    );

    res.render("seaports/index", {
      data: dataForCurrentPage,
      currentPage: currentPage,
      numPages: numPages,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSeaportDetail = async (req, res, next) => {
  try {
    const locode = req.params.locode;
    const seaportData = await Seaport.fetchDetail(locode);
    res.render("seaports/seaportDetail", { data: seaportData });
  } catch (error) {
    return next(error);
  }
};
