# Question 1

Convert the promise version of the multi-file loader over to using async/await

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];
const prs = files.map(file => readFile(file, "utf-8"));

// (async () => {
//   let vals = await Promise.all(prs);
//   console.log(vals);
// })();


(async () => {
  for await (pr of prs) {
    console.log(pr);
  }
})();

// ===================
```

# Question 2

Again convert the promise version of the multi-file loader over to using async/await but using a custom async iterator with the following syntax

node --harmony-async-iteration <file.js>

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const fileIterator = files => ({
  [Symbol.asyncIterator]: () => ({
    x: 0,
    next() {
      if (this.x >= files.length) {
        return Promise.resolve({done: true});
      }
      let file = files[this.x++];
      return readFile(file, "utf8").then( data => ({
        done: false,
        value: data
      }));
    }
  })
});

(async () => {
  for await (let x of fileIterator([
    "./files/demofile.txt",
    "./files/demofile.other.txt"
  ])) {
    console.log(x);
  }
})();
```
