'use strict'
// j => Person.prototype => object.prototype
// works like scope chain

const Person = function(firstName, birthYear) {
  // instance properties
  this.firstName = firstName
  this.birthYear = birthYear
}

// prototype inheritance
Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear)
}
Person.prototype.species = 'Homo Sapiens'

const j = new Person('Jonas', 1991)

console.log(j.__proto__)                       // person proto
console.log(j.__proto__.__proto__)             // object proto
console.log(j.__proto__.__proto__.__proto__)   // null

// points back to the Person
console.log(Person.prototype.constructor)
console.dir(Person.prototype.constructor)

// any function is also an object, thus has a prototype
