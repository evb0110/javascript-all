function pangrams(s) {
  const sLow = s.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return [...alphabet].every(l => sLow.includes(l)) ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));
