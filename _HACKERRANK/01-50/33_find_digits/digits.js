const inputNumber = 1012;

function findDigits(n) {
  return [...String(n)].filter(i => (n % i == 0)).length;

}

console.log(findDigits(inputNumber));