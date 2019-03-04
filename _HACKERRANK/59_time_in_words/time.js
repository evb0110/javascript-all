const fs = require('fs');
const [hours, minutes] = fs.readFileSync('input.txt', 'utf8').split(/\n/).map(s => +s);

// ==============================================

function makeFunctionTimeInWords() {

  const oneWord = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'fourty',
    '50': 'fifty',
  }


  function words(number) {
    const stringNumber = String(number);
    if (oneWord[stringNumber]) {
      return oneWord[stringNumber];
    }
    const ones = number % 10;
    const tens = number - ones;
    return `${words(tens)} ${words(ones)}`;

  }

  function minuteWord(m) {
    return (m % 10 === 1 && m !== 11) ? 'minute' : 'minutes'
  }

  return function timeInWords(h, m) {
    if (m === 0) {
      return `${words(h)} o' clock`
    }
    if (m <= 30) {
      if (m == 15) {
        return `quarter past ${words(h)}`
      } else if (m == 30) {
        return `half past ${words(h)}`
      } else {
        return `${words(m)} ${minuteWord(m)} past ${words(h)}`
      }
    } else {
      const mm = 60 - m;
      if (mm == 15) {
        return `quarter to ${words(h + 1)}`;
      } else {
        return `${words(mm)} ${minuteWord(mm)} to ${words(h + 1)}`
      }
    }
  }
}

const timeInWords = makeFunctionTimeInWords();

// ==============================================

console.log(timeInWords(11, 45))

// for (let i = 1; i < 60; i++) {
// console.log(`${i}: ${words(i)}`);
// }