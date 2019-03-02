const s = "a";
const n = 1000000000000;

// ==============
function repeatedString(s, n) {
  const statsA = makeStatsA(s);
  const len = s.length;
  return statsA.reduce((acc, el) => {
    return acc + oneA(el, len, n)
  }, 0);
}

function oneA(number, period, n) {
  return Math.floor((n - number - 1) / period) + 1;
}

function makeStatsA(s) {
  const arr = [...s];
  return arr.reduce((acc, el, number) => {
    if (el == 'a') {
      return [...acc, number]
    }
    return acc;
  }, [])
}
// ==============

const result = repeatedString(s, n);
console.log(result);