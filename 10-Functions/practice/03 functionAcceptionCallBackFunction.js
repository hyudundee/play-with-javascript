'use strict'

const oneWord = function(str) {
  // to select all the spaces we need regular expression with g flag
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) {
  // spread operator and destructive assignment
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
}

// this is a layer of abstraction, the transformer doesn't care what the input function works
// this part is supper important
const transformer = function(str, fn) {
  console.log(`Original String: ${str}`)
  console.log(`Transformed string ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`)
}

// upperFirstWord and oneWord are callback functions, they are not called directly by us, but by the transform functions
transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)
