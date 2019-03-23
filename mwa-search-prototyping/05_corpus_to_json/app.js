const fs = require('fs');
const path = require('path');

const directory = '_corpus';

const vols = fs.readdirSync(directory);

const volsTextus = vols.filter(dir => !/TRANS/.test(dir));
const textus = volsTextus.map(proceedVolume);

const volsVersio = vols.filter(dir => /TRANS/.test(dir));
const versio = volsVersio.map(proceedVolume);

// these loops are ugly, they mutate textus,
// but they do what they are supposed to and
// I don't know how to do
// it in a better way
for (let i = 0; i < textus.length; i++) {
  const volName = textus[i].volume;
  const volVersioName = addTransToName(volName);
  if (versio[i].volume === volVersioName) {
    for (let j = 0; j < textus[i].texts.length; j++) {
      let text = textus[i].texts[j];
      for (let k = 0; k < text.contents.length; k++) {
        let line = text.contents[k];
          line.versio = versio[i].texts[j].contents[k].textus;
      }
    }
  }
}
console.log(JSON.stringify(textus, null, 2));

// ===== FUNCTIONS =====

function proceedVolume(volume) {
  const volumePath = path.join(directory, volume);
  const texts = fs.readdirSync(volumePath);
  const result = texts.map(textName => proceedText(textName, volumePath));
  return { volume, texts: result };
}

function proceedText(textName, volumePath) {
  const textNumber = getNumber(textName);
  const textPath = path.join(volumePath, textName);
  const textContents = fs.readFileSync(textPath, 'utf8');
  let lines = textContents.split('\n').filter(line => /\S/.test(line));
  const result = lines.map((line, i) => proceedLine(line, i));
  return { textNumber, textName, contents: result };
}

function proceedLine(line, i) {
  const number = getNumber(line);
  return { lineNumber: number, textus: line };
}

function getNumber(line) {
  return line.substr(0, 3);
}

function addTransToName(str) {
  return str + ' TRANS';
}
