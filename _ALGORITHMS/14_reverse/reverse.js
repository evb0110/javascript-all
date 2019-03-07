function reverse(str) {
  let acc = '';
  if (str.length === 0) return acc;
  acc = str[str.length - 1];
  return acc + reverse(str.slice(0, str.length - 1))
}

console.log(reverse('awesome'))