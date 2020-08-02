const _ = require('lodash')

function greet(greeting, title, punctuation) {
  return greeting + ' ' + title + ' ' + this.user + punctuation
}

const person = {
  user: 'John'
}

const boundGreet = _.bind(greet, person, _, _, '!')
const res = boundGreet('hello', 'Mr') // hello Mr John!
console.log(res)