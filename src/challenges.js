// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
} 

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
} 

//Desafio 4
function concatName(array) {
 let firstName = array[0];
 let lastName = array[array.length - 1];
 return lastName + ", " + firstName 
} 

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let points = winsPoints + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorNum = Math.max(...array)
  let quantidade = 0
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum === array[index]) {
    quantidade += 1;
    }
  }
  return quantidade;
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return 'cat2';
  } else if (mouse - cat2 < mouse - cat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
