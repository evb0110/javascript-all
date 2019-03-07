function isPalindrome(str) {
  const len = str.length;
  if (len < 2) return true;
  if (str[0] !== str[len - 1]) return false;
  return isPalindrome(str.slice(1, len - 1));
}

console.log(isPalindrome('tacccat'))