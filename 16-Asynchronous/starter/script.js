'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `
  countriesContainer.insertAdjacentHTML('beforeend', html)
  // countriesContainer.style.opacity = 1
}


const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  // countriesContainer.style.opacity = 1
}
///////////////////////////////////////

// FIRST AJAX CALL: XMLHttpRequest

// const getCountryData = function(country) {
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send()
  
//   request.addEventListener('load', function() {
//     // console.log(this.responseText)
//     const [data] = JSON.parse(this.responseText)
//     console.log(data)
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
//   })
// }

// // we have three ajax calls here, whichever arrives first will fire the load event first
// // the order they appears might different from last time
// // to display them in certain order, we need to chain them, which causes the callback hell
// getCountryData('Portugal')
// getCountryData('China')
// getCountryData('United States')
// getCountryData('Germany')



////////////////////////////

//  WELCOME TO CALLBACK HELL

// we have 2 nested callbacks here to get neighbors,
// this will become terrible if we want to do getNeighbors 10 or more times
// then we will be in so called callback hell
// when we want to execute async tasks in sequence
// const getCountryAndNeighbor = function(country) {
 
//   // AJAX call country 1
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send()

//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText)
//     console.log(data)
    
//     // render country
//     renderCountry(data)

//     // GET neighbor countries
//     const [neighbor] = data.borders

//     if (!neighbor) return

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     request2.send()

//     request2.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText)
//       console.log(data2)

//       renderCountry(data2, 'neighbour')
//     })
//   })
// }

// getCountryAndNeighbor('China')

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


// Promises and the Fetch API
// const request = fetch('https://restcountries.eu/rest/v2/name/portugal')
// console.log(request)

// const getCountryData = function(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(function(response) {
//     console.log(response)
//     return response.json()
//   })
//   .then(function(data) {
//     console.log(data)
//     renderCountry(data[0])
//   })
// }

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal')
// console.log(request)

// promises still use callback, but it get rid of callback hell
// it chains them instead of nesting them






// const getCountryData = function(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(res => {
//     console.log(res)

//     if (!res.ok)
//       throw new Error(`Country not found ${res.status}`)

//     return res.json()
//   })
//   .then(data => {
//     renderCountry(data[0])

//     const neighbor = data[0].borders[0]

//     if (!neighbor) return 
//     // Country 2
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//   })
//   // then will be executed when the promise is fullfilled
//   .then(res => {
//     if (!res.ok)
//       throw new Error(`Country not found (${res.status}), try again!`)
//     return res.json()
//   })
//   .then(data => renderCountry(data, 'neighbour'))
//   // catch will only work when the promise is rejected
//   // but even it not work, it returns a promise
//   .catch(err => {
//     console.error(`${err} !`)
//     renderError(`Something went wrong ${err.message}`)
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   })
// } 

// btn.addEventListener('click', function() {
//   getCountryData('portugal')
// })






const getJSON = function(url, errMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errMsg} (${res.status})`)
    return res.json()
  })
}

const getCountryData = function(country) {
  // 
  getJSON(`https://restcountries.eu/rest/v2/name/${country}`, `Country not found`)
  .then(data => {
    renderCountry(data[0])

    const neighbor = data[0].borders[0]

    if (!neighbor) throw new Error(`No neighbor found!`)

    // Country 2
    return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`, `Country not found`)
  })
  // then will be executed when the promise is fullfilled
  .then(data => renderCountry(data, 'neighbour'))
  // catch will only work when the promise is rejected
  // but even it not work, it returns a promise
  .catch(err => {
    console.error(`${err} !`)
    renderError(`Something went wrong ${err.message}`)
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;
  })
} 

btn.addEventListener('click', function() {
  getCountryData('Australia')
})


// throw an Error will imediately reject current promise
// the the Error will travel down and get caught by the catch block




const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    )
  })
}

getPosition().then(pos => console.log(pos))