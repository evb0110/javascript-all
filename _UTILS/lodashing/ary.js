const _ = require('lodash')

// parseInt(string [, radix])

const res = _.map(['6', '8', '10'], _.ary(parseInt, 1));
// const res = _.map(['6', '8', '10'], parseInt); Error

console.log(res)