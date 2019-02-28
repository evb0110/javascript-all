const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [[_, k], s] = lines.map(lineToNumbers);

// ===========================

function makeHistogram(k, s) {
  return s.reduce((acc, el) => {
    const newAcc = [...acc];
    const mod = el % k;
    newAcc[mod] = 1 + (newAcc[mod] || 0);
    return newAcc;
  }, new Array(k).fill(0));
}

function proceedHistogram(histogram) {
  const k = histogram.length;
  let result = 0;
  if (histogram[0]) result++;
  for (let i = 1; i < Math.ceil(k / 2); i++) {
    result += Math.max(histogram[i], histogram[k - i]);
  }
  if (Number.isInteger(k / 2)) result++;
  return result;
}

function nonDivisibleSubset(k, s) {
  const histogram = makeHistogram(k, s);
  return proceedHistogram(histogram);
}

// ===========================

const result = nonDivisibleSubset(k, s);

console.log(result);
