function capitalizeWords (arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return [...capitalizeWords(arr.slice(0,1)), ...capitalizeWords(arr.slice(1))];
}


console.log(capitalizeWords(['foo', 'bar']))