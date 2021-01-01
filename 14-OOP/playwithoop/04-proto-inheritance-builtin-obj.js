const arr = [3, 6, 4, 5, 6, 9, 9]

console.log(arr.__proto__) // built in methods in arr's prototype
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__) // arr.__proto__ is an object thus is also chained with object prototype

// in fact, the full name of '.filter()' is 'Array.prototype.filter()'
// the filter method lives in the property of the array constructor

// it is fun practice to add new method to array prototype, but not good practice for big project
Array.prototype.unique = function() {
  return [...new Set(this)]
}
console.log(arr.unique())
