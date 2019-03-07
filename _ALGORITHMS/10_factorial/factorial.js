// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1)
// }
function factorial(n) {
  if (n === 0) return BigInt(1);
  return BigInt(n) * factorial(n - 1)
}



console.log(factorial(555))