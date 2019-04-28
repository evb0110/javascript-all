const input = 'SOSSOSSOS';

// **************************************
function marsExploration(s) {
  const numWords = s.length / 3;
  const sos = makeMultiSOS(numWords);
  return stringDiff(s, sos);
}

function makeMultiSOS(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += 'SOS';
  }
  return result;
}

function stringDiff(str1, str2) {
  let result = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) result++;
  }
  return result;
}
// **************************************


console.log(marsExploration(input));
