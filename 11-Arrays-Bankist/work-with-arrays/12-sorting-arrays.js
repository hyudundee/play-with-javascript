'use strict'

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort())
console.log(owners)

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// sort is based on strings by default
console.log(movements.sort())
// ascinding order
console.log(movements.sort((a, b) => a - b))
// descinding order
console.log(movements.sort((a, b) => b - a))