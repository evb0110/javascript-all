const _ = require('lodash')

function doSomething() {
  console.log('doing something')
}

const do3Something = _.after(3, doSomething)
console.log('before')
do3Something()
console.log('after1')
do3Something()
console.log('after2')
do3Something()
console.log('after3')
do3Something()
console.log('after4')

// Если не поставить once, после 3-го раза функция будет вызываться постоянно
// const do3Something = _.after(3, _.once(doSomething))