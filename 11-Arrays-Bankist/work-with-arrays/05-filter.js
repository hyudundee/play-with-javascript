'use strict'

// function version
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const deposits = movements.filter(function(mov) {
  return mov > 0 // return a boolean value
})
console.log(deposits)

// for loop version
const depositsFor = []
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor)

// benefit of using funciton instead of for loop is we could chain methods together to get a big result

// exercise
const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals)