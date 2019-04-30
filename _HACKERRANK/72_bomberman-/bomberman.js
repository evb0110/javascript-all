// rows, columns, n sec

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const time = +lines[0].split(/\s+/)[2];
const gridStr = lines.slice(1);
const grid = gridStr.map(line => {
  return line.split('').map(el => {
    if (el === 'O') return 3;
    return 0;
  });
});


// ****************************************
function bomberMan(n, gridStr) {
  const grid = gridStr.map(line => {
    return line.split('').map(el => {
      if (el === 'O') return 3;
      return 0;
    });
  });
  while (true) {
    
    if (n >= 2) {
      twoSeconds(grid);
      n = n - 2;
    } else {
      break;
    }
    if (n >= 1) {
      threeSeconds(grid);
      n--;
    } else {
      break;
    }
  }
  return gridToStrings(grid);
}

function twoSeconds(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 3) {
        grid[i][j] = 1;
      }
      if (grid[i][j] === 0) {
        grid[i][j] = 3;
      } 
    }
  }  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        detonate(grid, i, j);
      } 
    }
  }
}

function threeSeconds(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        grid[i][j]--;
      }
      if (grid[i][j] === 1) {
        detonate(grid, i, j);
      } 
    }
  }
}

function detonate(grid, i, j) {
  grid[i][j] = 0;
  if (i > 0 && grid[i - 1][j] !== 1) {
    grid[i - 1][j] = 0;
  }
  if (i < grid.length - 1 && grid[i + 1][j] !== 1) {
    grid[i + 1][j] = 0;
  }
  if (j > 0 && grid[i][j - 1] !== 1) {
    grid[i][j - 1] = 0;
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] !== 1) {
    grid[i][j + 1] = 0;
  }
}

function gridToStrings(grid) {
  return grid.map(line =>
    line
      .map(el => {
        if (el === 0) return '.';
        return 'O';
      })
      .join(''),
  );
}
// ****************************************

console.log(bomberMan(time, gridStr));
