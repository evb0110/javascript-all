const fs = require('fs');
const arr = fs
  .readFileSync('input.txt', 'utf8')
  .trim()
  .split(/\s+/)
  .map(n => +n);

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  const pairsArr = arr.slice(1).map((el, i) => [arr[i], el]);
  const min = Math.min(...pairsArr.map(pair => pair[1] - pair[0]));
  const minPairs = pairsArr.filter(pair => pair[1] - pair[0] === min);
  const result = [];
  for (const minPair of minPairs) {
    result.push(...minPair);
  }
  return result;
}

console.log(closestNumbers(arr));
