function not(fn) {
  return function negated(...args) {
    return !fn(...args)
  }
}

function compose(...f) {
  if (f.length === 1) return f
  if (f.length === 2) {
    return function(...args) {
      return f[0](f[1](...args))
    }
  }
  return compose(f[0], compose(...f.slice(1)))
}

module.exports = {not, compose}