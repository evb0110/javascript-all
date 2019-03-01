const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const a = input
  .split(/\n/)[1]
  .split(/\s+/)
  .map(s => +s);


// =====================================
function arrayToStats(a) {
  const result = a.reduce((acc, el, i) => {
    const newMap = new Map(acc);
    if (newMap.has(el)) {
      newMap.set(el, [...newMap.get(el), i]);
    } else {
      newMap.set(el, [i]);
    }
    return newMap;
  }, new Map());
  return result;
}

function minimalDistance(arr) {
  return arr.reduce((acc, el, i, ar) => {
    return Math.min(acc, (ar[i + 1] || Infinity) - el);
  }, Infinity);
}

function minimumDistances(a) {
  const stats = arrayToStats(a);
  let result = Math.min(...Array.from(stats.values()).map(minimalDistance));
  if (result == Infinity) {result = -1};
  return result;
}
// =====================================

console.log(minimumDistances(a));
