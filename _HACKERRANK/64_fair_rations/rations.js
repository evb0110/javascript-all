const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const b = input
  .split(/\n/)[1]
  .split(/\s+/)
  .map(s => +s);

// ==========================
function fairRations(b) {
  if (sum(b) % 2) return 'NO';
  const oddIndices = makeOddIndices(b);
  let oddDiffs = 0;
  for (let i = 0; i < oddIndices.length; i += 2) {
    const diff = oddIndices[i+1] - oddIndices[i];
    oddDiffs += diff;
  }
  return oddDiffs * 2;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

function makeOddIndices(arr) {
  return arr.reduce((acc, el, i) => {
    if (el % 2) return [...acc, i];
    return acc;
  }, []);
}
// ==========================

console.log(fairRations(b));
