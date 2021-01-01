'use strict'

const getJSON = function(url, errMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`)
    return res.json()
  })
}

// const get3Counteries = async function(c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
//     const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`)
//     const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
//     console.log(data1)
//     console.log([data1.capital, data2.capital, data3.capital])
//   } catch (err) {
//     console.error(err)
//   }
// }

// if one promise rejects, then all promises reject as well
// Promise.all() (combinator function)get all promises at the same time and operations don't depend on one another
// then should always choose to run the promises in parallel
const get3Counteries = async function(c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
    ])
    console.log(data)
    console.log(data.map(d => d[0].capital))
  } catch (err) {
    console.error(err)
  }
}

get3Counteries(`portugal`, `canada`, `tanzania`)
  