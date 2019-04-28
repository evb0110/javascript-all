// *********************************************************
function weightedUniformStrings(s, queries) {
  const contSubs = contiguousSubstrings(s);
  const weights = contSubs.map(weight);
  return queries.map(q => (weights.includes(q) ? 'Yes' : 'No'));
}

function makeWeightFunction() {
  const weights = {};
  for (let i = 0; i < 26; i++) {
    weights[String.fromCharCode(i + 'a'.charCodeAt(0))] = i + 1;
  }
  return l => weights[l];
}

const scale = makeWeightFunction();

// function contiguousSubstrings(s) {
//   const subs = s.match(/(\S)\1*/g);
//   const result = [];
//   subs.forEach(sub => {
//     for (let i = 0; i < sub.length; i++) {
//       result.push(sub.slice(i));
//     }
//   });
//   return result;
// }

function contiguousSubstrings(s) {
  const result = [];
  let left = 0;
  let right = 0;
  while (true) {
    const sub = s.slice(left, right + 1);
    if (sub.length) result.push(sub);
    if (right >= s.length) break;
    if (s[left] == s[right+1]) {
      right++;
    } else {
      left = right = right + 1;
    }
  }
  return result;
}

function weight(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += scale(s[i]);
  }
  return result;
}
// *********************************************************

// console.log(contiguousSubstrings('abccddde'));

console.log(weightedUniformStrings('aaabbbbcccddd', [5, 9, 7, 8, 12, 5]));
