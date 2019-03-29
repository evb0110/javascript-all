import colorify from './helpers.js';

export default function proceedCorpus(data, regex, container) {
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
          container.appendChild(resultCard);
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
  appendChildren(cardHeader, [volumeNode, inlineSeparatorNode, textNameNode]);

  const textusNode = createDivTextNode('textus');
  let textusGrepped;
  if (regex) {
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

