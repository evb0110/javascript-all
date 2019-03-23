import { colorify } from './helpers.js';

const chunk = {
  lineNumber: '001',
  textus:
    '001. awwalća, uḳḏum mett ṯlēṯ išən wībin mʕammrin: ḥafrill lanna assōsa.',
  versio:
    '001. Früher, vor etwa 30 Jahren, pflegten sie zu bauen, (indem) sie das Fundament aushoben.',
};

const regex = /ṯlē/g;

export default function grep(chunk, regex) {
  return colorify(chunk, regex);
}
