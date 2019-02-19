const fs = require("fs");

const numbers = fs
  .readFileSync("input.txt", "utf8")
  .split(/\n/)[1]
  .split(/\s+/)
  .map(str => Number(str));



function pickingNumbers(arr) {
  const sortedUniques = new Set(arr.sort());

  const result = Array.from(sortedUniques).reduce((acc, el) => {
    const filterer = [el]
    if (sortedUniques.has(el + 1)) { 
      filterer.push(el + 1)
    }
    const currentSubarray = arr.filter(elem => filterer.includes(elem));
    if (currentSubarray.length > acc) {
      acc = currentSubarray.length;
    }
    return acc;
  }, 1);
  return result;
}

console.log(pickingNumbers(numbers));
