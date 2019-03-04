const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const [p, q] = input.split(/\n/).map(s => +s);

// =====================================
function isKaprekar(n) {
  const nSquareString = String(n * n);
  const lenLeft = nSquareString.length - String(n).length;
  const left = nSquareString.substring(0, lenLeft);
  const right = nSquareString.substring(lenLeft);

  const newN = [left, right].map(s => +s).reduce((a, b) => a + b);
  return n === newN;
}

function kaprekarNumbers(p, q) {
  const result = [];
  for (let i = p; i <= q; i++) {
    if (isKaprekar(i)) result.push(i);
  }
  if (result.length) {
    console.log (result.join(' '));
  } else {
    console.log('INVALID RANGE')
  }
}
// =====================================

kaprekarNumbers(p, q);
