const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const data = lines.map(lineToNumbers);

for (datum of data) {
  console.log(squares(...datum));
}

// ==================

function squares(a, b) {
  const result = [];
  const start = Math.ceil(Math.sqrt(a));
  for (let i = start; i * i <= b; i++) {
    result.push(i);
  }
  return result.length;
}


// ==================

// console.log(squares(4, 20))