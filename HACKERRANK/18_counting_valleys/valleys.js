const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const s = lines[1];



function countingValleys(n, s) {
  const sNumbers = [...s].map(l => l == 'U' ? 1 : -1);

  const result = sNumbers.reduce( ({height, count, inValley}, number) => {
    if (height == 0 && number < 0) {
      inValley = true;
    } else if (height == -1 && number > 0) {
      count++;
      inValley = false;
    }
    height += number;
    return { height, count, inValley }
  }, { height: 0, count: 0, inValley: false });

  return result.count;
}

const result = countingValleys(0, s);

console.log(result);