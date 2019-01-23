// https://disjoint.ca/til/2017/09/20/how-to-download-a-binary-file-using-axios/


const axios = require("axios");
const fs = require("fs");
const util = require('util');
const writeFile = util.promisify(fs.writeFile);


axios.request({
  responseType: 'arraybuffer',
  url: 'https://via.placeholder.com/600/771796',
  method: 'get',
  headers: {
    'Content-Type': 'image/png',
  },
}).then((result) => {
  const outputFilename = './a.png';
  // fs.writeFileSync(outputFilename, result.data);
  console.log(`...saving file "${outputFilename}"`)
  writeFile(outputFilename, result.data)
  return outputFilename;
}).then(() => console.log("done!"));
