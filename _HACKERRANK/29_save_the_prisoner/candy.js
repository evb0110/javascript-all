const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [prisoners, sweats, seat] = lineToNumbers(lines[1]);

// console.log(prisoners, sweats, seat);



// console.log(myMod(10, 5));

function saveThePrisoner(n, m, s) {
  return myMod( m + s - 1, n)

  function myMod (k, l) {
    return k % l == 0 ? l : k % l;
  }
}

console.log(saveThePrisoner(prisoners, sweats, seat))