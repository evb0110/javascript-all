function areThereDuplicates(...array) {
  const letters = {};
  for (const letter of array) {
    if (letters[letter]) return true;
    letters[letter] = 1;
  }
  return false;
}


console.log(areThereDuplicates(1,2,2))