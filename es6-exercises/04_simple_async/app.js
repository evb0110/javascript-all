const sleep = m => new Promise(r => setTimeout(r, m));
const timeout = m => new Promise(r => setTimeout(r, m * 1000, `${m} seconds passed`));


console.log('Before...');
(async function () {
  const res = await timeout(5);
  console.log(res)
})();
console.log('...After?');