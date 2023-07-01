function formatDate(str) {
  // rearrange string to fit YYYY/MM/DD HH:MM:SS format
  var formatted = str.replace(
    /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
    "$1/$2/$3 $4:$5:$6"
  );

  // create Date object
  var date = new Date(formatted);

  // format date as YYYY/MM/DD HH:MM
  var result =
    date.getFullYear() +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" + // add leading zero to month
    ("0" + date.getDate()).slice(-2) +
    " " + // add leading zero to date
    ("0" + date.getHours()).slice(-2) +
    ":" + // add leading zero to hours
    ("0" + date.getMinutes()).slice(-2); // add leading zero to minutes

  return result;
}

$(document).ready(function () {
  $.getJSON("./terminal.json", function (data) {
    var tableData = "";

    $.each(data, function (key, value) {
      tableData += "<tr>";
      tableData +=
        "<td>" +
        "<h6>" +
        value.terminalNmShrt +
        "</h6>" +
        "<p>" +
        value.terminal +
        "</p>" +
        "</td>";
      tableData += `<td><h6>${value.vesselNm}-${value.voyage}</h6></td>`;
      tableData += `<td><div class="badge badge-opacity-${
        parseInt(value.totalPercentage) < 100 ? "success" : "warning"
      }">
      ${parseInt(value.totalPercentage) < 100 ? "In progress" : "Completed"}
    </div></td>`;

      tableData += `<td>
        <div>
          <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
            <p class="text-success">${value.totalPercentage}</p>
            <p>${value.compleCnt}/${value.totalCnt}</p>
          </div>
          <div class="progress progress-md">
          <div class="progress-bar bg-success" role="progressbar" style="width: ${value.totalPercentage}" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </td>`;
      tableData += `<td>${formatDate(value.startDtm)}</td>`;
      tableData += `<td>${value.expectHour}</td>`;
      tableData += `<td>${formatDate(value.depEtd)}</td>`;
      tableData += `<td><h6>${value.dischargingPercentage}</h6><p>${value.disCompCnt}/${value.disCnt}</p></td>`;
      tableData += `<td><h6>${value.loadingPercentage}</h6><p>${value.lodCompCnt}/${value.lodCnt}</p></td>`;
      tableData += "</tr>";
    });

    $("#data-table").append(tableData);
  });
});
