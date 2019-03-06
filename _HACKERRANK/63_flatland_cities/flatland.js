// n, m - number of cities and number of stations
// c - space stations
// calculate max distance

'use strict'

const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')
const [
  [n, m], c
] = input.split(/\n/).map(line => line.split(/\s+/).map(s => +s))
console.log(n, m, c)


// ==================================
function flatlandSpaceStations(n, c) {
  return Math.max(...calculateDistances(n, c))

}

function calculateDistances(n, c) {
  c = c.sort((a, b) => a - b);
  const m = c.length;
  const distances = [];
  for (let i = 0; i <= c[0]; i++) {
    distances[i] = Math.abs(i - c[0]);
  }
  for (let i = c[m - 1]; i < n; i++) {
    (distances[i] = Math.abs(i - c[m - 1]));
  }
  for (let j = 0; j < m - 1; j++) {
    for (let i = c[j]; i < c[j + 1]; i++) {
      distances[i] = Math.min(i - c[j], c[j + 1] - i);
    }
  }
  console.log(distances);
  return distances;
}
// ===========================

console.log(flatlandSpaceStations(n, c))

