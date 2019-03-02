const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const arr = lines[1].split(/\s/).map(str => Number(str));

const result = sockMerchant(0, arr);
console.log(result);

function sockMerchant(n, arr) {
  const result = arr.reduce((acc, el) => {
    let newCount = acc.count;
    let newHalves = new Set(acc.halves);
    if (acc.halves.has(el)) {
      newHalves.delete(el);
      newCount++;
    }
    else {
      newHalves.add(el);
    }
    return { count: newCount, halves: newHalves };
  }, { count: 0, halves: new Set });
  return result.count;
}

