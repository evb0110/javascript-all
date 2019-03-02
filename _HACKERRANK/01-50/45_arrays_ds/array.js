const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const a = input.split(/\n/)[1].split(/\s+/).map(str => Number(str));

function printReverse(arr) {
  return arr.reverse();
}