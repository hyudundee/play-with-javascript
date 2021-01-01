'use strict'

// The two most import methods are Promise.all() and Promise.any()

const getJSON = function(url, errMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`)
    return res.json()
  })
};

// Promise.race
// the promise returned by Promise.race settles as soon as one promise settles
// settle means one of the value becomes available either rejected or fullfilled
(async function() {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`)
  ])
  console.log(res[0])
})()


// usage of Promise.race(), stop promises that takes too long time to complete
const timeout = function(sec) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error(`Request took too long!`))
    }, sec * 1000)
  })
}

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
  timeout(0.1)
])
.then(res => console.log(res))
.catch(err => console.error(err))



// Promise.allSettled (from ES2020)
// Promise.all will short curcit when one promise rejects, but .allSettled() will not
// it will returns all the results of all the promises
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
]).then(res => console.log(res))


Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err => console.error(err))

// Promise.any [ES2021]
// this works like Promise.race, but ignores rejected promises
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
])
.then(res => console.log(res, "from Promise.any()"))
.catch(err => console.error(err))