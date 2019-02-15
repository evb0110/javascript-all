function sum() {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  }
  if (arguments.length == 1) {
    a = arguments[0];
    return function(b) {
      return a + b;
    }
  }
}

console.log(sum(5,2)); // 7
console.log(sum(5)(2)); // 7