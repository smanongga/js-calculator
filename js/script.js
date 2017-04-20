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
  if (e.target.className === 'operation' && e.target.id != "=" && currentValue === undefined) {
    operationValue = e.target.id ;
    if(tempString[tempString.length - 1] === "-" || tempString[tempString.length - 1] === "/" || tempString[tempString.length - 1] === "*" || tempString[tempString.length - 1] === "+") {
    tempString.splice(-1,1);
    tempString.push(operationValue);
    }
    else {
       tempString.push(operationValue);
    }
    document.getElementById("calculator-display").innerHTML = tempString.join("");
  }
  if (e.target.className === 'operation' && e.target.id != "=" && currentValue != undefined) {
    tempString.push(currentValue);
    operationValue = e.target.id ;
    if(tempString[tempString.length - 1] === "-" || tempString[tempString.length - 1] === "/" || tempString[tempString.length - 1] === "*" || tempString[tempString.length - 1] === "+") {
    tempString.splice(-1,1);
    tempString.push(operationValue);
    }
    else {
       tempString.push(operationValue);
    }
    console.log(tempString);
    document.getElementById("calculator-display").innerHTML = tempString.join("");
  }
}
