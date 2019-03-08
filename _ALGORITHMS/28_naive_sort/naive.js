function naiveSort(arr) {
  if (arr.length === 1) return arr;
  const smallest = arr.reduce(
    ({ min, idx }, el, i) => {
      if (el < min) return { min: el, idx: i };
      return { min, idx };
    },
    { min: Infinity, idx: -1 },
  );
  const iSmallest = smallest.idx;
  const curArr = [...arr];
  [curArr[0], curArr[iSmallest]] = [curArr[iSmallest], curArr[0]];
  return [curArr[0], ...naiveSort(curArr.splice(1))]
}

const arr = [];
for (let i = 0; i < 2000; i++) {
  arr.push(Math.floor(Math.random() * 10000))
}

const result = naiveSort(arr);
console.log(result.join(' '))
