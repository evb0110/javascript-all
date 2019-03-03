const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const strings = input.split(/\n/).slice(1);

// ====================================
function biggerIsGreater(w) {
  let foundAnswer = false;
  const wordLength = w.length;
  let wordArray = [...w];
  for (let i = wordLength - 1; i > 0; i--) {
    if (wordArray[i] > wordArray[i - 1]) {
      var result = [...wordArray.slice(0, i - 1), ...proceedSlice(wordArray.slice(i - 1))]
      foundAnswer = true;
      break;
    }
  }
  if (foundAnswer) {
    return result.join('');
  } else {
    return 'no answer';
  }
}

function proceedSlice(arr) {
  const letterToSwap = minLetter(arr.slice(1).filter(el => el > arr[0]));
  const idx = arr.indexOf(letterToSwap);
  [arr[0], arr[idx]] = [arr[idx], arr[0]];
  return [arr[0], ...arr.slice(1).sort()];
}

function minLetter(letters) {
  return letters.reduce((min, l) =>  min < l ? min : l);
}
// ====================================

console.log(strings.map(biggerIsGreater))