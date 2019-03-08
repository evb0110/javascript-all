function sort(arr) {
  const myArr = [...arr];
  for (let k = myArr.length - 2; k >= 0; k--) {
    for (let i = 0; i <= k; i++) {
      if (myArr[i] > myArr[i + 1]) {
        [myArr[i], myArr[i + 1]] = [myArr[i + 1], myArr[i]];
      }
    }
  }
  return myArr;
}


console.log(sort([5,3,6,2,4,8,3,6,4,56,8,6,8,9,5,4,3,6,8,0,44,5,55,666,3,322,3,44]))