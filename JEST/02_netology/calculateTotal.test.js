import calculateTotal from './calculateTotal';

test('should calculate total for purchases', () => {
  const input = [
    { id: 1, name: '...', price: 33, count: 3},
    { id: 2, name: '...', price: 55, count: 2}
  ];
  const expected = 209;
  const received = calculateTotal(input);

  expect(received).toBe(expected);
})

test('should calculate total for purchase with discount', () => {
  const input = [
    { id: 1, name: '...', price: 33, count: 3},
    { id: 2, name: '...', price: 55, count: 2}
  ];
  const expected = 196.25;
  const received = calculateTotal(input, true);

  expect(received).toBeCloseTo(expected);
})