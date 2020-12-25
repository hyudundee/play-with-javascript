const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`)
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// }

// like for i, v in enumerate(arr): in python
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

console.log('------FOREACH------')
// what passed in forEach include the array itself, the index and the element
movements.forEach(function(mov, i, arr) { // the order matter not the name, remember it
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
  }
})

// !!!! difference, you cannot break in a forEach loop !!!!

/**
 * 0: function(200)
 * 1: function(450)
 * 2: function(400)
 * ...
 * we use call back function to tell higher order function on what to do
 */
