const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split(/\n/);

function makeNumbers(line) {
  return line.split(/\s/).map(str => Number(str));
}

const [[n, k], ar] = lines.map(makeNumbers);

function divisibleSumPairs(n, k, ar) {
  return makePairs(ar).filter(el => {
    return sumArray(el) % k == 0;
  }).length;

  function makePairs(ar) {
    return ar.reduce((acc, el, i, ar) => {
      const pairs = ar.slice(i + 1).map(elem => [el, elem]);
      return [...acc, ...pairs];
    }, []);
  }

  function sumArray(ar) {
    return ar.reduce((a, b) => a + b);
  }
}

console.log(divisibleSumPairs(n, k, ar));
