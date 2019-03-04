const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');


// ======================


function chunks(string) {
  const column = Math.ceil(Math.sqrt(string.length));
  const regString = `.{0,${column}}`;
  const reg = RegExp(regString, 'g');
  return string.match(reg);
}

function chunks1(string) {
  const column = Math.ceil(Math.sqrt(string.length));
  const result = [];
  for (let i = 0; i < string.length; i += column) {
    result.push(string.slice(i, i+column));
  }
  return result;
}

function encryption(s) {
  const chunksS = chunks1(s);
  const result = [...chunksS[0]].map((el, i) => {
    return chunksS.reduce((acc, chunk) => acc + (chunk[i] || ''), '');
  });
  return result.join(' ');
}
// ======================


console.log(encryption(input));