'use strict'

// DOM manipulation

// read the content of the element
console.log(document.querySelector('.message').textContent);

// change the content of the element
document.querySelector('.message').textContent = 'Correct Number'

// log new content
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
