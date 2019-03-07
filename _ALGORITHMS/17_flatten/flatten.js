function flatten(oldArr) {
  return oldArr.reduce((newArr, el) => (
    Array.isArray(el) ? [...newArr, ...flatten(el)] : [...newArr, el]
  ), []);
}

console.log(flatten([1, [2, [3, [4, [5, 6]]]], 3]))