function twoStrings(s1, s2) {
  const h1 = hystogram(s1);
  const h2 = hystogram(s2);
  const common = Object.keys(h1).filter(l => h2[l] !== undefined);
  return common.length > 0 ? 'YES' : 'NO';
}

function hystogram(s) {
  return [...s].reduce((acc, l) => {
    acc[l] = ++acc[l] || 1;
    return { ...acc };
  }, {});
}

// function hystogram(s) {
//   const result = {};
//   for (let i = 0; i < s.length; i++) {
//     const l = s[i];
//     result[l] = ++result[l] || 1;
//   }
//   return result;
// }
