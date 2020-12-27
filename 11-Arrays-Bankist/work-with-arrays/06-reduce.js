'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// accumulator -> SNOWBALL
const balance = movements.reduce(function(acc, mov, i, arr) {
  console.log(`Iteration ${i}: ${acc}`)
  return acc + mov
}, 0)
console.log(balance)

// from 0 -> from 100
const balance1 = movements.reduce(function(acc, mov, i, arr) {
  console.log(`Iteration ${i}: ${acc}`)
  return acc + mov
}, 100)
console.log(balance1)

// using for loop
let balance2 = 0
for (const mov of movements) balance2 += mov
console.log(balance2)

// using arrow function
const balance3 = movements.reduce((acc, mov) => acc + mov)
console.log(balance3)

// because reduce boils down the array to a single value, so
// other use of reduce -> get maximum value
// this is by far the most powerful and hardest array method, but required thinking on what we want on the acc, and cur and how they interact

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc
  else return mov
}, movements[0])
console.log(max)

const min = movements.reduce((acc, mov) => acc < mov ? acc : mov, movements[0])
console.log(min)