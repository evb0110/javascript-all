const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const [[n, d], arr] = input
  .split(/\n/)
  .map(line => line.split(/\s+/).map(s => +s));

// =========================================
function beautifulTriplets(d, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] !== d) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] - arr[j] === d) counter++
      }
    }
  }
  return counter;
}
// =========================================

console.log(beautifulTriplets(d, arr));
