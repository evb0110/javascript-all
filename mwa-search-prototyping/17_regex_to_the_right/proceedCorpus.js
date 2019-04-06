import colorify from './helpers.js';
import produceText from './produceText.js';
import data from './datafile.js';
import { outer1, emptyElement, volumeNumberBox, textNumberBox } from './app.js';

export default function proceedCorpus(regex) {
  emptyElement(outer1);
  outer1.scrollTop = 0;
  for (const vol of data) {
    const { volume, texts } = vol;
    for (const text of texts) {
      const { textName, contents } = text;
      for (const line of contents) {
        const { textus, versio } = line;
        if (textus.match(regex)) {
          const resultCard = proceedLine({
            volume,
            textName,
            textus,
            versio,
            regex,
          });
          outer1.appendChild(resultCard);
        }
      }
    }
  }
}

export function proceedLine({ volume, textName, textus, versio, regex }) {
  const volumeNode = createDivTextNode('volume', volume);
  const inlineSeparatorNode = createDivTextNode('inline-separator', ' | ');
  const textNameNode = createDivTextNode('text-name', textName);

  const cardHeader = createDivTextNode('card-header');
  cardHeader.addEventListener(
    'click',
    handleHeaderClick.bind(null, volume, textName, regex),
  );
  cardHeader.title = 'Click me to show the whole text';
  appendChildren(cardHeader, [volumeNode, inlineSeparatorNode, textNameNode]);

  const textusNode = createDivTextNode('textus');
  let textusGrepped;
  if (regex.test(textus)) {
    textusGrepped = colorify(textus, regex);
  } else {
    textusGrepped = colorify(textus);
  }
  textusNode.appendChild(textusGrepped);

  const versioNode = createDivTextNode('versio', versio);

  const resultCard = document.createElement('div');
  resultCard.classList.add('inner', 'card');
  appendChildren(resultCard, [cardHeader, textusNode, versioNode]);

  return resultCard;
}

function createDivTextNode(className, text) {
  const node = document.createElement('div');
  node.classList.add(className);
  node.textContent = text;
  return node;
}

function appendChildren(element, childrenArray) {
  childrenArray.forEach(child => {
    element.appendChild(child);
  });
}

function handleHeaderClick(volume, textName, regex) {
  const volumeNumber = +volume[0];
  const textNumber = +textName.slice(0, 3);
  produceText(volumeNumber, textNumber, regex);
  volumeNumberBox.value = volumeNumber;
  textNumberBox.value = textNumber;
}
