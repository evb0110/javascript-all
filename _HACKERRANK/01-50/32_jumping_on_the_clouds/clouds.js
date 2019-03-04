const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [[n, k], c] = lines.map(lineToNumbers);

function jumpingOnClouds(c, k) {
  const startEnergy = 100;
  const startIndex = 0;
  const n = c.length;
  let i = startIndex;
  let e = startEnergy;
  do {
    i = getNewIndex(i, k, n);
    e -= energyLoss(c);
  } while (i != startIndex);
  return e;

  function getNewIndex(i, k, n) {
    return (i + k) % n;
  }

  function energyLoss() {
    return c[i] == 0 ? 1 : 3;
  }
}

console.log(jumpingOnClouds(c, k));
