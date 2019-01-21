function fakeAjax(filename, cb) {
  console.log(`Loading ${filename}`);
  const randomDelay = Math.floor(Math.random() * 1E4 ) % 8000 + 2000;
  const fakeResponse = (file) => (`Data from ${file}`);
  setTimeout(() => {
    console.log(`   ...loaded ${filename}`)
    cb(fakeResponse(filename))
  }, randomDelay);
}


const p1 = new Promise((resolve, reject) => fakeAjax("file1", resolve));
const p2 = new Promise((resolve, reject) => fakeAjax("file2", resolve));
const p3 = new Promise((resolve, reject) => fakeAjax("file3", resolve));

(async function() {
 console.log(await p1);
 console.log(await p2);
 console.log(await p3);
})();