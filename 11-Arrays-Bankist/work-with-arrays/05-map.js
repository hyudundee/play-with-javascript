'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1
const movementsUSD = movements.map(function(mov) {
  return mov * euroToUsd
})

console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd)
console.log(movementsUSDfor)

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
})

console.log(movementsDescriptions)