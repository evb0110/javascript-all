const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(s => +s);
const queries = lines.slice(1).map(lineToNumbers);
console.log(queries);
// n: Bobby's initial amount of money
// c: the cost of a chocolate bar
// m: the number of wrappers he can turn in for a free bar

// ===============================
function chocolateFeast(n, c, m) {
  const w = 0;
  const count = 0;
  const stepper = makeStepper([n, c, m, w, count]);
  for (const step of stepper) {
    if (step[0] < c && step[3] < step[2]) return step[4];
  }
}

function makeStep([n, c, m, w, count]) {
  const paidBars = Math.floor(n / c);
  const moneyChange = n % c;
  const unpaidBars = Math.floor(w / m);
  const wrappersChange = w % m;
  return [
    moneyChange,
    c,
    m,
    wrappersChange + paidBars + unpaidBars,
    count + paidBars + unpaidBars,
  ];
}

function* makeStepper([n, c, m, w, count]) {
  while (true) {
    [n, c, m, w, count] = makeStep([n, c, m, w, count]);
    console.log([n, c, m, w, count])
    yield [n, c, m, w, count];
  }
}
// ===========================

console.log(chocolateFeast(10, 2, 5));
