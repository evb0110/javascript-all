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
  if (start1 == arr1.length) {
    for (let i = start2; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  } else if (start2 == arr2.length) {
    for (let i = start1; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }

  return result;
}

console.log(merge([1, 12, 13, 50, 51, 53, 56], [2, 4, 6, 15, 30, 55]));
