'use strict'
const secureBooking = function() {
  let passengerCount = 0
  return function() {
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
}

// closure makes a function remember all the variables that existed at the function's birthplace
// the closure has priority over the scope, so when booker is called, the engine will first check out the scope to check if there is variable called passengerCount before check the scope, it will also firstly use the variable in the scope
const booker = secureBooking()

booker()
booker()
booker()
// console.log(passengerCount)

console.dir(booker)
// variables surrounded by [[]] means internal property that cannot be accessed from our code