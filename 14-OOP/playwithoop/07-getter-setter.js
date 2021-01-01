'use strict'

// getter, setter are called accessor properties
// other properties are called data properties

const account = {
  owner: 'Peter',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop()
  },
  // each setter method must has one parameter
  set latest(mov) {
    this.movements.push(mov)
  }
}


console.log(account.latest)
// account.latest(40) // this is wrong, it is a property not a function
// just like setting other property
account.latest = 50
console.log(account.latest)
console.log(account.movements)


// getters and setters in class
// class declaration
// they can be used for validations, like in line 49 .includes(' ')
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
}

const jessica = new PersonCL('Jessica Davis', 1996)
console.log(jessica.age)

// static methods are attached to entire constructor not in the objet prototype property
// so all the arrays don't inherit this method
// we can also say .from() method is in the Array name space