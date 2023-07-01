//-------------------------------소수점관련------------------------------
String.prototype.comma = function () {
  tmp = this.split(".");
  var str = new Array();
  var v = tmp[0].replace(/,/gi, "");
  for (var i = 0; i <= v.length; i++) {
    str[str.length] = v.charAt(v.length - i);
    if (i % 3 == 0 && i != 0 && i != v.length) {
      str[str.length] = ".";
    }
  }
  str = str.reverse().join("").replace(/\./gi, ",");
  return tmp.length == 2 ? str + "." + tmp[1] : str;
};

function onlyNum(obj) {
  var val = obj.value;
  var re = /[^0-9\.\,\-]/gi;
  obj.value = val.replace(re, "");
}

function jsDeleteComma(varNumber) {
  var varLength = varNumber.length;

  varReturnNumber = "";

  for (var inx = 0; inx < varLength; inx++) {
    if (varNumber.substring(inx, inx + 1) != ",") {
      varReturnNumber = varReturnNumber + varNumber.substring(inx, inx + 1);
    }
  }

  return varReturnNumber;
}
//------------------------------------------숫자입력관련----------------------------------------------------

function chgSum() {
  if (document.getElementsByName("unit")[0].checked) {
    sum_unit = "mm";
  } else if (document.getElementsByName("unit")[1].checked) {
    sum_unit = "cm";
  } else if (document.getElementsByName("unit")[2].checked) {
    sum_unit = "m";
  }
  document.getElementById("unit_length_str").innerHTML = sum_unit;
  document.getElementById("unit_width_str").innerHTML = sum_unit;
  document.getElementById("unit_height_str").innerHTML = sum_unit;

  if (sum_unit == "mm") {
    unit_curr = 1;
  } else if (sum_unit == "cm") {
    unit_curr = 10;
  } else if (sum_unit == "m") {
    unit_curr = 1000;
  }

  var BOX1 = jsDeleteComma(document.getElementById("length_str").value);
  var BOX2 = jsDeleteComma(document.getElementById("width_str").value);
  var BOX3 = jsDeleteComma(document.getElementById("height_str").value);
  var QTY = jsDeleteComma(document.getElementById("quantity_str").value);

  //mm로 환산
  if (BOX1 != "") {
    var U_BOX1 = BOX1 * unit_curr;
  } else {
    var U_BOX1 = 0;
  }
  if (BOX2 != "") {
    var U_BOX2 = BOX2 * unit_curr;
  } else {
    var U_BOX2 = 0;
  }
  if (BOX3 != "") {
    var U_BOX3 = BOX3 * unit_curr;
  } else {
    var U_BOX3 = 0;
  }
  //mm로 환산

  //높이 체크
  if (U_BOX3 > 2280) {
    alert(
      "높이는 2미터 28센티를 넘을 경우 계산이 제한됩니다.\n(※ HC, RF, FR, OT 등 스페셜 컨테이너는 별도 확인필요)"
    );
    document.getElementById("height_str").value = "";
  }
  //높이체크

  //폭 체크
  if (U_BOX2 > 2350) {
    alert(
      "폭이 2미터 35센티를 넘을 경우 계산이 제한됩니다.\n(※ HC, RF, FR, OT 등 스페셜 컨테이너는 별도 확인필요)"
    );
    document.getElementById("width_str").value = "";
  }
  //폭체크

  var CBM = (Number(U_BOX1) * Number(U_BOX2) * Number(U_BOX3)) / 1000000000;
  var CBM_SUM = CBM * QTY;
  var KG_SUM = (CBM / 0.006) * QTY;

  if (BOX1 != "" && BOX2 != "" && BOX3 != "") {
    document.getElementById("result_1").value = CBM_SUM.toFixed(3);
    document.getElementById("result_1").value = document
      .getElementById("result_1")
      .value.comma();

    document.getElementById("result_2").value = KG_SUM.toFixed(2);
    document.getElementById("result_2").value = document
      .getElementById("result_2")
      .value.comma();

    var FT_20 = 33 / Number(CBM.toFixed(3));
    document.getElementById("result_3").value = FT_20.toFixed(0);
    document.getElementById("result_3").value = document
      .getElementById("result_3")
      .value.comma();

    var FT_40 = 66 / Number(CBM.toFixed(3));
    document.getElementById("result_4").value = FT_40.toFixed(0);
    document.getElementById("result_4").value = document
      .getElementById("result_4")
      .value.comma();

    var HQ_40 = 77 / Number(CBM.toFixed(3));
    document.getElementById("result_5").value = HQ_40.toFixed(0);
    document.getElementById("result_5").value = document
      .getElementById("result_5")
      .value.comma();
  } else {
    document.getElementById("result_1").value = "";
    document.getElementById("result_2").value = "";
    document.getElementById("result_3").value = "";
    document.getElementById("result_4").value = "";
    document.getElementById("result_5").value = "";
  }

  if (document.getElementById("result_1").value == "In,fin,ity") {
    document.getElementById("result_1").value = "";
  }
  if (document.getElementById("result_2").value == "In,fin,ity") {
    document.getElementById("result_2").value = "";
  }
  if (document.getElementById("result_3").value == "In,fin,ity") {
    document.getElementById("result_3").value = "";
  }
  if (document.getElementById("result_4").value == "In,fin,ity") {
    document.getElementById("result_4").value = "";
  }
  if (document.getElementById("result_5").value == "In,fin,ity") {
    document.getElementById("result_5").value = "";
  }
}
