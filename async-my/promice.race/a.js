const promiseFactory = n => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`after ${n} seconds Promise #${n} finished`);
      resolve(`the resolve value: ${n}`);
    }, n * 1000);
  });
};

const promisesArray = [];
for (let t = 5; t > 0; t--) {
  promisesArray[t - 1] = promiseFactory(t);
}

Promise.race(promisesArray).then(val =>
  console.log(`=== ${val.toUpperCase()} ===`)
);
Promise.all(promisesArray).then(() =>
  console.log(`=== all promises finished ===`.toUpperCase())
);
