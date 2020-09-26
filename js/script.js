window.addEventListener("load", start);

var rangeRed = document.querySelector("#rangeRed");
var rangeGreen = document.querySelector("#rangeGreen");
var rangeBlue = document.querySelector("#rangeBlue");

var inputTextRed = document.querySelector("#inputTextRed");
var inputTextGreen = document.querySelector("#inputTextGreen");
var inputTextBlue = document.querySelector("#inputTextBlue");

var rect = document.querySelector("rect");

var colorValues = [0, 0, 0];

function start() {
  rangeRed.addEventListener("input", changeRed);
  rangeGreen.addEventListener("input", changeGreen);
  rangeBlue.addEventListener("input", changeBlue);
}

function changeRed(event) {
  var redValue = event.target.value;
  inputTextRed.value = redValue;
  colorValues[0] = redValue;
  render();
}

function changeGreen(event) {
  var greenValue = event.target.value;
  inputTextGreen.value = greenValue;
  colorValues[1] = greenValue;
  render();
}

function changeBlue(event) {
  var blueValue = event.target.value;
  inputTextBlue.value = blueValue;
  colorValues[2] = blueValue;
  render();
}

function render() {
  function createRGBString() {
    return (
      "rgb(" +
      colorValues[0] +
      "," +
      colorValues[1] +
      "," +
      colorValues[2] +
      ")"
    );
  }
  console.log(createRGBString());
  rect.style.fill = createRGBString();
}
