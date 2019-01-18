// to implement from scratch

function fakeAjax(url, cb) {
  const fakeResponses = filename => `data from ${url}`;
  const fakeDelay = (Math.floor(Math.random() * 1E4) % 8000) + 1000;

  output(`Requesting ${url}`);

  setTimeout(() => {
    output(`   ...received data from ${url}`)
    cb(fakeResponses(url))
  }, fakeDelay);
}

function range(number) {
  return Array.from(Array(number).keys());
}

function getFile(url) {
  return new Promise((resolve) => fakeAjax(url, resolve));
}

function output(text) {
  console.log(text);
}

const numberOfFiles = 15;
const fakeUrls = range(numberOfFiles).map(n => `file${n+1}`); 


const prs = fakeUrls.map(getFile);

prs.reduce((chain, pr) => {
  return chain.then(() => pr).then(output)
}, Promise.resolve());
