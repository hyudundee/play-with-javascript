let arr = [1, 2, 3, 4, 5]

// >>>>> SLICE METHODS not affact original array

// slice with only start index
console.log(arr.slice(2))
// return a new array, omit the last element so the length is 4 - 2
console.log(arr.slice(2, 4))
// extract last 2 elements
console.log(arr.slice(-2))
// extract the last elements
console.log(arr.slice(-1))
// start from idx1 omit the last two element
console.log(arr.slice(1, -2))
// create shallow copy
// using .slice(), often used when we want to chain multiple methods together
console.log(arr.slice())
// using spread operator
console.log([...arr])


// >>>>> SPLICE methods operates the original array

// used when we want to delete elements from an array
// console.log(arr.splice(2)) // splice deleted the original elements from the array
console.log(arr.splice(-1))
console.log(arr.splice(1, 2)) // from index 1 delete 2 elements
console.log(arr)

// to learn more always go to MDN web docs


// >>>>> REVERSE

let arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 4, 3, 2, 1]
console.log(arr2.reverse()) // operates the original array
console.log(arr2)

// CONCAT
// does not mutate the original array
const NUMBERS = arr1.concat(arr2)
console.log(NUMBERS)
console.log([...arr1, ...arr2])


// JOIN
console.log(NUMBERS.join(' -> '))