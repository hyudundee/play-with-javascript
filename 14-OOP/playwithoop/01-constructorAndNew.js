'use strict'

// arrow function will not work here because of lack of this key word
// javascript does not have real class, instead, only constructor function
const Person = function(firstName, birthYear) {
  console.log(this)
  // instance properties
  this.firstName = firstName
  this.birthYear = birthYear
}

// function constructors are not really a feature of js, instead, a pattern developed by other developers
// real magic here is about the new operator
const j = new Person('Jonas', 1991)
console.log(j)
const m = new Person('Matila', 2018)
console.log(m, j)

console.log(j instanceof Person)