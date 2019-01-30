function makeRangeIterator(start, end, step) {
  let current = start;
  return {
    next() {
      if (current * step <= end * step) {
        const r = { value: current, done: false}
        current += step;
        return r;
      }
      return { done: true }
    }
  }
}

function makeRangeIterable(start, end, step = start < end ? 1 : -1) {
  const range = {};
  range[Symbol.iterator] = () => makeRangeIterator(start, end, step);
  return range;
}

const range = makeRangeIterable(1, -5);

for (n of range) {
  console.log(n);
}

const rangeArray = Array.from(range);

console.log("============");
rangeArray.forEach(el => console.log(el));