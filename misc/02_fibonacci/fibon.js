function makeFibonacci() {
  const memo = [0, 1];

  return function fibonacci(n) {
    if (n < 2) {
      return n
    }
    if (memo[n] == undefined) {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return memo[n]
  }
}

const fib = makeFibonacci();

for (let i = 0; i < 40; i++) {
  console.log(`${i}: ${fib(i)}`)
}