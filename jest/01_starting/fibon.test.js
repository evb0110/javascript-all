const fib = require("./fibon.js");

const fib20 = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181
];

fib20.forEach((elem, i) => {
  test(`element #${i} should be ${fib20[i]}`, () => {
    expect(fib(i)).toBe(elem);
  });
});

test(`checking first 20 elements`, () => {
  fib20.forEach((elem,i) => {
    expect(fib(i)).toBe(elem);
  })
});

test(`checking with wrong input`, () => {
  expect(() => fib(20.1)).toThrow();
})