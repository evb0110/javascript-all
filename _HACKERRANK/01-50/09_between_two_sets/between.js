const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);

function lineToNumbers(line) {
  return line.split(/\s/).map(str => Number(str));
}

const [a, b] = lines.slice(1).map(lineToNumbers);




function getTotalX(a, b) {
  let counter = 0;
  const left = Math.max(...a);
  const right = Math.min(...b);
  for (let n=left; n<=right; n++) {
    if (first(a, n) && second(n, b)) {
      counter++;
    }
  }

  return counter;

  function first(arr, number) {
    for (const el of arr) {
      if (! divides(number, el)) return false;
    }
    return true;
  }
  
  function second(number, arr) {
    for (const el of arr) {
      if (! divides(el, number)) return false;
    }
    return true;
  }
  
  function divides(num1, num2) {
    return num1 % num2 == 0;
  }

}

const result = getTotalX(a, b);
console.log(result);