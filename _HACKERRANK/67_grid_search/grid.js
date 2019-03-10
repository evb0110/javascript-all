const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const gridHeight = +lines[0].split(/\s+/)[0];
const G = lines.slice(1, gridHeight + 1);
// const patternHeight = +lines[gridHeight + 1].split(/\s+/)[0]
const P = lines.slice(gridHeight + 2);

// ========================
function gridSearch(G, P) {
  const matchesArray = [];
  for (let i = 0; i < G.length - P.length + 1; i++) {
    const matches = [];
    for (let k = 0; k < P.length; k++) {
      let large = G[i + k];
      let small = P[k];
      matches.push(indicesOf(large, small));
    }
    if (matches.length) {
      matchesArray.push(matches);
    }
  }
  return matchesArray.filter(arrayWithIntersections).length ? 'YES' : 'NO';
}

function indicesOf(large, small) {
  const result = [];
  let idx = 0;
  while (~(idx = large.indexOf(small, idx))) {
    result.push(idx++);
  }
  return result;
}

function arrayWithIntersections(arr) {
  return arr.reduce(arrIntersection).length; 
}

function arrIntersection(arr1, arr2) {
  return arr1.filter(el => arr2.includes(el));
}
// ===========================

// console.log(arrIntersection([5, 3, 6, 3], [2, 5, 3, 2, 9]));

console.log(gridSearch(G, P));
// console.log(goodArray([ [ 1, 3, 6 ], [ 5 ], [ 3, 6, 8 ] ]))
