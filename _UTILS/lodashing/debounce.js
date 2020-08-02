const _ = require('lodash')

function logTime() {
  const now = new Date()
  console.log(now.getSeconds() + '.' + now.getMilliseconds())
}

const debounced = _.debounce(logTime, 1000, {trailing: true})

logTime()
debounced()
debounced()
debounced()
debounced()
logTime()
debounced()