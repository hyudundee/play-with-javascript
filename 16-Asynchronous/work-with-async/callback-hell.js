const getCountryAndNeighbor = function(country) {
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
  request.send()

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText)
    console.log(data)
  })
}

getCountryAndNeighbor('China')


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
