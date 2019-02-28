const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const arr = input.split(/\n/)[1].split(/\s+/).map(str => Number(str));

console.log(arr);

// ==============================
function histogram(arr) {
  return arr.reduce((acc, el) => {
    const newAcc = new Map(acc);
    if (newAcc.has(el)) {
      newAcc.set(el, newAcc.get(el) + 1)
    } else {
      newAcc.set(el, 1);
    }
    return newAcc;
  }, new Map());
}

function equalizeArray(arr) {
  const hist = histogram(arr);
  const mostFrequentCount = Math.max(...hist.values());
  return arr.length - mostFrequentCount;
}
// ==============================

const result = equalizeArray(arr);

console.log(result);