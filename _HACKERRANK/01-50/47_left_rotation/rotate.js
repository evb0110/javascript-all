const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [[_, d], a] = lines.map(lineToNumbers);

function rotateLeft(d, a) {
  const n = a.length;
  const aRotated = a.map((el, i, arr) => {
    return arr[(i + d) % n];
  });
  console.log(aRotated.join(' '))
}

rotateLeft(d, a);