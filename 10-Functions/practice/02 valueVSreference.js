'use strict'

const flight = 'LH324'
const peter = {
  name: 'Peter Yu',
  passport: 23478674683,
}

const checkIn = function(flightNum, passenger) {
  // Although the value is passed in, flightNum inside the function is a completely different variable
  flightNum = 'LH999'
  passenger.name = 'Mr. ' + passenger.name

  if (passenger.passport === 23478674683) {
    console.log('Checked in')
  } else {
    console.log('Wrong passport!')
  }
}

checkIn(flight, peter)
console.log(flight)
console.log(peter)

// copying primitive type is making a copy
const flightNum = flight
// copying reference to the object in the memoery heap
const passenger = peter

const a = Math.random() * 100000
console.log(a)
console.log(Math.trunc(a))

// javaScript pass value not reference
// but for object, JS pass by reference, because the reference is passed in as the value

// functons are treated as object, they are also values in JS 

// first class function are values
// higher order functions exist because the language supports first class functions