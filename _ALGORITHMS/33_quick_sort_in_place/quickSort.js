function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, ++swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start < 1) {
    console.log(end, start, end - start);
    return;
  }
  const pivotIdx = pivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
  return arr;
}

const arr = [5, 5, 10, 8, 3, 4, 6, 4, 7];
// const arr = [];
// for (let i = 0; i < 1e5; i++) {
//   arr.push(Math.random());
// }

console.log(quickSort(arr));

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
