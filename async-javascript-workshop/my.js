const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

(async () => {
  for (file of files) {
    let val = await readFile(file, "utf-8");
    console.log(val);
  }
})();
