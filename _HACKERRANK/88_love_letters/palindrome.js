function theLoveLetterMystery(s) {
  let total = 0;
  for (let i = 0; i < s.length / 2; i++) {
    total += diff(s[i], s[s.length - i - 1]);
  }
  return total;
}

function diff(l1, l2) {
  return Math.abs(l1.charCodeAt(0) - l2.charCodeAt(0));
}

console.log(theLoveLetterMystery('cba'));
