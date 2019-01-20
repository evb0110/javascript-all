# Question 1 - (10min)

Create a promise version of the async readFile function

```js
const fs = require("fs");

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
readFile("./files/demofile2.txt", "utf-8").then(
  data => console.log(data),
  err => console.error(err)
);
```

====================

```js
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

readFile("./files/demofile.txt", "utf-8").then(
  data => console.log(data),
  err => console.error(err)
);
```

# Question 2

Load a file from disk using readFile and then compress it using the async zlib node library, use a promise chain to process this work.

```js
const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}
function gunzip(data) {
  return new Promise((resolve, reject) => {
    zlib.gunzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile.txt", "utf-8")
  .then(data => gzip(data), err => console.error("Failed to gzip" + err))
  // .then(data => gunzip(data))
  .then(data => console.log(data), err => console.error("Failed" + err)); // --> Load it then zip it and then print it to screen
```

# Question 3

Convert the previous code so that it now chains the promise as well.

# Question 4

```js
const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile.txt", "utf-8")
  .then(data => gzip(data))
  .then(data => console.log(data))
  .catch(err => console.error("There was an error " + err))
  .finally(() => console.log("Inside finally")); 
```

# Question 5

Create some code that tries to read from disk a file and times out if it takes longer than 1 seconds, use `Promise.race`

```js
function readFileFake(sleep) {
  return new Promise(resolve => setTimeout(resolve, sleep, "Data from file"));
}
function timeout(time) {
  return new Promise((resolve, reject) => setTimeout(reject, time, "Reading too long!"));
}

Promise.race([readFileFake(5000), timeout(1000)])
.then(val => console.log(val))
.catch(err => console.error(err)); 


// This resolves a promise after 5 seconds, pretend it's a large file being read from disk
```

# Question 6

Create a process flow which publishes a file from a server, then realises the user needs to login, then makes a login request, the whole chain should error out if it takes longer than 1 seconds. Use `catch` to handle errors and timeouts.

```js
function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function safePublish() {
  return publish().then(res => {
    if (res.status == 403) return authenticate();
    return res;
  })
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race( [safePublish(), timeout(5000)])
  .then(() => console.log("Published"))
  .catch((err) => console.error(err));
```
