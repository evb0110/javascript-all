const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const parts = input.split('\n');

const ar = parts[1].split(' ').map(el => Number(el));

const result = ar.reduce((acc, el) => {
  let accNew = {...acc}
  if (el > acc.max) {
    accNew.max = el;
    accNew.count = 1;
  } else if (el == acc.max) {
    accNew.count++;
  }
  return accNew;
}, { max: -Infinity, count: 0 });

console.log(result.count)

console.log(ar.filter(el => el == Math.max(...ar)).length);