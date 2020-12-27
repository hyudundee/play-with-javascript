'use strict'

const user = 'Steven Thomas Williams' // stw

const createUsernames = function(user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('')
  return username
}

console.log(createUsernames(user))
