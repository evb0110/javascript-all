
// ==============================
function* countdown(n) {
  for (let i = n; i > 0; i--) yield i;
}

function* count() {
  let value = 3;
  while (true) {
    yield* countdown(value);
    value *= 2
  }
}

function strangeCounter(t) {
  let counter = 0;
  for (var c of count()) {
    if(++counter >= t) break;
  }
  return c;
}
// ==============================


console.log(strangeCounter(4));