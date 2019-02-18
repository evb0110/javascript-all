const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

function lineToNumbers(line) {
  return line.split(/\s+/).map(str => Number(str));
}

const queries = lines.map(lineToNumbers).slice(1);

function processQuery([x, y, z]) {
  const left = Math.abs(x - z);
  const right = Math.abs(y - z);
  if (left == right) return 'Mouse C';
  return left < right ? 'Cat A' : 'Cat B';
}

function processAll(queries) {
  return queries.map(processQuery);
}

console.log(processAll(queries));