function insertionSort(inputArray) {
  const arr = [...inputArray];
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([6, 5, 8, 3, 4, 7]));
