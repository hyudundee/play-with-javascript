'use strict'

const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal')

request.addEventListener('load', function() {
  console.log(this.responseText)
})

