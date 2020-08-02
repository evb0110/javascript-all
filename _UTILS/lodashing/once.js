const _ = require('lodash')

function sum(a, b) {
  return a + b
}

const onceSum = _.once(sum)

console.log(
  onceSum(1, 2)
)

console.log(
  onceSum(3, 4)
)
