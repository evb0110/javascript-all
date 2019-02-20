const fs = require('fs');

const [i, j, k] = fs.readFileSync('input.txt', 'utf8').split(/\s+/).map(str => Number(str));



function beautifulDays(i, j, k) {
  return makeRange(i, j).reduce((acc, el) => {
    if (diff(el) % k == 0) return acc + 1;
    return acc;
  }, 0);

  function reverseNumber(num) {
    const str = String(num);
    return +[...str].reverse().join('');
  }

  function diff(num) {
    return Math.abs(num - reverseNumber(num));
  }

  function makeRange(i, j) {
    const arr = [];
    for (let ii = i; ii <= j; ii++) {
      arr.push(ii);
    }
    return arr;
  }
}

console.log(beautifulDays(i, j, k))