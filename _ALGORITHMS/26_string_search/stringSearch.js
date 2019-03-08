function stringSearch(long, short) {
  if (short.length === 0) return;
  const result = [];
  outer: for (let i = 0; i < long.length - short.length + 1; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) continue outer;
    }
    result.push(i);
  }
  return result;
}

console.log(stringSearch('warihoorohoori', 'zo'));
