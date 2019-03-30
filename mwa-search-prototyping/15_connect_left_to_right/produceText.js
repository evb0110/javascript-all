import { proceedLine } from './proceedCorpus.js';
import { emptyElement } from './app.js';

export default function produceText(data, volumeNumber, textNumber, container) {
  emptyElement(container);
  const vol = data[volumeNumber - 1];
  const { volume } = vol;
  const { textName, contents } = vol.texts[textNumber - 1];
  for (const line of contents) {
    const { textus, versio } = line;
    const resultCard = proceedLine({
      volume,
      textName,
      textus,
      versio,
    });
    container.appendChild(resultCard);
  }
}
