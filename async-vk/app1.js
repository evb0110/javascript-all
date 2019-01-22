const url = "https://jsonplaceholder.typicode.com/posts/1";


function makeFailingFetch(errProbability) {
  return function(url) {
    if (Math.random() < errProbability) throw new Error("failed to fetch!");
    return fetch(url);
  }
}

const failingFetch = makeFailingFetch(0.5);


failingFetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });