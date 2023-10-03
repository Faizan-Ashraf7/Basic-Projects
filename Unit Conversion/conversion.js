function lengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML = valNum/3.2808;
  document.getElementById("outputCM").innerHTML = valNum*30.48;
}

function timeConverter(valNum) {
  document.getElementById("outputSeconds").innerHTML = valNum * 3600;
}

function weightConverter(valNum) {
  document.getElementById("outputPounds").innerHTML = valNum * 2.20462;
}

function tempConverter(valNum) {
  document.getElementById("outputKelvin").innerHTML = parseInt(valNum) + 273 ;
  document.getElementById("outputFahrenheit").innerHTML = (parseInt(valNum) * (9/5)) + 32;
}