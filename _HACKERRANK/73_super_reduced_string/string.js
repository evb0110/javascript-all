const input = 'aaabccddd';

let str = input;
function superReducedString(str) {
  while (true) {
    const strNew = str.replace(/(\S)\1/, '');
    if (strNew === str) break;
    str = strNew;
  }
  if (str == '') return 'Empty String';
  return str;
}

console.log(superReducedString(str));
