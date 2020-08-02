const _ = require('lodash')

function greet(greeting, name) {
  return `${greeting} ${name}!`
}

const greetFred = _.partialRight(greet, 'Fred')

console.log(
  greetFred('Hi')
)

const sayHelloTo = _.partialRight(greet, 'Hello', _)
console.log(
  sayHelloTo('John')
)