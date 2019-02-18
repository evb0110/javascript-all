const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

function lineToNumbers(line) {
  return line.split(/\s/).map(str => Number(str));
}

const [[b, n, m], keyboards, drives] = lines.map(lineToNumbers);


function getMoneySpent(keyboards, drives, b) {
  let paid = 0;
  for (const kbd of keyboards) {
    for (const drv of drives) {
      const sum = kbd + drv;
      if (sum > paid && sum <= b) {
        paid = sum;
      }
    }
  }
  return paid || -1;
}

const result = getMoneySpent(keyboards, drives, b);
console.log(result);

// expected 729580

// b n m
// keyboards
// drives