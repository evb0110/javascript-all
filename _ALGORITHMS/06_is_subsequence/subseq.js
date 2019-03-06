function isSubsequence(subset, superset) {
  const superSet = new Set([...superset]);
  for (const l of subset) {
    if (!superSet.has(l)) return false;
  }
  return true;
}

console.log(isSubsequence('abcf', 'abracadabra'));
