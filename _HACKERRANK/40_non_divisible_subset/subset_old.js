const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [
  [_, k], s
] = lines.map(lineToNumbers);


// ===========================
function getAllSubsetsSorted(theArray) {
  const result = theArray.reduce(
    (acc, value) => (
      [...acc, ...acc.map(set => [...set, value])]
    ),
    [
      []
    ]
  );
  return result.sort((a, b) => -a.length + b.length);
}

function getAllSubsetsOfTwo(arr) {
  const result = arr.reduce((acc,el,i) => {
    return [...acc, ...arr.slice(i+1).map(elem => [el, elem])]
  }, []);
  return result;
}

function nonDivisibleSubset(k, s) {
  const allSubsets = getAllSubsetsSorted(s);
  const goodSubset = allSubsets.find(subset => isGood(k, subset));
  return goodSubset.length;
}

function isGood(k, subset) {
  const subsetsOfTwo = getAllSubsetsOfTwo(subset);
  return subsetsOfTwo.reduce((acc, subset) => acc && ((subset[0] + subset[1]) % k != 0));
}
// ===========================

console.log(nonDivisibleSubset(k, s));

