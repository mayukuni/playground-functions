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
  // let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  // let frase = ['foguete', 'não', 'tem', 'ré'];
  // let frase2 = ['captain', 'my', 'captain'];
  // let firstName = array[0];
  // let lastName = array.lastIndexOf()
  // if (array === nomes) {
  //   return firstName + lastName;
  // }
} 

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let points = winsPoints + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorNum = math.max(array)
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
