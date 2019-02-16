function kangaroo(x1, v1, x2, v2) {
  if (v1 - v2 == 0) {
    return 'NO';
  }
  const t = (x2 - x1) / (v1 - v2);
  if (t < 0) return 'NO';

  if (!Number.isInteger(t)) return 'NO';

  return 'YES';

}

const result = kangaroo(0, 3, 4, 2);

console.log(result);