var slideRed = document.querySelector('#slideRed');
var initialRed = document.querySelector('#initialRed');

var slideGreen = document.querySelector('#slideGreen');
var initialGreen = document.querySelector('#initialGreen');

var slideBlue = document.querySelector('#slideBlue');
var initialBlue = document.querySelector('#initialBlue');

var showColor = document.querySelector('#showColor');

function start() {
  slideRed.addEventListener('change', changeValues, false);
  slideGreen.addEventListener('change', changeValues, false);
  slideBlue.addEventListener('change', changeValues, false);

  changeValues();
}

function changeValues() {
  showColor.style.backgroundColor =
    'rgb(' +
    slideRed.value +
    ',' +
    slideGreen.value +
    ',' +
    slideBlue.value +
    ')';

  initialRed.value = slideRed.value;
  initialGreen.value = slideGreen.value;
  initialBlue.value = slideBlue.value;

  var rgbR = document.querySelector('#rgbR');
  rgbR.textContent = 'RGB : ' + slideRed.value;
  var rgbG = document.querySelector('#rgbG');
  rgbG.textContent = slideGreen.value;
  var rgbB = document.querySelector('#rgbB');
  rgbB.textContent = slideBlue.value;
}

start();
