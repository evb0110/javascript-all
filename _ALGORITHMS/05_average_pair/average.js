function averagePair(arr, av) {
  if (arr.length < 2) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === av) return true;
    if ((arr[left] + arr[right]) / 2 > av) right--;
    if ((arr[left] + arr[right]) / 2 < av) left++;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.1));
