const fs = require('fs');

const numbers = fs.readFileSync('input.txt', 'utf8').split(/\s+/).map(str => Number(str));

function permutationEquation(p) {
  const numbersFunction = numbers => i => numbers[i - 1];
  const fn = numbersFunction(p);

  return p.map((el, j) => {
    const res = p.reduce((acc, elem, i) => {
      if (fn(fn(i + 1)) == j + 1) return [...acc, i + 1]
      return acc;
    }, []);
    return res[0];
  });

}

console.log(permutationEquation(numbers));