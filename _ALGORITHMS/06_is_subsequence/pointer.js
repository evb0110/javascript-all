// without their order changing
// solved with two pointers

function isSubsequence(subset, superset) {
  if (subset.length > superset.length) return false;
  let subIndex = 0;
  let superIndex = 0;
  while (superIndex < superset.length) {
    if (subset[subIndex] === superset[superIndex]) {
      subIndex++;
    }
    superIndex++;
  }
  if (subIndex < subset.length) return false;
  return true;
}

console.log(isSubsequence('hello', 'abc hell world'))
