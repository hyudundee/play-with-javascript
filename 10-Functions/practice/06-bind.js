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

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}

const book = lufthanza.book;
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthanza)
const bookLX = book.bind(swiss)
bookEW(23, 'Steven Williams')

// this is called partial application
const bookEW23 = book.bind(eurowings, 23)
bookEW23('Peter Yu')
bookEW23('Martha Cooper')
console.log(eurowings)