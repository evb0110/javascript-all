function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.round((end + start) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
}

const arr = [1,2,3,4,5,6,7,8,9];
const val = 4;

const result = binarySearch(arr, val);
console.log(result);