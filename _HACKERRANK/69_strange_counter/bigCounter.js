function strangeCounter(t) {
  const base = 3;
  let sum = 0;
  for (var i = 0; sum < t; i++) {
    sum = sum + base * 2 ** i;
  }
  return sum - t + 1;
}

console.log(strangeCounter(15));
