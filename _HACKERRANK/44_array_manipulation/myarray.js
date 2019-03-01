const fs = require('fs');
const input = fs.readFileSync('inputSmall.txt', 'utf8');
const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const data = lines.map(lineToNumbers);
const [[n, m], ...queries] = data;

// ============================================
function queriesToObject(queries) {
  const queriesObject = {};
  queries.forEach((query) => {
    const positionLeft = query[0];
    const positionRight = query[1] + 1;
    const increment = query[2];
    queriesObject[positionLeft] = (queriesObject[positionLeft] || 0) + increment;
    queriesObject[positionRight] = (queriesObject[positionRight] || 0) - increment;
  });
  return queriesObject;
}

function arrayManipulation(n, queries) {
  const queriesObject = queriesToObject(queries);
  const result = [0];
  for (let i = 1; i <= n; i++) {
    if (queriesObject[i] != undefined) {
      const current = result.slice(-1)[0] + queriesObject[i];
      result.push(current);
    }
  }
  return result.reduce((acc, el) => Math.max(acc, el), -Infinity)
}
// ============================================

const result = arrayManipulation(n, queries);
console.log(result);