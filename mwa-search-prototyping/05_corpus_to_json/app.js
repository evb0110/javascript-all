const fs = require("fs");
const path = require("path");

const directory = "_corpus";

const vols = fs.readdirSync(directory);

const volsFiltered = vols.filter(dir => !/TRANS/.test(dir));

const result = volsFiltered.map(proceedVolume);

console.log(JSON.stringify(result, null, 2));

function proceedVolume(volume) {
  const volumePath = path.join(directory, volume);
  const texts = fs.readdirSync(volumePath);
  const result = texts.map(text => proceedText(text, volumePath));
  return { volume, texts: result }
}

function proceedText(text, volumePath) {
  const textNumber = getNumber(text);
  const textPath = path.join(volumePath, text);
  const textContents = fs.readFileSync(textPath, "utf8");
  let lines = textContents.split("\n").filter(line => /\S/.test(line));
  const result = lines.map((line, i) => proceedLine(line, i));
  return { textNumber, text, contents: result }
}

function proceedLine(line, i) {
  const number = getNumber(line);
  return { lineNumber: number, textus: line };
}

function getNumber(line) {
  return line.substr(0,3);
}