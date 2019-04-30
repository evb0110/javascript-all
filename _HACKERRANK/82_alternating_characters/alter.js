const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const words = input.split(/\n/);

function alternatingCharacters(s) {
  const groups = s.match(/(\S)\1*/g);
  return s.length - groups.length;
}

console.log(alternatingCharacters('AAABBB'));
