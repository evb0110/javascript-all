const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const stones = input.split(/\n/);

function gemstones(arr) {
  const result = arr.reduce((acc, stone) => intersect(acc, stone));
  return (new Set(result)).size;
}

function intersect(stone1, stone2) {
  return [...stone1].filter(l => stone2.includes(l));
}

console.log(gemstones(stones))