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
