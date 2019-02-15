const sum = (a, b) => a + b;

test('testing any', () => {

  const result = sum(1, 2);
  expect(result).toEqual(expect.any(Number));
  expect(result).toBe(expect.any(Number));
  
});