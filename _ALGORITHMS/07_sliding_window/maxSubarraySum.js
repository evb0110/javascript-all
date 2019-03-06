function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let sum = arr.slice(0, num).reduce((a, b) => a + b);
  const result = arr.slice(0, arr.length - num).reduce(
    (acc, el, i) => {
      const currentSum = acc.sum - el + arr[i + num];
      const currentMax = Math.max(currentSum, acc.max);
      return { sum: currentSum, max: currentMax };
    },
    { sum, max: sum }
  );

  return result.max;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
