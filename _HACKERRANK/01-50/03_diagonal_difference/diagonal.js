function diagonalDifference(ar) {
  const arr = ar.reduce((acc, el) => {
    return [...acc, ...el]
  }, []);


  const n = arr.length;
  const m = Math.sqrt(n);

  let main = 0, secondary = 0;

  for (let i = 0; i < n; i += m + 1) {
    main += arr[i];
  }
  
  for (let i = m - 1; i <= n - m; i += m - 1) {
    secondary += arr[i];
  }
  const result = main - secondary;

  return Math.abs(result);
}

let arr = [[11,2,4],[4,5,6],[10,8,-12]];

console.log(diagonalDifference(arr));
