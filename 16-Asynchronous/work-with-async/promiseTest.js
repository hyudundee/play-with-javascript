'use strict'

// pass in a executor to the promise object constructor
// encapsulate a asynchronous behavior into a promise

// const lotteryPromise = new Promise(function(resolve, reject) {
//   console.log(`Lottery draw is happening`)
//   setTimeout(function() {
//     if (Math.random() >= 0.5) {
//       resolve(`You win money`)
//     } else {
//       reject(new Error(`You lost money`))
//     }
//   }, 2000)
// })

// consume the promise

// lotteryPromise
//   .then(res =>  console.log(res))
//   .catch(err => console.log(err))

// promisifying => convert callback based async behavior to promise based

// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000)
//   })
// }

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`)
//     return wait(1)
//   })
//   .then(() => console.log(`I waited for 1 second`))

  
// callback hell, which featured a triangular shape of code lines
// code hard to understand is basically bad code, which will have more bugs
// in ES6, we could use promise to get rid of this callback hell
// setTimeout(() => {
//   console.log('1 second passed')
//   setTimeout(() => {
//     console.log('2 seconds passed')
//     setTimeout(() => {
//       console.log('3 seconds passed')
//       setTimeout(() => {
//         console.log('4 seconds passed')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)


// wait(1)
//   .then(() => {
//     console.log(`1 second passed`)
//     return wait(1)
//   })
//   .then(() => {
//     console.log(`2 second passed`)
//     return wait(1)
//   })
//   .then(() => {
//     console.log(`3 second passed`)
//     return wait(1)
//   })
//   .then(() => {
//     console.log(`4 second passed`)
//     return wait(1)
//   })
//   .then(() => {console.log(`5 seconds passed`)})

// static method, return a promise imediately
// Promise.resolve(`abc`).then(x => console.log(x))
// Promise.reject(`abc`).then(x => console.log(x))
// Promise.reject(`abc`).catch(x => console.error(x))



const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    )
  })
}

getPosition().then(pos => console.log(pos))
