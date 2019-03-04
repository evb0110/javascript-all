// p d m s
// p - orig price
// d - decrement every purchase
// m - lowest price border
// s - money

const fs = require('fs');
const [p, d, m, s] = fs.readFileSync('input.txt', 'utf8').split(/\s+/).map(s => +s);

// =============================
function* makePrices(p, d, m) {
  let price = p;
  while (true) {
    yield price;
    if (price - d >= m) {
      price -= d;
    } else {
      price = m;
    }
  }
}

function howManyGames(p, d, m, s) {
  const prices = makePrices(p, d, m);
  let money = s;
  let counter = 0;
  for (const price of prices) {
    money -= price;
    if (money >= 0) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}
// =============================

const prices = makePrices(10, 2, 5);

console.log(howManyGames(p, d, m, s))