// https://disjoint.ca/til/2017/09/20/how-to-download-a-binary-file-using-axios/

// Before the first time you use the program
// you should run `npm install` in the working
// directory (i.e. where dnl.js is). This will
// create node_modules.
// To run the program: `node dnl.js`.

const extension = "jpg";
// You can change it to png, jpeg etc.

const urlsFile = "./urls.txt";
// This file should contain urls of images,
// one per line.
// You can change the filename.

const dnlDir = "tmp/";
// The directory where the files will
// be downloaded. Forward slash is mandatory.
// NB! The directory should
// already exist before starting the program!

const axios = require("axios");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

downloadUrls().then(() => console.log("Done!"));

// ================ FUNCTIONS ====================

async function readUrls() {
  const urls = await readFile(urlsFile, "utf8");
  return urls.split("\n");
}

async function downloadUrls() {
  try {
    const urls = await readUrls();
    let counter = 0;
    const prs = [];
    for (url of urls) {
      let filename = (counter++).toString().padStart(5, "0") + `.${extension}`;
      console.log(url);
      prs.push(downloadImage(url, dnlDir + filename));
    }
    await Promise.all(prs);
  } catch (err) {
    console.error(err);
  }
}

async function downloadImage(url, filename) {
  await axios
    .request({
      responseType: "arraybuffer",
      url: url,
      method: "get",
      headers: {
        "Content-Type": `image/${extension}`
      }
    })
    .then(result => {
      console.log(`...saving file "${filename}"`);
      writeFile(filename, result.data);
    })
    .catch(err => console.error(err));
  return filename;
}
