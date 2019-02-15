const pr = new Promise((resolve, reject) => {
  const  delay = Math.random() * 2000 + 1000;
  setTimeout(() => {
    resolve('hi');
  }, delay);
});

test("testing pr", () => {
  return pr.then(data => expect(data).toBe("hi"));
});

test('testing with await', async () => {
  expect( await pr ).toBe('hi');
});
