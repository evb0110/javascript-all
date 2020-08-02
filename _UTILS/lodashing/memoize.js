const _ = require('lodash')

let john = {name: 'John', age: 40}

const s = _.memoize(o => o.age)

console.log(
  s(john) // 40
)

john.age = 41

console.log(
  s(john) // 40
)

s.cache.clear() // or s.cache.delete(john)
console.log(
  s(john) // 41
)