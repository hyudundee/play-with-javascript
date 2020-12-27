// each array here will be one entry in the map [key, value]
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// take the first as value, second as index, third as whole of an array
currencies.forEach(function(value, key, mp) {
  console.log(`${key}: ${value}`)
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']) // pass an iterable here
console.log(currenciesUnique)

// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`) // the key and the value are exactly the same
// })

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']) // pass an iterable here
console.log(currenciesUnique)

// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${value}: ${value}`) // this is cause error use "_" to replace key
// })

currenciesUnique.forEach(function(value, _, map) { // _ means a throw away variable
  console.log(`${value}: ${value}`) // the key and the value are exactly the same
})
// the set does not have key not have index, so the key makes no sense and does not need to be there, this is just out of keep forEach unified in list, map, and set