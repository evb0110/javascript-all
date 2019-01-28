// This uses Set and so is ES6 only
Array.prototype.unique = function() {
  const set = new Set(this);
  return [...set];
};

console.log("unique with set: ", [1, 2, 3, 2, 4].unique());

// This will work on ES5 as well
Array.prototype.unique1 = function() {
  return this.reduce((acc, el) => {
    if (acc.includes(el)) return acc;
    return [...acc, el];
  }, []);
};

console.log("unique with reduce: ", [1, 2, 3, 2, 4].unique1());
