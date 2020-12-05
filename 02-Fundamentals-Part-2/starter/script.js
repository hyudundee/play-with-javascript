'use strict'

/*
// functions
function logger() {
  console.log('my name is haoran')
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
console.log(fruitProcessor(5, 1))

const num = Number('23')
console.log(num);
*/

// can call a function declaration before the code define it, but cannot do this to expression, this is because of hoisting
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2)
