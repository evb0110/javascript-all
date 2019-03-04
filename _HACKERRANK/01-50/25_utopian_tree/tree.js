const numbers = require('fs').readFileSync('input.txt', 'utf8').split(/\n/).map(str => Number(str));



function utopianTree(n) {
  if (n == 0) return 1;
  if (n % 2) return 2 * utopianTree(n - 1);
  return 1 + utopianTree(n - 1);
}

console.log(numbers);

console.log(numbers.slice(1).map(utopianTree))