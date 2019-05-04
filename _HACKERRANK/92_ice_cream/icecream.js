const m = 4;
const arr = [1, 4, 5, 3, 2];

function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) return [i + 1, j + 1];
    }
  }
}

console.log(
  icecreamParlor(m, arr)
)