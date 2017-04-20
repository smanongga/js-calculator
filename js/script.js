//Global Variable
var tempString = [];
var logString = [];
var currentValue;
var operationValue;

window.onload = myCalculator;

function myCalculator() {
  document.getElementById("calculator-button").onclick = getButtonValue;
}
function getButtonValue(e) {
  if (e.target.className === 'number') {
    if(tempString.length > 0 && isNaN(tempString[tempString.length - 1]) === false) {
      var lastIndex = tempString[tempString.length-1] + e.target.id;
       tempString[tempString.length - 1] = lastIndex;
    }
    else {
    tempString.push(e.target.id)
    }
    document.getElementById("calculator-display").innerHTML = tempString.join("");
  }
}
