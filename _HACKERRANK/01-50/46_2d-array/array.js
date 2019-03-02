const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const arr = lines.map(lineToNumbers);

// ======================================
function hourglass(i, j, arr) {
  const indices = [
    [i, j],
    [i, j + 1],
    [i, j + 2],
    [i + 1, j + 1],
    [i + 2, j],
    [i + 2, j + 1],
    [i + 2, j + 2],
  ];
  const hourglassArray = indices.map((indice) => arr[indice[0]][indice[1]]);
  return hourglassArray.reduce((acc, el) => acc + el);
}

function hourglassSum(arr) {
  const hourglasses = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const hourglassCurrent = hourglass(i, j, arr);
      hourglasses.push(hourglassCurrent);
    }
  }
  return Math.max(...hourglasses);
}
// ======================================

console.log(hourglassSum(arr));