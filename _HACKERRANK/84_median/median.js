const input = '0 1 2 4 6 5 3';
const arr = input.split(/\s+/).map(n => +n);

function findMedian(arr) {
  arr.sort((a, b) => a - b);
  return arr[(arr.length - 1) / 2];
}


