'use strict'

// Example 1
let f

const g = function() {
  const a = 23
  f = function() {
    console.log(a * 2)
  }
}

// f reborned in h, so its closure also changed
const h = function() {
  const b = 777
  f = function() {
    console.log(b * 2)
  }
}


// reassigned functions instead returning them will also creates closures
g()
f()
// console.dir(f) // in the closure f no longer has a
h()
f()
// console.dir(f) // in the closure f no longer has a


// Example 2

const boardPassengers = function(n, wait) {
  // const perGroup = n / 3 // if this line is commented, then the perGroup in scope will be used

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`)
    console.log(`There are 3 groups, each with ${perGroup} passengers`)
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`)
}

// closure has higher prority over scope variables
const perGroup = 10000
boardPassengers(180, 3)















