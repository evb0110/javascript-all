const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/).map(l => l.split(/\s+/).map(s => +s))
const [w, h] = lines[0]
const a = lines.slice(1);


function sum(arr) {
  return arr.reduce((a, b) => a + b)
}

function surfaceArea(a) {
  const wh = a.length * a[0].length;
  const wl = a.reduce((acc, line) => {
    return acc + Math.max(...line);
  }, 0);

  let lh = 0;
  a[0].forEach((_, j) => {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i][j] > max) max = a[i][j]
    }
    lh += max;
  })
  return (wh + wl + lh) * 2;
}

console.log(surfaceArea(a));