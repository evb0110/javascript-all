const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const team = lines.slice(1);
const [n, m] = lines[0].split(/\s+/).map(s => +s);
// n - number of people
// m - number of topics

// ====================================
function acmTeam(inputData) {
  const state = { max: 0, count: 0 };
  for (let i = 0; i < inputData.length - 1; i++) {
    for (let j = i + 1; j < inputData.length; j++) {
      const topics = binaryOrCount(inputData[i], inputData[j]);
      if (topics < state.max) {
        continue;
      } else if (topics > state.max) {
        state.max = topics;
        state.count = 1;
        continue;
      } else {
        state.count++;
      }
    }
  }
  return [state.max, state.count];
}

function binaryOrCount(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === '1' || str2[i] === '1') counter++;
  }
  return counter;
}

function binaryOrCount1(str1, str2) {
  // IT'S 2 TIMES SLOWER
  const arr1 = [...str1];
  const arr2 = [...str2];
  return arr1.reduce((acc, el, i) => {
    return acc + (el === '1' || arr2[i] === '1' ? 1 : 0);
  }, 0);
}
// ====================================

console.log(acmTeam(team));
