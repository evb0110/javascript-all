// modified from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

const myIterable = {};

myIterable[Symbol.iterator] = function() {
  return {
    counter: 5,
    next: function() {
      if (this.counter > 0) {
        return { value: "bye_" + this.counter--, done: false };
      }
      return { done: true };
    }
  };
};

console.log(myIterable[Symbol.iterator]().next());

for (el of myIterable) {
  console.log(el);
}

console.log(Array.from(myIterable));
