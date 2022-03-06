/*
var slideR = document.querySelector('#slideR');
var rgbTextR = document.querySelector('#rgbTextR');

var slideG = document.querySelector('#slideG');
var rgbTextG = document.querySelector('#rgbTextG');

var slideB = document.querySelector('#slideB');
var rgbTextB = document.querySelector('#rgbTextB');

var boxColor = document.querySelector('#boxColor');

function start() {
  //console.log('JS Funcionando');
  slideR.addEventListener('change', changeValues, false);
  slideG.addEventListener('change', changeValues, false);
  slideB.addEventListener('change', changeValues, false);

  changeValues();
}

function changeValues() {
  boxColor.style.backgroundColor =
    'rgb(' + slideR.value + ',' + slideG.value + ',' + slideB.value + ')';
  rgbTextR.value = slideR.value;
  rgbTextG.value = slideG.value;
  rgbTextB.value = slideB.value;
}

start();


let rangeR = null;
let textR = null;

let rangeG = null;
let textG = null;

let rangeB = null;
let textB = null;

let showColor = null;

let r = '0';
let g = '0';
let b = '0';

window.addEventListener('load', () => {
  console.log('JS funcionando');
  mapResults();
});

function mapResults() {
  rangeR = document.querySelector('#rangeR');
  textR = document.querySelector('#textR');

  rangeG = document.querySelector('#rangeG');
  textG = document.querySelector('#textG');

  rangeB = document.querySelector('#rangeB');
  textB = document.querySelector('#textB');

  showColor = document.querySelector('#showColor');

  //showColor.style.backgroundColor = 'yellow';

  rangeR.addEventListener('change', inputChange);
  rangeG.addEventListener('change', inputChange);
  rangeB.addEventListener('change', inputChange);
}

function inputChange(event) {
  const rangeValue = event.target.value;
  const rangeId = event.target.id;
  //console.log(rangeValue);
  switch (rangeId) {
    case 'rangeR':
      r = rangeValue;
      break;
    case 'rangeG':
      g = rangeValue;
      break;
    case 'rangeB':
      b = rangeValue;
      break;
  }
  syncAll();
}

function syncAll() {
  showColor.style.backgroundColor = `rgb(${r},${g},${b})`;

  textR.value = r;
  textG.value = g;
  textB.value = b;
}

*/

console.log('teste');
