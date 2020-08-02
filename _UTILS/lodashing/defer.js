const _ = require('lodash')

_.defer(() => console.log('in deferred'))
console.log('after deferred')

setTimeout(() => console.log('in timeout'), 0)