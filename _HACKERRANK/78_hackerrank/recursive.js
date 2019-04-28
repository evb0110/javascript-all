function hackerrankInString(s) {
  const q = 'hackerrank';
  return contains(s, q) ? 'YES' : 'NO';
}

function contains(s, q) {
  if (q.length === 0) return true;
  if (s.length === 0) return false;
  if (s[0] === q[0]) {
    return contains(s.slice(1), q.slice(1));
  } else {
    return contains(s.slice(1), q);
  }
}

console.log(
  contains('hrr', 'hrb')
)