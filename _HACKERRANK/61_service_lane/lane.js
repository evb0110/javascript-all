const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(s => +s);
const [[n,t], widths, ...segments] = lines.map(lineToNumbers);
console.log(segments);

function serviceLane(widths, segments) {
  const result = segments.map(aCase => width(widths, aCase));
  return result;

}

function width(widths, aCase) {
  return Math.min(...widths.slice(aCase[0], aCase[1] + 1))
}

console.log(serviceLane(widths, segments));