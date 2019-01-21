function fakeAjax(filename, cb) {
  console.log(`Loading ${filename}`);
  const randomDelay = Math.floor(Math.random() * 1E4 ) % 8000 + 2000;
  const fakeResponse = (file) => {
    console.log(`   ...loaded ${filename}`)
    return `Data from ${file}`
  };
  setTimeout(() => {
    cb(fakeResponse(filename))
  }, randomDelay);
}

const numberOfFiles = 5;

const prs = [];

for (let i = 0; i < numberOfFiles; i++) {
  const filename = `file${i+1}`;
  prs[i] = new Promise((resolve, reject) => fakeAjax(filename, resolve));
}

(async function() {
  for (pr of prs) {
    console.log(await pr);
  }
  console.log("Done!");
})();