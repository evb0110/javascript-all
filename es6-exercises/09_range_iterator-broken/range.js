function makeRangeIterator(start, end, step) {
  let current = start;
  return {
    next() {
      if (current * step < end * step) {
        const r = { value: current, done: false}
        current += step;
        return r;
      }
      return { done: true }
    }
  }
}

const range = makeRangeIterator(1, 5, 2);

range[Symbol.iterator] = makeRangeIterator(1, 5, 2);

for (n of range) {
  console.log(n);
}