const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);
const g = +lines[0];
const b = lines[1];

// ==========================================
function hasSingulars(str) {
  const histogram = [...str].reduce((acc, el) => {
    acc[el] = ++acc[el] || 1;
    return { ...acc };
  }, {});
  return !!Object.entries(histogram)
    .filter(entry => entry[0] !== '_')
    .filter(entry => entry[1] === 1).length;
}

function isHappy(b) {
  return [...b].reduce((acc, el, i, arr) => {
    if (el === '_') return acc;
    return acc && (el === arr[i - 1] || el === arr[i + 1]);
  }, true);
}

function happyLadybugs(b) {
  if (hasSingulars(b)) return 'NO';
  if (isHappy(b)) return 'YES';
  if (b.includes('_')) return 'YES';
  return 'NO'
}
// ==========================================

console.log(happyLadybugs(b));
