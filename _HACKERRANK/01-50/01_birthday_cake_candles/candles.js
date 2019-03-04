const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const parts = input.split('\n');

const ar = parts[1].split(' ').map(el => Number(el));

const result = ar.reduce((acc, el) => {
  const accNew = {};
  if (el > acc.max) {
    accNew.max = el;
    accNew.count = 1;
  } else if (el == acc.max) {
    accNew.count = acc.count + 1;
  }
  return {...acc, ...accNew};
}, { max: -Infinity, count: 0 });

console.log(result.count)

// console.log(ar.filter(el => el == Math.max(...ar)).length);
// this one is too long (about half a minute)
