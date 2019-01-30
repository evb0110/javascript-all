function* rangeIterator(m, n, inc) {
  let i = m;
  while (i * inc <= n * inc) {
    yield i;
    i += inc;
  }
}

function range(m, n, inc = m < n ? 1 : -1) {
  return Array.from(rangeIterator(m, n, inc));
}

const ri = range(8, 16, 2);
for (num of ri) {
  console.log(num);
}

const r = range(20, 15);
console.log(r.map(x => x * x));
