function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freq1 = makeFrequencies(str1);
  const freq2 = makeFrequencies(str2);
  for (key1 of Object.keys(freq1)) {
    if (!Object.keys(freq2).includes(key1)) return false;
    if (!(freq1[key1] === freq2[key1])) return false;
  }
  return true;
}

function makeFrequencies(str) {
  const result = {};
  for (letter of str) {
    result[letter] = ++result[letter] || 1;
  }
  return result;
}

console.log(validAnagram('anagram', 'nagaramb'))