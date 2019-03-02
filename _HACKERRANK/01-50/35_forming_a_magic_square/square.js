const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const s = lines.map(lineToNumbers);


function formingMagicSquare(s) {
  const allFlats = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8]
  ]

  const sFlat = flatten(s);
  return Math.min(...allFlats.map(arr => flatDifference(sFlat, arr)));


  function flatDifference(arr1, arr2) {
    return arr1.reduce((sum, el, i) => {
      return sum + Math.abs(el - arr2[i]);
    }, 0)
  }

  function flatten(s) {
    return s.reduce((acc, el) => [...acc, ...el], []);
  }
}

console.log(formingMagicSquare(s))