'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const euroToUsd = 1.1


// we can chain them together because the data returned by current method can be directly used by following method
// they chained together like a PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD)


// to debug the chain
console.log(movements)
const totalDepositsUSD1 = movements
  .filter(mov => mov < 0)
  // .map((mov) => mov * euroToUsd)
  .map((mov, i, arr) => {
    console.log(arr)
    return mov * euroToUsd
  })
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD1)
// so the problem is in the chained method before the current method
// in this case, the problematic array is the array returned as movement.filter()


// 1 too many chains can make the performance bad, so optimize when there are chains that could be merged
// 2 it is bad practice to chain methods that will mutate the underlying original array, for example, the splice method
//   in big project, it is always good to avoid mutating original array in this way