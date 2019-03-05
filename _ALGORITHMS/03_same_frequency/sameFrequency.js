function sameFrequency(num1, num2) {
  const freq1 = makeFrequency(num1);
  const freq2 = makeFrequency(num2);
  if (shallowEqual(freq1, freq2)) return true;
  return false;
}

function makeFrequency(num) {
  return [...String(num)].reduce((acc, l) => {
    const currentAcc = {...acc};
    currentAcc[l] = ++currentAcc[l] || 1;
    return currentAcc;
  }, {});
}

function shallowEqual(obj1, obj2) {
  const [keys1, keys2] = [obj1, obj2].map(el => Object.keys(el));
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 25))