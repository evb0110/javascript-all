function nestedEvenSum(obj) {
  let sum = 0;
  for (const val of Object.values(obj)) {
    if (typeof val === 'object') {
      sum += nestedEvenSum(val);
    } else if (val % 2 === 0) {
      sum += val;
    }
  }
  return sum;
}

var obj1 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

console.log(nestedEvenSum(obj1))