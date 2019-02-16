const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

function stringToNumbers (str) {
  return str.split(/\s/).map(str => Number(str));
}

const s = stringToNumbers(lines[1]);
const [d, m] = stringToNumbers(lines[2]);

console.log(birthday(s, d, m));

function birthday(s, d, m) {
  const raw = arraySplit(s, m);
  const result = raw.filter((el) => {
    return arraySum(el) == d;
  });
  return result.length;

  function arraySplit(s, m) {
    const acc = [];
    for (let i = 0; i < s.length - m + 1; i++) {
      acc.push(s.slice(i, i + m));
    }
    return acc;
  }
  
  function arraySum(arr) {
    return arr.reduce((a, b) => a + b);
  }
}
