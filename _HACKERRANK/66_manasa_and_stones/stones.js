const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const [n, a, b] = input.split(/\n/).map(s => +s);

function stones(n, a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  if (min === max) return [min * (n - 1)];
  const result = [];
  for (let i = 0; i <= n - 1; i++) {
    // number of stones with a
    const sum = i * max + (n - 1 - i) * min;
    result.push(sum);
  }
  return result;
}

console.log(stones(n, a, b));
