'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const movements1 = [200, 450, 3000, 70, 1300]

// EQUALITY
console.log(movements.includes(-130))
// use some
console.log(movements.some(mov => mov === -130))

// SOME: CONDITION
const anyDeposits = movements.some(move => move > 0)
console.log(anyDeposits)

// EVERY
console.log(movements.every(mov => mov > 0))
console.log(movements1.every(mov => mov > 0))

// Seperate callback
// more to the DRY principle, don't repeat yourself
const deposit = mov => mov > 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))