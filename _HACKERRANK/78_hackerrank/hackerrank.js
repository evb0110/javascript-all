const input = 'hereiamstackerrank';

function hackerrankInString(s) {
  const q = 'hackerrank';
  let sCursor = 0;
  let qCursor = 0;

  while (sCursor < s.length) {
    if (s[sCursor] === q[qCursor]) {
      sCursor++;
      qCursor++;
    } else {
      sCursor++;
    }
  }

  if (qCursor < q.length) return 'YES';
  return 'NO';
}

console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'));
