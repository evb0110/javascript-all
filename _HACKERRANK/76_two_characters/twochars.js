const input = 'beabeefeab';

// ************************************************************
function makeUniqLetters(str) {
  const letters = new Set([...str]);
  const uniqLetters = Array.from(letters);
  return uniqLetters;
}

function makePairs(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

function filterString(str, arr) {
  const strArr = [...str];
  const strArrFiltered = strArr.filter(l => arr.includes(l));
  return strArrFiltered.join('');
}

function validate(str) {
  const invalid = str.match(/(\S)\1/);
  return !invalid;
}

function alternate(s) {
  const pairs = makePairs(makeUniqLetters(s));
  const filteredStrings = pairs.map(pair => filterString(s, pair));
  const result = filteredStrings.filter(validate);
  if (result.length === 0) return 0;
  return Math.max(...result.map(el => el.length));
}
// ************************************************************


console.log(alternate(input));
