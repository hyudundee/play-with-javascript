'use strict'
// classes are sythetic sugar in JS, behind them, is the functions

// class expression
// const PersonCL = class {}

// class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
  // all the method written outside of the constructor will be on the prototype of the objects themselves
  calcAge() {
    console.log(2037 - this.birthYear)
  }
}

const Jessica = new PersonCL('Jessica', 1996)
console.log(Jessica)
Jessica.calcAge()

console.log(Jessica.__proto__ === PersonCL.prototype)

// we can also add method manually to its prototype
PersonCL.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`)
}
Jessica.greet()

// 1. Classes are NOT hoisted, cannot use them before declaration
// 2. Classes are first-class citizens, (equal as functions, can be passed in and return from a function)
// 3. Classes are executed in strict mode

// it is fine to use classes in JS, but one must understand prototype and prototypal inheritance
// because function constructors sometimes are messy