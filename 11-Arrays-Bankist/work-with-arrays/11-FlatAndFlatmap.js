'use strict'

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// the .flat() only goes one level deep when flatenning the array by default
const A = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(A.flat())

const Adeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(Adeep.flat(1))
console.log(Adeep.flat(2))

const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements)
const allMovements = accountMovements.flat()
console.log(allMovements)

const sum = allMovements.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// using .map() first then using .flat() is a pretty common operation
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, cur) => acc + cur, 0)
console.log(overallBalance)

// flatMap is a combination of flatMap
// but flatMap() can only go to 
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0)
console.log(overallBalance2)