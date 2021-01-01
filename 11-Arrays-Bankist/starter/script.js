'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function(movements, sort = false) {
  // using innerHTML as a setter
  containerMovements.innerHTML = ''

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements
  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `
    // insert from the head, so the latter appears first, if use beforeend, then the oldest will appear first
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}


const calcDisplayBalance = function(acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  acc.balance = balance
  labelBalance.textContent = `${acc.balance} €`
}

const calcDisplaySummary = function(acc) {
  // deposit sum
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes} €`
  
  // withdrawal sum
  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)} €`

  // interest sum
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate/100)
    .filter((int, i, arr) => {
      console.log(arr)
      return int >= 1
    })
    .reduce((ac, int) => ac + int)
  labelSumInterest.textContent = `${interest}€`
}

// here uses side effect, which means do something but not return a new array, so we choose forEach() method
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)

const updateUI = function(acc) {
    // Display movements
    displayMovement(acc.movements)
    
    // Display balance
    calcDisplayBalance(acc)
    
    // Display summary
    calcDisplaySummary(acc)
}

// Event handler
let currentAccount

btnLogin.addEventListener('click', function(e) {
  // prevent form from submitting
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)

  // this is called optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1

    // Clear input fields, assign operatinon executes from right to left, inputLoginUsername will also be assigned to ''
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()
    // update UI
    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function(e) {
   e.preventDefault()
   const amount = Number(inputTransferAmount.value)
   const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
   inputTransferAmount.value = inputTransferTo.value = ''

   if (
     amount > 0 && 
     receiverAcc &&
     currentAccount.balance >= amount && 
     receiverAcc?.username !== currentAccount.username)
     {
       currentAccount.movements.push(-amount)
       receiverAcc.movements.push(amount)
       updateUI(currentAccount)
   }
})

// LOAN use some (say the bank gives loans to those who deposit at least once and to the 10% of the loan amount)
btnLoan.addEventListener('click', function(e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount)
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount)

    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})

// Close Account
btnClose.addEventListener('click', function(e) {
  e.preventDefault()
  if (
    inputCloseUsername.value === currentAccount.username && 
    Number(inputClosePin.value) === currentAccount.pin) {
      // pass in a condition and findIndex will return an index which meets this condition
      // indexOf() can only be used in array and is much simpler
      const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
      )

      // Delete Account
      accounts.splice(index, 1)

      // Hide UI
      containerApp.style.opacity = 0

      labelWelcome.textContent = `Log in to get started`
  }
  inputCloseUsername.value = inputClosePin.value = ''
})

let sorted = false
btnSort.addEventListener('click', function(e) {
  e.preventDefault()
  sorted = !sorted
  displayMovement(currentAccount.movements, sorted)
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
