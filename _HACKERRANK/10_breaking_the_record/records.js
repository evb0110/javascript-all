const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const scores = input.split(/\s/).map(str => Number(str));

function breakingRecords(scores) {
  const breaks = scores.reduce((acc, el) => {
    const newAcc = {};
    if (el < acc.min) {
      newAcc.min = el;
      newAcc.counterMin = acc.counterMin + 1;
    }
    if (el > acc.max) {
      newAcc.max = el;
      newAcc.counterMax = acc.counterMax + 1;
    }
    return { ...acc, ...newAcc }
  }, { min: +Infinity, max: -Infinity, counterMin: -1, counterMax: -1 });
  console.log(breaks.counterMax, breaks.counterMin);
}

breakingRecords(scores);