function staircase(n) {
  for (let i = 0; i < n; i ++) {
    const line = mtimes(n - i - 1, ' ') + mtimes(i + 1, '#');
    console.log(line);
  }
  function mtimes(m, l) {
    let result = '';
    for (let j = 0; j < m; j++) {
      result += l;
    }
    return result;
  }
}



// console.log(mtimes(5, '&'));
staircase(5);