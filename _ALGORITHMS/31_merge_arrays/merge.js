function merge(arr1, arr2) {
  let start1 = 0;
  let start2 = 0;
  let result = [];

  while (start1 < arr1.length || start2 < arr2.length) {
    if ((arr1[start1] || Infinity) < (arr2[start2] || Infinity)) {
      result.push(arr1[start1++]);
    } else {
      result.push(arr2[start2++]);
    }
  }
  return result;
}

console.log(merge([1, 12, 13, 50, 51, 53, 56], [2, 4, 6, 15, 30, 55]));
