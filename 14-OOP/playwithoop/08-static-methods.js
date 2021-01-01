'use strict'

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }
  
  // all the method written outside of the constructor will be on the prototype of the objects themselves
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  
  // this part works like a property, when it is executed a property is created
  get age() {
    return 2037 - this.birthYear
  }

  // set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
  }
  get fullName() {
    return this._fullName
  }
  // Static method, with keyword static, functions without the keyword are instance functions
  static hey1() {
    console.log('Hey there')
    console.log(this)
  }
}

const jessica = new PersonCL('Jessica Davis', 1996)
console.log(jessica.age)

// static methods are attached to entire constructor not in the objet prototype property
// so all the arrays don't inherit this method
// we can also say .from() method is in the Array name space

// whatever object is calling the function will be the "this" keyword inside the function
PersonCL.hey = function() {
  console.log('Hey there')
  console.log(this)
}

PersonCL.hey()
// jessica.hey() will not work
PersonCL.hey1()
