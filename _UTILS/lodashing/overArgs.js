const _ = require('lodash')

function doubled(x) {
  return x + x
}

function squared(x) {
  return x * x
}

function ab(a, b) {
  return [a, b]
}

const func = _.overArgs(ab, [doubled, squared])

console.log(
  func(1, 3)
)