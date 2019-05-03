function isValid(s) {
  const hyst = hystogram(s);
  const vals = Object.values(hyst);
  const valsSet = new Set(vals);
  if (valsSet.size > 2) return 'NO';
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  if (max - min === 0) return 'YES';
  const entries = Object.entries(hyst);
  const minNumber = entries.filter(el => el[1] === min).length;
  const maxNumber = entries.filter(el => el[1] === max).length;
  if (minNumber === 1 && min === 1) return 'YES';
  if (max - min > 1) return 'NO';
  if (max - min === 1 && maxNumber === 1) return 'YES';
  return 'NO';
}

function hystogram(s) {
  const result = {};
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    result[l] = ++result[l] || 1;
  }
  return result;
}

console.log(isValid('abcdefghhgfedecba'));
