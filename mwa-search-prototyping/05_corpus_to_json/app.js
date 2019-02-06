const fs = require('fs');
const path = require('path');

const directory = '_corpus';

const vols = fs.readdirSync(directory);

const volsFiltered = vols.filter(dir => !/TRANS/.test(dir));


const result = volsFiltered.map(proceedVolume);

function proceedVolume(volume) {
  console.log(volume);
  const volumePath = path.join(directory, volume);
  const texts = fs.readdirSync(volumePath);
  const result  = texts.map(text => proceedText(text, volumePath));
}

function proceedText(text, volumePath) {
  console.log(`======= ${text} =======`);
  const textPath = path.join(volumePath, text);
  const textContents = fs.readFileSync(textPath, 'utf8');
  let lines = textContents.split('\n');
  lines = lines.filter(line => /\S/.test(line))
  const result = lines.map((line, i) => proceedLine(line, i));
  console.log(result);
}

function proceedLine(line, i) {
  // console.log(`${i}: ${line}`);
  return { lineNumber: i, lineContents: line }
}