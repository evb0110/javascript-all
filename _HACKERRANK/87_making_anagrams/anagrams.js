function makingAnagrams(s1, s2) {
  const h1 = histogram(s1);
  const h2 = histogram(s2);
  const h = { ...h1, ...h2 }
  let result = 0;
  for (const key in h) {
    const diff = Math.abs((h1[key] || 0) - (h2[key] || 0));
    result += diff;
  }
  return result;
}

function histogram(s) {
  const hist = {};
  for (const l of s) {
    hist[l] = ++hist[l] || 1;
  }
  return hist;
}

console.log(
  makingAnagrams('cde', 'abc')
);
