const fs = require('fs');

// ===== INPUT =====
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(s => +s);

const inputN = lines.map(lineToNumbers);

const queries = [[]];
let idx = 0;
for (inp of inputN) {
  if (inp.length == 1) {
    continue;
  }
  queries[idx] = [...(queries[idx] || []), ...inp];
  if (inp.length == 3) {
    idx++;
  }
}
// == END INPUT ====

function taumBday(b, w, bc, wc, z) {
  const bp = BigInt(Math.min(bc, wc + z));
  const wp = BigInt(Math.min(wc, bc + z));
  b = BigInt(b);
  w = BigInt(w);
  return (b * bp + w * wp).toString();
}

queries.forEach(query => console.log(taumBday(...query)));
