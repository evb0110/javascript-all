function quickSort(arr) {
  if (arr.length === 0) return arr;
  const mid = Math.floor(arr.length / 2);
  const midValue = arr[mid];
  const left = [];
  const right = [];
  const center = [];

  for (const el of arr) {
    if (el < midValue) {
      left.push(el);
    } else if (el === midValue) {
      center.push(el);
    } else {
      right.push(el);
    }
  }

  return [...quickSort(left), ...center, ...quickSort(right)];
}

// const arr = [5, 2, 7, 2, 3, 7, 33, 6, 34, 234, 21];
const arr = [];
for (let i = 0; i < 1e5; i++) {
  arr.push(Math.random());
}
const result = quickSort(arr);
console.log(result);
