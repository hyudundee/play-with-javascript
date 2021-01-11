'use strict'

const lufthanza = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // enhanced object literal syntax
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
}

lufthanza.book(239, 'Peter Yu')
lufthanza.book(635, 'John Smith')
console.log(lufthanza)
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

// manually modify the 'this' keyword with call() method

// in a regular function call, the 'this' keyword points to undefined
// at least in strict mode
// book is no longer a method, it becomes a function
// so the 'this' keyword depends on how the function is called
const book = lufthanza.book;
// Does not work
// book(23, 'Sarah Wiliams')

// functions are also objects which have functions
// the first argument is what we want 'this' keyword points to
// we called the call() method, and then the call method will call the book function with 'this' keyword set to eurowings, after the first argument, all the other arguments are arguments of the original function
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthanza, 239, 'Mary Cooper')
console.log(lufthanza)

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss)


// apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

// so do handle list input we could just use spread operator
// then spread the elements from the array
book.call(swiss, ...flightData)