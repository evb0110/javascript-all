function getDigit1(num, pos) {
  const str = String(num);
  return +(str[str.length - 1 - pos]) || 0;
}

function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function countDigits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(...arr) {
  return Math.max(...arr.map(countDigits));
}

console.log(mostDigits(5,22,67,32340,6734, 32, 4,354));