const fs = require('fs');


const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const h = lineToNumbers(lines[0]);
const word = lines[1];


function designerPdfViewer(h, word) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const letterHeights = alphabet.reduce((acc, letter, i) => ({
    ...acc,
    [letter]: h[i]
  }), {});
  const wordLetters = [...word];
  const heights = wordLetters.map(l => letterHeights[l]);
  return Math.max(...heights) * heights.length;

}

console.log(designerPdfViewer(h, word))