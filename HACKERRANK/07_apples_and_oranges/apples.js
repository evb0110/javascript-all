const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');

const [s, t] = lines[0].split(' ').map(n => Number(n));
const [a, b] = lines[1].split(' ').map(n => Number(n));
const [m, n] = lines[2].split(' ').map(n => Number(n));
const apples = lines[3].split(' ').map(n => Number(n));
const oranges = lines[4].split(' ').map(n => Number(n));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesIn = fruitsIn(apples, a, s, t);
  const orangesIn = fruitsIn(oranges, b, s, t);
  console.log(applesIn);
  console.log(orangesIn);
}

function inHouse(x, s, t) {
  return (x >= s && x <= t)
}

function fruitsIn(arr, tree, s, t) {
  return arr.reduce((acc, coord) => {
    const x = tree + coord;
    return acc + Number(inHouse(x, s, t))
  }, 0);
}

countApplesAndOranges(s, t, a, b, apples, oranges)
