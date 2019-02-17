const lines = require('fs').readFileSync('input.txt', 'utf8').split(/\n/);

function lineToNumbers(line) {
  return line.split(/\s/).map(str => Number(str));
}



const [_, k] = lineToNumbers(lines[0]);
const bill = lineToNumbers(lines[1]);
const [b] = lineToNumbers(lines[2])

function bonAppetit(bill, k, b) {
  const whole = sumArray(bill);
  const actual = whole - bill[k];
  const actualHalf = actual / 2;
  if (actualHalf == b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - actualHalf);
  }
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b);
  }
}

bonAppetit(bill, k, b)