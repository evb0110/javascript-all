const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumber = line => line.split(/\s+/).map(str => Number(str));

const [[_, k], height] = lines.map(lineToNumber);

console.log(k, height);

function hurdleRace(k, height) {
  const max = Math.max(...height);
  const diff = max - k;
  return diff > 0 ? diff : 0;
}

console.log(hurdleRace(k, height))