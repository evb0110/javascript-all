const customIterator = () => ({
  [Symbol.iterator]: () => ({
    x: 0,
    next() {
      if (this.x > 10) {
        return {
          done: true,
          value: this.x
        };
      }
      return {
        done: false,
        value: this.x += 2
      };
    }
  })
});

for (const x of customIterator()) {
  console.log(x);
}

