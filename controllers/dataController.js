const dataModel = require('../models/dataModel');

async function getData(req, res) {
    const data = await dataModel.loadData();
    
    let totalTSR = 0;
    let totalSEA = 0;
    let totalAIR = 0;
    let totalPOD = {}; 
    let totalMainItem = {}; 
    let totalRevenue = 0;
    let totalProfit = 0;
    let totalF_DEST = {};
    let totalDept = {}; 
    let totalLoad = {};
    let totalDeptItems = 0;
    let totalF_DESTItems = 0;
    let totalpfF_DEST = {}; // store the total profit for each F_DEST
    let customerData = {}; // create an object to store customer data
    
    totalDept['VEN'] = 0;
    totalDept['CIS'] = 0;
    totalDept['RUS'] = 0;
    totalDept['VEN1'] = 0;
    totalDept['VEN3'] = 0;
    
    for (let item of data) {
        if (item.Service_Type === 'TSR') {
            totalTSR++;
        } else if (item.Service_Type === 'SEA') {
            totalSEA++;
        } else if (item.Service_Type === 'AIR') {
            totalAIR++;
        }

        totalPOD[item.POD] = (totalPOD[item.POD] || 0) + 1;
        totalDept[item.Dept] = (totalDept[item.Dept] || 0) + 1;
        totalF_DEST[item.F_DEST] = (totalF_DEST[item.F_DEST] || 0) + 1;
        totalMainItem[item.main_item] = (totalMainItem[item.main_item] || 0) + 1;
        totalLoad[item.Load] = (totalLoad[item.Load] || 0) + 1;

        totalpfF_DEST[item.F_DEST] = (totalpfF_DEST[item.F_DEST] || 0) + Number(item.ProfitTotal);

        totalRevenue += item.RevenueTotal;
        totalProfit += item.ProfitTotal;

        // Collect customer data
        if (customerData[item.Customer_Name]) {
            customerData[item.Customer_Name].TEU_Sum += item.TEU;
            customerData[item.Customer_Name].RTON_Sum += item.RTON;
            customerData[item.Customer_Name].ProfitTotal_Sum += item.ProfitTotal;
        } else {
            customerData[item.Customer_Name] = {
                TEU_Sum: item.TEU,
                RTON_Sum: item.RTON,
                ProfitTotal_Sum: item.ProfitTotal
            };
        }
    }
    
    for (let dept in totalDept) {
        totalDeptItems += totalDept[dept];
    }
    
    let sortedItems = Object.entries(totalMainItem).sort((a, b) => b[1] - a[1]).slice(0, 5);

    // Transform customerData into an array and sort it
    let sortedCustomerData = Object.entries(customerData)
        .map(([Customer_Name, { TEU_Sum, RTON_Sum, ProfitTotal_Sum }]) => ({ Customer_Name, TEU_Sum, RTON_Sum, ProfitTotal_Sum }))
        .sort((a, b) => b.ProfitTotal_Sum - a.ProfitTotal_Sum)
        .slice(0, 7);  // Get top 7

        res.render('dashboard/index', {
        totalTSR,
        totalSEA,
        totalAIR,
        totalPOD,
        totalDept,
        totalLoad,
        totalF_DEST,
        totalF_DESTItems,
        totalMainItem,
        totalRevenue,
        totalProfit,
        totalDeptItems,
        totalpfF_DEST,
        sortedItems,
        sortedCustomerData  // include this new data in the render
    });
}

module.exports = {
    getData,
}
