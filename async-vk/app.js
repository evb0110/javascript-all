async function getWithRetry(url, numRetries) {
  return fetch(url).then(res => res.json());
}

const person = {
  name: "John",
  age: 35
};

async function a (x) {
  if (x == 100) throw `${x}, there was a ${x}!`
  return x;
}

a("100")
.then(val => console.log(val))
.catch(err => console.error(err));

console.log("starting");
