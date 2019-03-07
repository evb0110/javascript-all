function capitalizeFirst (arr) {
  if (arr.length === 1) return [capitalizeString(arr[0])];
  return [...capitalizeFirst(arr.slice(0,1)), ...capitalizeFirst(arr.slice(1))];
}

function capitalizeString(str) {
  return str[0].toUpperCase() + str.substring(1);
}

console.log(capitalizeFirst(['foo', 'bar']))