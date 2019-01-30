function* rangeIterator(m, n) {
  const inc = m < n ? 1 : -1;
  let i = m;
  while (i * inc <= n * inc) {
    yield i;
    i += inc;
  }
}

function range(m, n) {
  return Array.from(rangeIterator(m, n));
}

const ri = range(8, 16);
for (num of ri) {
  console.log(num);
}

const r = range(20, 15);
console.log(r.map(x => x * x));
