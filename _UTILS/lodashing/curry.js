const _ = require('lodash')

function abc(a, b, c) {
  return [a, b, c]
}

const curried = _.curry(abc)

// KS: strict currying
console.log(
  curried(1)(2)(3)
)

// KS: loose currying
console.log(
  curried(4, 5)(6)
)

console.log(
  curried(_, _, 3)(1, 2) // 1, 2, 3
)