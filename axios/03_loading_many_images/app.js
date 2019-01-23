// https://disjoint.ca/til/2017/09/20/how-to-download-a-binary-file-using-axios/


const axios = require("axios");
const fs = require("fs");
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const testUrl = 'https://via.placeholder.com/600/771796';
const filename = 'aaa.jpg';


function downloadImage(url, filename) {

  axios.request({
    responseType: 'arraybuffer',
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'image/jpg',
    },
  }).then((result) => {
    const outputFilename = filename;
    // fs.writeFileSync(outputFilename, result.data);
    console.log(`...saving file "${outputFilename}"`)
    writeFile(outputFilename, result.data)
    return outputFilename;
  }).then((file) => console.log(`Saved ${file}`));
}

downloadImage(testUrl, filename);
  