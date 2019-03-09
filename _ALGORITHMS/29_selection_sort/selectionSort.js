function selectionSort(inputArray) {
  const arr = [...inputArray];
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const minIdx = findMinIdx(arr, start, end);
    if (start !== minIdx) swapElems(arr, start, minIdx);
    start++;
  }
  return arr;
}

function findMinIdx(arr, start, end) {
  let minIdx = start;
  let min = arr[minIdx];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < min) {
      minIdx = i;
      min = arr[i];
    }
  }
  return minIdx;
}

function swapElems(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(selectionSort([5, 55, 1, -5, 100, 3, 7, 4, 2]));
