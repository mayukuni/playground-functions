// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } 
  return false;
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

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let points = winsPoints + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorNum = Math.max(...array);
  let quantidade = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum === array[index]) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOne = Math.abs(mouse - cat1);
  let catTwo = Math.abs(mouse - cat2);
  if (catOne > catTwo) {
    return 'cat2';
  } else if (catTwo > catOne) {
    return 'cat1';
  } else if (catOne === catTwo) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array2[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      array2[index] = 'buzz';
    } else if (array[index] % 3 === 0) {
      array2[index] = 'fizz';
    } else {
      array2[index] = 'bug!';
    } 
  }
  return array2;
}

// Desafio 9
function encode(string) {
  let string2 = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string2 += '1';
    } else if (string[index] === 'e') {
      string2 += '2';
    } else if (string[index] === 'i') {
      string2 += '3';
    } else if (string[index] === 'o') {
      string2 += '4';
    } else if (string[index] === 'u') {
      string2 += '5';
    } else {
      string2 += string[index];
    }
  } return string2; 
}

function decode(string3) {
 let string4 = '';
  for (let index = 0; index < string3.length; index += 1) {
    if (string3[index] === '1') {
      string4 += 'a';
    } else if (string3[index] === '2') {
      string4 += 'e';
    } else if (string3[index] === '3') {
      string4 += 'i';
    } else if (string3[index] === '4') {
      string4 += 'o';
    } else if (string3[index] === '5') {
      string4 += 'u';
    } else {
      string4 += string3[index];
    }
  } return string4; 
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
