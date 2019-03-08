function stringSearch(long, short) {
  const result = [];
  outer: for (let i = 0; i < long.length - short.length + 1; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) continue outer;
    }
    result.push(i);
  }
  if (result.length) return result;
  return [-1];
}

console.log(stringSearch('warihoorohoori', 'oo'));
