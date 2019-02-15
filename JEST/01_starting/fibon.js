const fibon = n => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("wrong input");
  }
  if (n < 2) {
    return n;
  }
  return fibon(n - 1) + fibon(n - 2);
};

module.exports = fibon;
