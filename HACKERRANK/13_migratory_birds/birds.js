const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split(/\n/);

function makeNumbers(str) {
  return str.split(/\s/).map(str => Number(str));
}

const [_, arr] = lines.map(makeNumbers);



function migratoryBirds(arr) {
  const stats = makeStats(arr);
  const max = Math.max(...stats.values())
  const important = [...stats].filter(el => el[1] == max);
  const result = Math.min(...important.map(el => el[0]));
  return result;

  function makeStats(arr) {
    const stats = new Map();
    arr.forEach( el => {
      if (stats.has(el)) {
        return stats.set(el, stats.get(el) + 1);
      }
      stats.set(el, 1);
    });
    return stats;
  }
}

console.log(migratoryBirds(arr));