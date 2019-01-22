const fetch = require("node-fetch");

const url =
  // this side has free API for testing
  // with nice documentation
  "https://jsonplaceholder.typicode.com/posts/1";

function makeFailingFetch(errProbability) {
  return function(url) {
    if (Math.random() < errProbability) throw new Error("failed to fetch!");
    return fetch(url);
  };
}

const failingFetch = makeFailingFetch(0.99);

async function fetchWithRetry(url, numRetries = 0) {
  let lastError = null;
  for (let i = 0; i < numRetries; i++) {
    try {
      console.log(`...try # ${i + 1}`);
      const res = await failingFetch(url).then(response => response.json());
      return console.log(res);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

fetchWithRetry(url, 1000);
