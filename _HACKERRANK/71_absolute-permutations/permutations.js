// [1,n] - range, k - difference

function absolutePermutation(n, k) {
  if (n % (2 * k)) return [-1];
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(i + 1);
  }
  if (k === 0) return a;
  const aSplitted = splitArray(a, k);
  for (let i = 0; i < aSplitted.length; i = i + 2) {
    [aSplitted[i], aSplitted[i + 1]] = [aSplitted[i + 1], aSplitted[i]];
  }
  const result = [];
  aSplitted.forEach(arr => {
    arr.forEach(el => result.push(el));
  });
  return result;
}

function splitArray(arr, k) {
  const result = [];
  const ln = Math.floor(arr.length / k);
  for (let i = 0; i < ln; i++) {
    result[i] = [];
    for (let j = 0; j < k; j++) {
      result[i].push(arr[i * k + j]);
    }
  }
  return result;
}


console.log(absolutePermutation(86542, 1).join(' ') + '\n');
