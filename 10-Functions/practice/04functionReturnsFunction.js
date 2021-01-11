'use strict'

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')

greet('Hello')('Peter')

// this could become very important in some situations, like in functional programming

const greet1 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`)
  }
}

const greetHi = greet1('Hi')
greetHi('Peter')


const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hi')('Haoran')