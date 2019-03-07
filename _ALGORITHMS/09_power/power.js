function power(base, num) {
  if (num === 0) return BigInt(1);
  return String(BigInt(base) * BigInt(power(base, num - 1)));
}
// function power(base, num) {
//   if (num === 0) return 1;
//   return base * power(base, num - 1);
// }

console.log(power(2, 5000))