'use strict'

console.log([1, 2, 3, 4, 5])
console.log(new Array(1, 2, 3, 4, 5))

const x = new Array(7)
console.log(x)
// x.fill(1)
// console.log(x) // mutate the underlying array

// x.fill(1, 3)
console.log(x)

x.fill(1, 3, 4)
console.log(x)

const y = Array.from({ length: 7 }, () => 7)
console.log(y)

const z = Array.from({ length: 7 }, (cur, i) => i+1)
console.log(z)

const a = Array.from({ length: 7 }, (_, i) => i+1)
console.log(a)