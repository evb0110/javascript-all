import { proceedLine } from './proceedCorpus.js';
import { emptyElement, outer2 } from './app.js';
import data from './datafile.js';

export default function produceText(volumeNumber, textNumber) {
  const vol = data[volumeNumber - 1];
  const { volume } = vol;
  const { textName, contents } = vol.texts[textNumber - 1];
  emptyElement(outer2);
  outer2.scrollTop = 0;

  for (const line of contents) {
    const { textus, versio } = line;
    const resultCard = proceedLine({
      volume,
      textName,
      textus,
      versio,
    }).cloneNode(true);
    // cloned to remove event listener from header
    
    resultCard.children[0].removeAttribute('title');

    outer2.appendChild(resultCard);
  }
}
