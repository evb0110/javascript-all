const fs = require('fs');

const arr = fs.readFileSync('input.txt', 'utf8').split(/\n/)[1].split(/\s+/).map(str => Number(str));


// ====================
function processArray(arr) {
  const min = Math.min(...arr);
  return arr.map(el => el - min).filter(el => el > 0);
}

function cutTheSticks(arr) {
  const result = [];
  let currentArray = [...arr];
  while (currentArray.length) {
    result.push(currentArray.length);
    currentArray = processArray(currentArray);
  }
  return result;
}
// ====================


console.log(cutTheSticks(arr))