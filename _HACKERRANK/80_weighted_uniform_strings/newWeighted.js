// ****************************************************
const alpha = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function weightedUniformStrings(s, queries) {
  const weightsSet = makeWeigthsSet(s);
  return queries.map(q => (weightsSet.has(q) ? 'Yes' : 'No'));
}

function makeWeigthsSet(s) {
  const result = new Set();
  const subs = s.match(/(\S)\1*/g);
  subs
    .map(sub => {
      return { value: alpha[sub[0]], length: sub.length };
    })
    .forEach(subNumber => {
      for (let i = 1; i <= subNumber.length; i++) {
        const num = subNumber.value * i;
        if (!result.has(num)) {
          result.add(num);
        }
      }
    });
  return result;
}
// ***********************************************************

console.log(weightedUniformStrings('aaabbbbcccddd', [5, 9, 7, 8, 12, 5]));
