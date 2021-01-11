'use strict'

const runOnce = function() {
  console.log(`This will never run again`)
}

// we can call this function other places in the code
runOnce();

// use bracket, the function statement is transformed into an expression
(function() {
  console.log(`This will never run again`)
})();

//  using arrow functions
(() => console.log(`This will ALSO never run again`))()

// functions have scopes, one space has no access to a variable from an inner scope
// but the inner scope has access to variables defined in outer scope
// all data defined in a scope is private, or to say encapsulated

// it is important to hide variables, and scopes are very good tools to do this

{
  const isPrivate = 23
  var notPrivate = 46
}

console.log(notPrivate)
console.log(isPrivate)