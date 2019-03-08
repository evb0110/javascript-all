function stringSearch(long, short) {
  const result = [];
  outer: for (let i = 0; i < long.length - short.length + 1; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j - 1] !== short[j]) continue outer;
    }
    result.push(i);
  }
  return result
}

console.log(stringSearch('wahoorohoori', 'hoo'));

