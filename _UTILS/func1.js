function not(fn) {
  return function negated(...args) {
    return !fn(...args)
  }
}

function composeRecursive(...f) {
  if (f.length === 1) return f
  if (f.length === 2) {
    return function(...args) {
      return f[0](f[1](...args))
    }
  }
  return composeRecursive(f[0], composeRecursive(...f.slice(1)))
}


function compose(...f) {
  function composeTwo(g, f) {
    return function composed(...args) {
      return g(f(...args))
    }
  }
  return f.reduceRight((acc, el) => composeTwo(el, acc))
}

module.exports = {not, compose}

