const s = 'aaab';

// ***********************************************
function palindromeIndex(s) {
  if (isPalindrome(s)) return -1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      if (isPalindrome(s.slice(i + 1, s.length - i))) return i;
      if (isPalindrome(isPalindrome(s.slice(i, s.length - i - 1)))) return s.length - i - 1;
      return -1;
    }
  }
}

function isPalindrome(s) {
  const toIdx = Math.floor(s.length / 2);
  for (let i = 0; i < toIdx; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}
// ***********************************************

console.log(palindromeIndex('aaa'));
