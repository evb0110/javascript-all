const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);
const n = +lines[0];
const map = lines.slice(1).map(ln => ln.split('').map(s => +s));
console.log(map);
console.log(n);

function cavityMap(map) {
  const n = map.length;
  const newmap = [];
  for (let i = 0; i < n; i++) {
    newmap[i] = [];
    for (let j = 0; j < n; j++) {
      if (i * j === 0 || (i - n + 1) * (j - n + 1) === 0) {
        newmap[i][j] = map[i][j];
        continue;
      }
      const top = map[i - 1][j];
      const bottom = map[i + 1][j];
      const left = map[i][j - 1];
      const right = map[i][j + 1];
      const center = map[i][j];
      if (center > top && center > bottom && center > right && center > left) {
        newmap[i][j] = 'X';
        continue;
      }
      newmap[i][j] = map[i][j];
    }
  }
  return newmap.map(ln => ln.join(''));
}

console.log(cavityMap(map));
