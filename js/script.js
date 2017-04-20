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
