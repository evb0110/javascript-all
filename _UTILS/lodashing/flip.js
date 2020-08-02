const _ = require('lodash')

function foo(a, b, c, d) {
  return [a, b, c, d]
}

console.log(
  _.flip(foo)(1, 2, 3, 4)
)
