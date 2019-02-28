const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const c = input.split(/\n/)[1].split(/\s+/).map(str => Number(str));

console.log(c);

// =======================
function getNextIndex(i, c) {
  if (c[i + 2] != 0) return i + 1;
  return i + 2;
}

function jumpingOnClouds(c) {
  let i = 0;
  let count = 0;
  while (i < c.length - 1) {
    i = getNextIndex(i, c);
    count++
  }
  return count;
}
// =======================

const result = jumpingOnClouds(c);
console.log(result);
