function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  return (cb(arr[0]) || someRecursive(arr.slice(1), cb));
}


const isThree = el => el === 3;

console.log(someRecursive([1,2,5,4], isThree))