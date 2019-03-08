function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      return i;
    }
  }
  return -1;
}

const arr = [4,3,6,3,6];
const elem = 6;

console.log(linearSearch(arr, elem))