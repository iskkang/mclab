$(document).ready(function () {
  $("#data-table").DataTable({
    ajax: {
      url: "http://localhost:3000/berth.json",
      dataSrc: "data",
      dataType: "json",
    },
    columns: [
      { data: "portNm" },
      { data: "terminalNm" },
      { data: "vesselNm" },
      { data: "mmsi" },
      { data: "vesselCall" },
      {
        data: "depDtm",
        render: function (data, type, row) {
          return moment().isBefore(moment(data)) ? "In Process" : "Departed";
        },
      },
      { data: "closingDtm" },
      { data: "berthnDtm" },
      { data: "depDtm" },
      { data: "operator" },
    ],
    pageLength: 20,
  });

  $("#port-filter").on("change", function () {
    var searchVal = $.fn.dataTable.util.escapeRegex(this.value);
    table
      .column(0)
      .search(searchVal ? "^" + searchVal + "$" : "", true, false)
      .draw();
  });
});
