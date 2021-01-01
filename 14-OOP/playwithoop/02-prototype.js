'use strict'

const Person = function(firstName, birthYear) {
  // instance properties
  this.firstName = firstName
  this.birthYear = birthYear
}

// prototype inheritance
Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear)
}
console.log(Person.prototype)

const j = new Person('Jonas', 1991)
const m = new Person('Matila', 2018)

// because of prototype inheritance although j does not have the function calcAge, it can have access to that
console.log(j)
j.calcAge()
m.calcAge()

// not a property, but the prototype
console.log(j.__proto__)
console.log(j.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(j))


// should be called .prototypeLinkedObjectProperty
console.log(Person.prototype.isPrototypeOf(Person))
// property of instance only contains in itself
Person.prototype.species = 'Homo Sapiens'
console.log(j)
console.log(j.__proto__)
console.log(j.species)

console.log(j.hasOwnProperty('firstName'))
console.log(j.hasOwnProperty('species'))
