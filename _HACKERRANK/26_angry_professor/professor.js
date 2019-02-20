const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').split(/\n/);

const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const [
  [_, k], a
] = lines.map(lineToNumbers);


function angryProfessor(k, a) {
  return nStudentsInTime(a) < k ? 'YES' : 'NO'

  function nStudentsInTime(a) {
    return a.filter(el => el <= 0).length;
  }
}

console.log(angryProfessor(k, a))