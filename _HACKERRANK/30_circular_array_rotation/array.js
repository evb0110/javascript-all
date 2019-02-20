// elems, rotCount
// array
// m

const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [[elems, rotCount], array] = lines.map(lineToNumbers).slice(0, 2);

const queries = lines.map(lineToNumbers).slice(2).map(a => a[0]);

function circularArrayRotation(a, k, queries) {
  return queries.map(idx => rotateArray(a, k)[idx]);

  function rotateArray(array, rotCount) {
    const modRotCount = rotCount % array.length;
    return array.map((_, i, arr) => {
      const idx = (i - modRotCount + arr.length) % arr.length;
      return arr[idx];
    });
  }
}

console.log(circularArrayRotation(array, rotCount, queries));