const _ = require('lodash')

function greet(greeting, name) {
  return greeting + ' ' + name
}

const sayHelloTo = _.partial(greet, 'Hello')
console.log(
  sayHelloTo('John')
)

const greetJohn = _.partial(greet, _, 'John')
console.log(
  greetJohn('Hi')
)