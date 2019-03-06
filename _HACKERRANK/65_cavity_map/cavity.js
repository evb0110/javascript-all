const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);
const n = +lines[0];
const grid = lines.slice(1).map(ln => ln.split('').map(s => +s));
console.log(grid);
console.log(n);

function cavityMap(grid) {
  const n = grid.length;
  const newGrid = [];
  for (let i = 0; i < n; i++) {
    newGrid[i] = [];
    for (let j = 0; j < n; j++) {
      if (i * j === 0 || (i - n + 1) * (j - n + 1) === 0) {
        newGrid[i][j] = grid[i][j];
        continue;
      }
      const top = grid[i - 1][j];
      const bottom = grid[i + 1][j];
      const left = grid[i][j - 1];
      const right = grid[i][j + 1];
      const center = grid[i][j];
      if (center > top && center > bottom && center > right && center > left) {
        newGrid[i][j] = 'X';
        continue;
      }
      newGrid[i][j] = grid[i][j];
    }
  }
  return newGrid.map(ln => ln.join(''));
}

console.log(cavityMap(grid));
