const _ = require('lodash')

function abc(a, b, c) {
  return [a, b, c]
}

const curried = _.curryRight(abc)

console.log(
  curried(1)(2)(3) // 3, 2, 1
)

console.log(
  curried(2, 3)(1) // 1, 2, 3
)

console.log(
  curried(3)(_, 2)(1) // 1, 2, 3
)