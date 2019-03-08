function stringSearch(target, str) {
  const result = [];
  outer: for (let i = 0; i < target.length - str.length + 1; i++) {
    for (let j = 0; j < str.length; j++) {
      if (target[i + j - 1] !== str[j]) continue outer;
    }
    result.push(i);
  }
  console.log(result);
}

stringSearch('wahoorohoori', 'hoo');
