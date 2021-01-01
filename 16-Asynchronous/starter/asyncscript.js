// 'use strict'

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
  countriesContainer.style.opacity = 1
}

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  // countriesContainer.style.opacity = 1
}

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// async await is synthetic sugar over consuming promises, just like class in javaScript
const whereAmI = async function() {   
  try {
    // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(data => data.json()).then(res => console.log(res))

    // Geolocation
    const pos = await getPosition()
    const { latitude: lat, longitude: lng } = pos.coords
    
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    const dataGeo = await resGeo.json()
    
    // Country data
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`)
    if (!resGeo.ok) throw new Error(`Problem getting country`)
    const data = await res.json()
    console.log(data)
    renderCountry(data[0])
  } catch (err) {
    console.error(`${err} errors logged by us`)
    renderError(`Something went wrong`)

    // Reject promise returned from async function
    throw err
  }  
};

// use IIFE to get back to async and await way
// IIFE => immediately-invoked function expressions
// IIFE 前后一定要加 ';'
(async function() {
  try {
    const city = await whereAmI()
    console.log(`2: ${city}`)
  } catch (err) {
    console.log(`2: ${err.message}`)
  }
  console.log(`3: Finished getting location`)
})();

// // When errors occur, because of the catch block, the return promise is still fullfilled
// // to fix that, we need to rethrow the error in the code (line57 return in the catch block)
// // doing this mixes the philosophy of async await with .then and .catch
// console.log(`1: Will get location`)
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`))


// // returns a pending promise
// const city = whereAmI()
// console.log(city

console.log(`4: Finished getting location`)
// console.log('FIRST') // to validate that async is actually async function