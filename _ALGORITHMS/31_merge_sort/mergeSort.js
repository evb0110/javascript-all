function merge(arr1, arr2) {
  let start1 = 0;
  let start2 = 0;
  let result = [];

  while (start1 < arr1.length && start2 < arr2.length) {
    if (arr1[start1] < arr2[start2]) {
      result.push(arr1[start1++]);
    } else {
      result.push(arr2[start2++]);
    }
  }
  while (start1 < arr1.length) {
    result.push(arr1[start1++]);
  }
  while (start2 < arr2.length) {
    result.push(arr2[start2++]);
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function mergeSort3(arr) {
  // dividing each array in 3 chunks, not in 2
  // just for fun
  if (arr.length < 2) return arr;
  const i = Math.floor((arr.length * 1) / 3);
  const j = Math.floor((arr.length * 2) / 3);
  const left = mergeSort(arr.slice(0, i));
  const center = mergeSort(arr.slice(i, j));
  const right = mergeSort(arr.slice(j));
  return merge(merge(left, center), right);
}

// const arr = [6, 3, 6, 32, 46, 2, 8, 55, 74, 72, 46];
const arr = [];
for (let i = 0; i < 1E6; i++) {
  arr.push(Math.random())
}
// console.log(mergeSort(arr));
console.log(mergeSort3(arr));
// console.log(arr.sort((a, b) => a - b));

// console.log(merge([1, 12, 13, 50, 51, 53, 56], [2, 4, 6, 15, 30, 55]));
