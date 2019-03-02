const fs = require('fs');

const line = fs.readFileSync('input.txt', 'utf8');
const n = Number(line);

function viralAdvertising(k) {
  return range(1, k).reduce((acc, el) => acc + liked(el), 0);

  function liked(k) {
    if (k == 1) return Math.floor(5 / 2);
    const result = Math.floor((liked(k - 1) * 3) / 2);
    return result;
  }

  function range(i, j) {
    const result = [];
    for (let k = i; k <= j; k++) {
      result.push(k);
    }
    return result;
  }
}

console.log(viralAdvertising(n));
