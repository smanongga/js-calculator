//Global Variable
var tempString = [];
var logString = [];
var currentValue;
var operationValue;

window.onload = myCalculator;

function myCalculator() {
  document.getElementById("calculator-button").onclick = evalButton;
}
function evalButton(e) {
  if (e.target.className === 'operation') {
    processOperation(e.target.id);
  }
  if (e.target.className === 'number') {
    processNumber(e.target.id);
  }
  if (e.target.className === 'clear') {
    clear();
  }
  if (e.target.className === 'percentage') {
    processPercentage();
  }
}
function processOperation(e) {
    if(tempString[tempString.length - 1] === "-" || tempString[tempString.length - 1] === "/" ||
       tempString[tempString.length - 1] === "*" || tempString[tempString.length - 1] === "+") {
        tempString.splice(-1,1,e);
      }
     else {
        tempString.push(e);
    }
    document.getElementById("calculator-display").innerHTML = tempString.join("");
}
function processNumber(e) {
    if(tempString.length > 0 && isNaN(tempString[tempString.length - 1]) === false) {
      var lastIndex = tempString[tempString.length - 1] + e;
       tempString[tempString.length - 1] = lastIndex;
    }
    else {
    tempString.push(e);
    }
    document.getElementById("calculator-display").innerHTML = tempString.join("");
}
function clear() {
    tempString =[];
    document.getElementById("calculator-display").innerHTML = tempString.join("");
}
function processPercentage() {
    tempString.splice(-1,1,tempString[tempString.length - 1] / 100);
    document.getElementById("calculator-display").innerHTML = tempString.join("");
}
