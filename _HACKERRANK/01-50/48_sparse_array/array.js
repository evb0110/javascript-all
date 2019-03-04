const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const n = +lines[0];

const [strings, queries] = [lines.slice(1, 1 + n), lines.slice(2 + n)];

console.log(strings, queries);

function matchingStrings(strings, queries) {
  return queries.map(query => strings.filter(el => el == query).length);
}

const result = matchingStrings(strings, queries);
console.log(result);
