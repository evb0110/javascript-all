// n m
// queries
// n <= 10 ** 7
// m <= 2 * 10 ** 5
// k <= 10 ** 9

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const data = lines.map(lineToNumbers);
const [[n, m], ...queries] = data;

// ==================
function applyQuery(arr, query) {
  const newArr = [...arr];
  for (let i = query[0]; i <= query[1]; i++) {
    newArr[i] += query[2];
  }
  return newArr;
}

function makeInitialArray(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i] = 0;
  }
  return arr;
}


function arrayManipulation(n, queries) {
  const arr = makeInitialArray(n);
  const result = queries.reduce((acc, query, i) => {
    console.log(i);
    return applyQuery(acc, query);
  }, arr);
  return Math.max(...result.slice(1));
}
// ==================


const result = arrayManipulation(n, queries);
console.log(result);