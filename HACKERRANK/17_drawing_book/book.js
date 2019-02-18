const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const [n, p] = lines.map(str => Number(str));



function pageCount(n, p) {
  const nPairs = totalPairs(n);
  const pPairs = totalPairs(p);
  return Math.min(pPairs - 1, nPairs - pPairs);

  function totalPairs(k) {
    return Math.floor(k / 2) + 1;
  }
}

const result = pageCount(n, p);
console.log(result);