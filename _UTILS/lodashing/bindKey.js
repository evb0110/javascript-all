const _ = require('lodash')

const john = {
  user: 'john',
  greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation
  }
}

const bound = _.bindKey(john, 'greet', _, '!')

console.log(
  bound('hi') // hi john!
)