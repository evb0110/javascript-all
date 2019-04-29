// *********************************************************
const alpha = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26}

function weightedUniformStrings(s, queries) {
  const contSubs = contiguousSubstrings(s);
  const weightsSet = new Set();
  for (const sub of contSubs) {
    weightsSet.add(weight(sub));
  }
  return queries.map(q => (weightsSet.has(q) ? 'Yes' : 'No'));
}

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

// function contiguousSubstrings(s) {
//   const result = new Set();
//   let left = 0;
//   let right = 0;
//   while (true) {
//     const sub = s.slice(left, right + 1);
//     if (sub.length && !result.has(sub)) result.add(sub);
//     if (right >= s.length) break;
//     if (s[left] == s[right + 1]) {
//       right++;
//     } else {
//       left = right = right + 1;
//     }
//   }
//   return result;
// }

function weight(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += alpha[s[i]];
  }
  return result;
}
// *********************************************************

// console.log(contiguousSubstrings('abccddde'));

const str = require('./input.js');

console.log(weightedUniformStrings(str, [5, 9, 7, 8, 12, 5]));
