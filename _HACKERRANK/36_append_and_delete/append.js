const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const [s, t] = lines.slice(0, 2);
const k = Number(lines[2]);


//===============

function appendAndDelete(s, t, k) {
  if (commonHeadSufficientlyShort(s,t,k)) return 'Yes';
  if (isNonNegativeEven(k - lengthOfDifferentTails(s,t))) return 'Yes';
  return 'No';
}

function commonHead(str1, str2) {
  for (let i = str1.length; i > 0; i--) {
    const chunk = str1.substr(0, i);
    if (str2.startsWith(chunk)) {
      return chunk;
    }
  }
  return '';
}

function isNonNegativeEven(number) {
  return (number >= 0 && number % 2 == 0)
}

function lengthOfDifferentTails(str1, str2) {
  return str1.length + str2.length - 2 * commonHead(str1, str2).length;
}

function commonHeadSufficientlyShort(s,t,k) {
  const sN = s.length;
  const tN = t.length;
  return sN + tN <= k;
}

//===============

console.log(appendAndDelete(s, t, k));
