const fs = require("fs");

const filenamePromise = new Promise((resolve, reject) => {
  fs.readdir("./data", (err, files) => {
    resolve(files);
  });
});

const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, contents) => {
      resolve({ filename, contents: String(contents) });
    });
  });
};

const gotYa = (fileData) => {
  const {filename, contents} = fileData;
  const number = (contents.match(/gotYa/g) || []).length;
  const shortFileName = filename.replace(/..data./, '');
  return ({shortFileName, number});
}

const arraySimplify = (data) => {
  return data.map((filedata) => {
    const {shortFileName, number} = filedata;
    return ({[shortFileName]: number});
  });
}

filenamePromise
  .then(names => names.map(name => `./data/${name}`))
  .then(names => names.map(readFile))
  .then(prs => Promise.all(prs))
  .then(fileDataArray => fileDataArray.map(gotYa))
  .then(arraySimplify)
  .then(array => array.forEach(el => console.log(el)));
