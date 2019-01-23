// https://disjoint.ca/til/2017/09/20/how-to-download-a-binary-file-using-axios/

const axios = require("axios");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

async function readUrls() {
  const urls = await readFile("./urls.txt", "utf8");
  return urls.split("\n");
}

async function downloadUrls() {
  const urls = await readUrls();

  const result = [];
  for (url of urls) {

    let filename = (url.match(/Vat[\w\d._%]*jp2/g) || [])[0];
    filename = filename.replace(/jp2/, "jpg");
    console.log(url);
    console.log(filename);
    result.push(downloadImage(url, "tmp/" + filename));
  }
  return result;
}

downloadUrls();

async function downloadImage(url, filename) {
  return axios
    .request({
      responseType: "arraybuffer",
      url: url,
      method: "get",
      headers: {
        "Content-Type": "image/jpg"
      }
    })
    .then(result => {
      console.log(`...saving file "${filename}"`);
      writeFile(filename, result.data);
      return filename;
    })
    .then(file => console.log(`Saved ${file}`))
    .catch(err => console.error(err));
}
